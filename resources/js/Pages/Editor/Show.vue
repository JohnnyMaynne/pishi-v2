<script setup>
import Header from "./Partials/Header";
import EditorComponent from "@/Components/Editor/EditorComponent";
import {watch} from "vue";
import {Inertia} from "@inertiajs/inertia";
import Debounce from "@/Utils/Debounce";

const props = defineProps({
    post: Object,
    user: Object
})

const raw = Debounce(props.post.raw, 700)

watch(raw,raw => {
    Inertia.put(route('editors.update',{post:props.post.uuid}),{
        raw
    },{
        preserveState: true,
        preserveScroll: true
    })
})


</script>

<template>
    <div>
        <Header :user="user" :post="post"/>
        <EditorComponent v-model="raw"/>
    </div>
</template>
