// https://nuxt.com/docs/api/configuration/nuxt-config
import { join, resolve } from "path";
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/supabase"],
  
  ssr: true,
  app: {
    head: {
      link: [
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Manrope:wght@500&display=swap",
        },
        { rel: "icon", type: "image/x-icon", href: "/icon.png" }
      ],
      script: [
        {
          src: '/preline/dist/preline.js',
          defer: true
        }
    ]
    },
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
  },
});
