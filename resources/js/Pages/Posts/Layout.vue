<script setup>
import Card from "@/Components/Posts/Card";
import WrapperWidget from "@/Components/Widgets/Wrapper";
import FollowItem from "@/Components/Widgets/FollowItem";
import CommentItem from "@/Components/Widgets/CommentItem";
import List from "@/Components/Categories/List";

defineProps({
    posts: Object,
    users: Array
})
</script>

<script>
import AppLayout from '@/Layouts/AppLayout.vue';
export default { layout: AppLayout }
</script>

<template>
    <div class="lg:grid lg:grid-cols-12 lg:gap-4">
        <main class="lg:col-span-12 xl:col-span-8">
            <ul role="list" class="space-y-4">
               <Card v-for="post in posts.data" :key="post.id" :post="post"/>
            </ul>
        </main>
        <aside class="hidden xl:block xl:col-span-4">
            <div class="sticky top-4 space-y-4">
                <wrapper-widget title="На кого подписаться">
                    <FollowItem v-for="user in users" :key="user.id" :user="user"/>
                </wrapper-widget>
                <wrapper-widget title="В тренде">
                    <CommentItem/>
                </wrapper-widget>
            </div>
        </aside>
    </div>
</template>
