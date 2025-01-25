<script setup>


const route = useRoute()
const router = useRouter()

const page = Number(route.params.page)

useSeoMeta({
    title: `Celebrity page ${page}`,
    description: `Celebrity page ${page}`,
    ogDescription: `Celebrity page ${page}`,
    twitterTitle: `Celebrity page ${page}`,
    twitterDescription: `Celebrity page ${page}`,
    twitterCard: 'summary'
})

defineOgImageComponent('Nuxt', {
    headline: 'CineVEDA',
    title: 'Celebrity',
    description: `Celebrity Page ${page}`
})

if (isNaN(page) || page < 1 || page > 500) {
    router.push('/')
}

const { data: modulesRef } = await useAPI(`person/popular?language=en-US&page=${page}`)
const modules = modulesRef.value;


const breadcrumbs = ref([
    {
        title: 'Celebritys',
        link: '/celebrity'
    },
    {
        title: `Page ${page}`
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
            <div class="flex items-center justify-center">
                <Pagination :totalPages="500" :currentPage="modules.page" linkPath="/celebrity/page" />
            </div>
        </div>
    </div>
</template>
