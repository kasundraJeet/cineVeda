/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    colors: {
      primary: "hsl(var(--primary) / <alpha-value>)",
      muted: "hsl(var(--muted) / <alpha-value>)",
      secondary: "hsl(var(--secondary) / <alpha-value>)",
      soft: "hsl(var(--soft) / <alpha-value>)",
    }
  },
  plugins: [],
};
