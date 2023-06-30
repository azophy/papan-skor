<script setup>
defineProps([
  'title',
  'participants',
])
</script>

<template>
    <article
      class="border flex flex-col gap-2 p-4 w-full lg:w-[400px]"
    >
      <label for="">Board Title</label>
      <input
        :value="title"
        @input="$emit('title_input', $event.target.value)"
        placeholder="insert new title"
        class="border border-gray-300 p-2"
      />

      <label for="">Participants</label>
      <input
        v-for="(participant, index) in participants"
        type="text"
        :key="index"
        :value="participants[index]"
        @input="$emit('participant_input',index, $event.target.value)"
        class="border border-gray-300 p-2"
        :placeholder="`participant #${index+1}`"
      />
      <button
        type="button"
        class="p-2 cursor-pointer bg-blue-200 hover:bg-blue-400 hover:underline"
        @click="$emit('add_participants')"
      >add more participant</button>

      <button
        type="button"
        class="p-2 cursor-pointer bg-blue-200 hover:bg-blue-400 hover:underline"
        @click="$emit('form_click')"
      >
        submit
      </button>
    </article>
</template>
