require('./bootstrap');

import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/inertia-vue3'
import { InertiaProgress } from '@inertiajs/progress'
import VueTablerIcons from "vue-tabler-icons"
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";
import Layout from '@/Layouts/AppLayout'

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Пиши'

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: async (name) => {
        const page = await import(`@/Pages/${name}.vue`)
        page.layout = page.layout || Layout
        return page
    },
    setup({ el, app, props, plugin }) {
        return createApp({ render: () => h(app, props) })
            .use(plugin)
            .use(VueTablerIcons)
            .use(Toast, {})
            .mixin({ methods: { route } })
            .mount(el);
    },
});

InertiaProgress.init({ color: '#512bfc', delay: 100 });
