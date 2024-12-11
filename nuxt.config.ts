// https://nuxt.com/docs/api/configuration/nuxt-config
import svgLoader from "vite-svg-loader"; // Импортируем svgLoader

export default defineNuxtConfig({
   devtools: { enabled: true },

   app: {
      head: {
         meta: [
            {
               name: "viewport",
               content: "width=device-width, initial-scale=1.0",
            },
            {
               name: "format-detection",
               content: "telephone=no",
            },
         ],
      },
   },

   // Добавляем стили Swiper],
   css: ["@/assets/scss/style.scss"],

   vite: {
      plugins: [
         svgLoader(), // Добавляем плагин для работы с SVG как с Vue компонентами
      ],
      css: {
         preprocessorOptions: {
            scss: {
               additionalData: '@use "@/assets/scss/vars.scss" as *;',
            },
         },
      },
   },

   experimental: {
      typedPages: true,
      payloadExtraction: true, // Уменьшает объём передаваемых данных // оптимизация
   },

   // build: {
   //    // оптимизация
   //    splitChunks: {
   //       layouts: true,
   //       pages: true,
   //       commons: true,
   //    },
   // },
   nitro: {
      // оптимизация
      compressPublicAssets: true, // Включить сжатие
   },

   modules: ["nuxt-swiper"],
});
