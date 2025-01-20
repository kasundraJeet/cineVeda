// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    TMDB_TOKEN:
      "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYTY5OTQ4NmNhODlhYjAxYjViZWIxZmJjMWU4ZGEzZiIsIm5iZiI6MTcyNTMwMjg1OS42MzM5OTk4LCJzdWIiOiI2NmQ2MDg0Yjk0ZGMyZjE1OGY2ZWU4MmMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.fBFbmqP3-bHgp54t-n5vd1sQwTy7zcwfHnZl924qncI",
  },
  ssr: true,
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],
  googleFonts: {
    families: {
      Poppins: ["200", "300", "400", "500", "600", "700", "800", "900"],
      Nunito: ["300", "400", "500", "600", "700"],
    },
  },
  modules: ["@nuxt/image", "@nuxtjs/robots", "@nuxtjs/google-fonts", "@nuxtjs/seo"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
});