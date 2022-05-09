<script setup>
    defineProps({
        user: Object
    })
</script>

<template>
    <div class="flex items-center">
       <img class="h-8 w-8 rounded-full" :src="user.profile_photo_url" :alt="user.name">
        <div class="ml-3">
            {{ user.name }}
        </div>
    </div>
</template>
