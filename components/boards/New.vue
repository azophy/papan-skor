<template>
    <div
      v-show="status"
      class="bg-gray-300 p-4 border border-dashed"
    >{{ status }}</div>
    <h1 class="text-lg font-bold">Create new board</h1>

    <BoardsForm
      v-show="status != 'done'"
      :title="new_title"
      @title_input="(v) => new_title = v"
      :participants="new_participants"
      @participant_input="(i,v) => new_participants[i] = v"
      @form_click="() => submitClick()"
      @add_participants="new_participants.push('')"
    >
      <label for="">{{url.origin}}/boards/</label>
      <input
        v-model="new_id"
        type="text"
        class="border border-gray-300 p-2"
        required
      />
      <button
        type="button"
        class="p-2 cursor-pointer bg-blue-200 hover:bg-blue-400 hover:underline"
        @click="new_id = createId()"
      >
        generate new random url
      </button>
    </BoardsForm>
    <NuxtLink
      v-show="status == 'done'"
      :to="`/boards/${new_id}`"
      class="w-[300px] p-2 cursor-pointer bg-blue-200 hover:bg-blue-400 hover:underline"
    >New board link: {{ `${url.origin}/boards/${new_id}`}}</NuxtLink>
</template>

<script setup lang="ts">
  import { createId } from '@paralleldrive/cuid2'

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
          new_id: new_id.value,
          new_title: new_title.value,
          new_participants: new_participants.value,
        },
    })
    if (result.success) {
      status.value = 'done'
    } else {
      status.value = 'error: ' + result.msg
    }
  }
  
  new_id.value = createId()
</script>
