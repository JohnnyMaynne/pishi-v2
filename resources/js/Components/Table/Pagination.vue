<script setup>
import {computed} from "vue";

const props = defineProps({
    current: {
        type: Number,
        default: 1
    },
    total: {
        type: Number,
        default: 0
    },
    perPage: {
        type: Number,
        default: 9
    },
    pageRange: {
        type: Number,
        default: 2
    },
    limit: {
        type: Number,
        default: 4
    }
})

const emit = defineEmits(['current-change'])

const rangeStart = computed(() => {
    let start = props.current - props.pageRange
    return (start > 0) ? start : 1
})

const rangeEnd = computed(() => {
    let end = props.current + props.pageRange
    return (end < totalPages.value) ? end : totalPages.value
})

const totalPages = computed(() =>  Math.ceil(props.total / props.perPage))

const nextPage = computed(() => props.current + 1)

const prevPage = computed(() => props.current - 1)

const hasFirst = () => rangeStart.value !== 1

const hasLast = () => rangeEnd.value < totalPages.value

const hasPrev = () => props.current > 1

const hasNext = () => props.current < totalPages.value

const changePage = page => {
    if (page > 0 && page <= totalPages.value) {
        emit('current-change', page)
    }
}

const pages = computed(() => {
    let pages = []
    for (let i = rangeStart.value; i <= rangeEnd.value; i++) {
        pages.push(i)
    }
    return pages
})

</script>

<template>
    <div v-if="total > perPage" class="bg-white select-none p-3 flex items-center justify-between border-t border-gray-200">
        <div class="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
            <div>
            </div>

            <div>
                <nav class="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                    <button type="button" @click.prevent="changePage(prevPage)" class="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm text-gray-500 hover:bg-gray-50">
                        <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                        </svg>
                    </button>
                    <button type="button" :class="[current === page ? 'z-10 bg-indigo-50 border-indigo-500 text-indigo-600' : 'bg-white border-gray-300 text-gray-500 hover:bg-gray-50']" v-for="page in pages" :key="page" @click.prevent="changePage(page)" class="hidden md:inline-flex relative items-center px-4 py-2 border text-sm">
                        <span>{{ page }}</span>
                    </button>
                    <button type="button" @click.prevent="changePage(nextPage)" class="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm text-gray-500 hover:bg-gray-50">
                        <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path>
                        </svg>
                    </button>
                </nav>
            </div>
        </div>
    </div>
</template>
