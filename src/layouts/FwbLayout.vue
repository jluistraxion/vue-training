<template>
  <div :class="{ dark: isDark }">
    <Navbar />
    <div class="px-4">
      <Sidebar :options />
      <div class="p-4 sm:ml-64 pt-24">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useDark } from '@vueuse/core'
import { useI18n } from 'vue-i18n'
import Navbar from '@/components/navbar/Navbar.vue'
import Sidebar from '@/components/sidebar/Sidebar.vue'

const isDark = useDark()
const { t } = useI18n()

const options = computed(() => [
  { name: t('Home'), icon: 'bi bi-house-door-fill', path: '/' },
  { name: t('Products'), icon: 'bi bi-bag-fill', path: '/products' }
])
</script>
