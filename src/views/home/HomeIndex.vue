<script setup>
import { ref, computed } from 'vue'
import HeroBanner from '@/views/home/components/HeroBanner.vue'

import { ArrowDown } from '@element-plus/icons-vue'

// 导入图片
import xiaoju1 from '@/assets/images/xiaoju-1.jpeg'
import forest1 from '@/assets/images/forest-1.jpeg'
import miku1 from '@/assets/images/miku-1.jpeg'
import furina1 from '@/assets/images/furina-1.jpeg'

import ResumeBanner from './components/ResumeBanner.vue'
import PrimeBanner from './components/PrimeBanner.vue'
import SubBanner from './components/SubBanner.vue'

const containerRef = ref(null)
// 计算滚动偏移
const windowHeight = ref(window.innerHeight)
const viewportOffset = computed(() => {
  return windowHeight.value * 0.5
})

const bgUrls = ref([xiaoju1, forest1, miku1, furina1])
const subTitles = ref([
  { mainTitle: '蔷薇', subTitle: '向一朵玫瑰起誓', bgUrl: xiaoju1 },
  { mainTitle: '改创计划', subTitle: '崭新的黎明，近在咫尺', bgUrl: forest1 },
  { mainTitle: '与我联系', subTitle: '你的意见，我听得见', bgUrl: miku1 },
  { mainTitle: '试验场', subTitle: '探索网站背后所采用的原型技术', bgUrl: furina1 }
])

const handleClick = (e) => {
  e.preventDefault()
}
</script>

<template>
  <el-container class="home-container">
    <div class="home-container-aside">
      <!-- 自定义滚动容器需要添加offset和e.preventDefault -->
      <el-anchor
        :container="containerRef"
        direction="vertical"
        type="default"
        :offset="viewportOffset"
        @click="handleClick"
        :marker="false"
      >
        <el-anchor-link href="#banner1">
          <el-icon size="50"><ArrowDown /></el-icon>
        </el-anchor-link>
        <el-anchor-link href="#banner2">
          <el-icon size="50"><ArrowDown /></el-icon>
        </el-anchor-link>
        <el-anchor-link href="#banner3">
          <el-icon size="50"><ArrowDown /></el-icon>
        </el-anchor-link>
        <el-anchor-link href="#banner4">
          <el-icon size="50"><ArrowDown /></el-icon>
        </el-anchor-link>
        <!-- <el-anchor-link href="#footer">
          <el-icon size="50"><ArrowDown /></el-icon>
        </el-anchor-link> -->
      </el-anchor>
    </div>
    <el-main class="home-container-main">
      <div class="anchor-ref" ref="containerRef">
        <section id="banner1" class="hero-banner">
          <!-- height 高度要和 hero-banner 一致 -->
          <el-carousel height="750px" interval="5000" :pause-on-hover="false" arrow="never">
            <el-carousel-item v-for="(bgUrl, index) in bgUrls" :key="index">
              <!-- 父传子：背景图、板块id、标题组 -->
              <HeroBanner :bgUrl="bgUrl" :artworkId="index">
                <template #main-title>项目名称 - {{ index }}</template>
                <template #sub-title>描述 - {{ index }}</template>
              </HeroBanner>
            </el-carousel-item>
          </el-carousel>
        </section>
        <section id="banner2" class="resume-banner">
          <ResumeBanner></ResumeBanner>
        </section>
        <section id="banner3" class="prime-banner">
          <PrimeBanner></PrimeBanner>
        </section>
        <section id="banner4" class="sub-banner">
          <SubBanner v-for="(item, index) in subTitles" :key="index" :bgUrl="item.bgUrl">
            <template #main-title>{{ item.mainTitle }}</template>
            <template #sub-title>{{ item.subTitle }}</template>
          </SubBanner>
        </section>
        <section id="footer">
          <footer class="home-footer">Copyright © 2025 水川雨蔷薇. 保留所有权利。</footer>
        </section>
      </div>
    </el-main>
  </el-container>
</template>

<style lang="scss" scoped>
.home-container {
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
}

.home-container-aside {
  z-index: 999;
  position: fixed;
  left: 5px;
  top: 45vh;
  transform: translateY(-50%);

  display: flex;

  .el-anchor {
    background: none;

    .el-anchor__item {
      padding: 10px 0;
      &:nth-child(1) {
        animation: floating 1s linear infinite alternate forwards;
      }
      &:nth-child(2) {
        animation: floating 1s linear 0.4s infinite alternate forwards;
      }
      &:nth-child(3) {
        animation: floating 1s linear 0.6s infinite alternate forwards;
      }
      &:nth-child(4) {
        animation: floating 1s linear 0.8s infinite alternate forwards;
      }
      &:nth-child(5) {
        animation: floating 1s linear 1s infinite alternate forwards;
      }
    }
  }
}

@keyframes floating {
  to {
    transform: translateY(10px);
  }
}

.home-container-main {
  padding: 0;

  .anchor-ref {
    max-height: 100vh;
    overflow-y: auto; // 滚动条
  }

  .hero-banner {
    height: 750px;
  }

  .resume-banner {
    margin-top: 10px;
    height: 700px;
  }
  .prime-banner {
    margin-top: 10px;
    height: 700px;
  }

  .sub-banner {
    margin: 10px;
    height: fit-content; // 子组件有确定的高度
    display: grid; // 首次使用网格布局
    grid-template-columns: repeat(2, 1fr); // 相当于 1fr 1fr，即存在两份网格元素，且按1:1平分剩余空间
    row-gap: 10px; // gutter 间隙控制
    column-gap: 10px;
  }

  .home-footer {
    height: 100px;
    background-color: #f3f3f3;
    text-align: center;
  }
}
</style>
