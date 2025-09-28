<script setup>
import { ref } from 'vue'
import { ArrowRight } from '@element-plus/icons-vue'
const props = defineProps({
  bgUrl: String
})

const mainContainerRef = ref()

const handleClick = (url, e) => {
  console.log(url, e.target)
}

// 控制样式
const onMouseEnter = () => {
  mainContainerRef.value?.querySelector('.background-layer').classList.add('scaler')
  mainContainerRef.value?.querySelector('.text-group').classList.add('floater')
  mainContainerRef.value?.querySelector('.el-icon').classList.add('floater')
}

const onMouseLeave = () => {
  mainContainerRef.value?.querySelector('.background-layer').classList.remove('scaler')
  mainContainerRef.value?.querySelector('.text-group').classList.remove('floater')
  mainContainerRef.value?.querySelector('.el-icon').classList.remove('floater')
}
</script>

<template>
  <!-- 最外这一层是为了实现动画效果时，用这一层包裹，防止溢出 -->
  <div class="prevent-overflow">
    <!-- 使用语法糖直接阻止冒泡，实现精确点击 -->
    <!-- 由于层叠关系的存在，背景层无法直接使用 &:hover，故而用鼠标事件与ref引用直接控制元素，添加css样式 -->
    <div
      class="main-container"
      ref="mainContainerRef"
      @click.stop="handleClick(props.bgUrl, $event)"
      @mouseenter="onMouseEnter"
      @mouseleave="onMouseLeave"
    >
      <div class="background-layer" :style="{ backgroundImage: props.bgUrl ? `url(${props.bgUrl})` : `none` }"></div>
      <div class="content-layer">
        <div class="text-group">
          <div class="main-title">
            <slot name="main-title"></slot>
          </div>
          <div class="sub-title">
            <slot name="sub-title"></slot>
          </div>
        </div>
        <el-icon size="30px"><ArrowRight /></el-icon>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
// 通过 JS 控制的，添加给背景的“缩放”效果以及文字的“上浮”效果
.scaler {
  transform: scale(1.1);
}
.floater {
  transform: translateY(-20px);
}

.prevent-overflow {
  height: 480px;
  overflow: hidden;
}

.main-container {
  height: 100%;
  position: relative;
  cursor: pointer;

  .background-layer {
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;

    filter: blur(1px);
    transition: all 0.3s ease-in-out;
  }

  .content-layer {
    position: relative;
    z-index: 2;
    height: 100%;
    color: #f3f3f3;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    .text-group {
      transition: all 0.3s ease-in-out;
      display: flex;
      flex-direction: column;

      .main-title {
        font-size: 3rem;
        letter-spacing: 0.5rem;
        margin: 0 0 10px 20px;
      }

      .sub-title {
        font-size: 0.9rem;
        margin: 0 0 20px 25px;
      }
    }

    .el-icon {
      padding: 0 30px 30px 0;
      transition: all 0.3s ease-in-out;
    }

    &:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      // 黑色渐变遮罩
      background: linear-gradient(to bottom, rgba(137, 137, 137, 0) 0%, rgba(0, 0, 0, 0.9) 100%);
    }
  }
}
</style>
