<script setup>
const { data: modulesRef } = await useAPI('movie/popular?language=en-US&page=1')

const modules = modulesRef.value;


const breadcrumbs = ref([{
    title: 'Movies'
}])
</script>

<template>
    <div class="container pt-10 pb-20">
        <div class="space-y-14">
            <Breadcrumbs :breadcrumb="breadcrumbs" />
            <div class="space-y-10">
                <div class="flex items-center justify-between">

                </div>
                <ul class="grid grid-cols-4 gap-4">
                    <MovieBox :array="modules.results" />
                </ul>
            </div>
            <div class="flex items-center justify-center">
                <Pagination :totalPages="500" :currentPage="modules.page" linkPath="/movie/page" />
            </div>
        </div>
    </div>
</template>