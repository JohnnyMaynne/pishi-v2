<script setup>
import {computed} from "vue";

const props = defineProps({
    type: {
        type: String,
        default: 'submit',
    },
    disabled: {
        type: Boolean,
        default: false
    }
});

const decoration = computed(() => {
   return props.disabled
        ? 'bg-gray-600 hover:bg-gray-700 focus:ring-gray-500 cursor-not-allowed'
        : 'bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500'
 })
</script>

<template>
    <button :disabled="disabled" :class="decoration" :type="type" class="inline-flex items-center px-4 py-2 border border-transparent text-sm leading-4 font-medium rounded-md shadow-sm text-white focus:outline-none focus:ring-2  focus:ring-offset-2">
        <slot />
    </button>
</template>
