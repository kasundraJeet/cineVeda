<script setup>
const { data: modulesRef } = await useAPI('movie/top_rated?language=en-US&page=1')

const modules = modulesRef.value;

const breadcrumbs = ref([{
    title: 'Movies',
    link: '/movie',
},
{
    title: 'Top Rated',
},])
</script>

<template>
    <div class="container pt-10 pb-20">
        <div class="space-y-14">
            <Breadcrumbs :breadcrumb="breadcrumbs" />
            <ul class="grid grid-cols-4 gap-4">
                <MovieBox :array="modules.results" />
            </ul>
            <div class="flex items-center justify-center">
                <Pagination :totalPages="modules.total_pages" :currentPage="modules.page" linkPath="/movie/top-rated/page" />
            </div>
        </div>
    </div>
</template>