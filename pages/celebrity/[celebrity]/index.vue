<script setup>
const route = useRoute()
const celebrityId = route.params.celebrity.match(/^\d+/)[0]

const { data: detailsData } = await useAPI(`person/${celebrityId}?language=en-US`)
const { data: photosData } = await useAPI(`person/${celebrityId}/images`)
const { data: movieData } = await useAPI(`person/${celebrityId}/movie_credits`)
const { data: tvData } = await useAPI(`person/${celebrityId}/tv_credits`)

const movieCast = movieData.value.cast
const movieCrew = movieData.value.crew

const tvCast = tvData.value.cast
const tvCrew = tvData.value.crew

const combinedArray = [...movieCast, ...movieCrew];
const combinedArrayTv = [...tvCast, ...tvCrew];

for (let i = combinedArray.length - 1; i > 0; i--) {
   const j = Math.floor(Math.random() * (i + 1));
   [combinedArray[i], combinedArray[j]] = [combinedArray[j], combinedArray[i]];
}

for (let i = combinedArrayTv.length - 1; i > 0; i--) {
   const j = Math.floor(Math.random() * (i + 1));
   [combinedArrayTv[i], combinedArrayTv[j]] = [combinedArrayTv[j], combinedArrayTv[i]];
}


const details = detailsData.value
const photos = photosData.value

useSeoMeta({
   title: `${details.name}`,
   description: `${details.name} biography`,
   ogDescription: `${details.name} biography`,
   twitterTitle: 'this week trending celebrity',
   twitterDescription: `${details.name} biography`,
   twitterCard: 'summary'
})

defineOgImageComponent('Nuxt', {
   headline: 'CineVEDA',
   title: `${details.name}`,
   description: `${details.name} biography`
})


const breadcrumbs = ref([
   {
      title: 'Celebritys',
      link: '/celebrity'
   },
   {
      title: `${details.name}`
   }
])
</script>

<template>
   <div class="pb-20 pt-10 container space-y-10">
      <Breadcrumbs :breadcrumb="breadcrumbs" />
      <div class="space-y-10">
         <div class="grid gap-12 grid-cols-6 items-start">
            <div class="col-span-2 pt-[120%] sticky top-2 overflow-hidden">
               <NuxtImg :src="`http://image.tmdb.org/t/p/w500${details.profile_path}`" :alt="details.name"
                  class="absolute inset-0 w-full object-cover h-full" />
            </div>
            <div class="col-span-4 space-y-4">
               <h1 class="text-4xl tracking-wide font-semibold text-secondary font-serif">{{ details.name }}
               </h1>
               <p class="text-base text-primary opacity-80 whitespace-pre-wrap"
                  v-html="details.biography || '(No Biography)'" />
               <ul class="details-box">
                  <li>
                     <p>Gender</p>
                     <p>{{ details.gender || '-' }}</p>
                  </li>
                  <li>
                     <p>Birthday</p>
                     <p>{{ details.birthday }}</p>
                  </li>
                  <li v-if="details.deathday">
                     <p>Deathday</p>
                     <p>{{ details.deathday || '-' }}</p>
                  </li>
                  <li>
                     <p>Birth Palce</p>
                     <p>{{ details.place_of_birth || '-' }}</p>
                  </li>
                  <li>
                     <p>Known For Department</p>
                     <p>{{ details.known_for_department || '-' }}</p>
                  </li>
                  <li>
                     <p>also known as</p>
                     <p>{{ details.also_known_as?.join(', ') || '-' }}</p>
                  </li>
               </ul>
            </div>
         </div>
         <div class="space-y-4" v-if="combinedArray.length > 0">
            <div class="flex items-center justify-between w-full">
               <h4 class="font-semibold font-serif text-3xl">Movie Credits</h4>
            </div>
            <ul class="grid grid-cols-5 gap-2.5">
               <li class="box" v-for="item in combinedArray" :key="item.id">
                  <NuxtLink to="/" class="img" :title="item.title" :aria-label="item.title">
                     <NuxtImg :src="`http://image.tmdb.org/t/p/w500/${item.poster_path}`" :alt="item.original_title" />
                  </NuxtLink>
                  <div class="py-2.5 px-3.5">
                     <NuxtLink to="/" :title="item.title" :aria-label="item.title">{{ item.original_title }}</NuxtLink>
                  </div>
               </li>
            </ul>
         </div>
         <div class="space-y-4" v-if="combinedArrayTv.length > 0">
            <div class="flex items-center justify-between w-full">
               <h4 class="font-semibold font-serif text-3xl">TV Credits</h4>
            </div>
            <ul class="grid grid-cols-5 gap-2.5">
               <li class="box" v-for="item in combinedArrayTv" :key="item.id">
                  <NuxtLink to="/" class="img" :title="item.name" :aria-label="item.name">
                     <NuxtImg :src="`http://image.tmdb.org/t/p/w500/${item.poster_path}`" :alt="item.original_name" />
                  </NuxtLink>
                  <div class="py-2.5 px-3.5">
                     <NuxtLink to="/" :title="item.name" :aria-label="item.name">{{ item.original_name }}</NuxtLink>
                  </div>
               </li>
            </ul>
         </div>
         <div>
            <ul class="grid grid-cols-4 gap-3">
               <li class="relative w-full pt-[120%]" v-for="image in photos.profiles" :key="image.key">
                  <NuxtImg :src="`http://image.tmdb.org/t/p/w500/${image.file_path}`" :alt="details.name"
                     class="absolute inset-0 object-cover w-full h-full" />
               </li>
            </ul>
         </div>
      </div>
   </div>
</template>

<style scoped>
.details-box {
   @apply w-full bg-muted p-6 grid grid-cols-1 gap-4
}

.details-box li {
   @apply flex items-center gap-6
}

.details-box li p {
   @apply text-base text-secondary
}

.details-box li p:nth-child(1) {
   @apply opacity-70 min-w-[180px]
}

.tab-list {
   @apply flex items-center justify-center gap-6 p-2.5
}

.tab-list a {
   @apply bg-soft py-2 px-2 block capitalize hover:underline text-secondary text-xl
}

.tab-list a.active {
   @apply underline underline-offset-2
}

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