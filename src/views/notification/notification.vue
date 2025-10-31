<script setup>
import { ref } from 'vue'
</script>

<template>
  <div class="temp">
    <div class="background-layer"></div>
    <!-- 网站公告 -->
    <div class="content">
      <h1>公告</h1>
      <div class="notifications">
        <strong>2025-10-31 19:20 预上线通知：</strong>
        发布 RC版本，除“逐雨之旅”文本内容以及「美术资源压缩」的任务，本网站基本接近 V1.0
        版本上线目标，信息已高度可参考。
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.temp {
  position: relative;
  width: 100%;
  height: 100vh;
  text-align: center;

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
    padding-top: 100px;

    h1 {
      font-size: 72px;
      letter-spacing: 3rem;
    }

    .notifications {
      padding: 10px 40px 0 40px;
    }
  }
}
</style>
