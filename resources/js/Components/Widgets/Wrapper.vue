<script setup>

defineProps({
    title: String
})

</script>

<template>
    <section>
        <div class="bg-white border rounded-md">
            <div class="p-6">
                <h2 class="text-base font-medium text-gray-900">{{ title }}</h2>
                <div class="mt-6 flow-root">
                    <ul role="list" class="-my-4 divide-y divide-gray-200">
                        <slot/>
                    </ul>
                </div>
            </div>
        </div>
    </section>
</template>
