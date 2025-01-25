<script setup>
useSeoMeta({
    title: 'Celebrity',
    description: 'Celebrity list',
    ogDescription: 'Celebrity list',
    twitterTitle: 'Celebrity',
    twitterDescription: 'Celebrity list',
    twitterCard: 'summary'
})

defineOgImageComponent('Nuxt', {
    headline: 'CineVEDA',
    title: 'Celebrity',
    description: 'Celebrity list'
})

const router = useRouter()

onMounted(() => {
    router.push('/celebrity/page/1')
})
</script>

<template>
    <div>1221</div>
</template>