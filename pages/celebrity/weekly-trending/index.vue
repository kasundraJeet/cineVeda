<script setup>
const { data: modulesRef } = await useAPI(`trending/person/week?language=en-US&page=1`)
const modules = modulesRef.value;


const breadcrumbs = ref([
    {
        title: 'Celebritys',
        link: '/celebrity'
    },
    {
        title: 'Weekly Trending'
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
