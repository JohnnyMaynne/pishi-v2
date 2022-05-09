<script setup>
import Layout from "./Layout";
import TableComponent from "@/Components/Table/TableComponent";
import User from "@/Components/Table/Cells/User";
import Date from "@/Components/Table/Cells/Date";
import FollowAction from "@/Components/Table/Cells/FollowAction";

defineProps({
    followings: Object
})

const columns = [{
    label: 'Пользователь',
    prop: 'name',
},{
    label: 'Почта',
    prop: 'email',
},{
    label: 'Дата регистрации',
    prop: 'created_at',
},{
    label: '',
    prop: 'id',
}]

</script>

<template>
    <Layout title="Список подписок" subtitle="Эта информация будет отображаться публично, поэтому будьте осторожны с тем, что вы делитесь.">
        <table-component :columns="columns" :data="followings">
            <template #name="{row}">
                <User :user="row"/>
            </template>
            <template #created_at="{row}">
                <Date :date="row.created_at"/>
            </template>
            <template #id="{row}">
                <FollowAction :user="row" has_followed/>
            </template>
        </table-component>
    </Layout>
</template>
