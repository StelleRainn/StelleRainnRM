<script setup>
import { useRoute } from 'vue-router'
import { onMounted } from 'vue'
import GeneralHeader from './GeneralHeader.vue'

const route = useRoute()

onMounted(() => {
  console.log(route.params)
})
</script>

<template>
  <GeneralHeader></GeneralHeader>
  <div>{{ route.params.id }}</div>
</template>

<style lang="scss" scoped></style>
