<script setup>
// taken from: https://www.kindacode.com/article/how-to-create-a-modal-dialog-with-tailwind-css/
defineProps(['title', 'show_modal'])
defineEmits('close_modal')

</script>

<template>
  <!-- overlay -->
  <div
    class="fixed z-40 w-screen h-screen inset-0 bg-gray-900 bg-opacity-60 grid items-center justify-center"
    v-show="show_modal"
  >

    <!-- The dialog -->
    <div class="min-w-[120px] bg-white rounded-md px-7 py-6 space-y-5 drop-shadow-lg">
      <div class="flex justify-between">
        <h1 class="text-2xl font-semibold">{{ title }}</h1>
        <!-- This button is used to close the dialog -->
        <button 
          class="px-5 py-2 bg-indigo-500 hover:bg-indigo-700 text-white cursor-pointer rounded-md"
          @click="$emit('close_modal')"
        >
        Close</button>
      </div>

      <div class="py-5 border-t border-b border-gray-300">
        <slot />
      </div>
    </div>
  </div>
</template>
