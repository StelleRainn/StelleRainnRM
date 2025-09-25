<script setup>
const props = defineProps({
  bgUrl: String,
  artworkId: Number
})

const onGettingDetail = (artworkId) => {
  console.log(props.artworkId, artworkId)
}

const onExperienceOnline = (artworkId) => {
  console.log(artworkId)
}
</script>

<template>
  <!-- 动态设置背景 -->
  <div class="hero-banner-container">
    <!-- 背景层 -->
    <div class="background-layer" :style="{ backgroundImage: props.bgUrl ? `url(${props.bgUrl})` : 'none' }"></div>
    <!-- 内容层 -->
    <div class="content-layer">
      <h1>
        <slot name="main-title">默认大标题</slot>
      </h1>
      <h3>
        <slot name="sub-title">默认小标题</slot>
      </h3>
      <div class="button-group">
        <el-button type="primary" round size="large" @click="onGettingDetail(artworkId)">进一步了解</el-button>
        <el-button round plain size="large" @click="onExperienceOnline(artworkId)">在线体验</el-button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
// 通过两个层：背景层和内容层，外加一个伪元素层，三层分层显示，便于控制
// 包括最大的容器在内，存在四层结构 → 依次通过两级“子绝父相”完成内容定位、层次的脱标与重叠
// 通过 filter 属性，直接模糊背景层
// 通过 z-index 属性，控制层级的重叠效果
.hero-banner-container {
  position: relative;
  height: 100%;
  overflow: hidden;

  .background-layer {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    filter: blur(3px); // 背景层模糊
    transform: scale(1.1); // 稍微放大以避免模糊边缘
  }

  .content-layer {
    position: relative;
    z-index: 2;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #f3f3f3;

    // 添加半透明背景以进一步增强可读性
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.3);
      z-index: -1;
    }

    h1 {
      margin-top: 170px;
      font-size: 50px;
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
    }

    h3 {
      margin-top: 10px;
      text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.7);
    }

    .el-button {
      margin-top: 20px;
      font-family: 'NotoSerifSC', serif;
      letter-spacing: 0.2rem;
    }
  }
}
</style>
