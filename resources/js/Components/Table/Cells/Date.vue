<script setup>
defineProps({
    date: [String,Date]
})
</script>

<template>
    <div>
        {{ new  Date(date).toDateString() }}
    </div>
</template>
