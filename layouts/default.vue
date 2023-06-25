<template>
  <nav class="p-4 flex items-center justify-center">
    <NuxtLink to="/" class="font-bold text-lg hover:underline">PapanSkor</NuxtLink>
  </nav>

  <slot />

  <footer class="bg-neutral-200 p-6 text-center dark:bg-neutral-700">
    © {{ year }} Copyright: 
    <a class="cursor-pointer underline hover:no-underline" href="https://abdurrahman.adianto.id">Abdurrahman Shofy Adianto</a>.
    <a class="cursor-pointer underline hover:no-underline" href="https://github.com/azophy/scoreboard-nuxt">Source code</a> for this website.
  </footer>
</template>

<script setup>
const year = new Date().getFullYear()
</script>
