<script setup></script>

<template>
  <div class="temp">
    <div class="background-layer"></div>
    <h1>更新中，更懂你。</h1>
  </div>
</template>

<style lang="scss" scoped>
.temp {
  position: relative;
  width: 100%;
  height: 100vh;

  h1 {
    // 彩色文字
    background: linear-gradient(to right, #ff42a4, #22cfff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    padding-top: 40vh;
    text-align: center;
    font-size: 64px;
    letter-spacing: 1rem;
    z-index: 1;
  }

  .background-layer {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: linear-gradient(45deg, #81b8ef, #f2cfcf);
    z-index: -1;
  }
}
</style>
