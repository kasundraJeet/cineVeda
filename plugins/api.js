export default defineNuxtPlugin((nuxtApp) => {
  const api = $fetch.create({
    baseURL: "https://api.themoviedb.org/3/",
    onRequest({ request, options, error }) {
      options.headers.set(
        "Authorization",
        `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYTY5OTQ4NmNhODlhYjAxYjViZWIxZmJjMWU4ZGEzZiIsIm5iZiI6MTcyNTMwMjg1OS42MzM5OTk4LCJzdWIiOiI2NmQ2MDg0Yjk0ZGMyZjE1OGY2ZWU4MmMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.fBFbmqP3-bHgp54t-n5vd1sQwTy7zcwfHnZl924qncI`
      );
    },
  });

  return {
    provide: {
      api,
    },
  };
});
