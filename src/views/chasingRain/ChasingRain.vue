<script setup>
import { ref, onMounted } from 'vue'

// 创建雨滴及其随机属性，包括左边缘距离，宽高，可见度，动画时长，动画延迟
// 共同属性在css中统一设置，包括定位属性，动画名称等
const rainDrops = ref([])
const generateRainDrops = () => {
  for (let id = 0; id < 100; id++) {
    rainDrops.value.push({
      id: id,
      style: {
        left: Math.random() * 100 + '%',
        width: Math.random() * 1 + 1 + 'px',
        height: Math.random() * 15 + 5 + 'px',
        opacity: Math.random() / 2,
        animationDuration: Math.random() * 1 + 1 + 's',
        animationDelay: Math.random() * 2 + 's'
      }
    })
  }
}

onMounted(() => {
  generateRainDrops()
})
</script>

<template>
  <div class="rain-container">
    <div class="rain-background">
      <div class="rain-drop" v-for="rainDrop in rainDrops" :key="rainDrop.id" :style="rainDrop.style"></div>
    </div>
    <div style="height: 200vh; color: #fff">11</div>
  </div>
</template>

<style lang="scss" scoped>
.rain-container {
  position: relative;
  width: 100%;
  background-color: #000;
  overflow-x: hidden;
  min-height: 100vh;
}

.rain-background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;

  // 元素永远不会成为鼠标事件的target
  pointer-events: none;

  .rain-drop {
    background-color: #fff;
    position: fixed;
    top: -10px;
    animation: rainfall linear infinite forwards;
  }
}

@keyframes rainfall {
  to {
    transform: translateY(100vh);
  }
}
</style>
