export default defineNuxtPlugin((nuxtApp) => {
  const api = $fetch.create({
    baseURL: "https://api.themoviedb.org/3/",
    onRequest({ request, options, error }) {
      options.headers.set(
        "Authorization",
        `Bearer ${useRuntimeConfig().TMDB_TOKEN}`
      );
    },
  });

  return {
    provide: {
      api,
    },
  };
});
