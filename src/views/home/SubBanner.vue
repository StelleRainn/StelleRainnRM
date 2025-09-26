<script setup>
const props = defineProps({
  bgUrl: String
})

const handleClick = (url, e) => {
  console.log(url, e.target)
}
</script>

<template>
  <!-- 使用语法糖直接阻止冒泡，实现精确点击 -->
  <div class="main-container" @click.stop="handleClick(props.bgUrl, $event)">
    <div class="background-layer" :style="{ backgroundImage: props.bgUrl ? `url(${props.bgUrl})` : `none` }"></div>
    <div class="content-layer">
      <slot name="main-title"></slot>
      <slot name="sub-title"></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main-container {
  height: 580px;
  background-color: #f3f3f3;
  position: relative;

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
  }

  .content-layer {
    position: relative;
    z-index: 2;
    height: 100%;

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
