<template>
  <Form
    ref="form"
    :initial-values="initialValues"
    :validation-schema="schema"
    @submit="handleSubmit"
    class="grid grid-cols-3 gap-2"
  >
    <Input
      label="Nombre"
      name="Name"
      class="col-span-1"
    />
    <div class="col-span-3">
      <Button type="submit"> Guardar </Button>
    </div>
  </Form>
</template>

<script setup>
import { Form } from 'vee-validate'
import Input from '@/components/form/Input.vue'
import Button from '@/components/buttons/Button.vue'

const initialValues = { Name: '' }
const schema = { Name: 'required' }

const handleSubmit = (values) => console.log('handleSubmit', values)
</script>
