<script setup>
import { ref } from 'vue'
</script>

<template>
  <div class="general-introduction">
    <div class="title">
      <div class="label"><slot name="label">Vue.js 3</slot></div>
      <div class="slogan">
        <slot name="slogan">渐进式框架<br />快速上手，超高效率</slot>
      </div>
    </div>
    <div class="desc">
      项目使用 <strong>Vue.js 3</strong> 作为主要开发框架，相比 Vue 2，Vue 3 提供了许多方便的新特性，例如<strong
        >组合式 API</strong
      >、<strong>内置语法糖</strong>、<strong>更高效的响应式系统</strong>，极大提高了项目的开发效率和灵活性。借助
      <strong>Vite</strong> 这一新一代构建工具，冷启动速度提升
      <strong>10 倍以上</strong>，热更新更是毫秒级响应，彻底告别“改一行等半天”的痛点。
      <strong>Pinia</strong> 作为官方推荐状态管理库，轻量、直观且完全支持 TypeScript，彻底摒弃了 mutations
      的冗余概念。再加上
      <strong>Vue Router 4</strong>
      的动态路由、路由级代码分割与导航守卫增强，整个技术栈在<strong>性能、可维护性与开发体验</strong>三个维度全面跃升，为复杂单页应用（SPA）与渐进式
      Web 应用提供了坚实底座。
    </div>
    <div class="banner-pic">
      <img src="@/assets/images/createvue.png" alt="" />
      <p>* 在 Terminal 使用使用简单的命令即可快速搭建一个功能完备的 Vue App</p>
    </div>
    <div class="emphasize">
      <ul>
        <li>
          <div class="em-title">快速搭建</div>
          <div class="em-desc">
            使用使用简单的命令即可快速搭建一个功能完备的。<strong>内置 dev, build, lint脚本</strong>使调试更为灵活
          </div>
        </li>
        <li>
          <div class="em-title">响应式数据</div>
          <div class="em-desc">通过 ref 引用标识符轻松创建响应式数据，使用插值表达式即可在模板中使用</div>
        </li>
        <li>
          <div class="em-title">组合式 API</div>
          <div class="em-desc">
            使用使用简单的命令即可快速搭建一个功能完备的。内置 dev，build，lint脚本使调试更为灵活
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.general-introduction {
  width: 100%;
  height: fit-content; // 内容决定高度
  padding: 40px;
  margin-bottom: 10px;
  position: relative;
  // background-color: darkcyan;
}
.title {
  height: 180px;
  text-align: center;
  font-weight: bold;

  .label {
    color: cyan;
    font-size: 18px;
    height: 54px;
    line-height: 54px;
  }

  .slogan {
    font-size: 50px;
  }
}
.desc {
  width: 100%;
  text-align: center;
  font-size: 18px;
  color: rgba($color: #b5b5b5, $alpha: 1);
  padding: 60px 150px 0 100px;
  line-height: 30px;

  strong {
    color: #fff;
  }
}
.banner-pic {
  padding: 80px 0 0 0;
  text-align: center;

  img {
    width: 800px;
    object-fit: cover;
    object-position: center;
  }

  p {
    font-size: 13px;
    color: rgba($color: #b5b5b5, $alpha: 1);
  }
}
.emphasize {
  width: 100%;
  padding: 100px 60px 0 60px;

  ul {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
  }

  ul > li {
    width: 300px;

    .em-title {
      height: 80px;
      line-height: 80px;
      font-size: 20px;
      font-weight: bold;
      border-bottom: #6a6a6a solid 0.3px;
    }

    .em-desc {
      padding: 30px 0;
      color: #b5b5b5;

      strong {
        color: #fff;
      }
    }
  }
}
</style>
