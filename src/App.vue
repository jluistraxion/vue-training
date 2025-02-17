<template>
  <Layout>
    <RouterView :key="route.path" />
  </Layout>
</template>

<script setup>
import { useRoute } from 'vue-router'
import Layout from '@/layouts/FwbLayout.vue'

const route = useRoute()
</script>
