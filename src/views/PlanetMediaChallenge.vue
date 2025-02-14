<template>
  <div class="container mx-auto py-4 flex flex-col gap-10">
    <Title>Planet Media Challenge</Title>
    <Tabs :tabs />
  </div>
</template>

<script setup lang="ts">
// @ts-nocheck
import { computed } from 'vue'
import Title from '@/components/content/Title.vue'
import Tabs from '@/components/tabs/Tabs.vue'
import ProductsList from '@/modules/products/ProductsList.vue'
import ProductForm from '@/modules/products/ProductForm.vue'

const tabs = computed(() => [
  { name: 'list', label: 'Lista de productos', component: ProductsList },
  { name: 'form', label: 'Nuevo producto', component: ProductForm }
])
</script>
