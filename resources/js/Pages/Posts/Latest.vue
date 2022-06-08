<script setup>
import Layout from "@/Pages/Posts/Layout";

defineProps({
    posts: Object,
    users: Array,
})
</script>

<script>
import AppLayout from '@/Layouts/AppLayout.vue';
export default { layout: AppLayout }
</script>

<template>
      <Layout :posts="posts" :users="users"/>
</template>
