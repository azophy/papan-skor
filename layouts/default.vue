<template>
  <nav class="p-4 flex items-center justify-center bg-neutral-200 dark:bg-neutral-700 dark:text-white">
    <NuxtLink to="/" class="font-bold text-lg hover:underline">PapanSkor</NuxtLink>
  </nav>

  <slot />

  <footer class="p-6 text-center bg-neutral-200 dark:bg-neutral-700 dark:text-white">
    © {{ year }} Copyright: 
    <a class="cursor-pointer underline hover:no-underline" href="https://abdurrahman.adianto.id">Abdurrahman Shofy Adianto</a>.
    <a class="cursor-pointer underline hover:no-underline" href="https://github.com/azophy/papan-skor">Source code</a> for this website.
  </footer>
</template>

<script setup>
const year = new Date().getFullYear()
</script>
