<script setup>
useSeoMeta({
    title: 'Celebrity',
    description: 'Celebrity list',
    ogDescription: 'Celebrity list',
    twitterTitle: 'Celebrity',
    twitterDescription: 'Celebrity list',
    twitterCard: 'summary'
})

defineOgImageComponent('Nuxt', {
    headline: 'CineVEDA',
    title: 'Celebrity',
    description: 'Celebrity list'
})

const { data: modulesRef } = await useAPI('person/popular?language=en-US&page=1')

const modules = modulesRef.value;

const breadcrumbs = ref([{
    title: 'Celebritys'
}])
</script>

<template>
    <div class="container pt-10 pb-20">
        <h1 class=" absolute opacity-0 left-0 top-0">Celebrity</h1>
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