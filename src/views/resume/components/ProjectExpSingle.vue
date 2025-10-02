<script setup>
import { computed } from 'vue'
const props = defineProps({
  projectDetail: Object,
  projectIndex: Number || String
})

const isLeft = computed(() => props.projectIndex % 2 === 0)
</script>

<template>
  <div class="main-container" @click="console.log(props.projectIndex)">
    <div
      class="background-layer"
      :style="{
        backgroundImage: props.projectDetail.projectBgUrl ? `url(${props.projectDetail.projectBgUrl})` : `none`
      }"
    ></div>

    <div class="content-layer" :class="{ isRight: !isLeft }">
      <div class="project-name">
        {{ props.projectDetail.projectName }}
      </div>
      <div class="project-desc">
        <ul>
          <li v-for="desc in props.projectDetail.projectDesc" :key="desc">{{ desc }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
// 组件大小由 ResumeIndex 指定，这里只负责撑满
.main-container {
  height: 100%;
  width: 100%;
  border-radius: 30px;
  box-shadow: 5px 5px 5px 2px rgba(0, 0, 0, 0.2);
  position: relative;

  overflow: hidden;
}

.background-layer {
  height: 100%;
  width: 100%;
  z-index: 0;

  background-position: bottom left;
  background-repeat: no-repeat;
  background-size: cover;
  filter: blur(5px);

  position: absolute;
  top: 0;
  left: 0;

  // 增强阅读体验
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.1);
    z-index: -1;
  }
}

.content-layer {
  height: 100%;
  width: 100%;
  position: relative;
  z-index: 2;
  padding-bottom: 40px;

  .project-name {
    padding: 0 20px;
    height: 100px;
    line-height: 100px;
    font-size: 32px;
    font-weight: bold;
    letter-spacing: 0.3rem;
  }

  .project-desc {
    display: flex;

    ul {
      list-style: none;
      display: flex;
      flex-direction: column;
    }

    ul li {
      margin-bottom: 20px;
      border: #8f8f8f solid 0.5px;
      border-radius: 30px;
      padding: 10px 20px;
    }
  }
}

// 如果在右边，则右对齐
.isRight {
  .project-name {
    text-align: end;
  }
}
</style>
