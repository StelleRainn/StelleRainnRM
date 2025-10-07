<script setup>
import { ref, onMounted, nextTick } from 'vue'
import { ArrowLeftBold, ArrowRightBold } from '@element-plus/icons-vue'

import { ArrowDown } from '@element-plus/icons-vue'

import GeneralHeader from '@/components/GeneralHeader.vue'

import xiaoju1 from '@/assets/images/xiaoju-1.jpeg'
import forest1 from '@/assets/images/forest-1.jpeg'
import miku1 from '@/assets/images/miku-1.jpeg'
import furina1 from '@/assets/images/furina-1.jpeg'

// 画廊相关：ref、限位与节流状态 （Generate by TRAE AI）
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

const highlights = ref([
  {
    imgUrl: xiaoju1,
    title: 'Vue3框架',
    desc: '基于Vue3框架打造。广泛应用了 Vue3 基础知识点。组合式API使代码编写更加灵活'
  },
  {
    imgUrl: forest1,
    title: 'Pinia持久化',
    desc: '使用Pinia完成时持久化管理。一段非常长的文本宣泄宣泄12额额2额而且委屈委屈额23456789我打完到位打完几个打卡给我的拉个我到了大啦我觉得拉跨给我来打卡公里外的过来拉开的结果我拉1'
  },
  { imgUrl: miku1, title: 'Vue Router', desc: 'SPA开发。在Vue Router加持下，页面开发更符合思维逻辑习惯' },
  { imgUrl: furina1, title: '工程管理', desc: '完备的 Git 体系' }
])

// 数组末尾填充冗余数据，动画循环时“以假乱真”
const featureList = ref([
  'Composition API',
  'Vue Router',
  'Single Page Application',
  'Element Plus',
  'Pinia',
  'Axios',
  'Composition API',
  'Vue Router'
])
const featureListRef = ref(null)
</script>

<template>
  <GeneralHeader></GeneralHeader>
  <div class="main-container">
    <section class="welcome">
      <div class="background-layer"></div>
      <div class="content-layer">
        <div class="intro">
          <h1 class="main-title">蔷薇丛的小书架</h1>
          <div class="introduction">从组合式API到Pinia持久化， 广泛实践Vue 3基础</div>
        </div>
        <div class="featureList" ref="featureListRef">
          <ul>
            <li v-for="feature in featureList" :key="feature">{{ feature }}</li>
          </ul>
        </div>
        <div class="check-next">
          <el-icon><ArrowDown /></el-icon>
        </div>
      </div>
    </section>
    <section class="highlights">
      <h1>重点一览</h1>
      <div class="highlights-gallery" ref="galleryContainerRef" @scroll="onGalleryScroll">
        <ul>
          <li v-for="highlight in highlights" :key="highlight">
            <img :src="highlight.imgUrl" alt="" />
            <h3>{{ highlight.title }}</h3>
            <p>{{ highlight.desc }}</p>
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
    </section>
    <section class="framework">framework</section>
    <section class="persistence">persistence</section>
    <section class="element-plus">element-plus</section>
    <section class="router-spa">router-spa</section>
    <section class="backend-interface">backend-interface</section>
    <section class="git-deploy">git-deploy</section>
    <section class="normalization">normalization</section>
  </div>
</template>

<style lang="scss" scoped>
.main-container {
  height: 100%;
  width: 100%;
  background: #000 !important;
  color: #fff;
}
.welcome {
  height: 100vh;
  width: 100%;
  position: relative;
  margin-bottom: 10px;

  .background-layer {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    width: 100%;
    height: 100%;
    background: url('@/assets/images/bookshelf.jpg') no-repeat bottom right/cover;
  }

  .content-layer {
    position: relative;
    z-index: 1;
    width: 100%;
    height: 100%;

    .intro {
      padding-top: 150px;
      margin-bottom: 150px;
      text-align: center;

      .main-title {
        font-size: 80px;
        letter-spacing: 1rem;
        margin-bottom: 10px;
      }
    }

    .featureList {
      text-align: center;
      height: 90px; // 展示窗口
      overflow: hidden; // 禁止用户滑动，以免动画展示效果出错

      ul {
        animation: scroll 10s linear 0s infinite normal backwards;
      }

      li {
        font-family: 'NotoSerifItalic';
        font-size: 25px;
        line-height: 40px;
      }
    }

    .check-next {
      position: absolute;
      width: 100%;
      height: fit-content;
      bottom: 20px;
      left: 0;
      font-size: 40px;
      text-align: center;

      .el-icon {
        animation: floatUpsideDown 1s linear 0s infinite alternate;
      }
    }

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: -1;
      background: linear-gradient(135deg, rgba(#000, 0.9), rgba(#111, 0.2));
    }
  }
}

.highlights {
  width: 100%;
  height: fit-content; // 内容决定高度
  padding: 10px 0 100px 48px;
  margin-bottom: 10px;
  position: relative;

  h1 {
    height: 170px;
    line-height: 170px;
    font-size: 60px;
    letter-spacing: 0.8rem;
    margin-bottom: 20px;
    padding-left: 40px;
  }

  .highlights-gallery {
    width: 100%;
    height: fit-content;
    overflow: scroll;

    ul {
      height: 100%;
      width: 100%;
      list-style: none;
      display: grid;
      grid-template-rows: 1fr;
      grid-template-columns: repeat(5, 1fr);
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
}

@keyframes scroll {
  to {
    // 严格与 li 中的行高匹配，数量要与数组中的真数据匹配
    transform: translateY(calc(-1 * 40px * 6));
  }
}

@keyframes floatUpsideDown {
  to {
    transform: translateY(-10px);
  }
}
</style>
