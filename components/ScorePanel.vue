<script setup>
defineProps(['label', 'counter'])
</script>

<template>
  <div class="border border-gray-900 rounded-xl w-full h-full">
    <h2 class="w-full h-30 text-[3em] bg-blue-100 text-center font-bold">{{ label }}</h2>
    <span class="w-full h-full font-bold text-[10em] grid items-center justify-center">{{ counter }}</span>
    <div class="flex gap-2">
      <button type="button" class="w-1/2 h-full text-[3em] font-bold p-4 items-center bg-blue-400 hover:bg-blue-600" @click="$emit('counter_reduce')">-</button>
      <button type="button" class="w-1/2 h-full text-[3em] font-bold p-4 items-center bg-blue-400 hover:bg-blue-600" @click="$emit('counter_add')">+</button>
    </div>
  </div>
</template>

