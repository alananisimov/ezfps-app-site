// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/supabase'],
  ssr: true,
  app: {
    head : {
      link: [{
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Manrope:wght@500&display=swap",
      },]
    }
  },
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  }
})
