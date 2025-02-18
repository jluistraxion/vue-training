import { createApp } from 'vue'
import App from './App.vue'
import '@/index.css'
import router from '@/router'
import Vue3EasyDataTable from 'vue3-easy-data-table'
import i18nConfig from '@/config/i18n'
import Toast from 'vue-toastification'
import { createI18n } from 'vue-i18n'
import { VueQueryPlugin } from '@tanstack/vue-query'
import 'vue3-easy-data-table/dist/style.css'
import '@/config/veevalidate'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'vue-toastification/dist/index.css'


const i18n = createI18n(i18nConfig)

const app = createApp(App)
app.use(router)
app.use(i18n)
app.use(Toast)
app.use(VueQueryPlugin)
app.component('EasyDataTable', Vue3EasyDataTable)
app.mount('#app')