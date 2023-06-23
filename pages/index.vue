<template>
  <main class="grid items-center justify-center min-h-screen w-screen">
    <h1 class="font-bold text-[5em]">Simple Online Digital Scoreboard</h1>
    <section class="text-center h-4/5 min-w-[800px] flex flex-col items-center">
      <h1 class="font-bold text-3xl">{{ board_name }}</h1>

      <NuxtLink
        to="/boards/cobacoba"
        class="cursor-pointer underline hover:no-underline"  
      >test board</NuxtLink>

      <article class="border flex flex-col gap-2 max-w-[300px]">
        <h1 class="text-lg font-bold">Create new board</h1>

        <label for="">Board Title</label>
        <input
          v-model="new_title"
          placeholder="insert new title"
          class="border border-gray-300 m-2 p-2"
        />

        <label for="">Participants</label>
        <input
          v-for="(participant, index) in new_participants"
          type="text"
          :key="index"
          v-model="new_participants[index]"
          class="border border-gray-300 m-2 p-2"
          :placeholder="`participant #${index+1}`"
        />
        <button
          type="button"
          class="p-4 cursor-pointer bg-blue-200 hover:bg-blue-400"
          @click="new_participants.push('')"
        >add participant</button>

        <button
          type="button"
          class="p-4 cursor-pointer bg-blue-200 hover:bg-blue-400"
          @click="submitClick"
        >
          submit
        </button>
      </article>
      new_title: {{ new_title }}
      <div v-if="status">{{ status }}
      </div>
      <NuxtLink
        v-if="(status == 'done')"
        :to="`/boards/${submitResult.id}`"
        class="cursor-pointer underline hover:no-underline"  
      >Result board</NuxtLink>

      
    </section>

  </main>
</template>

<script setup lang="ts">
  const status = ref('')
  const new_title = ref('new board')
  const new_participants = ref(['', ''])

  const submitResult = ref('')
  async function submitClick() {
    status.value = 'loading'
    const { data } = await useFetch('/api/boards', {
        method: 'post',
        body: { new_title, new_participants },
    })
    submitResult.value = data
    status.value = 'done'
  }
</script>
