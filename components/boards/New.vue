<template>
    <div v-show="status">{{ status }}</div>
    <h1 class="text-lg font-bold">Create new board</h1>

    <BoardsForm
      v-show="status != 'done'"
      :title="new_title"
      @title_input="(v) => new_title = v"
      :participants="new_participants"
      @participant_input="(i,v) => new_participants[i] = v"
      @form_click="() => submitClick()"
      @add_participants="new_participants.push('')"
    />
    <NuxtLink
      v-show="status == 'done'"
      :to="`/boards/${new_id}`"
      class="w-[300px] p-2 cursor-pointer bg-blue-200 hover:bg-blue-400 hover:underline"
    >New board link: {{ `${url.origin}/boards/${new_id}`}}</NuxtLink>
</template>

<script setup lang="ts">
  const status = ref('')
  const new_id = ref('')
  const new_title = ref('new board')
  const new_participants = ref(['', ''])
  const url = useRequestURL()

  async function submitClick() {
    status.value = 'loading'
    const result = await $fetch('/api/boards', {
        method: 'post',
        server: false,
        body: {
          new_title: new_title.value,
          new_participants: new_participants.value,
        },
    })
    if (result.success) {
      new_id.value = result.id
      status.value = 'done'
    } else {
      status.value = 'error: ' + result.msg
    }
  }
</script>
