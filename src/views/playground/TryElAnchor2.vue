<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

import { Orange } from '@element-plus/icons-vue'

const containerRef = ref(null)

// 动态计算滚动偏移
const windowHeight = ref(window.innerHeight)

const viewportOffset = computed(() => {
  return windowHeight.value * 0.5
})

const updateWindowHeight = () => {
  windowHeight.value = window.innerHeight
}

onMounted(() => {
  window.addEventListener('resize', updateWindowHeight)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateWindowHeight)
})

const handleClick = (e) => {
  e.preventDefault()
}
</script>

<template>
  <el-container class="container-self">
    <div class="container-aside">
      <!-- 自定义滚动容器需要添加offset和e.preventDefault -->
      <el-anchor :container="containerRef" direction="vertical" type="default" :offset="viewportOffset"
        @click="handleClick">
        <el-anchor-link href="#banner1">
          <el-icon class="is-loading" size="50">
            <Orange />
          </el-icon>
        </el-anchor-link>
        <el-anchor-link href="#banner2">
          <el-icon class="is-loading" size="50">
            <Orange />
          </el-icon>
        </el-anchor-link>
        <el-anchor-link href="#banner3">
          <el-icon class="is-loading" size="50">
            <Orange />
          </el-icon>
        </el-anchor-link>
      </el-anchor>
    </div>
    <el-main class="container-main">
      <div class="anchor-ref" ref="containerRef">
        <section id="banner1" style="height: 50vh; background-color: lightblue"></section>
        <section id="banner2" style="height: 50vh; margin-top: 30px; background-color: lightcoral"></section>
        <section id="banner3" style="height: 50vh; margin-top: 30px; background-color: lightpink"></section>
      </div>
    </el-main>
  </el-container>
</template>

<style lang="scss" scoped>
.container-self {
  min-height: 100vh;
  position: relative;
}

.container-aside {
  position: fixed;
  left: 5px;
  top: 45vh;
  transform: translateY(-50%);

  display: flex;

  .el-anchor {
    background: none;

    .el-anchor__item {
      padding: 10px 0;
    }
  }
}

.container-main {
  padding: 0;
}

.anchor-ref {
  max-height: 100vh;
  overflow-y: scroll;
}
</style>
