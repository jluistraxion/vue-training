<template>
  <div class="py-4">
    <Form
      ref="form"
      :initial-values="initialValues"
      :validation-schema="schema"
      @submit="handleSubmit"
    >
      <Input
        label="Nombre"
        type="text"
        name="Name"
      />
      <Button type="submit">Guardar</Button>
    </Form>
  </div>
</template>

<script setup lang="ts">
import { Form } from 'vee-validate'
import Input from '@/components/form/Input.vue'
import Button from '@/components/buttons/Button.vue'

const initialValues = { Name: '' }
const schema = { Name: 'required' }

const handleSubmit = (values: any) => console.log('handleSubmit', values)
</script>
