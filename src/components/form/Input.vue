<template>
  <div>
    <Label :class="{ 'text-red-800': errorMessage }">
      {{ label }}
    </Label>
    <input
      ref="inputRef"
      v-model="value"
      :name="name"
      type="text"
      autocomplete="off"
      :disabled="disabled"
      class="bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
      :class="[errorMessage ? 'border-red-700' : 'border-gray-300']"
      v-bind="$attrs"
    />
    <span class="text-red-800 text-xs">{{ errorMessage }}</span>
  </div>
</template>

<script setup>
import { useField } from 'vee-validate'
import Label from './Label.vue'

const props = defineProps({
  name: String,
  label: {
    type: [String, Boolean],
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  loading: {
    type: Boolean,
    default: false
  }
})

const { value, errorMessage } = useField(props.name)
</script>
