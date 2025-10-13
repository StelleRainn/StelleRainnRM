<script setup>
import { ref, computed } from 'vue'
import { ArrowDown } from '@element-plus/icons-vue'

import HeroBanner from '@/views/home/components/HeroBanner.vue'
import ResumeBanner from './components/ResumeBanner.vue'
import PrimeBanner from './components/PrimeBanner.vue'
import SubBanner from './components/SubBanner.vue'

import { projectsList, subBannerList } from '@/staticData/home'

const dialogVisible = ref(true)

const containerRef = ref(null)
// 计算滚动偏移
const windowHeight = ref(window.innerHeight)
const viewportOffset = computed(() => {
  return windowHeight.value * 0.5
})

const handleClick = (e) => {
  e.preventDefault()
}
</script>

<template>
  <el-container class="home-container">
    <!-- 网站公告 -->
    <el-dialog v-model="dialogVisible" title="内测预览须知 / 公告" width="1000" :before-close="handleClose">
      <div style="margin-bottom: 10px">
        本网站仍在积极开发迭代阶段，截止本公告，大部分数据并非最终呈现效果，信息亦不真实，不具备参考价值，仅为测试样式/排版使用。如需详细信息，请联系作者。
      </div>
      <hr style="margin-bottom: 10px" />
      <h3 style="margin-bottom: 10px; font-size: 17px">参考信息：</h3>
      <ul>
        <li style="margin-bottom: 10px; font-size: 17px">2025年10月13日 下午 3:30</li>
        <li style="margin-bottom: 10px">
          <strong>首页 </strong>：
          信息基本完备，部分项目、简历、逐雨之旅的交互跳转尚未实现，请使用头部导航条跳转。底部“蔷薇”“改创计划”“联系我”“开发试验场”暂未开发。
        </li>
        <li style="margin-bottom: 10px">
          <strong>简历页 </strong>：
          个人信息与技术栈信息可参考。项目经历内的各种表述不具备参考性，系AI生成用以测试排版。
        </li>
        <li style="margin-bottom: 10px">
          <strong>作品集</strong>：
          目前已开发“蔷薇丛的小书架”，“智慧商城”，其他未开发。“蔷薇丛的小书架”信息基本可用，“智慧商城”信息未更新，不具备参考性。
        </li>
        <li style="margin-bottom: 10px"><strong>逐雨之旅</strong>：动效基本选定，故事内容不具备参考意义。</li>
        <li style="margin-bottom: 10px"><strong>开发试验场</strong>：可以正常测试。</li>
      </ul>
      <template #footer>
        <div class="dialog-footer">
          <el-button type="primary" @click="dialogVisible = false"> 好的 </el-button>
        </div>
      </template>
    </el-dialog>

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
      </el-anchor>
    </div>
    <el-main class="home-container-main">
      <div class="anchor-ref" ref="containerRef">
        <section id="banner1" class="hero-banner">
          <!-- height 高度要和 hero-banner 一致 -->
          <el-carousel height="750px" :interval="5000" :pause-on-hover="true" arrow="hover">
            <el-carousel-item v-for="project in projectsList" :key="project.id">
              <!-- 父传子：背景图、板块id、标题组 -->
              <HeroBanner :projectInfos="project">
                <template #main-title>{{ project.name }}</template>
                <template #sub-title>{{ project.desc }}</template>
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
          <SubBanner v-for="(item, index) in subBannerList" :key="index" :bgUrl="item.bgUrl">
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

    :deep(ul.el-carousel__indicators.el-carousel__indicators--horizontal) {
      bottom: 10px;
      background-color: rgba(0, 0, 0, 0.3);
      border-radius: 30px;
      padding: 5px 20px 10px;
      height: 32px;
      backdrop-filter: blur(1px);
    }
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
    line-height: 100px;
    text-align: center;

    text-align: center;
  }
}
</style>
