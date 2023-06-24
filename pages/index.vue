<template>
  <Head>
    <Title>PapanSkor - Simple Online Scoreboard</Title>
  </Head>
  <main class="grid items-center justify-center min-h-screen w-screen">
    <section class="text-center h-4/5 w-full lg:min-w-[800px] flex flex-col lg:flex-row items-center gap-4">
      <article class="text-center w-full p-4">
        <h1 class="font-bold text-center text-xl xl:text-3xl">Simple Online Digital Scoreboard</h1>
        <p>
          Create a new shareable online scoreboard. You could open in as many devices, it would sync almost instantly.
        </p>
      </article>
      <div class="w-full flex flex-col items-center">
        <BoardsNew />
      </div>
    </section>
  </main>
</template>
