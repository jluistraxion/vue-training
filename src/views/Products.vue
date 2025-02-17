<template>
  <div class="flex flex-col gap-4">
    <Title>{{ $t('Products') }}</Title>
    <Tabs :tabs />
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import Title from '@/components/content/Title.vue'
import Tabs from '@/components/tabs/Tabs.vue'
import ProductsList from '@/modules/products/ProductsList.vue'
import ProductForm from '@/modules/products/ProductForm.vue'

const { t } = useI18n()

const tabs = computed(() => [
  { name: 'list', label: t('Product list'), component: ProductsList },
  { name: 'form', label: t('New product'), component: ProductForm }
])
</script>
