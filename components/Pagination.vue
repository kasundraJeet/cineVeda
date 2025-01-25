<template>
    <div class="flex items-stretch gap-5">
        <NuxtLink title="Go to previous page" aria-label="Previous page" :to="`${linkPath}/${currentPage - 1}`"
            class="pagination-btn" v-if="currentPage > 1">Prev
        </NuxtLink>

        <div class="flex items-stretch gap-1">
            <NuxtLink title="Go to first page" aria-label="First page" v-if="currentPage > 3" :to="`${linkPath}/1`"
                class="pagination-count">1</NuxtLink>

            <span title="More pages" aria-label="More pages" v-if="currentPage > 6" class="pagination-count">...</span>

            <NuxtLink :title="`Go to page ${page}`" :aria-label="`Page ${page}`" v-for="page in pageNumbers" :key="page"
                :to="`${linkPath}/${page}`" :class="['pagination-count', { active: page === currentPage }]">
                {{ page }}
            </NuxtLink>

            <span title="More pages" aria-label="More pages" v-if="currentPage < totalPages - 2"
                class="pagination-count">...</span>

            <NuxtLink :title="`Go to page ${totalPages}`" :aria-label="`Page ${totalPages}`"
                v-if="currentPage < totalPages - 2" :to="`${linkPath}/${totalPages}`" class="pagination-count">{{
                    totalPages }}</NuxtLink>
        </div>

        <NuxtLink title="Go to next page" aria-label="Next page" :to="`${linkPath}/${currentPage + 1}`"
            class="pagination-btn" v-if="currentPage < totalPages">
            Next</NuxtLink>
    </div>
</template>

<script setup>
import { defineProps, computed } from 'vue';

const props = defineProps({
    totalPages: {
        type: Number,
        required: true
    },
    currentPage: {
        type: Number,
        required: true
    },
    linkPath: {
        type: String,
        required: true
    }
});

const pageNumbers = computed(() => {
    const pages = [];
    const start = Math.max(1, props.currentPage - 2);
    const end = Math.min(props.totalPages, props.currentPage + 2);

    for (let i = start; i <= end; i++) {
        pages.push(i);
    }

    return pages;
});
</script>

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
