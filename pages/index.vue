<script setup>
import { useFetch } from '#app';

const { data, error, refresh } = useFetch('https://api.themoviedb.org/3/person/popular?language=en-US&page=1', {
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${useRuntimeConfig().TMDB_TOKEN}`,
  },
});

console.log(data);
</script>

<template>
    home page
</template>