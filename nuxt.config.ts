export default defineNuxtConfig({
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
  modules: [
    "@nuxt/image",
    "@nuxtjs/robots",
    "@nuxtjs/google-fonts",
    "@nuxtjs/seo",
    "nuxt-lucide-icons",
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  sitemap: {
    sitemaps: {
      celebrity_pages: {
        sources: [
          '/api/__sitemap__/urls/celebrityPages',
        ]
      }
    }
  },
});