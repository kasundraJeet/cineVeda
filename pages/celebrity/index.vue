<script setup>
const { data: modulesRef } = await useAPI('person/popular?language=en-US&page=1')

const modules = modulesRef.value.results;
</script>

<template>
    <div class="container py-20">
        <div class="space-y-14">
            <ul class="grid grid-cols-4 gap-4">
                <CelebrityBox :array="modules" />
            </ul>
            <div class="flex items-center justify-center">
                <Pagination />
            </div>
        </div>
    </div>
</template>