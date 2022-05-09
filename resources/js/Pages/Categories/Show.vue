<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import List from "@/Components/Categories/List";
import Header from "./Partials/Header";
import Card from "@/Components/Posts/Card";
import WrapperWidget from "@/Components/Widgets/Wrapper";
import CommentItem from "@/Components/Widgets/CommentItem";

defineProps({
    categories: Array,
    category: Object,
    posts: Object
})
</script>

<template>
    <AppLayout>
        <div class="lg:grid lg:grid-cols-12 lg:gap-4">
            <div class="lg:col-span-2 xl:col-span-2">
                <List :categories="categories" :current="category.id"/>
            </div>
            <main class="lg:col-span-10 xl:col-span-10">
                <Header :category="category" :posts="posts"/>

                <div class="grid grid-cols-12 gap-4 mt-10">
                    <div class="col-span-8">
                        <ul role="list" class="space-y-4">
                            <Card v-for="post in posts.data" :key="post.id" :post="post"/>
                        </ul>
                    </div>
                    <div class="col-span-4">
                        <aside class="hidden xl:block xl:col-span-4">
                            <div class="sticky top-4 space-y-4">
                                <wrapper-widget title="Последнии коментарии">
                                    <CommentItem/>
                                </wrapper-widget>
                            </div>
                        </aside>
                    </div>
                </div>
            </main>
        </div>
    </AppLayout>
</template>

