<script setup>
const EVENT_POOLING_INTERVAL = 500 // milliseconds
const route = useRoute()
const updateInterval = 1000 // milliseconds
const enableAutosync = ref(true)
const isBlinking = ref(false)
let lastUpdatedAt = 0

const board_id = route.params.id
const board_title = ref('loading...')
const participants = ref([
  { id: 0, label: 'loading...', count: 0 },
])

const counter_add = (idx) => {
  const new_data = {
    title: board_title.value,
    data: participants.value,
  }
  new_data.data[idx].count++
  updateBoard(new_data)
}
const counter_reduce = (idx) => {
  if (participants.value[idx].count > 0) {
    const new_data = {
      title: board_title.value,
      data: participants.value,
    }
    new_data.data[idx].count--
    updateBoard(new_data)
  }
}

const getBoard = async () => {
  const { data } = await $fetch('/api/boards/'+route.params.id, {
    server: false,
  })

  if (lastUpdatedAt != data.updated_at){
    lastUpdatedAt = data.updated_at
    board_title.value = data.title;
    participants.value = data.data.map((item,idx) => ({
      id: item.id,
      label: item.label,
      count: item.count,
    }))

    isBlinking.value = true
    setTimeout(() => {
     isBlinking.value = false
    }, 2000)
  }

  if (enableAutosync.value)
    setTimeout(getBoard, updateInterval);
}

let updateTimout = null
/* update board value by using timeout to pool close events */
const updateBoard = async (new_data) => {
  if (updateBoard) {
    clearTimeout(updateTimout)
    updateTimout = null
  }

  updateTimout = setTimeout( async () => {
    const { data } = await $fetch('/api/boards/'+board_id, {
      method: 'PUT',
      server: false,
      body: new_data,
    })
    updateTimout = null
  }, EVENT_POOLING_INTERVAL)
}

getBoard();
</script>

<template>
  <Head>
    <Title>{{ board_title }} - PapanSkor</Title>
  </Head>
  <main class="grid items-center justify-center min-h-screen w-screen">
    <section class="text-center min-h-4/5 w-full lg:min-w-[1000px] xl:min-w-[1230px]">
      <span class="text-left">
        <NuxtLink
          :to="`/boards/${board_id}`"
          class="cursor-pointer underline hover:no-underline"  
        >
          <h1 class="font-bold text-3xl">{{ board_title }}</h1>
        </NuxtLink>
      </span>
      
      <article class="w-full min-h-2/3 grid gap-4 mt-4 grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))]">
        <ScorePanel
          v-for="participant in participants"
          :key="participant.id"
          :label="participant.label"
          :count="participant.count"
          :class="{ blink: isBlinking }"
          @counter_add="() => counter_add(participant.id)"
          @counter_reduce="() => counter_reduce(participant.id)"
        />
      </article>
      <span class="hidden">
        <input type="checkbox" v-model="enableAutosync" />
        <label for="">Enable Autosync</label>
      </span>
    </section>

  </main>
</template>

<style>
.blink {
  animation: blink 1s 2 alternate;
}

@keyframes blink {
      to { background-color: rgb(96, 165, 250); }
}
</style>
