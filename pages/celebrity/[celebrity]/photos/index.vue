<script setup>
const route = useRoute()
const celebrityId = route.params.celebrity.match(/^\d+/)[0]

const { data: detailsRef } = await useAPI(`person/${celebrityId}?language=en-US`)

const { data: photosRef } = await useAPI(`person/${celebrityId}/images`)

const details = detailsRef.value;
const photos = photosRef.value;
</script>

<template>
    <div class="pb-20 pt-10 container space-y-10">
        <div></div>
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
            <div class="space-y-6">
                <ul class="tab-list">
                    <li>
                        <NuxtLink :to="`/celebrity/${details.id}-${details.name.replace(/\s+/g, '-').toLowerCase()}`">
                            known for</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/">Credits</NuxtLink>
                    </li>
                    <li>
                        <NuxtLink class="active"
                            :to="`/celebrity/${details.id}-${details.name.replace(/\s+/g, '-').toLowerCase()}/photos`">
                            Photos</NuxtLink>
                    </li>
                </ul>
                <ul class="grid grid-cols-4 gap-3">
                    <li class="relative w-full pt-[120%]" v-for="image in photos.profiles" :key="image.key">
                        <NuxtImg :src="`http://image.tmdb.org/t/p/w500/${image.file_path}`" :alt="details.name" class="absolute inset-0 object-cover w-full h-full" />
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

.tab-list a.active{
@apply underline underline-offset-2
}
</style>