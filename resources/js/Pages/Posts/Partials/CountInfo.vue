<script setup>
defineProps({
    post: Object
})
</script>

<template>
    <ul class="space-x-4 flex flex-wrap text-sm">
        <li class="text-gray-500">
            {{ post.views_count }} просмотров
        </li>
        <li class="text-gray-500">
            {{ post.comments_count }} коментариев
        </li>
        <li class="text-gray-500">
            {{ post.comments_count }} нравится
        </li>
        <li class="text-gray-500">
            {{ post.favorites_count }} в закладках
        </li>
    </ul>
</template>
