<script setup>
const footerGrid = ref([
    {
        key: 1,
        title: 'Celebrity',
        links: [
            {
                key: 11,
                link: 'Celebritys',
                to: '/celebrity',
            },
            {
                key: 11,
                link: 'Popular Celebritys',
                to: '/',
            }
        ]
    }
])
</script>

<template>
    <footer>
        <div class="container">
            <div class="footer-grid">
                <section class="footer-box" v-for="item in footerGrid" :key="item.key">
                    <h3>{{ item.title }}</h3>
                    <div class="h-[1px] bg-soft w-full"></div>
                    <ul class="links-group">
                        <li class="w-full" v-for="link in item.links" :key="link.key">
                            <NuxtLink :to="link.to">{{ link.link }}</NuxtLink>
                        </li>
                    </ul>
                </section>
            </div>
        </div>
        <div class="copyright">
            <div class="container">
                <p>© 2025 kasundra jeet. All rights reserved.
                    Data powered by TMDb (The Movie Database)</p>
            </div>
        </div>
    </footer>
</template>

<style scoped>
footer {
    @apply bg-secondary divide-y-2 divide-soft
}

.copyright .container {
    @apply w-full h-16 flex items-center justify-start text-soft text-base
}

.footer-grid {
    @apply w-full py-12 grid grid-cols-4 gap-10
}

.footer-box {
    @apply w-full space-y-2.5 text-soft
}

.footer-box h3 {
    @apply line-clamp-1 text-lg font-serif
}

.links-group {
    @apply space-y-1;
}

.links-group a {
    @apply flex items-center justify-start w-full gap-1 leading-8
}

.links-group a:hover {
    @apply underline
}
</style>