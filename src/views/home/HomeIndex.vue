<script setup>
import { ref, computed } from 'vue'
import HeroBanner from '@/views/home/HeroBanner.vue'

import { Orange } from '@element-plus/icons-vue'

// 导入图片
import xiaoju1 from '@/assets/images/xiaoju-1.jpeg'
import forest1 from '@/assets/images/forest-1.jpeg'
import miku1 from '@/assets/images/miku-1.jpeg'
import furina1 from '@/assets/images/furina-1.jpeg'
import ResumeBanner from './ResumeBanner.vue'

const containerRef = ref(null)
// 计算滚动偏移
const windowHeight = ref(window.innerHeight)
const viewportOffset = computed(() => {
  return windowHeight.value * 0.5
})

const bgUrls = ref([xiaoju1, forest1, miku1, furina1])

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
      >
        <el-anchor-link href="#banner1">
          <el-icon class="is-loading" size="50">
            <Orange />
          </el-icon>
        </el-anchor-link>
        <el-anchor-link href="#banner2">
          <el-icon class="is-loading" size="50">
            <Orange />
          </el-icon>
        </el-anchor-link>
        <el-anchor-link href="#banner3">
          <el-icon class="is-loading" size="50">
            <Orange />
          </el-icon>
        </el-anchor-link>
      </el-anchor>
    </div>
    <el-main class="home-container-main">
      <div class="anchor-ref" ref="containerRef">
        <section id="banner1" class="hero-banner">
          <!-- height 高度要和 hero-banner 一致 -->
          <el-carousel height="750px" interval="5000">
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
        <section id="banner2" class="prime-banner">逐雨</section>
        <section id="banner3" class="sub-banner">蔷薇、改创计划、与我联系、开发试验场</section>
      </div>
    </el-main>
  </el-container>
</template>

<style lang="scss" scoped>
.home-container {
  min-height: 100vh;
  position: relative;
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
    }
  }
}

.home-container-main {
  padding: 0;

  .anchor-ref {
    max-height: 100vh;
    overflow-y: scroll;
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
    background-color: lightpink;
  }

  .sub-banner {
    min-height: 550px;
    margin-top: 10px;
    background-color: lightcoral;
  }
}
</style>
