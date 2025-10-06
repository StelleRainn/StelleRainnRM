<script setup>
import { ref } from 'vue'

const containerRef = ref(null)

const handleClick = (e) => {
  e.preventDefault()
}
</script>

<template>
  <div>
    <el-row class="try-el-anchor">
      <el-col :span="5">
        <el-anchor :container="containerRef" direction="vertical" type="default" :offset="30" @click="handleClick">
          <el-anchor-link href="#part1" title="part1" />
          <el-anchor-link href="#part2" title="part2" />
          <el-anchor-link href="#part3" title="part3" />
        </el-anchor>
      </el-col>
      <el-col :span="19">
        <div ref="containerRef" style="height: 300px; overflow-y: auto">
          <div id="part1" style="height: 50vh; background: rgba(255, 0, 0, 0.02); margin-top: 30px">part1</div>
          <div id="part2" style="height: 50vh; background: rgba(0, 255, 0, 0.02); margin-top: 30px">part2</div>
          <div id="part3" style="height: 50vh; background: rgba(0, 0, 255, 0.02); margin-top: 30px">part3</div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<style lang="scss" scoped></style>
