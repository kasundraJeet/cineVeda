// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  googleFonts: {
    families: {
      "Plus+Jakarta+Sans": "200..700",
    },
  },
  modules: [
    "@nuxt/image",
    "@nuxtjs/robots",
    "@nuxtjs/google-fonts",
    "@nuxtjs/stylelint-module",
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});
