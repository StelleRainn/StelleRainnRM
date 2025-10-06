<script setup>
import router from '@/router'
import { ArrowRight } from '@element-plus/icons-vue'

const props = defineProps({
  id: Number || String,
  imgUrl: String,
  routerName: String
})

const onVisit = () => {
  router.push({
    name: props.routerName
  })
}
</script>

<template>
  <div class="main-container">
    <img @click="onVisit" :src="props.imgUrl" />
    <div class="project-name">
      <slot name="project-name">default-name</slot>
    </div>
    <div class="project-desc">
      <slot name="project-desc"> default-desc </slot>
    </div>
    <div class="button-group">
      <el-button type="primary" plain round size="large">
        访问 Github
        <el-icon><ArrowRight /></el-icon>
      </el-button>
      <el-button @click="onVisit" type="primary" round size="large">在线体验</el-button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.main-container {
  height: 100%;
  width: 100%;
  padding-top: 30px;
  text-align: center;

  img {
    object-position: center;
    object-fit: cover;
    width: 95%;
    height: 400px;
    box-sizing: border-box;
    border-radius: 30px;
    margin-bottom: 30px;
    background-color: black;
    transition: all 0.3s ease-in-out;

    &:hover {
      transform: scale(1.02);
      cursor: pointer;
    }
  }

  .project-name {
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 30px;
  }

  .project-desc {
    padding: 0 40px;
    height: 100px;
  }

  .el-button {
    font-family: 'NotoSerifSC';
  }
}
</style>
