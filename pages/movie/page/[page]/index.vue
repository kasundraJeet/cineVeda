<script setup>
const route = useRoute()
const router = useRouter()

const page = Number(route.params.page)

if (isNaN(page) || page < 1 || page > 500) {
    router.push('/')
}

const { data: modulesRef } = await useAPI(`movie/popular?language=en-US&page=${page}`)
const modules = modulesRef.value;


const breadcrumbs = ref([
    {
        title: 'Movies',
        link: '/movie'
    },
    {
        title: `Page ${page}`
    }
])
</script>

<template>
    <div class="container py-20">
        <div class="space-y-14">
            <Breadcrumbs :breadcrumb="breadcrumbs" />
            <ul class="grid grid-cols-4 gap-4">
                <MovieBox :array="modules.results" />
            </ul>
            <div class="flex items-center justify-center">
                <Pagination :totalPages="500" :currentPage="modules.page" linkPath="/movie/page" />
            </div>
        </div>
    </div>
</template>
