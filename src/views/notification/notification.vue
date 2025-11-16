<script setup>
import { ref } from 'vue'
</script>

<template>
  <div class="temp">
    <div class="background-layer"></div>
    <!-- 网站公告 -->
    <div class="content">
      <h1 style="text-align: center">公告</h1>
      <div class="notifications">
        <p class="notice-time"><strong>2025-11-16 19:40 优化：</strong></p>
        <p class="notice-main">
          本次更新使用 keep-alive 对页面进行了缓存优化，避免了重复加载，提升了用户体验。另外，加入了 404 页面。
        </p>
      </div>
      <div class="notifications">
        <p class="notice-time"><strong>2025-11-09 13:50 正式版上线通知：</strong></p>
        <p class="notice-main">
          Version 1.0.0 正式上线！全部页面布局完成，所有信息已完备，可参考；部分页面不在 V1.0.0
          的开发计划内，也已通过美术占位的“更新中”布局，打造良好体验。
        </p>
      </div>
      <div class="notifications">
        <p class="notice-time"><strong>2025-10-31 19:20 预上线通知：</strong></p>
        <p class="notice-main">
          发布 RC版本，除“逐雨之旅”文本内容以及「美术资源压缩」的任务，本网站基本接近 V1.0
          版本上线目标，信息已高度可参考。
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.temp {
  position: relative;
  width: 100%;
  min-height: 100vh;

  .background-layer {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(135deg, #4bccef, #f47b2a);
    z-index: -1;
  }

  .content {
    padding: 100px 30px 0 30px;

    h1 {
      font-size: 72px;
      letter-spacing: 3rem;
    }

    .notifications {
      padding: 15px 0;

      .notice-time {
        margin-bottom: 5px;
      }
    }
  }
}
</style>
