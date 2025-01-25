<script setup>
const route = useRoute()
const movieId = route.params.movie.match(/^\d+/)[0]

const { data: detailsData } = await useAPI(`movie/${movieId}?language=en-US`)


const details = detailsData.value

const breadcrumbs = ref([
    {
        title: 'Movies',
        link: '/movie'
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