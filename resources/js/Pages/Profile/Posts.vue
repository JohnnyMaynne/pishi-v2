<script setup>
import Layout from "./Layout";
import TableComponent from "@/Components/Table/TableComponent";
import Date from "@/Components/Table/Cells/Date";
import Published from "@/Components/Table/Cells/Published";
import JetButton from '@/Jetstream/Button.vue';
import {Inertia} from "@inertiajs/inertia";

const props = defineProps({
    posts: Object,
    user: Object
})

const columns = [{
    label: 'Название статьи',
    prop: 'title',
},{
    label: 'Дата создание',
    prop: 'created_at',
},{
    label: 'Дата обновления',
    prop: 'created_at',
},{
    label: 'Категория',
    prop: 'category.title',
},{
    label: 'Состояние',
    prop: 'published',
}]

const rowClick = data => Inertia.visit(route('editor.show',{user: props.user.slug, post: data.uuid}))
</script>

<template>
    <Layout title="Список публикаций" subtitle="Эта информация будет отображаться публично, поэтому будьте осторожны с тем, что вы делитесь.">
        <template #title>
            <jet-button>Новая статья</jet-button>
        </template>

        <table-component :columns="columns" :data="posts" @row-click="rowClick">
            <template #created_at="{row}">
                <Date :date="row.created_at"/>
            </template>
            <template #updated_at="{row}">
                <Date :date="row.updated_at"/>
            </template>
            <template #published="{row}">
                <Published :published="row.published"/>
            </template>
        </table-component>
    </Layout>
</template>
