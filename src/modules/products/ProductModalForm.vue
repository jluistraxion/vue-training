<template>
  <Modal
    ref="modal"
    size="max-w-2xl"
    @hide="resetForm"
  >
    <template #header>
      <div class="font-semibold text-neutral-700 text-xl">
        {{ $t('New product') }}
      </div>
    </template>
    <Form
      ref="form"
      v-slot="{ values }"
      :validation-schema="schema"
      @submit="mutate"
      class="flex flex-col gap-4 mt-4"
    >
      <div class="grid grid-cols-3 gap-2">
        <Input
          :label="$t('Title')"
          name="title"
        />
        <Input
          :label="$t('Category')"
          name="category"
        />
        <Input
          :label="$t('Price')"
          name="price"
        />
      </div>
      <Textarea
        label="Description"
        name="description"
      />
      <div class="col-span-3">
        <Button
          type="submit"
          :isLoading="isPending"
        >
          {{ $t('Save') }}
        </Button>
      </div>
    </Form>
  </Modal>
</template>

<script setup>
import { ref } from 'vue'
import { Form } from 'vee-validate'
import { useMutation, useQueryClient } from '@tanstack/vue-query'
import { useToast } from 'vue-toastification'
import { useI18n } from 'vue-i18n'
import Input from '@/components/form/Input.vue'
import Button from '@/components/buttons/Button.vue'
import Modal from '@/components/modals/Modal.vue'
import Textarea from '@/components/form/Textarea.vue'

const queryClient = useQueryClient()
const toast = useToast()
const { t } = useI18n()

const schema = {
  title: 'required',
  category: 'required',
  price: 'required'
}

const modal = ref()
const form = ref()

const { mutate, isPending } = useMutation({
  mutationFn: async (payload) => {
    const response = await fetch('https://fakestoreapi.com/products', {
      method: 'POST',
      body: JSON.stringify(payload)
    })
    return response.json()
  },
  onSettled: () => modal.value.hide(),
  onSuccess: () => {
    toast.success(t('Product created successfully'))
    queryClient.invalidateQueries({ queryKey: ['products'] })
  },
  onError: () => toast.error(t('There was an error, please try again'))
})

const resetForm = () => form.value.resetForm()
const show = () => modal.value.show()

defineExpose({ show })
</script>
