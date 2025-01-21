<template>
    <div class="flex items-stretch gap-5">
        <NuxtLink to="/" class="pagination-btn">Prev</NuxtLink>
        <div class="flex items-stretch gap-1">
            <NuxtLink to="/" class="pagination-count active">1</NuxtLink>
            <NuxtLink to="/" class="pagination-count">2</NuxtLink>
            <NuxtLink to="/" class="pagination-count">3</NuxtLink>
            <span class="pagination-count">...</span>
            <NuxtLink to="/" class="pagination-count">40</NuxtLink>
            <NuxtLink to="/" class="pagination-count">60</NuxtLink>
            <NuxtLink to="/" class="pagination-count">70</NuxtLink>
            <span class="pagination-count">...</span>
            <NuxtLink to="/" class="pagination-count">120</NuxtLink>
            <NuxtLink to="/" class="pagination-count">130</NuxtLink>
            <NuxtLink to="/" class="pagination-count">140</NuxtLink>
        </div>
        <NuxtLink to="/" class="pagination-btn">Next</NuxtLink>
    </div>
</template>

<style scoped>
.pagination-btn {
    @apply text-base tracking-wide border border-secondary px-2.5 py-0.5 rounded-sm text-center
}

.pagination-count {
    @apply min-w-8 min-h-8 px-1.5 border border-secondary rounded-sm flex items-center justify-center transition-colors
}

.pagination-count.active,
.pagination-count:hover {
    @apply bg-secondary text-soft
}
</style>