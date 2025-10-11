<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'

const windowWidth = ref(window.innerWidth)
const isVisible = ref(false)
const containerRef = ref(null)

// 专门给 CSS 所使用的，直接返回带px的字符串
// 30% 宽度
const viewportWidthPx30P = computed(() => {
  return `${windowWidth.value * 0.3}px`
})

// 50% 宽度
const viewportWidthPx50P = computed(() => {
  return `${windowWidth.value * 0.5}px`
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
  <!-- Resume Banner 内部样式统一设置 100% 高度， 在外部使用组件时，指定具体高度 -->
  <div ref="containerRef" class="main-container">
    <div class="background-layer">
      <!-- 流光体 -->
      <ul>
        <li v-for="value in 2" :key="value"></li>
      </ul>
      <!-- 流光粒子效果 -->
      <div class="particle"></div>
      <div class="particle"></div>
      <div class="particle"></div>
      <div class="particle"></div>
      <div class="particle"></div>
    </div>
    <div class="content-layer">
      <div class="left-font" :class="{ animate: isVisible }">简</div>
      <div class="flash-line" :class="{ animate: isVisible }"></div>
      <div class="right-font" :class="{ animate: isVisible }">历</div>
      <div class="main-title" :class="{ animate: isVisible }">Résumé</div>
      <div class="button-group" :class="{ animate: isVisible }">
        <el-button round size="large" type="primary">查看简历</el-button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
// 依旧区分背景层和内容层，方便各自定义和管理内容
.main-container {
  height: 100%;
  width: 100%;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  display: flex;
  justify-content: center;

  /* 流光溢彩动态背景层 */
  .background-layer {
    z-index: -1;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;

    ul {
      width: 400vw;
      height: 100%;
      display: flex;
      flex-direction: row;

      li {
        height: 200%;
        width: 200vw;
        background: linear-gradient(
          to right,
          #75ffd6,
          #75e6ff,
          #759cff,
          #a575ff,
          #cf75ff,
          #ff7593,
          #ffbf75,
          #ddff75,
          #95ff75,
          #75ffd6
        );
        animation: gradientFlow 16s linear infinite;
      }
    }

    // /* 基础渐变背景 - 深邃的夜空色调 */
    // background: repeating-linear-gradient(
    //   to right,
    //   #66d2ea,
    //   #af66ea 10%,
    //   #66d2ea 25%,
    //   #66d2ea,
    //   #af66ea 35%,
    //   #66d2ea 50%
    // );
    // // background: repeating-linear-gradient(to right, #6673ea, #667eea 10%, #9f66ea 20%);
    // // 宽度 高度
    // background-size: 400% 100%;
    // // background-position-x: 33%;
    // animation: gradientFlow 5s linear infinite;
  }

  /* 添加光点粒子效果 */
  .background-layer {
    .particle {
      position: absolute;
      width: 4px;
      height: 4px;
      background: rgba(255, 255, 255, 0.8);
      border-radius: 50%;
      box-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
      animation: particleFloat 6s ease-in-out infinite;

      &:nth-child(1) {
        top: 10%;
        left: 10%;
        animation-delay: 0s;
      }
      &:nth-child(2) {
        top: 20%;
        left: 80%;
        animation-delay: 1s;
      }
      &:nth-child(3) {
        top: 60%;
        left: 20%;
        animation-delay: 2s;
      }
      &:nth-child(4) {
        top: 80%;
        left: 70%;
        animation-delay: 3s;
      }
      &:nth-child(5) {
        top: 40%;
        left: 90%;
        animation-delay: 4s;
      }
    }
  }

  .content-layer {
    width: 1300px;
    z-index: 2;
    position: relative;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .left-font,
    .right-font {
      font-size: 350px;
      font-weight: normal;
      text-shadow: 4px 4px 8px rgba(0, 0, 0, 0.7);
      opacity: 0; // 初始状态隐藏
    }

    .flash-line {
      width: 2px;
      height: 0; // 初始状态为0高度
      background: linear-gradient(135deg, #667eea 0%, #f093fb 50%, #4facfe 100%);
      // background-color: #000000;
      // box-shadow: 4px 4px 8px 1px rgba(0, 0, 0, 0.7);
      align-self: center; // 从中间开始
    }

    .main-title {
      overflow: hidden;
      z-index: 2;
      position: absolute;
      top: 30%;
      left: 50%;
      transform: translateX(-50%);
      font-family: 'texgyrecursor-regular';
      font-size: 100px;
      font-weight: bold;
      text-shadow: 4px 4px 8px rgba(0, 0, 0, 0.7);
      letter-spacing: 20px;
      white-space: nowrap; // 防止文字换行

      width: 0; // 初始宽度为0，用于打字效果
      opacity: 1; // 文字本身是可见的
    }

    .button-group {
      z-index: 2;
      position: absolute;
      bottom: 40%;
      left: 580px;
      .el-button {
        font-family: 'NotoSerifSC';
        letter-spacing: 0.2rem;
      }

      opacity: 0; // 初始状态
    }

    // 定制的贝塞尔缓动函数 参见：
    // MDN：https://developer.mozilla.org/zh-CN/docs/Web/CSS/easing-function
    // 在线模拟：https://cubic-bezier.com/
    .left-font.animate {
      animation: flashToLeft 1.2s cubic-bezier(0.67, 0.04, 0.47, 0.89) 0.6s forwards;
    }

    .right-font.animate {
      animation: flashToRight 1.2s cubic-bezier(0.67, 0.04, 0.47, 0.89) 0.6s forwards;
    }

    .flash-line.animate {
      animation: lineShowAndHide 2.4s cubic-bezier(0.67, 0.04, 0.47, 0.89) forwards;
    }

    .main-title.animate {
      animation:
        typing 2s steps(6, end) 2s forwards,
        blink-caret 0.75s step-end 2s 3.33 forwards;
    }

    .button-group.animate {
      animation: fadeUpIn 0.7s ease-in 4.5s forwards;
    }
  }
}

@keyframes flashToLeft {
  from {
    opacity: 0;
    transform: translateX(350px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes flashToRight {
  from {
    opacity: 0;
    transform: translateX(calc(-1 * 350px));
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

/* 流光溢彩背景动画关键帧 */

/* 渐变色彩流动动画 */
@keyframes gradientFlow {
  to {
    // background-position: 33% 0;
    transform: translateX(-200vw);
  }
}

/* 粒子飘浮动画 */
@keyframes particleFloat {
  0%,
  100% {
    transform: translateY(0px) scale(1);
    opacity: 0.8;
  }
  50% {
    transform: translateY(-20px) scale(1.2);
    opacity: 1;
  }
}

/* 打印效果 */
@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 480px;
  }
}
/* 光标闪啊闪 */
@keyframes blink-caret {
  from,
  to {
    box-shadow: 1px 0 0 0 transparent;
  }
  50% {
    box-shadow: 1px 0 0 0;
  }
}

// 文字淡入效果动画
@keyframes fadeUpIn {
  from {
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
