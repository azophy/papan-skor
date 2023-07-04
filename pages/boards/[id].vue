<script setup>
const runtimeConfig = useRuntimeConfig()
const route = useRoute()
const enableAutosync = ref(true)
const isBlinking = ref(false)
const error_message = ref('')
const show_modal = ref(false)
let lastUpdatedAt = 0

const board_id = route.params.id
const board_title = ref('loading...')
const participants = ref([
  { id: 0, label: 'loading...', count: 0 },
])

const new_board_title = ref('')
const new_participants = ref([])

const showSettingModal = () => {
  new_board_title.value = board_title.value
  new_participants.value = participants.value.map(i => i.label)
  show_modal.value = true
}

const saveSettingModal = () => {
  const new_data = {
    title: new_board_title.value,
    data: new_participants.value.map((label, id) => ({
      id,
      label,
      count: 0,
    })),
  }
  updateBoard(new_data)

  show_modal.value = false
}

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
  const { success, data, msg} = await $fetch('/api/boards/'+route.params.id, {
    server: false,
  })

  if (!success) {
    error_message.value = `error: ${msg}`;
    return;
  }
  
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
    setTimeout(getBoard, runtimeConfig.public.boardUpdateInterval);
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
  }, runtimeConfig.public.boardEventPoolingInterval)
}

getBoard();
</script>

<template>
  <Head>
    <Title>{{ board_title }} - PapanSkor</Title>
  </Head>
  <main class="grid items-center justify-center min-h-screen w-screen">
    <div
      v-show="error_message"
      class="p-4 bg-red-300 border border-red-700 border-dashed"
    >{{ error_message }}</div>
    <section
      v-show="!error_message"
      class="text-center min-h-4/5 w-[90vw]"
    >
      <span class="flex justify-between">
        <NuxtLink
          :to="`/boards/${board_id}`"
          class="cursor-pointer underline hover:no-underline"  
        >
          <h1 class="font-bold text-3xl">{{ board_title }}</h1>
        </NuxtLink>
        <button
          class="font-bold cursor-pointer p-2 rounded rounded-lg bg-neutral-200 hover:bg-neutral-100"
          @click="showSettingModal"
        >Settings</button>
      </span>
      
      <article class="w-full min-h-2/3 grid gap-4 mt-4 grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] lg:grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))]">
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

  <Modal
    title="Edit board detail"
    class="flex flex-col items-center"
    :show_modal="show_modal"
    @close_modal="show_modal = false"
    >
    <div class="font-italic p-4 bg-neutral-100">
    Warning: changing this values would reset all your scores to zero
    </div>
    <BoardsForm
      :title="new_board_title"
      @title_input="(v) => new_board_title = v"
      :participants="new_participants"
      @participant_input="(i,v) => new_participants[i] = v"
      @add_participants="new_participants.push('')"
      @form_click="saveSettingModal"
    />
  </Modal>
</template>

<style>
.blink {
  animation: blink 1s 2 alternate;
}

@keyframes blink {
      to { background-color: rgb(96, 165, 250); }
}
</style>
