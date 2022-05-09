<script setup>
import JetButton from '@/Jetstream/Button.vue';

defineProps({
    user: Object,
    posts: Object,
})
</script>

<template>
<div>
    <div>
        <div class="bg-gradient-to-b from-gray-50 to-gray-200 h-48 lg:h-72 w-full">
            <img class="object-cover h-48 lg:h-72 w-full  rounded lazyloaded" src="https://source.unsplash.com/random"  :alt="user.name">
        </div>
    </div>

    <div class="mx-auto pl-4 sm:pl-6 lg:pl-8">
        <div class="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
            <div class="flex">
                <div class="bg-gradient-to-b from-gray-50 to-gray-200  h-24 w-24 rounded-full w-full ring-4 ring-white sm:h-32 sm:w-32">
                    <img class="object-cover  h-24 w-24 rounded-full w-full ring-4 ring-white sm:h-32 sm:w-32 lazyloaded" data-src="https://source.unsplash.com/random" src="https://source.unsplash.com/random" alt="Изображение">
                </div>
            </div>
            <div class="mt-16 sm:flex-1 sm:min-w-0 sm:flex sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
                <div class="sm:hidden md:block mt-6 min-w-0 flex-1 space-y-1">
                    <div class="text-2xl font-bold text-gray-900 truncate">{{  user.name  }} </div>
                    <div class="flex space-x-3 items-center">
                        <div class="flex space-x-1 text-sm ">
                            <a  class="hover:underline underline-offset-2 decoration-gray-500" href="#">
                                1
                            </a>
                            <span class="text-gray-500">
             подписчиков
        </span>
                        </div>
                        <div class="flex space-x-1 text-sm ">
                            <a class="hover:underline underline-offset-2 decoration-gray-500" href="#">
                                2
                            </a>
                            <span class="text-gray-500">
             подписка
        </span>
                        </div>
                        <div class="flex space-x-1 text-sm ">
                            <a class="hover:underline underline-offset-2 decoration-gray-500" href="http://localhost.pishi.com/ab-unde-qui-ex-dolorem-ut-est-animi">
                                {{posts.total}}
                            </a>
                            <span class="text-gray-500">
             статьи
        </span>
                        </div>
                    </div>
                </div>
                <div class="mt-6 flex flex-col justify-stretch space-y-3 sm:flex-row sm:space-y-0 sm:space-x-4">
                    <JetButton>Подписаться</JetButton>
            </div>
        </div>
        <div class="hidden sm:block md:hidden mt-6 min-w-0 flex-1">
            <h1 class="text-2xl font-bold text-gray-900 truncate">{{  user.name  }} </h1>
        </div>
    </div>
</div>
</div>
</template>
