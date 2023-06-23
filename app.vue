<script setup>
let names = [ 'Peserta 1', 'Peserta 2' ]
</script>

<template>
  <main class="grid items-center justify-center min-h-screen w-screen">

    <section class="text-center h-4/5 min-w-[800px]">
      <h1 class="font-bold text-3xl">Simple Scoreboard</h1>
      
      <article class="flex gap-4 mt-4 h-2/3">
        <ScorePanel :participant_name="names[0]"/>
        <ScorePanel :participant_name="names[1]"/>
      </article>
    </section>

  </main>
</template>

