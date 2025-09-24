<script setup></script>

<template>
  <header>
    <slot>
      <ul>
        <li><el-link :underline="false" href="/">首页</el-link></li>
        <li><el-link :underline="false" href="/resume">简历</el-link></li>
        <li><el-link :underline="false" href="/collection">作品集</el-link></li>
        <li><el-link :underline="false" href="/chasing-rain">逐雨之旅</el-link><span></span></li>
        <li><el-link :underline="false" href="/rosa">蔷薇</el-link></li>
        <li><el-link :underline="false" href="/reform-create">改创计划</el-link></li>
        <li><el-link :underline="false" href="/contact">联系我</el-link></li>
        <li><el-link :underline="false" href="/playground">开发试验场</el-link></li>
      </ul>
    </slot>
  </header>
</template>

<style scoped lang="scss">
header {
  // 内容样式
  padding: 0 20px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;

  // 毛玻璃背景效果
  background: rgba(0, 0, 0, 0.5); // 半透明深色背景
  backdrop-filter: saturate(180%); // 关键：背景模糊和饱和度
  -webkit-backdrop-filter: blur(20px) saturate(180%); // Safari兼容

  border-bottom: 1px solid rgba(255, 255, 255, 0.1);

  ul {
    height: 100%;
    width: 56%;
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: space-between;

    li {
      padding: 0 8px;
      display: flex;
      flex-direction: column;
      align-items: center;

      .el-link {
        // 文字颜色样式 → 覆盖原el-link
        color: rgba(255, 255, 255, 1);
        font-size: 13px;
        letter-spacing: 0.3rem;
      }
    }
  }
}
</style>
