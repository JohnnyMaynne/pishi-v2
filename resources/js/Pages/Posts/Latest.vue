<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import Layout from './Layout'

defineProps({
    posts: Object,
    categories: Array,
    users: Array,
})
</script>

<template>
    <AppLayout>
      <Layout :posts="posts" :categories="categories" :users="users"/>
    </AppLayout>
</template>
