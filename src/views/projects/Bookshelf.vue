<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { ArrowDown } from '@element-plus/icons-vue'

import GeneralHeader from '@/components/GeneralHeader.vue'

const route = useRoute()

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
    <section class="highlights">highlights</section>
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
      background: linear-gradient(to right, rgba(#000, 0.9), rgba(#111, 0.2));
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
