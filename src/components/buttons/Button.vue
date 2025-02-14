<template>
  <button
    type="button"
    :disabled="isLoading || disabled"
    class="focus:ring-4 font-medium rounded-md text-xs px-3 py-2 focus:outline-none disabled:cursor-not-allowed"
    :class="[color, isLoading && 'animate-pulse cursor-wait']"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
interface Props {
  color?: string
  isLoading?: boolean
  disabled?: boolean
}

withDefaults(defineProps<Props>(), {
  color:
    'bg-blue-700 text-white focus:ring-indigo-200 disabled:bg-neutral-100 disabled:text-neutral-400',
  isLoading: false
})
</script>
