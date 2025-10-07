<script setup>
import { ArrowDown } from '@element-plus/icons-vue'
import { ref } from 'vue'

import GeneralHeader from '@/components/GeneralHeader.vue'
import GeneralGallery from '@/components/GeneralGallery.vue'

import xiaoju1 from '@/assets/images/xiaoju-1.jpeg'
import forest1 from '@/assets/images/forest-1.jpeg'
import miku1 from '@/assets/images/miku-1.jpeg'
import furina1 from '@/assets/images/furina-1.jpeg'

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
      <GeneralGallery :galleryItems="highlights">
        <template #galleryTitle>重点一览</template>
      </GeneralGallery>
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
