<template>
  <div class="flex flex-col gap-4">
    <div class="flex items-center justify-between">
      <Title>{{ $t('Products') }}</Title>
      <Button
        class="flex items-center gap-1"
        @click="modalForm.show()"
      >
        <i class="bi bi-bag-plus-fill" />
        <span>{{ $t('New product') }}</span>
      </Button>
    </div>
    <EasyDataTable
      ref="dataTable"
      :headers
      :items
      buttons-pagination
      table-class-name="easy-table"
    />
    <ProductModalForm ref="modalForm" />
  </div>
</template>

<script setup>
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
import Title from '@/components/content/Title.vue'
import Button from '@/components/buttons/Button.vue'
import ProductModalForm from '@/modules/products/ProductModalForm.vue'

const { t } = useI18n()

const modalForm = ref()

const headers = computed(() => [
  { text: 'Id', value: 'id', sortable: true },
  { text: t('Title'), value: 'title', sortable: true },
  { text: t('Category'), value: 'category', sortable: true },
  { text: t('Price'), value: 'price', sortable: true }
])

const items = [
  { id: 1, title: 'tets row 1', category: 'test category', price: 10.45 },
  { id: 2, title: 'test row 2', category: 'test category', price: 5.25 },
  { id: 3, title: 'test row 3', category: 'test category', price: 99.9 }
]
</script>
