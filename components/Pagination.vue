<template>
    <div class="flex items-stretch gap-5">
        <NuxtLink :to="`${linkPath}/${currentPage - 1}`" class="pagination-btn" v-if="currentPage > 1">Prev
        </NuxtLink>

        <div class="flex items-stretch gap-1">
            <NuxtLink v-if="currentPage > 2" :to="`${linkPath}/1`" class="pagination-count">1</NuxtLink>

            <span v-if="currentPage > 6" class="pagination-count">...</span>

            <NuxtLink v-for="page in pageNumbers" :key="page" :to="`${linkPath}/${page}`"
                :class="['pagination-count', { active: page === currentPage }]">
                {{ page }}
            </NuxtLink>

            <span v-if="currentPage < totalPages - 2" class="pagination-count">...</span>

            <NuxtLink v-if="currentPage < totalPages - 2" :to="`${linkPath}/${totalPages}`" class="pagination-count">{{
                totalPages }}</NuxtLink>
        </div>

        <NuxtLink :to="`${linkPath}/${currentPage + 1}`" class="pagination-btn" v-if="currentPage < totalPages">
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
