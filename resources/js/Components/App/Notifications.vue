<script setup>
import {VueFinalModal} from 'vue-final-modal'
import Sidebar from "@/Components/App/Sidebar";
import {onMounted, ref} from "vue";
import axios from "axios";
import {Inertia} from "@inertiajs/inertia";
import {$vfm} from "vue-final-modal";

const noty = ref(null)

const linkNoty = (link) => {
    Inertia.visit(link)
    $vfm.hideAll()
}

onMounted(async () => {
    const res = await axios.get(route('notifications.index'))
    noty.value = res.data
})

</script>

<template>
    <vue-final-modal
        esc-to-close
        overlay-class="bg-gray-500 opacity-75"
        transition="slide-fade"
    >
        <sidebar title="Уведомления">
            <div v-if="noty" class="space-y-2">
                <div v-for="item in noty.data" :key="item.id" class="p-4 bg-gray-100 rounded-md">
                    <div class="flex items-start">
                        <div class="w-0 flex-1 pt-0.5">
                            <div class="text-sm font-medium text-gray-900">
                                {{ item.data.title }}
                            </div>
                            <div class="mt-1 text-sm text-gray-500">
                                {{ item.data.subtitle }}
                            </div>
                            <div class="mt-2 flex space-x-7">
                                <button @click="linkNoty(item.data.link)" type="button" class="rounded-md text-sm font-medium text-indigo-600 hover:text-indigo-500">
                                    Подробнее
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </sidebar>
    </vue-final-modal>
</template>

<style>
.slide-fade-enter-active {
    transition: all .2s ease-out;
}

.slide-fade-leave-active {
    transition: all .2s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateX(10px);
    opacity: 0;
}
</style>
