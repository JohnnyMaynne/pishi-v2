<script setup>
import Header from "./Partials/Header";
import EditorComponent from "@/Components/Editor/EditorComponent";
import {ref} from "vue";

const props = defineProps({
    post: Object,
    user: Object
})

const raw = ref(props.post.raw)


</script>

<template>
    <div>
        <Header :user="user" :post="post"/>
        <EditorComponent v-model="raw"/>
    </div>
</template>
