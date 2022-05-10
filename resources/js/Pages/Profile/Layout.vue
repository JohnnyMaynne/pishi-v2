<script setup>
import AppLayout from '@/Layouts/AppLayout.vue';
import JetResponsiveNavLink from '@/Jetstream/ResponsiveNavLink.vue';
import TitleSection from "@/Components/App/TitleSectioin";

defineProps({
    title: String,
    subtitle: String
})

</script>

<template>
    <AppLayout>
        <template #content>
            <div class="grid grid-cols-12 gap-6">
            <div class="col-span-2">
                <JetResponsiveNavLink :href="route('user.posts')" :active="route().current('user.posts')">
                    <span class="text-sm">Статьи</span>
                </JetResponsiveNavLink>
                <JetResponsiveNavLink :href="route('user.comments')" :active="route().current('user.comments')" >
                    <span class="text-sm">Коментарии</span>
                </JetResponsiveNavLink>
                <JetResponsiveNavLink :href="route('user.statistics')" :active="route().current('user.statistics')" >
                    <span class="text-sm">Статистика</span>
                </JetResponsiveNavLink>
                <JetResponsiveNavLink :href="route('user.followings')" :active="route().current('user.followings')" >
                    <span class="text-sm">Подписки</span>
                </JetResponsiveNavLink>
                <JetResponsiveNavLink :href="route('user.followers')" :active="route().current('user.followers')" >
                    <span class="text-sm">Подписчики</span>
                </JetResponsiveNavLink>
                <JetResponsiveNavLink :href="route('user.black-list')" :active="route().current('user.black-list')">
                    <span class="text-sm">Черный список</span>
                </JetResponsiveNavLink>
            </div>
            <div class="col-span-10">
                <div class="bg-white border rounded-md p-6">
                    <div>
                        <TitleSection :title="title" :subtitle="subtitle">
                            <div><slot name="title"/></div>
                        </TitleSection>
                    </div>

                    <div class="mt-8">
                        <slot/>
                    </div>
                </div>
            </div>
        </div>
        </template>
    </AppLayout>
</template>
