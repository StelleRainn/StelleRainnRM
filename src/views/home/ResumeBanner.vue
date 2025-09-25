<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const windowWidth = ref(window.innerWidth)
const isVisible = ref(false)
const containerRef = ref(null)

// 专门给 CSS 所使用的，直接返回带px的字符串
const viewportOffsetPx = computed(() => {
  return `${windowWidth.value * 0.3}px`
})

const updatewindowWidth = () => {
  windowWidth.value = window.innerWidth
}

onMounted(() => {
  window.addEventListener('resize', updatewindowWidth)

  // IntersectionObserver 监听元素进入视口
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        isVisible.value = true
        observer.disconnect() // 触发后立即停止观察
      }
    },
    { threshold: 0.5 }
  )

  if (containerRef.value) observer.observe(containerRef.value)

  onUnmounted(() => {
    observer.disconnect()
    window.removeEventListener('resize', updatewindowWidth)
  })
})
</script>

<template>
  <div ref="containerRef" class="main-container">
    <div class="left-font" :class="{ animate: isVisible }">简</div>
    <div class="flash-line" :class="{ animate: isVisible }"></div>
    <div class="right-font" :class="{ animate: isVisible }">历</div>
  </div>
</template>

<style lang="scss" scoped>
.main-container {
  height: 100%;
  width: 100%;
  background-color: darkcyan;

  display: flex;
  align-items: center;
  justify-content: space-between;

  font-size: 400px;
  font-weight: bolder;
  text-shadow: 4px 4px 8px rgba(0, 0, 0, 0.7);

  // 定制的贝塞尔缓动函数 参见：
  // MDN：https://developer.mozilla.org/zh-CN/docs/Web/CSS/easing-function
  // 在线模拟：https://cubic-bezier.com/
  .left-font,
  .right-font {
    opacity: 0; // 初始状态隐藏
  }

  .left-font.animate {
    animation: flashToLeft 1.2s cubic-bezier(0.67, 0.04, 0.47, 0.89) 0.6s forwards;
  }
  .right-font.animate {
    animation: flashToRight 1.2s cubic-bezier(0.67, 0.04, 0.47, 0.89) 0.6s forwards;
  }

  .flash-line {
    width: 2px;
    height: 0; // 初始状态为0高度
    background-color: #000000;
    box-shadow: 4px 4px 8px 1px rgba(0, 0, 0, 0.7);
    align-self: center; // 从中间开始
  }

  .flash-line.animate {
    animation: lineShowAndHide 2.4s cubic-bezier(0.67, 0.04, 0.47, 0.89) forwards;
  }
}

@keyframes flashToLeft {
  from {
    opacity: 0;
    transform: translateX(v-bind(viewportOffsetPx));
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes flashToRight {
  from {
    opacity: 0;
    transform: translateX(calc(-1 * v-bind(viewportOffsetPx)));
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes lineShowAndHide {
  0% {
    height: 0;
  }
  25% {
    height: 75%; // 展出到最大高度
  }
  75% {
    height: 75%; // 保持一段时间
  }
  100% {
    height: 0; // 谢幕消失
  }
}
</style>
