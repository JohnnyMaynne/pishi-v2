<script setup>
import {Link} from "@inertiajs/inertia-vue3";

defineProps({
    post: Object
})
</script>

<template>
    <li class="bg-white px-4 py-6 border sm:rounded-md sm:p-6">
        <article aria-labelledby="question-title-81614">
            <div>
                <div class="flex space-x-3">
                    <div class="flex-shrink-0">
                        <img class="h-10 w-10 rounded-full" :src="post.user.profile_photo_url" :alt="post.user.name">
                    </div>
                    <div class="min-w-0 flex-1">
                        <p class="text-sm font-medium text-gray-900">
                            <Link :href="route('user.show',{'user': post.user.slug})" class="hover:underline decoration-gray-300 transition underline-offset-2">
                                {{ post.user.name }}
                            </Link>
                        </p>
                        <p class="text-sm text-gray-500">
                            <time :datetime="post.created_at">
                                {{ post.date }}
                            </time>
                        </p>
                    </div>
                </div>
                <Link :href="route('post.show',{user:post.user.slug,post: post.uuid})" class="mt-4 block hover:underline decoration-gray-300 transition underline-offset-2 text-base font-medium text-gray-900">
                    {{ post.title }}
                </Link>
            </div>
            <div class="mt-2 text-sm text-gray-700 space-y-4 prose min-w-full">
                {{ post.excerpt }}
            </div>
            <div class="mt-6 flex justify-between space-x-8">
                <div class="flex space-x-6">
                    <span class="inline-flex items-center text-sm">
                      <button type="button" class="inline-flex space-x-1 text-gray-500 hover:text-gray-600">
                        <heart-icon class="h-5 w-5" stroke-width="1.5"/>
                        <span class="font-medium">29</span>
                      </button>
                    </span>
                    <span class="inline-flex items-center text-sm">
                      <button type="button" class="inline-flex space-x-1 text-gray-500 hover:text-gray-600">
                        <message-circle-2-icon class="h-5 w-5" stroke-width="1.5"/>
                        <span class="font-medium">{{ post.comments_count }}</span>
                      </button>
                    </span>
                    <span class="inline-flex items-center text-sm">
                      <button type="button" class="inline-flex space-x-1 text-gray-500 hover:text-gray-600">
                        <eye-icon class="h-5 w-5" stroke-width="1.5"/>
                        <span class="font-medium">{{ post.views_count }}</span>
                      </button>
                    </span>
                </div>
                <div class="flex text-sm">
                    <span class="inline-flex items-center text-sm">
                      <button type="button" class="inline-flex space-x-1 text-gray-500 hover:text-gray-600">
                          <share-icon class="h-5 w-5" stroke-width="1.5"/>
                        <span class="font-medium">Share</span>
                      </button>
                    </span>
                </div>
            </div>
        </article>
    </li>
</template>
