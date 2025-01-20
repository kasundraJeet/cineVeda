<template>
    <div class="flex items-stretch gap-4">
        <button class="pagination-btn">Prev</button>
        <div class="flex items-stretch gap-1">
            <button class="pagination-count active">1</button>
            <button class="pagination-count">2</button>
            <button class="pagination-count">3</button>
            <span class="pagination-count">...</span>
            <button class="pagination-count">40</button>
            <button class="pagination-count">60</button>
            <button class="pagination-count">70</button>
            <span class="pagination-count">...</span>
            <button class="pagination-count">120</button>
            <button class="pagination-count">130</button>
            <button class="pagination-count">140</button>
        </div>
        <button class="pagination-btn">Next</button>
    </div>
</template>

<style scoped>
.pagination-btn {
    @apply text-base tracking-wide border border-secondary px-2.5 py-0.5 rounded-sm text-center
}

.pagination-count {
    @apply min-w-8 min-h-8 px-1.5 border border-secondary rounded-sm flex items-center justify-center
}

.pagination-count.active {
    @apply bg-secondary text-soft
}
</style>