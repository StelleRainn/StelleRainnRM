<script setup>
// 可以添加一些交互逻辑，比如视频加载状态等
import { ref } from 'vue'
import router from '@/router'

const videoLoaded = ref(false)

const handleVideoLoad = () => {
  videoLoaded.value = true
}

const onVisiting = () => {
  router.push({
    name: 'chasing-rain'
  })
}
</script>

<template>
  <div class="main-container" @click="onVisiting">
    <!-- 背景层：视频背景 -->
    <div class="background-layer">
      <video autoplay loop muted preload="auto" playsinline @loadeddata="handleVideoLoad" class="background-video">
        <source src="@/assets/videos/ChasingRain-Compressed.mp4" type="video/mp4" />
        <!-- 视频加载失败时的后备背景 -->
        <div class="video-fallback"></div>
      </video>
      <!-- 可选：在视频上添加遮罩层 -->
      <div class="video-overlay"></div>
    </div>

    <!-- 内容层：放置文字、按钮等内容 -->
    <div class="content-layer">
      <div class="banner-content">
        <h1 class="main-title">逐雨之旅</h1>
        <p class="subtitle">于雨中阖眼，于雨中浮沉。</p>
        <p class="subtitle">于此聆听，世界的呼吸；</p>
        <p class="subtitle">于此追忆，时间的足迹。</p>
        <div class="bottom-titles">
          <p>走</p>
          <p>/</p>
          <p>进</p>
          <p>/</p>
          <p>雨</p>
          <p>/</p>
          <p>中</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main-container {
  height: 100%;
  width: 100%;
  position: relative;
  overflow: hidden;
  cursor: pointer;

  // 背景层样式
  .background-layer {
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    filter: blur(1px); // 轻微模糊背景

    .background-video {
      width: 100%;
      height: 100%;
      object-fit: cover; // 确保视频覆盖整个区域，类似background-size: cover
      object-position: center; // 视频居中显示
    }

    // 可选：视频遮罩层，用于调整视频亮度或添加颜色叠加
    .video-overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.3); // 半透明黑色遮罩
      // background: linear-gradient(45deg, rgba(255,0,150,0.3), rgba(0,255,255,0.3)); // 彩色渐变遮罩
    }

    // 视频加载失败时的后备样式
    .video-fallback {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    }
  }

  // 内容层样式
  .content-layer {
    z-index: 2;
    position: relative;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #ffffff;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5); // 文字阴影，确保在视频上可读

    .banner-content {
      position: absolute;
      top: 20%;
      left: 50%;
      transform: translateX(-50%);
      .main-title {
        font-size: 100px;
        font-weight: 700;
        margin-bottom: 16px;
        letter-spacing: 2rem;
        opacity: 0;
        animation: fadeInUp 1s ease 0.5s forwards;
      }

      .subtitle {
        font-size: 1.3rem;
        margin-bottom: 8px;
        opacity: 0;
        animation: fadeInUp 1s ease 1s forwards;
      }
    }

    .bottom-titles {
      display: flex;
      justify-content: center;
      margin-top: 110px;
      font-size: 35px;

      p {
        margin: 0 10px;

        // 走
        &:nth-child(1) {
          animation: floating 1.5s linear infinite alternate forwards;
        }
        &:nth-child(2) {
          animation: floating 1.5s linear 0.2s infinite alternate forwards;
        }
        // 进
        &:nth-child(3) {
          animation: floating 1.5s linear 1.5s infinite alternate forwards;
        }
        &:nth-child(4) {
          animation: floating 1.5s linear 0.6s infinite alternate forwards;
        }
        // 雨
        &:nth-child(5) {
          animation: floating 1.5s linear infinite alternate forwards;
        }
        &:nth-child(6) {
          animation: floating 1.5s linear 0.8s infinite alternate forwards;
        }
        // 中
        &:nth-child(7) {
          animation: floating 1.5s linear 1.5s infinite alternate forwards;
        }
      }
    }
  }
}

// 动画效果
@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes floating {
  to {
    transform: translateY(-5px);
  }
}
</style>
