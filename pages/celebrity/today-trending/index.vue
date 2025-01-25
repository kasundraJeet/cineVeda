<script setup>
const { data: modulesRef } = await useAPI(`trending/person/day?language=en-US&page=1`)
const modules = modulesRef.value;

useSeoMeta({
    title: 'Today trending celebrity',
    description: 'Trending Worldwide Actresses',
    ogDescription: 'Trending Worldwide Actresses',
    twitterTitle: 'Today trending celebrity',
    twitterDescription: 'Trending Worldwide Actresses',
    twitterCard: 'summary'
})

defineOgImageComponent('Nuxt', {
    headline: 'CineVEDA',
    title: 'Today trending celebrity',
    description: 'Trending Worldwide Actresses'
})

const breadcrumbs = ref([
    {
        title: 'Celebritys',
        link: '/celebrity'
    },
    {
        title: 'Today Trending'
    }
])
</script>

<template>
    <div class="container py-20">
        <div class="space-y-14">
            <Breadcrumbs :breadcrumb="breadcrumbs" />
            <ul class="grid grid-cols-4 gap-4">
                <CelebrityBox :array="modules.results" />
            </ul>
        </div>
    </div>
</template>
