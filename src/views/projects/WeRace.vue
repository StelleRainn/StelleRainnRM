<script setup>
import { useRoute } from 'vue-router'

import GeneralHeader from '@/components/GeneralHeader.vue'

const route = useRoute()
</script>

<template>
  <GeneralHeader></GeneralHeader>
  <div>{{ route.fullPath }}</div>
</template>

<style lang="scss" scoped></style>
