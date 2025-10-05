<script setup>
import { useRoute } from 'vue-router'
import { onMounted } from 'vue'
import GeneralHeader from './GeneralHeader.vue'

const route = useRoute()

onMounted(() => {
  console.log(route.query.id)
})
</script>

<template>
  <GeneralHeader></GeneralHeader>
  <div>{{ route.query.id }}</div>
</template>

<style lang="scss" scoped></style>
