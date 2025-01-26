<script setup>
const route = useRoute()
const celebrityId = route.params.celebrity.match(/^\d+/)[0]

const { data: detailsData } = await useAPI(`person/${celebrityId}?language=en-US`)

const details = detailsData.value

const { data: movieData } = await useAPI(`person/${celebrityId}/combined_credits?language=en-US`)


const movieCast = movieData.value.cast
const movieCrew = movieData.value.crew

const combinedArray = [...movieCast, ...movieCrew];

for (let i = combinedArray.length - 1; i > 0; i--) {
   const j = Math.floor(Math.random() * (i + 1));
   [combinedArray[i], combinedArray[j]] = [combinedArray[j], combinedArray[i]];
}

useSeoMeta({
   title: `${details.name}`,
   description: `${details.name} biography`,
   ogDescription: `${details.name} biography`,
   twitterTitle: `${details.name}`,
   twitterDescription: `${details.name} biography`,
   twitterCard: 'summary'
})

defineOgImageComponent('Nuxt', {
   headline: 'CineVEDA',
   title: `${details.name}`,
   description: `${details.name} biography`
})
</script>

<template>
   <CelebrityLayout :details="details">

      <div class="space-y-4" v-if="combinedArray.length > 0">
         <div class="flex items-center justify-between w-full">
            <h4 class="font-semibold font-serif text-3xl">Movie Credits</h4>
         </div>
         <ul class="grid grid-cols-5 gap-2.5">
            <li class="box" v-for="item in combinedArray" :key="item.id">
               <NuxtLink
                  :to="item.media_type !== 'tv' ? `/movie/${item.id}-${item.title ? item.title.replace(/\s+/g, '-').toLowerCase() : item.name.replace(/\s+/g, '-').toLowerCase()}` : '/'"
                  class="img" :title="item.title" :aria-label="item.title">
                  <NuxtImg :src="`http://image.tmdb.org/t/p/w500/${item.poster_path}`" :alt="item.original_title" />
               </NuxtLink>
               <div class="py-2.5 px-3.5">
                  <NuxtLink
                     :to="item.media_type !== 'tv' ? `/movie/${item.id}-${item.title ? item.title.replace(/\s+/g, '-').toLowerCase() : item.name.replace(/\s+/g, '-').toLowerCase()}` : '/'"
                     :title="item.title" :aria-label="item.title">
                     {{ item.title ? item.title : item.original_title }}
                  </NuxtLink>
               </div>
            </li>
         </ul>
      </div>
   </CelebrityLayout>
</template>

<style scoped>
.box {
   @apply w-full rounded-lg border border-muted shadow-sm overflow-hidden divide-y divide-muted
}

.box .img {
   @apply relative w-full pt-[120%] block overflow-hidden
}

.box .img img {
   @apply absolute inset-0 w-full h-full object-cover transition-all
}
</style>