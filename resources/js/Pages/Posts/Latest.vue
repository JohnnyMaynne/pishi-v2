<script setup>
import Layout from './Layout'

defineProps({
    posts: Object,
    categories: Array,
    users: Array,
})
</script>

<script>
import AppLayout from '@/Layouts/AppLayout.vue';
export default { layout: AppLayout }
</script>

<template>
      <Layout :posts="posts" :categories="categories" :users="users"/>
</template>
