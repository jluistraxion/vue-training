<template>
  <EasyDataTable
    ref="dataTable"
    :headers
    :items
    buttons-pagination
    table-class-name="easy-table"
  />
</template>

<script setup>
import { computed } from 'vue'
import { Form } from 'vee-validate'
import { useI18n } from 'vue-i18n'
import Input from '@/components/form/Input.vue'
import Button from '@/components/buttons/Button.vue'

const { t } = useI18n()

const initialValues = { Name: '' }
const schema = { Name: 'required' }

const handleSubmit = (values) => console.log('handleSubmit', values)

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
