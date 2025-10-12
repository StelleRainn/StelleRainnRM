<script setup>
import { computed } from 'vue'
const props = defineProps({
  projectDetail: Object,
  projectIndex: Number || String
})

const isLeft = computed(() => props.projectIndex % 2 === 0)
</script>

<template>
  <div class="main-container" :class="{ isRight: !isLeft }" @click="console.log(props.projectIndex)">
    <div
      class="background-layer"
      :style="{
        backgroundImage: props.projectDetail.projectBgUrl ? `url(${props.projectDetail.projectBgUrl})` : `none`
      }"
    ></div>

    <div class="content-layer">
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
  overflow: hidden;

  display: flex;

  position: relative;
  box-shadow: 0 0 20px v-bind('projectDetail.shadowColor');
}

// 背景层
.background-layer {
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  width: 100%; // 根据最终图像决定是百分比(推荐：70%)还是定长（1000px）
  z-index: 0;

  // bgPosition和定位position的配合尚有瑕疵，考虑根据最终 素材 ，如要需要再做调整
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;

  border-radius: 30px;
}

// 内容层 - “创造一块玻璃”
.content-layer {
  // 遮罩 - 增强阅读体验
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(222, 222, 222, 0.3); // 为保证阅读体验， Alpha 透明度不宜低于 0.3
    z-index: -1;
    border-radius: 30px;
  }

  height: 100%;
  width: 700px;
  padding: 0 40px 40px 40px;

  margin-top: 20px;
  margin-bottom: 20px;

  position: relative;
  z-index: 2;

  box-shadow: 0 0 20px 10px rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(10px);
  border-radius: 30px;

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
  justify-content: end;

  .background-layer {
    top: 0;
    left: 0 !important; // 加入优先级，覆盖原定位
  }

  .project-name {
    text-align: end;
  }
}
</style>
