<script setup>
import  {Link} from "@inertiajs/inertia-vue3"
import { PerfectScrollbar } from 'vue3-perfect-scrollbar'

defineProps({
    categories: Array,
    current: Number
})
</script>

<template>
   <div class="sticky top-4">
        <perfect-scrollbar style="max-height: calc(100vh - 130px)" class="divide-y divide-gray-300">
            <div class="pb-8 space-y-1">
                <Link
                    v-for="category in categories"
                    :key="category.id"
                    :href="route('categories.show',{'category' :category.slug})"
                    :class="[current === category.id ? 'bg-gray-200' : 'hover:bg-gray-100']"
                    class="space-x-1.5 text-gray-600 group flex items-center px-3 py-2 text-sm font-medium rounded-md">
                    <component :is="category.icon" stroke-width="1.5"/>
                    <span class="truncate"> {{ category.title }} </span>
                </Link>
            </div>
        </perfect-scrollbar>
   </div>
</template>

<style src="vue3-perfect-scrollbar/dist/vue3-perfect-scrollbar.css"/>
