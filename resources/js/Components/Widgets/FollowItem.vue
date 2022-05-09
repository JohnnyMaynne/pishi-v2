<script setup>
import axios from 'axios'
import {Link} from "@inertiajs/inertia-vue3";
import {ref} from "vue";

const props = defineProps({
    user: Object
})

const has_followed = ref(props.user.has_followed)

const follow = async () => {
    await axios.post(`/follows/${props.user.id}`)
    has_followed.value = !has_followed.value
}

</script>

<template>
    <li class="flex items-center py-4 space-x-3">
        <div class="flex-shrink-0">
            <img class="h-8 w-8 rounded-full" :src="user.profile_photo_url" :alt="user.name">
        </div>
        <div class="min-w-0 flex-1">
            <p class="text-sm font-medium text-gray-900">
                <Link :href="route('user.show',{user:user.slug})">
                    {{ user.name }}
                </Link>
            </p>
        </div>
        <div class="flex-shrink-0">
            <button @click="follow" :class="[ has_followed ? 'bg-gray-100 text-gray-700 hover:bg-gray-200' : 'bg-indigo-50 text-indigo-700 hover:bg-indigo-100']" type="button" class="inline-flex items-center px-3 py-0.5 rounded-full  text-sm font-medium">
                <span>
                   {{ has_followed ? 'Отписаться' : 'Подписаться' }}
                </span>
            </button>
        </div>
    </li>
</template>
