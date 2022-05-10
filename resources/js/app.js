require('./bootstrap');

import { createApp, h } from 'vue'
import { createInertiaApp } from '@inertiajs/inertia-vue3'
import { InertiaProgress } from '@inertiajs/progress'
import VueTablerIcons from "vue-tabler-icons"
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Пиши'

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: async (name) => await import(`@/Pages/${name}.vue`),
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
