<script setup>
defineProps({
    title: String,
    subtitle: String,
})
</script>

<template>
    <div class="flex items-center justify-between space-x-2">
        <div>
            <div class="text-xl font-semibold text-gray-900">
                {{ title }}
            </div>
            <div class="mt-1 max-w-2xl text-sm text-gray-500">
                {{ subtitle }}
            </div>
        </div>
        <slot/>
    </div>
</template>
