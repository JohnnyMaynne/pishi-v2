<script setup>
import {ref} from "vue"
import axios from "axios";

const props = defineProps({
    user: Object,
    has_followed: Boolean
})

const follow = async () => {
    await axios.post(`/follows/${props.user.id}`)
}

</script>

<template>
    <button @click="follow" :class="[ has_followed ? 'bg-gray-100 text-gray-700 hover:bg-gray-200' : 'bg-indigo-50 text-indigo-700 hover:bg-indigo-100']" type="button" class="inline-flex items-center px-3 py-0.5 rounded-full  text-sm font-medium">
            <span>
               {{ has_followed ? 'Отписаться' : 'Подписаться' }}
            </span>
    </button>
</template>
