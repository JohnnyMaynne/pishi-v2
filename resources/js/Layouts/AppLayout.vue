<script setup>
import {computed, ref} from 'vue';
import {Inertia} from '@inertiajs/inertia';
import {Link} from '@inertiajs/inertia-vue3';
import {usePage} from '@inertiajs/inertia-vue3'
import JetApplicationMark from '@/Jetstream/ApplicationMark.vue';
import JetDropdown from '@/Jetstream/Dropdown.vue';
import JetDropdownLink from '@/Jetstream/DropdownLink.vue';
import JetNavLink from '@/Jetstream/NavLink.vue';
import JetResponsiveNavLink from '@/Jetstream/ResponsiveNavLink.vue';
import Container from "@/Components/App/Container.vue";
import {$vfm, ModalsContainer} from 'vue-final-modal'
import Notifications from "@/Components/App/Notifications";
import { useToast } from "vue-toastification";
import List from "@/Components/Categories/List";


defineProps({
    title: String,
});

const categories = ref([])

const showingNavigationDropdown = ref(false);

const user = computed(() => usePage().props.value.user)

const noty = computed(() => usePage().props.value.noty)

const category = computed(() => usePage().props.value.category?.id)

const logout = () => Inertia.post(route('logout'))

const openNoty = () => {
    $vfm.show({
        name: 'noty',
        component: Notifications
    })
}

const toast = useToast()

Echo.private(`App.Models.User.${user.value.id}`)
    .notification(value =>  {
        usePage().props.value.noty++
        toast.success(value.title, {
            timeout: 2000
        });
    })
</script>

<template>
    <div>
        <div class="min-h-screen bg-gray-50">
            <nav class="bg-white border-b">
                <!-- Primary Navigation Menu -->
                <container>
                    <div class="flex justify-between h-16">
                        <div class="flex">
                            <!-- Logo -->
                            <div class="shrink-0 flex items-center">
                                <Link :href="route('posts.latest')">
                                    <JetApplicationMark class="block h-9 w-auto"/>
                                </Link>
                            </div>

                            <!-- Navigation Links -->
                            <div class="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                                <JetNavLink :href="route('posts.latest')" :active="route().current('posts.latest')">
                                    Последнее
                                </JetNavLink>
                                <JetNavLink :href="route('posts.popular')" :active="route().current('posts.popular')">
                                    Популярное
                                </JetNavLink>
                                <JetNavLink :href="route('posts.favourite')"
                                            :active="route().current('posts.favourite')">
                                    Закладки
                                </JetNavLink>
                                <JetNavLink :href="route('posts.recent')" :active="route().current('posts.recent')">
                                    История
                                </JetNavLink>
                            </div>
                        </div>

                        <div class="hidden sm:flex sm:items-center sm:ml-6">
                            <div class="ml-3 relative">
                                <!-- Teams Dropdown -->
                                <JetDropdown v-if="$page.props.jetstream.hasTeamFeatures" align="right" width="60">
                                    <template #trigger>
                                        <img class="h-8 w-8 rounded-full"
                                             :src="$page.props.user.current_team.profile_photo_url" alt="">
                                    </template>
                                </JetDropdown>
                            </div>

                            <button class="ml-3">
                                <button @click="openNoty" type="button" class="relative">
                                    <BellIcon class="text-gray-500" stroke-width="1.7"/>
                                    <div
                                        class="absolute -right-1 -top-1 text-xs w-[18px] h-[18px] rounded-full flex items-center justify-center bg-indigo-500 text-white">
                                        {{ noty }}
                                    </div>
                                </button>
                            </button>

                            <!-- Settings Dropdown -->
                            <div class="ml-3 relative">
                                <JetDropdown align="right" width="48">
                                    <template #trigger>
                                        <button type="button"
                                                class="inline-flex items-center border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition">
                                            <img class="h-10 w-10 rounded-full  object-cover"
                                                 :src="$page.props.user.profile_photo_url" :alt="$page.props.user.name">
                                        </button>
                                    </template>

                                    <template #content>
                                        <!-- Account Management -->
                                        <div class="block px-4 py-2 text-xs text-gray-400">
                                            Управление аккаунтом
                                        </div>

                                        <JetDropdownLink :href="route('user.show',{user:user.slug})">
                                            Мой блог
                                        </JetDropdownLink>

                                        <JetDropdownLink :href="route('user.posts')">
                                            Мастерская
                                        </JetDropdownLink>

                                        <JetDropdownLink :href="route('profile.show')">
                                            Настройки
                                        </JetDropdownLink>

                                        <JetDropdownLink v-if="$page.props.jetstream.hasApiFeatures"
                                                         :href="route('api-tokens.index')">
                                            API Tokens
                                        </JetDropdownLink>

                                        <div class="border-t border-gray-100"/>

                                        <!-- Authentication -->
                                        <form @submit.prevent="logout">
                                            <JetDropdownLink as="button">
                                                Выход
                                            </JetDropdownLink>
                                        </form>
                                    </template>
                                </JetDropdown>
                            </div>
                        </div>

                        <!-- Hamburger -->
                        <div class="-mr-2 flex items-center sm:hidden">
                            <button
                                class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition"
                                @click="showingNavigationDropdown = ! showingNavigationDropdown">
                                <svg
                                    class="h-6 w-6"
                                    stroke="currentColor"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        :class="{'hidden': showingNavigationDropdown, 'inline-flex': ! showingNavigationDropdown }"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                    <path
                                        :class="{'hidden': ! showingNavigationDropdown, 'inline-flex': showingNavigationDropdown }"
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>
                    </div>
                </container>

                <!-- Responsive Navigation Menu -->
                <div :class="{'block': showingNavigationDropdown, 'hidden': ! showingNavigationDropdown}"
                     class="sm:hidden">
                    <div class="pt-2 pb-3 space-y-1">
                        <JetResponsiveNavLink :href="route('posts.latest')" :active="route().current('posts.latest')">
                            Последнее
                        </JetResponsiveNavLink>
                        <JetResponsiveNavLink :href="route('posts.popular')" :active="route().current('posts.popular')">
                            Популярное
                        </JetResponsiveNavLink>
                        <JetResponsiveNavLink :href="route('posts.favourite')"
                                              :active="route().current('posts.favourite')">
                            Закладки
                        </JetResponsiveNavLink>
                        <JetResponsiveNavLink :href="route('posts.recent')" :active="route().current('posts.recent')">
                            История
                        </JetResponsiveNavLink>
                    </div>

                    <!-- Responsive Settings Options -->
                    <div class="pt-4 pb-1 border-t border-gray-200">
                        <div class="flex items-center px-4">
                            <div v-if="$page.props.jetstream.managesProfilePhotos" class="shrink-0 mr-3">
                                <img class="h-10 w-10 rounded-full object-cover"
                                     :src="$page.props.user.profile_photo_url" :alt="$page.props.user.name">
                            </div>

                            <div>
                                <div class="font-medium text-base text-gray-800">
                                    {{ $page.props.user.name }}
                                </div>
                                <div class="font-medium text-sm text-gray-500">
                                    {{ $page.props.user.email }}
                                </div>
                            </div>
                        </div>

                        <div class="mt-3 space-y-1">
                            <JetDropdownLink :href="route('user.show',{user: user.slug})"
                                             :active="route().current('user.show')">
                                Мой блог
                            </JetDropdownLink>
                            <JetResponsiveNavLink :href="route('user.posts')" :active="route().current('user.posts')">
                                Мастерская
                            </JetResponsiveNavLink>
                            <JetResponsiveNavLink :href="route('user.posts')" :active="route().current('user.posts')">
                                Мастерская
                            </JetResponsiveNavLink>

                            <JetResponsiveNavLink :href="route('profile.show')"
                                                  :active="route().current('profile.show')">
                                Настройка
                            </JetResponsiveNavLink>

                            <JetResponsiveNavLink v-if="$page.props.jetstream.hasApiFeatures"
                                                  :href="route('api-tokens.index')"
                                                  :active="route().current('api-tokens.index')">
                                API Tokens
                            </JetResponsiveNavLink>

                            <!-- Authentication -->
                            <form method="POST" @submit.prevent="logout">
                                <JetResponsiveNavLink as="button">
                                    Выход
                                </JetResponsiveNavLink>
                            </form>
                        </div>
                    </div>
                </div>
            </nav>

            <!-- Page Heading -->
            <header v-if="$slots.header" class="bg-white shadow">
                <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <slot name="header"/>
                </div>
            </header>

            <!-- Page Content -->
            <main class="py-6">
                <container>
                    <slot name="content">
                        <div class="lg:grid lg:grid-cols-12 lg:gap-4">
                            <div class="lg:col-span-3 xl:col-span-2">
                                <List :current="category"/>
                            </div>
                            <div class="lg:col-span-9 xl:col-span-10">
                                <slot/>
                            </div>
                        </div>
                    </slot>
                </container>
            </main>
        </div>
        <ModalsContainer/>
    </div>
</template>
