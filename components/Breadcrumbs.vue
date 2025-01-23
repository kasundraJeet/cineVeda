<script setup>
import { House } from 'lucide-vue-next';

const props = defineProps({
    breadcrumb: Array
})
</script>

<template>
    <nav>
        <ol class="breadcrumb">
            <li>
                <NuxtLink to="/">
                    <House class="size-5 inline-flex mr-2 -mt-1" />
                    <span>Home</span>
                </NuxtLink>
            </li>
            <li v-for="(item, i) in props.breadcrumb" :key="i">
                <NuxtLink :to="item.link" v-if="item.link">
                    <span>{{ item.title }}</span>
                </NuxtLink>
                <p v-else>
                    {{ item.title }}
                </p>
            </li>
        </ol>
    </nav>
</template>

<style scoped>
.breadcrumb {
    list-style-type: none;
    padding: 0;
}

.breadcrumb li {
    display: inline-block;
    position: relative;
}

.breadcrumb li a,
.breadcrumb li p {
    @apply py-2 px-3 text-base block text-secondary
}

.breadcrumb li a:hover {
    @apply hover:underline focus:underline
}

.breadcrumb li p {
    @apply opacity-60
}

.breadcrumb li:last-child a {
    cursor: default;
}

.breadcrumb li:last-child::before,
.breadcrumb li:last-child::after {
    @apply bg-muted
}

.breadcrumb li:not(:last-child):hover::before,
.breadcrumb li:not(:last-child):hover::after {
    @apply bg-muted
}

.breadcrumb li::before,
.breadcrumb li::after {
    content: '';
    position: absolute;
    left: 0;
    height: 50%;
    width: 100%;
    z-index: -2;
}

.breadcrumb li:nth-child(odd):before,
.breadcrumb li:nth-child(odd)::after {
    background: white;
}

.breadcrumb li:nth-child(even):before,
.breadcrumb li:nth-child(even)::after {
    @apply bg-muted
}

.breadcrumb li::before {
    top: 0;
    transform: skew(30deg);
}

.breadcrumb li::after {
    bottom: 0;
    transform: skew(-30deg);
}

.breadcrumb li:first-child {
    left: -5px;
    box-sizing: content-box;
}

.breadcrumb li:first-child:hover {
    @apply bg-muted
}

.breadcrumb li:first-child::before,
.breadcrumb li:first-child::after {
    left: 5px;
}
</style>