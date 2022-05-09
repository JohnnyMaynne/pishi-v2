<script setup>
import JetButton from '@/Jetstream/Button.vue';

defineProps({
    category: Object,
    posts: Object
})
</script>

<template>
    <div>
        <div class="relative">
            <div class="absolute left-9 bottom-9 z-20 text-white text-5xl font-semibold">{{ category.title }}</div>
            <div class="bg-gradient-to-b from-gray-50 to-gray-200 h-48 lg:h-72 w-full relative z-10">
                <div :style="{background: category.color}" class="object-cover h-48 lg:h-72 w-full rounded">
                </div>
            </div>
        </div>

        <div class="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
                <div class="mt-16 sm:flex-1 sm:min-w-0 sm:flex sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
                    <div class="sm:hidden md:block mt-6 min-w-0 flex-1 space-y-1">
                        <div class="text-2xl font-bold text-gray-900 truncate">{{  category.name  }} </div>
                        <div class="flex space-x-3 items-center">
                            <div class="flex space-x-1 text-sm ">
                                <a  class="hover:underline underline-offset-2 decoration-gray-500" href="#">
                                    1
                                </a>
                                <span class="text-gray-500">подписчиков</span>
                            </div>
                            <div class="flex space-x-1 text-sm ">
                                <a class="hover:underline underline-offset-2 decoration-gray-500" href="#">
                                    2
                                </a>
                                <span class="text-gray-500">подписка</span>
                            </div>
                            <div class="flex space-x-1 text-sm ">
                                <a class="hover:underline underline-offset-2 decoration-gray-500" href="http://localhost.pishi.com/ab-unde-qui-ex-dolorem-ut-est-animi">
                                    {{ posts.total }}
                                </a>
                                <span class="text-gray-500">статьи</span>
                            </div>
                        </div>
                    </div>
                    <div class="mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
                        <JetButton>Подписаться</JetButton>
                    </div>
                </div>
                <div class="hidden sm:block md:hidden mt-6 min-w-0 flex-1">
                    <h1 class="text-2xl font-bold text-gray-900 truncate">{{  category.name  }} </h1>
                </div>
            </div>
    </div>
</template>
