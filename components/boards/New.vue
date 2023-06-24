<template>
    <article
      class="border flex flex-col gap-2 p-4 w-full lg:w-[400px]"
      v-show="!status"
    >
      <h1 class="text-lg font-bold">Create new board</h1>

      <label for="">Board Title</label>
      <input
        v-model="new_title"
        placeholder="insert new title"
        class="border border-gray-300 p-2"
      />

      <label for="">Participants</label>
      <input
        v-for="(participant, index) in new_participants"
        type="text"
        :key="index"
        v-model="new_participants[index]"
        class="border border-gray-300 p-2"
        :placeholder="`participant #${index+1}`"
      />
      <button
        type="button"
        class="p-2 cursor-pointer bg-blue-200 hover:bg-blue-400 hover:underline"
        @click="new_participants.push('')"
      >add participant</button>

      <button
        type="button"
        class="p-2 cursor-pointer bg-blue-200 hover:bg-blue-400 hover:underline"
        @click="submitClick"
      >
        submit
      </button>
    </article>
    <div v-show="status">{{ status }}</div>
    <NuxtLink
      v-if="status == 'done'"
      :to="`/boards/${new_id}`"
      class="p-2 cursor-pointer bg-blue-200 hover:bg-blue-400 hover:underline"
    >New board link: {{ `/boards/${new_id}`}}</NuxtLink>
</template>

<script setup lang="ts">
  const status = ref('')
  const new_id = ref('')
  const new_title = ref('new board')
  const new_participants = ref(['', ''])

  const submitResult = ref('')

  async function submitClick() {
    status.value = 'loading'
    const { data } = await useFetch('/api/boards', {
        method: 'post',
        server: false,
        body: { new_title, new_participants },
    })
    submitResult.value = data
    new_id.value = data.value.id
    status.value = 'done'
  }
</script>
