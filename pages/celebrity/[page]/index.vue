<script setup>
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const page = Number(route.params.page)

if (isNaN(page) || page < 1 || page > 500) {
    router.push('/')
}

console.log(page)

const { data: modulesRef } = await useAPI(`person/popular?language=en-US&page=${page}`)
const modules = modulesRef.value;
</script>

<template>
    <div class="container py-20">
        <div class="space-y-14">
            <ul class="grid grid-cols-4 gap-4">
                <CelebrityBox :array="modules.results" />
            </ul>
            <div class="flex items-center justify-center">
                <Pagination :totalPages="500" :currentPage="modules.page" linkPath="/celebrity" />
            </div>
        </div>
    </div>
</template>
