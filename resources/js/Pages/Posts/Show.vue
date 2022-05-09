<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import List from "@/Components/Categories/List";
import Header from "./Partials/Header";
import JetResponsiveNavLink from '@/Jetstream/ResponsiveNavLink.vue';

defineProps({
    post: Object,
    author: Object,
    categories: Array,
})
</script>

<template>
    <AppLayout>
        <div class="lg:grid lg:grid-cols-12 lg:gap-4">
            <div class="lg:col-span-2 xl:col-span-2">
                <List :categories="categories"/>
            </div>
            <main class="lg:col-span-10 xl:col-span-10">
                <Header :user="author"/>
                <div class="bg-white px-4 py-5 border sm:rounded-md sm:px-6 mt-6">
                    <div class="grid grid-cols-12 gap-6">
                        <div class="col-span-8">
                            <div class="prose min-w-full" v-html="post.raw "></div>
                        </div>
                        <div class="col-span-4">
                            <JetResponsiveNavLink active>
                                <span class="text-sm">The long grass rustled at her as she could</span>
                            </JetResponsiveNavLink>
                            <JetResponsiveNavLink>
                                <span class="text-sm">Rustled at her as she could</span>
                            </JetResponsiveNavLink>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </AppLayout>
</template>
