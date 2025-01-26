<script setup>
const route = useRoute()
const celebrityId = route.params.celebrity.match(/^\d+/)[0]

const { data: detailsData } = await useAPI(`person/${celebrityId}?language=en-US`)
const details = detailsData.value
const { data: photosData } = await useAPI(`person/${celebrityId}/images`)
const photos = photosData.value

useSeoMeta({
    title: `${details.name} photos`,
    description: `${details.name} photos`,
    ogDescription: `${details.name} photos`,
    twitterTitle: `${details.name}`,
    twitterDescription: `${details.name} photos`,
    twitterCard: 'summary'
})

defineOgImageComponent('Nuxt', {
    headline: 'CineVEDA',
    title: `${details.name} photos`,
    description: `${details.name} photos`
})
</script>

<template>
    <CelebrityLayout :details="details" is="photo">
        <div>
            <ul class="grid grid-cols-4 gap-3">
                <li class="relative w-full pt-[120%]" v-for="image in photos.profiles" :key="image.key">
                    <NuxtImg :src="`http://image.tmdb.org/t/p/w500/${image.file_path}`" :alt="details.name"
                        class="absolute inset-0 object-cover w-full h-full" />
                </li>
            </ul>
        </div>
    </CelebrityLayout>
</template>