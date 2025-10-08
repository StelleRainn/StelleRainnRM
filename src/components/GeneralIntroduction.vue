<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({
  introItem: Object,
  themeSettings: String
})

const themeList = ref([
  { name: 'LightThemes1', label: 'rgb(255, 0, 34)', strongColor: '#000', normalColor: '#555' },
  { name: 'DarkThemes1', label: 'cyan', strongColor: '#fff', normalColor: '#b5b5b5' }
])
const theme = ref({})
onMounted(() => {
  switch (props.themeSettings) {
    case 'LightThemes1':
      theme.value = themeList.value[0]
      break
    case 'DarkThemes1':
      theme.value = themeList.value[1]
      break
    default:
      theme.value = themeList.value[0]
  }
})
</script>

<template>
  <div class="general-introduction">
    <div class="title">
      <div class="label" v-html="introItem.label"></div>
      <div v-html="introItem.slogan" class="slogan"></div>
    </div>
    <div class="desc" v-html="introItem.desc"></div>
    <div class="banner-pic">
      <img v-if="introItem.bannerPicUrl" :src="introItem.bannerPicUrl" alt="" />
      <p v-html="introItem.bannerPicFootage"></p>
    </div>
    <div class="emphasize" v-if="introItem.emphasizeList">
      <ul>
        <li v-for="emphasize in introItem.emphasizeList" :key="emphasize">
          <div class="em-title" v-html="emphasize.emTitle"></div>
          <div class="em-desc" v-html="emphasize.emDesc"></div>
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
  display: flex;
  flex-direction: column;
  align-items: center;

  // 注意 v-bind 的绑定方式，需要加引号
  color: v-bind('theme.strongColor');
}
.title {
  height: 180px;
  text-align: center;
  font-weight: bold;

  .label {
    color: v-bind('theme.label');
    font-size: 18px;
    height: 54px;
    line-height: 54px;
  }

  .slogan {
    font-size: 50px;
  }
}
.desc {
  width: 1200px;
  text-align: center;
  font-size: 18px;
  color: v-bind('theme.normalColor');
  padding: 60px 150px 0 100px;
  line-height: 30px;

  // 对于 v-html 渲染的内容，使用深度选择器 :deep() 穿透到这些内容。
  :deep(strong) {
    color: v-bind('theme.strongColor');
  }
}
.banner-pic {
  padding: 80px 0 0 0;
  text-align: center;

  img {
    width: 800px;
    object-fit: cover;
    object-position: center;
    margin-bottom: 20px;
  }

  p {
    font-size: 13px;
    color: v-bind('theme.normalColor');
  }
}
.emphasize {
  width: 100%;
  padding: 100px 0 0 0;

  ul {
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-evenly;
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
      color: v-bind('theme.normalColor');

      :deep(strong) {
        color: v-bind('theme.strongColor');
      }
    }
  }
}
</style>
