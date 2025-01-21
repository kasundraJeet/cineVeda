<script setup>
defineProps({
    array: Array
})
</script>

<template>
    <li v-for="item in array" :key="item.id">
        <NuxtLink to="/" class="img">
            <NuxtImg :src="`http://image.tmdb.org/t/p/w500${item.profile_path}`" :alt="item.name" />
        </NuxtLink>
        <div class="py-2.5 px-3.5">
            <NuxtLink to="/" class="font-serif text-lg text-primary block">{{ item.name }}</NuxtLink>
            <div class="flex items-center flex-wrap gap-x-2 gap-y-0.5">
                <span v-for="(link, index) in item.known_for" :key="link.id">
                    <NuxtLink to="/" class="text-secondary text-base opacity-70">
                        {{ link.title ? link.title : link.name }}
                    </NuxtLink>
                    <span v-if="index < item.known_for.length - 1">, </span>
                </span>
            </div>
        </div>
    </li>
</template>

<style scoped>
li {
    @apply w-full rounded-lg border border-muted shadow-sm overflow-hidden divide-y divide-muted
}

li .img {
    @apply relative w-full pt-[120%] block overflow-hidden
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