<script setup>
defineProps(['participant_name'])
const counter = ref(0);

const counter_add = () => counter.value++;
const counter_reduce = () => {
  if (counter.value > 0) counter.value--;
}
</script>

<template>
  <div class="border border-gray-900 rounded-xl w-1/2 h-full">
    <h2 class="w-full h-30 text-[3em] text-center font-bold">{{ participant_name }}</h2>
    <span class="w-full h-full font-bold text-[10em] grid items-center justify-center">{{ counter }}</span>
    <div class="flex gap-2">
      <button type="button" class="w-1/2 h-full text-[3em] font-bold p-4 items-center bg-blue-400 hover:bg-blue-600" @click="counter_reduce">-</button>
      <button type="button" class="w-1/2 h-full text-[3em] font-bold p-4 items-center bg-blue-400 hover:bg-blue-600" @click="counter_add">+</button>
    </div>
  </div>
</template>

