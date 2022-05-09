<script setup>
import {computed} from "vue";

const props = defineProps({
    editor: Object,
    button: Object
})

const decoration = computed(() => {
    if(!props.button.can) return 'opacity-30 cursor-not-allowed'

    return props.button.current ? 'text-white bg-gray-700' : 'hover:bg-gray-100 text-gray-700'
})
</script>

<template>
    <div
        :class="decoration"
        class="w-8 h-8 flex items-center justify-center rounded-md cursor-pointer">
       <slot>
           <component @click="button.action()" stroke-width="2" class="w-5 h-5" :is="button.icon" />
       </slot>
    </div>
</template>
