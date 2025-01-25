<script setup>
const route = useRoute()
const movieId = route.params.movie.match(/^\d+/)[0]

const { data: detailsData } = await useAPI(`movie/${movieId}?language=en-US`)

console.log(detailsData.value)

const details = detailsData.value

const breadcrumbs = ref([
    {
        title: 'Celebritys',
        link: '/celebrity'
    },
    {
        title: `${details?.title}`
    }
])
</script>

<template>
    <div class="pb-20 pt-10 container space-y-10">
        <Breadcrumbs :breadcrumb="breadcrumbs" />
        <div class="space-y-10">
            {{ details }}
        </div>
    </div>
</template>