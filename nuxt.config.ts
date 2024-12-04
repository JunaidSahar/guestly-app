// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      API_URL: process.env.API_URL
    }
  },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  app: {
    head: {
      title: "Guestly",
      meta: [
        { charset: "utf-8" },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
        {
          hid: "description",
          name: "description",
          content: "Guestly",
        }
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/png',
          href: '/favicon.png'
        }
      ]
    }
  },
  modules: [
    '@nuxt/icon',
    '@pinia/nuxt',
    'pinia-plugin-persistedstate/nuxt',
    '@vee-validate/nuxt',
    '@nuxt/ui'
  ],
  css: [
    '~/assets/css/main.css'
  ],
  tailwindcss: {
    configPath: '~/tailwind.config.ts'
  }
})