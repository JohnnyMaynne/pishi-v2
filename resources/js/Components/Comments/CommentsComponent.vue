<script setup>
import CommentsForm from "@/Components/Comments/CommentsForm";
import CommentItem from "@/Components/Comments/CommentsItem";

defineProps({
    comments: Array,
    post: Object
})
</script>

<template>
    <div class="space-y-6">
        <ul class="space-y-6">
            <CommentItem/>
        </ul>
        <CommentsForm :post="post"/>
    </div>
</template>
