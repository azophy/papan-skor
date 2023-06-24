<script setup>
const route = useRoute()
const board_name = ref('Simple Scoreboard')
const participants = ref([
  { id: 0, name: 'Peserta 1', counter: 0 },
  { id: 1, name: 'Peserta 2', counter: 0 },
])

const counter_add = (idx) => participants.value[idx].counter++;
const counter_reduce = (idx) => {
  if (participants.value[idx].counter > 0) participants.value[idx].counter--;
}

const { data } = await $fetch('/api/boards/'+route.params.id)

board_name.value = data.title;
participants.value = data.data.map((item,idx) => ({
  id: idx,
  name: item.title,
  counter: item.count,
  item,
}))

</script>

<template>
  <main class="grid items-center justify-center min-h-screen w-screen">

    <section class="text-center h-4/5 min-w-[800px]">
      <span class="flex justify-between">
        <h1 class="font-bold text-3xl">{{ board_name }}</h1>
        <NuxtLink
          to="/"
          class="cursor-pointer underline hover:no-underline"  
        >Home</NuxtLink>
      </span>
      
      <article class="flex gap-4 mt-4 h-2/3">
        <ScorePanel
          v-for="participant in participants"
          :key="participant.id"
          :label="participant.name"
          :counter="participant.counter"
          @counter_add="() => counter_add(participant.id)"
          @counter_reduce="() => counter_reduce(participant.id)"
        />
      </article>
    </section>

  </main>
</template>

