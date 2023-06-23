// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
  ],
  // based on https://medium.com/@flanker72/nuxt3-complex-solutions-database-integration-8df941f0fb82
  //nitro: {
    //plugins: ["~/server/index.ts"],
  //},
})
