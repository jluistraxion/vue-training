<template>
  <div>
    <div class="w-full max-w-md">
      <ul
        ref="tabsWrapper"
        class="flex border-b text-gray-500 text-lg"
        role="tablist"
      >
        <li
          v-for="(tab, index) in tabs"
          :key="tab.name"
          ref="tabRefs"
          class="cursor-pointer p-3 flex-1 text-center text-sm"
          :class="{
            'border-b-2 border-blue-500 text-blue-600': activeTabIndex === index
          }"
          @click="activeTabIndex = index"
        >
          {{ tab.label }}
        </li>
      </ul>
    </div>
    <div
      ref="targetRefs"
      class="py-4"
    >
      <component
        :is="activeTabComponent"
        v-if="activeTabComponent"
      />
    </div>
  </div>
</template>

<script setup>
import { ref, computed, defineProps, watch } from 'vue'

const props = defineProps({ tabs: Array })

const tabsWrapper = ref(null)
const tabRefs = ref([])
const targetRefs = ref([])
const activeTabIndex = ref(0)

const activeTabComponent = computed(
  () => props.tabs[activeTabIndex.value]?.component
)

watch(
  () => props.tabs,
  (newTabs) => {
    if (newTabs.length > 0) activeTabIndex.value = 0
  },
  { immediate: true, deep: true }
)
</script>
