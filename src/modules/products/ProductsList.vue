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
import { Form } from 'vee-validate'
import Input from '@/components/form/Input.vue'
import Button from '@/components/buttons/Button.vue'

const initialValues = { Name: '' }
const schema = { Name: 'required' }

const handleSubmit = (values) => console.log('handleSubmit', values)

const headers = [
  { text: 'Id', value: 'id' },
  { text: 'Name', value: 'name' }
]

const items = [
  { id: 1, name: 'tets row 1' },
  { id: 2, name: 'test row 2' },
  { id: 3, name: 'row 3' }
]
</script>
