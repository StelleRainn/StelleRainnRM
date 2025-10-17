<script setup>
import { ref, onMounted, nextTick } from 'vue'
import { ArrowLeftBold, ArrowRightBold } from '@element-plus/icons-vue'

// 画廊相关：ref、限位与节流状态
// Generate by TRAE AI；
// 理解状态：黑盒
const galleryContainerRef = ref(null)
const isAnimating = ref(false)
const canPrev = ref(false)
const canNext = ref(true)
// 每次前进/后退的像素步长（可按需调整）
const SCROLL_STEP = 320
// 动画时长（毫秒）
const ANIM_DURATION = 450

const easeInOutCubic = (t) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2)

const updateLimits = () => {
  const el = galleryContainerRef.value
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
  await scrollBySmooth(galleryContainerRef.value, -SCROLL_STEP)
}

const onNext = async () => {
  if (isAnimating.value || !canNext.value) return
  await scrollBySmooth(galleryContainerRef.value, SCROLL_STEP)
}

onMounted(async () => {
  await nextTick()
  updateLimits()
})

// 至少包含 imgUrl、title、desc 三个字段
const props = defineProps({
  galleryItems: Array,
  textColor: String
})
</script>

<template>
  <div class="general-gallery">
    <h1 class="gallery-title">
      <slot name="galleryTitle"></slot>
    </h1>
    <div class="gallery-container" ref="galleryContainerRef" @scroll="onGalleryScroll">
      <ul>
        <li v-for="galleryItem in props.galleryItems" :key="galleryItem">
          <img :src="galleryItem.imgUrl" alt="" />
          <h3>{{ galleryItem.title }}</h3>
          <p>{{ galleryItem.desc }}</p>
        </li>
      </ul>
    </div>
    <div class="gallery-control">
      <el-button
        circle
        :icon="ArrowLeftBold"
        size="large"
        :disabled="!canPrev || isAnimating"
        @click="onPrev"
      ></el-button>
      <el-button
        circle
        :icon="ArrowRightBold"
        size="large"
        :disabled="!canNext || isAnimating"
        @click="onNext"
      ></el-button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.general-gallery {
  width: 100%;
  height: fit-content; // 内容决定高度
  padding: 10px 0 100px 48px;
  margin-bottom: 10px;
  position: relative;
  color: v-bind(textColor);
}

.gallery-title {
  height: 170px;
  line-height: 170px;
  font-size: 60px;
  letter-spacing: 0.8rem;
  margin-bottom: 20px;
  padding-left: 40px;
}

.gallery-container {
  width: 100%;
  height: fit-content;
  overflow: scroll;

  ul {
    height: fit-content;
    width: 100%;
    list-style: none;
    display: grid;
    grid-template-rows: 1fr;
    grid-template-columns: repeat(10, 1fr);
    column-gap: 20px;
  }

  ul > li {
    width: 400px;
    height: fit-content;
    text-align: center;
    padding: 0 10px;

    img {
      width: 100%;
      height: 400px;
      object-fit: cover;
      object-position: center;
      border-radius: 30px;
      margin-bottom: 50px;
    }

    h3 {
      font-size: 40px;
      font-weight: normal;
      margin-bottom: 15px;
    }

    p {
      border-top: #636363 solid 0.5px;
      font-size: 18px;
      padding-top: 15px;
    }
  }
}

.gallery-control {
  position: absolute;
  bottom: 30px;
  right: 30px;
}
</style>
