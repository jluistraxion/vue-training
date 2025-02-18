<template>
  <div>
    <Label :class="{ 'text-red-800': errorMessage }">
      {{ label }}
    </Label>
    <textarea
      v-model="value"
      :name="name"
      v-bind="$attrs"
      :rows="rows"
      :disabled="disabled"
      class="bg-gray-50 text-gray-900 text-sm rounded-md block w-full p-2 focus:ring-blue-500 focus:border-blue-500"
      :class="[errorMessage ? 'border border-red-700' : 'border-0']"
    />
    <span
      v-show="errorMessage"
      class="text-red-800 text-xs"
    >
      {{ errorMessage }}
    </span>
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
  },
  rows: {
    type: Number,
    default: 2
  }
})

const { value, errorMessage } = useField(props.name)
</script>
