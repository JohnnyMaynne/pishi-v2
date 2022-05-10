<script setup>
    defineProps({
        title: {
            type: String,
            default: 'Panel title'
        }
    })
</script>

<template>
    <div class="pointer-events-auto absolute right-0 inset-y-0 w-screen max-w-md">
        <div class="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
            <div class="px-4 sm:px-6">
                <div class="flex items-start justify-between">
                    <div class="text-xl font-semibold text-gray-900">
                        {{ title }}
                    </div>
                </div>
            </div>
            <div class="relative mt-6 flex-1 px-4 sm:px-6">
                <div class="absolute inset-0 px-4 sm:px-6">
                    <div class="h-full">
                        <slot/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
