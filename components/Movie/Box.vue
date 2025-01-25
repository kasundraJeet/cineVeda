<script setup>
import { Star } from 'lucide-vue-next';

defineProps({
    array: Array
})

const getStarRating = (voteAverage) => {
    return (voteAverage / 10) * 5;
}
</script>

<template>
    <li v-for="item in array" :key="item.id">
        <NuxtLink :to="`/movie/${item.id}-${item.title.replace(/\s+/g, '-').toLowerCase()}`" class="img" :title="item.title" :aria-label="item.title">
            <NuxtImg :src="`http://image.tmdb.org/t/p/w500${item.poster_path}`" :alt="item.name" />
        </NuxtLink>
        <div class="py-2.5 px-3.5">
            <NuxtLink :to="`/movie/${item.id}-${item.title.replace(/\s+/g, '-').toLowerCase()}`" class="font-serif text-lg text-primary block">{{ item.title }}</NuxtLink>
            <div class="flex items-center">
                <span v-for="n in Math.floor(getStarRating(item.vote_average))" :key="n">
                    <Star class="size-3" fill="#111" strokeWidth={0} />
                </span>
                <span v-if="getStarRating(item.vote_average) % 1 !== 0">
                    <Star class="size-3" />
                </span>
               <span class="ml-1 text-sm">({{ item.vote_count }})</span>
            </div>
        </div>
    </li>
</template>

<style scoped>
li {
    @apply w-full rounded-lg border border-muted shadow-sm overflow-hidden divide-y divide-muted
}

li .img {
    @apply relative w-full pt-[140%] block overflow-hidden
}

li .img img {
    @apply absolute inset-0 w-full h-full object-cover transition-all
}

li .img:hover img,
li .img:focus img {
    @apply scale-125
}

a {
    @apply hover:underline focus:underline
}
</style>