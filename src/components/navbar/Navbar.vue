<template>
  <nav
    class="bg-white border-gray-200 dark:bg-gray-800 fixed w-full z-50 top-0 start-0 border-b"
  >
    <div class="flex flex-wrap items-center justify-between mx-auto p-4">
      <div class="flex items-center space-x-3 rtl:space-x-reverse">
        <img
          src="https://vuejs.org/logo.svg"
          class="h-8"
          alt="Flowbite Logo"
        />
        <span
          class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"
        >
          Vue Training
        </span>
      </div>
      <button
        data-collapse-toggle="navbar-default"
        type="button"
        class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        aria-controls="navbar-default"
        aria-expanded="false"
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class="w-5 h-5"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>
      <div
        class="hidden w-full md:block md:w-auto me-4"
        id="navbar-default"
      >
        <ul
          class="font-medium flex flex-col items-center p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-800 dark:border-gray-700"
        >
          <li>
            <Dropdown
              ref="dropdown"
              :options="[
                {
                  name: locales.es.name,
                  action: () => setLocale(locales.es.value)
                },
                {
                  name: locales.en.name,
                  action: () => setLocale(locales.en.value)
                }
              ]"
            >
              <span> {{ locales[locale].name }}</span>
            </Dropdown>
          </li>
          <li>
            <i
              class="text-lg bi"
              :class="
                isDark
                  ? 'bi-brightness-high text-white'
                  : 'bi-moon-fill text-black'
              "
              role="button"
              @click="toggleDark()"
            />
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import { useDark, useToggle } from '@vueuse/core'
import Dropdown from '@/components/dropdowns/Dropdown.vue'
import { useI18n } from 'vue-i18n'

const isDark = useDark()
const toggleDark = useToggle(isDark)
const { locale } = useI18n()

const dropdown = ref()

const setLocale = (lang) => {
  locale.value = lang
  if (dropdown.value) dropdown.value.hide()
}

const locales = {
  es: { name: '🇲🇽 Español (ES)', value: 'es' },
  en: { name: '🇺🇸 English (EN)', value: 'en' }
}
</script>
