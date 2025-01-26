<script setup>

const props = defineProps({
    details: Object,
    is:String,
})

const breadcrumbs = ref([
    {
        title: 'Celebritys',
        link: '/celebrity'
    },
    {
        title: `${props.details.name}`
    }
])

const isExpanded = ref(false);

const truncatedBiography = computed(() => {
    const maxLength = 200;
    return props.details.biography && props.details.biography.length > maxLength
        ? props.details.biography.slice(0, maxLength)
        : props.details.biography;
});
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
                    <div class="-space-y-2">
                        <p class="text-base text-primary opacity-80 whitespace-pre-wrap">
                            <span v-if="isExpanded">{{ details.biography || '(No Biography)' }}</span>
                            <span v-else>{{ truncatedBiography }}...</span>
                        </p>
                        <button @click="isExpanded = !isExpanded"
                            class="text-end w-full underline block text-sm text-secondary opacity-70">
                            {{ isExpanded ? 'Show Less' : 'Load More' }}
                        </button>
                    </div>
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

            <div class="tab-list">
                <NuxtLink :to="`/celebrity/${details.id}-${details.name.replace(/\s+/g, '-').toLowerCase()}`" :class="is !== 'photo' ? 'active' : ''">Know For</NuxtLink>
                <NuxtLink :to="`/celebrity/${details.id}-${details.name.replace(/\s+/g, '-').toLowerCase()}/photos`" :class="is === 'photo' ? 'active' : ''">Photos</NuxtLink>
            </div>

            <slot />
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
    @apply flex items-center justify-center gap-6 p-2.5 bg-muted
}

.tab-list a {
    @apply py-2 px-2 block capitalize hover:underline hover:underline-offset-2 bg-muted text-secondary text-xl opacity-60
}

.tab-list a.active {
    @apply underline underline-offset-2 opacity-100
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