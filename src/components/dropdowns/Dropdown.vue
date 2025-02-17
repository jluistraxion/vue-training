<template>
  <div
    v-if="options"
    class="relative z-9"
  >
    <button
      ref="trigger"
      data-dropdown-trigger="hover"
      @click.stop
      class="text-black dark:text-white"
    >
      <slot />
    </button>

    <div
      ref="dropdown"
      class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow dropdown"
      :class="width"
    >
      <ul
        class="py-2 text-sm text-gray-700"
        aria-labelledby="dropdownHoverButton"
      >
        <li
          v-for="option in options"
          :key="option.name"
        >
          <button
            @click.stop="option.action"
            class="block w-full p-2 hover:bg-gray-100"
          >
            {{ option.name }}
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { Dropdown } from 'flowbite'

defineProps({
  options: {
    type: Array
  },
  width: {
    type: String,
    default: 'w-44'
  }
})

const trigger = ref(null)
const dropdown = ref(null)
const instance = ref(null)

onMounted(() => {
  if (!trigger.value || !dropdown.value) return
  instance.value = new Dropdown(dropdown.value, trigger.value)
})

const show = () => instance.value.show()
const hide = () => instance.value.hide()
defineExpose({ show, hide })
</script>
