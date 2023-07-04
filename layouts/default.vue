<template>
  <nav class="p-4 flex items-center justify-center bg-neutral-200 dark:bg-neutral-700 dark:text-white">
    <img src="/icon.png" alt="PapanSkor logo" width="1em" />
    <NuxtLink to="/" class="font-bold text-lg hover:underline">PapanSkor</NuxtLink>
  </nav>

  <slot />

  <footer class="mt-20 p-6 text-center bg-neutral-200 dark:bg-neutral-700 dark:text-white">
    © {{ year }} Copyright: 
    <a class="cursor-pointer underline hover:no-underline" href="https://abdurrahman.adianto.id">Abdurrahman Shofy Adianto</a>.
    <a class="cursor-pointer underline hover:no-underline" href="https://github.com/azophy/papan-skor">Source code</a> for this website.
  </footer>
</template>

<script setup>
const year = new Date().getFullYear()

useServerSeoMeta({
  ogLocale: 'en_US',
  title: 'PapanSkor - Simple Online Scoreboard',
  ogTitle: 'PapanSkor - Simple Online Scoreboard',
  ogSiteName: 'PapanSkor',
  author: 'Abdurrahman Shofy Adianto',
  ogUrl: 'https://papan-skor.vercel.app',
  description: 'Simple sharable online scoreboard with multi device synchronization. Built with NuxtJs & Nitro Unstorage',
  ogDescription: 'Simple sharable online scoreboard with multi device synchronization. Built with NuxtJs & Nitro Unstorage',
  ogImage: '/ogbanner.png',
  twitterCard: 'summary_large_image',
})
</script>
