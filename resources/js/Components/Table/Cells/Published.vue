<script setup>
import {computed} from "vue";

const props = defineProps({
    published: Number
})

const publishedClasses = computed(() => {
    return props.published
        ? 'bg-green-100 text-green-800'
        : 'bg-gray-100 text-gray-800'
})
</script>

<template>
    <span :class="publishedClasses" class="text-sm font-medium p-2.5 py-1 rounded-full">
        {{ published ? 'Опубликовано' : 'Черновик' }}
    </span>
</template>
