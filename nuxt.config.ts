// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  googleFonts: {
    families: {
      Poppins: ["200", "300", "400", "500", "600", "700", "800", "900"],
      Hind: ["300", "400", "500", "600", "700"],
    },
  },
  modules: ["@nuxt/image", "@nuxtjs/robots", "@nuxtjs/google-fonts"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
