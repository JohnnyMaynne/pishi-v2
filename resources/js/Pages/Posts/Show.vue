<script setup>
import { generateHTML } from '@tiptap/html'
import ExtensionsList from "@/Components/Editor/Extensions/ExtensionsList";
import AppLayout from '@/Layouts/AppLayout';
import List from "@/Components/Categories/List";
import Header from "./Partials/Header";
import JetResponsiveNavLink from '@/Jetstream/ResponsiveNavLink';
import Shared from "@/Components/App/Shared";
import CountInfo from "./Partials/CountInfo";
import CommentsComponent from "@/Components/Comments/CommentsComponent";
import {computed} from "vue";

const props = defineProps({
    post: Object,
    author: Object,
    categories: Array,
    comments: Array,
})

const isJson = str =>  {
    try { JSON.parse(str)} catch (e) {return false} return true
}

const output = computed(() => {
    return !isJson(props.post.raw)
        ? generateHTML(props.post.raw, ExtensionsList)
        : props.post.raw
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
                            <div class="prose prose-a:relative  prose-a:transition hover:prose-a:decoration-blue-600 prose-a:underline-offset-4 prose-a:decoration-blue-100 prose-a:decoration-2 prose-a:text-blue-600 min-w-full focus:outline-none" v-html="output"></div>
                            <CountInfo :post="post" class="mt-6"/>
                            <Shared class="mt-10"/>
                        </div>
                        <div class="col-span-4">
                            <JetResponsiveNavLink active>
                                <span class="text-sm">The long grass rustled at her as she could</span>
                            </JetResponsiveNavLink>
                            <JetResponsiveNavLink>
                                <span class="text-sm">Rustled at her as she could</span>
                            </JetResponsiveNavLink>
                        </div>
                        <div class="col-span-12 border-b -mx-4 -sm:mx-6"></div>
                        <div class="col-span-8 space-y-6">
                            <div class="text-xl font-semibold">17 коментраиии</div>
                            <CommentsComponent :comments="comments" :post="post"/>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    </AppLayout>
</template>
