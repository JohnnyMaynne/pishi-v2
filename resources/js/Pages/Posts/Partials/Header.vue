<script setup>
import JetButton from '@/Jetstream/Button.vue';
import {Link} from "@inertiajs/inertia-vue3";

defineProps({
    user: Object
})

</script>

<template>
    <div class="md:flex md:items-center md:justify-between md:space-x-5">
        <div class="flex items-center space-x-5">
            <div class="flex-shrink-0">
                <div class="relative">
                    <img class="h-16 w-16 rounded-full" :src="user.profile_photo_url" :alt="user.name">
                    <span class="absolute inset-0 shadow-inner rounded-full" aria-hidden="true"></span>
                </div>
            </div>
            <div>
                <Link :href="route('user.show',{user: user.slug})" class="hover:underline underline-offset-2 decoration-gray-300 transition text-2xl font-bold text-gray-900">{{ user.name }}</Link>
                <p class="text-sm font-medium text-gray-500">Дата регистрации профиля <time datetime="2020-08-25">Август 25, 2020</time></p>
            </div>
        </div>
        <div class="mt-6 flex flex-col-reverse justify-stretch space-y-4 space-y-reverse sm:flex-row-reverse sm:justify-end sm:space-x-reverse sm:space-y-0 sm:space-x-3 md:mt-0 md:flex-row md:space-x-3">
            <jet-button>Подписаться</jet-button>
        </div>
    </div>
</template>
