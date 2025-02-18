<template>
  <div
    ref="modalRef"
    tabindex="-1"
    aria-hidden="true"
    class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
  >
    <div
      class="relative w-full max-h-full"
      :class="size"
    >
      <div class="relative bg-white rounded-lg shadow">
        <!-- Modal header -->
        <div class="flex items-center justify-between px-5 pt-5 rounded-t">
          <template v-if="slots.header">
            <slot name="header" />
          </template>
          <h3
            v-else-if="title"
            class="text-xl font-semibold text-neutral-700"
          >
            {{ title }}
          </h3>
          <button
            v-if="closable"
            type="button"
            class="text-neutral-400 bg-neutral-100 hover:text-neutral-500 rounded-full text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
            @click="modal.hide()"
          >
            <i class="bi bi-x text-xl" />
            <span class="sr-only">Close modal</span>
          </button>
        </div>
        <!-- Modal body -->
        <template v-if="slots.body">
          <slot name="body" />
        </template>
        <div
          v-else
          class="px-5 pb-5 space-y-5"
        >
          <slot />
        </div>
        <!-- Modal footer -->
        <template v-if="slots.footer">
          <slot name="footer" />
        </template>
      </div>
    </div>
  </div>
</template>

<script setup>
import { Modal } from 'flowbite'
import { onMounted, ref, useSlots } from 'vue'

defineProps({
  title: {
    type: [Boolean, String],
    default: false
  },
  size: {
    type: [Boolean, String],
    default: 'max-w-lg'
  },
  closable: {
    type: Boolean,
    default: true
  }
})

const emit = defineEmits(['hide'])
const modalRef = ref(null)
const modal = ref(null)
const slots = useSlots()

onMounted(() => {
  modal.value = new Modal(modalRef.value, {
    backdrop: 'static',
    closable: false,
    keyboard: false,
    onHide: () => emit('hide')
  })
})

const show = () => modal.value.show()
const hide = () => modal.value.hide()

defineExpose({ show, hide })
</script>
