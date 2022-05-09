<script setup>
import TableWrapper from "./Wrapper";
import Pagination from "./Pagination";
import { Inertia } from '@inertiajs/inertia'


defineProps({
    columns: {
        type: Array,
        default: () => []
    },
    data: {
        type: Object,
    },
})

const emit = defineEmits(['page-change','row-click'])

const itemValue = (item, column) => column.prop.split('.').reduce((o,i)=> o[i], item)
const rowClick = (value) => emit('row-click',value)
const pageChange = (page) => {
    emit('page-change',page)
    Inertia.reload({
        data: { page },
    })
}

</script>

<template>
  <div v-if="data" class="h-full">
    <table-wrapper>
      <table class="min-w-full divide-y divide-gray-300">
        <thead v-if="columns.length" class="bg-gray-50">
          <tr>
            <th v-for="(column,index) in columns" :key="`head + ${index}`" scope="col" :width="column.width" class="px-3 py-3.5 text-left text-sm text-gray-900" >
              {{column.label}}
            </th>
          </tr>
        </thead>
        <tbody class="divide-y divide-gray-200 bg-white">
            <tr v-for="(item,index) in data.data" :key="`row + ${index}`" @click="rowClick(item)" class="group">
              <td v-for="(column,index) in columns" :key="`cell  + ${index}`" :width="column.width" class="whitespace-nowrap group-hover:bg-gray-50 cursor-pointer px-3 py-3.5 text-sm text-gray-500">
                <slot :name="column.prop" :row="item">
                  <span class="text-gray-500">{{itemValue(item, column)}}</span>
                </slot>
              </td>
            </tr>
        </tbody>
      </table>
      <Pagination @current-change="pageChange" :current="data.current_page" :total="data.total"  :perPage="data.per_page"/>
    </table-wrapper>
  </div>
</template>
