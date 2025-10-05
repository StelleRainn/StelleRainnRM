<script setup>
import { ref, onMounted, onUnmounted, nextTick, computed } from 'vue'
import { ArrowLeftBold, ArrowRightBold } from '@element-plus/icons-vue'
import GeneralHeader from '@/components/GeneralHeader.vue'

import bilibiliLogo from '@/assets/images/logos/bilibili-down.png'
import rosaLogo from '@/assets/images/logos/rosa-down.png'
import vantLogo from '@/assets/images/logos/vant-down.png'
import weraceLogo from '@/assets/images/logos/u9-down.png'
import xtxLogo from '@/assets/images/logos/xtx-down.png'
import ProjectPreviewSingle from './components/ProjectPreviewSingle.vue'

const headerContents = ref([
  { imgUrl: rosaLogo, name: '蔷薇丛的小书架' },
  { imgUrl: vantLogo, name: '智慧商城' },
  { imgUrl: xtxLogo, name: '小兔鲜儿' },
  { imgUrl: weraceLogo, name: 'WeRace' },
  { imgUrl: bilibiliLogo, name: 'B站首页复刻' }
])

const galleryListContents = ref([
  { id: 1, imgUrl: rosaLogo, name: '蔷薇丛的小书架', desc: 'Vue 3 项目，大量使用 Element Plus 组件库' },
  { id: 2, imgUrl: vantLogo, name: '智慧商城', desc: 'Vue 2 项目，配合 Vant UI 实现，移动端布局' },
  { id: 3, imgUrl: xtxLogo, name: '小兔鲜儿', desc: '纯 HTML + CSS 项目' },
  { id: 4, imgUrl: weraceLogo, name: 'WeRace', desc: 'PHP & MySQL 项目，强化了前端基础，打通了基础全栈' },
  { id: 5, imgUrl: bilibiliLogo, name: 'B站首页复刻', desc: '第一份前端工程，HTML + CSS + 少量 JS' }
])

// 画廊相关：ref、限位与节流状态 （Generate by TRAE AI）
const galleryListRef = ref(null)
const isAnimating = ref(false)
const canPrev = ref(false)
const canNext = ref(true)
// 每次前进/后退的像素步长（可按需调整）
const SCROLL_STEP = 320
// 动画时长（毫秒）
const ANIM_DURATION = 450

const easeInOutCubic = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2)

const updateLimits = () => {
  const el = galleryListRef.value
  if (!el) return
  const max = el.scrollWidth - el.clientWidth
  const left = el.scrollLeft
  canPrev.value = left > 0
  canNext.value = left < max - 1 // 减1避免浮点误差导致按钮迟迟不禁用
}

const onGalleryScroll = () => {
  updateLimits()
}

const scrollBySmooth = async (el, delta) => {
  if (!el) return
  const startLeft = el.scrollLeft
  const max = el.scrollWidth - el.clientWidth
  const target = Math.max(0, Math.min(startLeft + delta, max))
  const distance = target - startLeft
  if (distance === 0) return
  isAnimating.value = true
  const startTime = performance.now()

  return new Promise((resolve) => {
    const step = (now) => {
      const elapsed = now - startTime
      const t = Math.min(1, elapsed / ANIM_DURATION)
      const eased = easeInOutCubic(t)
      el.scrollLeft = startLeft + distance * eased
      if (t < 1) {
        requestAnimationFrame(step)
      } else {
        isAnimating.value = false
        updateLimits()
        resolve()
      }
    }
    requestAnimationFrame(step)
  })
}

const onPrev = async () => {
  if (isAnimating.value || !canPrev.value) return
  await scrollBySmooth(galleryListRef.value, -SCROLL_STEP)
}

const onNext = async () => {
  if (isAnimating.value || !canNext.value) return
  await scrollBySmooth(galleryListRef.value, SCROLL_STEP)
}

onMounted(async () => {
  await nextTick()
  updateLimits()
})

// 防止模板引用未定义方法导致报错
const handleVideoLoad = () => {}

// ===== 滚动驱动的视频缩放与圆角效果 （By TRAE AI） =====
// 目标：滚动到一定程度后，视频左右各留白 80px，并增加大圆角
const SCROLL_RANGE = 400 // 滚动区间（像素）内完成过渡，可按需调整
const SIDE_MARGIN_TARGET = 80 // 两侧目标留白（像素）
const MAX_SHRINK_PX = SIDE_MARGIN_TARGET * 2 // 总缩减宽度（像素）
const FINAL_RADIUS = 32 // 最终圆角（像素），可按需调整为更大

const scrollProgress = ref(0)
const videoStyle = computed(() => {
  const p = scrollProgress.value
  return {
    width: `calc(100vw - ${p * MAX_SHRINK_PX}px)`,
    height: '100%',
    borderRadius: `${p * FINAL_RADIUS}px`,
    overflow: 'hidden',
    margin: '0 auto',
    position: 'relative'
  }
})

const onScroll = () => {
  const y = window.scrollY || 0
  const p = Math.min(Math.max(y / SCROLL_RANGE, 0), 1)
  scrollProgress.value = p
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll)
})
</script>

<template>
  <GeneralHeader></GeneralHeader>
  <header class="collection-index-header">
    <ul>
      <li v-for="content in headerContents" :key="content.imgUrl">
        <img :src="content.imgUrl" />
        <span>{{ content.name }}</span>
      </li>
    </ul>
  </header>
  <main>
    <section class="intro">
      <h1 class="intro-title">作品合集</h1>
      <div class="intro-desc">
        <p>从在桌面随意新建的 index.html，</p>
        <p>到结构井然有序的 Vue 3 工程。</p>
      </div>
    </section>
    <section class="video">
      <div class="video-frame" :style="videoStyle">
        <video
          autoplay
          loop
          muted
          preload="auto"
          playsinline
          @loadeddata="handleVideoLoad"
          class="background-video"
          playbackRate="2"
        >
          <source src="@/assets/videos/webstorm-release.mp4" type="video/mp4" />
          <!-- 视频加载失败时的后备背景 -->
          <div class="video-fallback"></div>
        </video>
        <!-- 可选：在视频上添加遮罩层 -->
        <div class="video-overlay"></div>
      </div>
    </section>
    <section class="projects">
      <div class="welcome">
        <h1>查看不同作品</h1>
      </div>
      <div class="gallery">
        <ul ref="galleryListRef" @scroll="onGalleryScroll">
          <!-- li 已指定宽高 -->
          <li v-for="content in galleryListContents" :key="content">
            <ProjectPreviewSingle :imgUrl="content.imgUrl" :id="content.id">
              <template #project-name>{{ content.name }}</template>
              <template #project-desc>{{ content.desc }}</template>
            </ProjectPreviewSingle>
          </li>
        </ul>
      </div>
      <div class="gallery-control">
        <el-button
          type="info"
          circle
          :icon="ArrowLeftBold"
          size="large"
          :disabled="!canPrev || isAnimating"
          @click="onPrev"
        ></el-button>
        <el-button
          type="info"
          circle
          :icon="ArrowRightBold"
          size="large"
          :disabled="!canNext || isAnimating"
          @click="onNext"
        ></el-button>
      </div>
    </section>
  </main>
</template>

<style lang="scss" scoped>
.collection-index-header {
  background-color: #222222;
  padding: 45px 0 40px 0;
  margin: 0 0 8px 0;

  ul {
    width: 100%;
    height: 100px;
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;

    li {
      width: 130px;
      margin: 0 5px;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: center;

      img {
        max-width: 90px;
        margin-bottom: 16px;
      }

      span {
        font-size: 13px;
        line-height: 13px;
        color: rgba(255, 255, 255, 1);
      }
    }
  }
}

main {
  width: 100%;
  margin: 0 0 8px 0;

  .intro {
    height: 200px;
    padding: 0 80px;
    margin: 0 0 8px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .intro-title {
      font-size: 64px;
      letter-spacing: 0.4rem;
    }

    .intro-desc {
      font-size: 18px;
      font-weight: bold;
    }
  }

  .video {
    height: 1000px;
    width: 100%;
    margin: 0 0 8px 0;
    position: relative;

    .video-frame {
      height: 100%;
      // width 通过内联样式动态控制
      display: block;
    }

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
      // background: rgba(0, 0, 0, 0.3); // 半透明黑色遮罩
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

  .projects {
    position: relative;
    height: fit-content;

    width: 100%;
    padding: 100px 0 100px 0; // 不要在这里加左右边距，会撑出 main 的范围。
    overflow: hidden;

    h1,
    .gallery {
      padding-left: 80px;
    }

    h1 {
      font-size: 56px;
      letter-spacing: 0.4rem;
    }

    .gallery {
      margin-top: 30px;
      width: 100%;

      ul {
        list-style: none;
        width: 100%;
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 16px;
        overflow: scroll;

        li {
          width: 400px;
          height: 700px;
        }
      }
    }

    .gallery-control {
      position: absolute;
      bottom: 30px;
      right: 30px;
    }
  }
}
</style>
