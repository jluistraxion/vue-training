<template>
  <button
    type="button"
    :disabled="isLoading || disabled"
    class="focus:ring-4 font-medium rounded-md text-xs px-3 py-2 focus:outline-none disabled:cursor-not-allowed bg-blue-700 text-white focus:ring-indigo-200 disabled:bg-neutral-100 disabled:text-neutral-400"
    :class="[isLoading && 'animate-pulse cursor-wait']"
  >
    <slot />
  </button>
</template>

<script setup>
defineProps({
  color: String,
  isLoading: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  }
})
</script>
