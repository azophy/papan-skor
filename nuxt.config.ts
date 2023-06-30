// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
  ],
  runtimeConfig: {
    boardExpiryLimit: 6 * 60 * 60, // in seconds
    public: {
      boardUpdateInterval: 1000, // in milloseconds
      boardEventPoolingInterval: 500, // in milliseconds
    },
  },
  // based on https://medium.com/@flanker72/nuxt3-complex-solutions-database-integration-8df941f0fb82
  nitro: {
    // Production
    storage: {
      data: { driver: 'vercelKV' }
    },
    // Development
    devStorage: {
      data: {
        driver: 'fs',
        base: './.nuxt/db'
      }
    }
  },
})
