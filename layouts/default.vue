<script setup>
useHead({
    htmlAttrs: {
        lang: 'en'
    },
    link: [
        {
            rel: 'icon',
            type: 'image/png',
            href: '/favicon.png'
        }
    ]
})
</script>

<template>
    <AppHeader />
    <main>
        <slot />
    </main>
    <AppFooter />
</template>