<script setup>
import Container from "@/Components/App/Container"
import {Link} from "@inertiajs/inertia-vue3"
import { computed } from 'vue'
import { usePage } from '@inertiajs/inertia-vue3'

defineProps({
    post: Object,
    user: Object
})

const user = computed(() => usePage().props.value.user)


</script>

<template>
    <div class="border-b">
        <container>
            <div class="h-14 flex items-center justify-between">
                <Link :href="route('user.posts')">
                    <img class="h-8 w-8 rounded-full object-cover" :src="user.profile_photo_url" :alt="user.name">
                </Link>
                <div class="flex items-center space-x-2">
                    <button type="button" class="h-8 w-8 rounded-full flex items-center justify-center text-gray-700">
                        <TrashIcon class="w-6 h-6" stroke-width="1.8"/>
                    </button>
                    <button type="button" class="h-8 w-8 rounded-full flex items-center justify-center bg-indigo-500 text-white">
                        <ToolIcon class="w-5 h-5" stroke-width="1.5"/>
                    </button>
                </div>
            </div>
        </container>
    </div>
</template>
