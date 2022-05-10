<script setup>
import  {Link} from "@inertiajs/inertia-vue3"
import { PerfectScrollbar } from 'vue3-perfect-scrollbar'

const categories = [
    {id:1, slug: 'budushhee', title:'Будущее', icon:'alien-icon',color:'#AFA9B5'},
    {id:2, slug: 'finansy', title:'Финансы', icon:'coin-icon',color:'#B2ABC0'},
    {id:3, slug: 'licnyi-opyt', title:'Личный опыт', icon:'user-icon',color:'#B4ADCB'},
    {id:4, slug: 'marketing', title:'Маркетинг', icon:'chart-area-line-icon',color:'#B7AFD6'},
    {id:5, slug: 'servisy', title:'Сервисы', icon:'circles-icon',color:'#B9B1E0'},
    {id:6, slug: 'dizain', title:'Дизайн', icon:'brush-icon',color:'#AEA7DD'},
    {id:7, slug: 'socseti', title:'Соцсети', icon:'brand-youtube-icon',color:'#9696D0'},
    {id:8, slug: 'texnika', title:'Техника', icon:'backhoe-icon',color:'#7E84C2'},
    {id:9, slug: 'karera', title:'Карьера', icon:'gauge-icon',color:'#666587'},
    {id:10, slug: 'media', title:'Медиа', icon:'cast-icon',color:'#747392'},
    {id:11, slug: 'torgovlia', title:'Торговля', icon:'businessplan-icon',color:'#969A97'},
    {id:12, slug: 'istoriia', title:'История', icon:'feather-icon',color:'#B6B6B2'},
    {id:13, slug: 'seo', title:'SEO', icon:'zoom-code-icon',color:'#D6D1CD'},
    {id:14, slug: 'razrabotka', title:'Разработка', icon:'code-plus-icon',color:'#DEDFDB'},
    {id:15, slug: 'video', title:'Видео', icon:'video-icon',color:'#E5ECE9'},
    {id:16, slug: 'foto', title:'Фото', icon:'photo-icon',color:'#CFE8EF'},
    {id:17, slug: 'oftop', title:'Офтоп', icon:'ear-icon',color:'#C6DBF0'},
    {id:18, slug: 'transport', title:'Транспорт', icon:'bus-icon',color:'#BAD6EB'},
    {id:19, slug: 'eda', title:'Еда', icon:'cookie-icon',color:'#AED1E6'},
    {id:20, slug: 'otdyx', title:'Отдых', icon:'beach-icon',color:'#A0C4E2'},
]

defineProps({
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
