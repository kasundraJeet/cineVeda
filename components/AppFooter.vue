<script setup>
const footerGrid = ref([
    {
        key: 3,
        is: 'about',
        title: 'About Site',
        description: 'loremasjjsj'
    },
    {
        key: 2,
        title: 'Movies',
        links: [
            {
                key: 21,
                link: 'Movies',
                to: '/movie',
            },
            {
                key: 21,
                link: 'Popular Movies',
                to: '/movie',
            },
            {
                key: 21,
                link: 'Top Rated Movies',
                to: '/movie/top-rated',
            }
        ]
    },
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
                key: 12,
                link: 'Popular Celebritys',
                to: '/celebrity',
            },
            {
                key: 13,
                link: 'Today Trending',
                to: '/celebrity/today-trending',
            },
            {
                key: 14,
                link: 'Weekly Trending',
                to: '/celebrity/weekly-trending',
            }
        ]
    }
])
</script>

<template>
    <footer>
        <div class="container">
            <div class="footer-grid">
                <section class="footer-box" :class="item.is === 'about' ? 'col-span-2' : ''" v-for="item in footerGrid"
                    :key="item.key">
                    <h3>{{ item.title }}</h3>
                    <div class="h-[1px] bg-soft w-full"></div>
                    <p class="text-base" v-if="item.is === 'about'">{{ item.description }}</p>
                    <ul v-else class="links-group">
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