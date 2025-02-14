<template>
  <div>
    <Label :class="{ 'text-red-800': errorMessage }">
      {{ label }}
    </Label>
    <input
      ref="inputRef"
      v-model="value"
      :name="name"
      :type
      autocomplete="off"
      :disabled="disabled"
      class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      v-bind="$attrs"
    />
    <span class="text-red-800 text-xs">{{ errorMessage }}</span>
  </div>
</template>

<script setup lang="ts">
import { useField } from 'vee-validate'
import Label from './Label.vue'

export interface Props {
  name: string
  label?: string | boolean
  disabled?: boolean
  inputUpperCase?: boolean
  loading?: boolean
  variant?: 'normal' | 'alternative'
  showError?: boolean
  type?: string
}

const props = withDefaults(defineProps<Props>(), {
  disabled: false,
  type: 'text'
})

const { value, errorMessage } = useField<string | number>(props.name)
</script>
