<script setup></script>

<template>
  <div class="container">
    <div class="window">
      <ul>
        <li></li>
        <li></li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  height: fit-content;
  background-color: #000;
  width: 100%;
  padding-top: 200px;
  padding-bottom: 170px;
}

.window {
  height: fit-content;
  background-color: cyan;
  width: 300px;

  // 取消 overflow 可查看全部颜色
  overflow: scroll;
}

ul {
  width: 100vw;
  height: 300px;
  display: flex;
  flex-direction: row;
  animation: scrolling 3s linear infinite;

  li {
    height: 300px;
    width: 30%;
    // 首尾颜色要一致
    background: linear-gradient(to right, cyan, green, pink, cyan);
  }
}

@keyframes scrolling {
  to {
    transform: translateX(-30%);
  }
}
</style>
