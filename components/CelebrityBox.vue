<template>
    <li>
        <NuxtLink to="/" class="img">
            <NuxtImg src="https://placehold.co/800x800" alt="placeholder" />
        </NuxtLink>
        <div class="py-2.5 px-3.5">
            <NuxtLink to="/" class="font-serif text-lg text-primary block">Kasundra Jeet</NuxtLink>
            <div class="flex items-center flex-wrap  gap-1.5">
                <NuxtLink to="/" class="text-secondary text-base opacity-70">jumanji</NuxtLink>
            </div>
        </div>
    </li>
</template>

<style scoped>
li {
    @apply w-full rounded-lg border border-muted shadow-sm overflow-hidden divide-y divide-muted
}

li .img {
    @apply relative w-full pt-[110%] block overflow-hidden
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