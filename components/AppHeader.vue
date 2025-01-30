<script setup>
import { Menu, ChevronDown } from 'lucide-vue-next';


const megaMenuData = ref('')

const navMenu = ref([
    {
        id: 1,
        title: 'Celebritys',
        group: {
            links_group: [
                {
                    id: 11,
                    title: 'Links',
                    links: [
                        {
                            id: 111,
                            to: '/',
                            label: 'Popular Celebritys'
                        },
                        {
                            id: 112,
                            to: '/',
                            label: 'Male Celebritys'
                        },
                        {
                            id: 113,
                            to: '/',
                            label: 'Female Celebritys'
                        }
                    ]
                }
            ],
            poster: {

            }
        }
    },
    {
        id: 2,
        title: 'Movies',
        group: {
            links_group: [
                {
                    id: 22,
                    title: 'Links',
                    links: [
                        {
                            id: 211,
                            to: '/movie',
                            label: 'Movies'
                        },
                        {
                            id: 212,
                            to: '/movie/top-rated',
                            label: 'Top Rated Movie'
                        },
                        {
                            id: 213,
                            to: '/movie',
                            label: 'Popular Movies'
                        }
                    ]
                }
            ],
            poster: {

            }
        }
    }
]);
</script>


<template>
    <header>
        <div class="container">
            <nav>
                <li>
                    <RouterLink to="/">LOGO</RouterLink>
                </li>
                <li>
                    <ul class="flex items-stretch gap-4">
                        <li class="relative" v-for="item in navMenu" :key="item.id">
                            <button class="nav-btn" @click="megaMenuData = item.group">
                                {{ item.title }}
                                <ChevronDown class="inline-flex size-5" />
                            </button>
                        </li>
                    </ul>
                </li>
                <li>
                    <button class="time-line-btn">
                        <Menu class="size-5" />
                    </button>
                </li>
            </nav>
        </div>
        <div class="mega-menu" v-if="megaMenuData">
            <div class="py-3 px-6 col-span-2">
                <ul class="grid grid-cols-3 gap-x-6 gap-y-4">
                    <li class="space-y-2.5" v-for="item in megaMenuData.links_group" :key="item.id">
                        <p class="uppercase text-sm font-serif text-secondary opacity-60 tracking-wider">{{ item.title
                            }}
                        </p>
                        <ol class="space-y-2">
                            <li v-for="link in item.links">
                                <RouterLink :to="link.to"
                                    class="text-base text-secondary capitalize hover:underline block">
                                    {{ link.label }}
                                </RouterLink>
                            </li>
                        </ol>
                    </li>
                </ul>
            </div>
            <div class="py-3 px-6"></div>
        </div>
    </header>
</template>

<style scoped>
header {
    @apply border-b border-primary py-2.5 relative
}

nav {
    @apply w-full flex items-center justify-between gap-2 list-none p-0
}

.time-line-btn {
    @apply bg-muted min-w-9 min-h-9 max-w-9 max-h-9 flex items-center justify-center rounded-full border border-secondary text-secondary
}

.nav-btn {
    @apply rounded-lg py-2 px-2.5 text-secondary capitalize text-base
}

.nav-btn:hover,
.nav-btn:focus {
    @apply bg-muted
}

.mega-menu {
    @apply absolute top-full border-b border-t border-secondary w-full left-0 bg-muted z-50 divide-x divide-secondary grid grid-cols-3
}
</style>