<script setup>
import { ref } from 'vue'
import GeneralHeader from '@/components/GeneralHeader.vue'

import bilibiliLogo from '@/assets/images/logos/bilibili-logo.png'
import rosaLogo from '@/assets/images/logos/rosa-logo.svg'
import vantLogo from '@/assets/images/logos/vant-logo.png'
import weraceLogo from '@/assets/images/logos/werace-logo.svg'
import xtxLogo from '@/assets/images/logos/xtx-logo.png'

const headerContents = ref([
  { imgUrl: rosaLogo, name: '蔷薇丛的小书架' },
  { imgUrl: vantLogo, name: '智慧商城' },
  { imgUrl: xtxLogo, name: '小兔鲜儿' },
  { imgUrl: weraceLogo, name: 'WeRace' },
  { imgUrl: bilibiliLogo, name: 'B站首页复刻' }
])
</script>

<template>
  <span>
    <GeneralHeader></GeneralHeader>
    <header class="collection-index-header">
      <ul>
        <li v-for="content in headerContents" :key="content.imgUrl">
          <img :src="content.imgUrl" />
          <span>{{ content.name }}</span>
        </li>
      </ul>
    </header>
  </span>
</template>

<style lang="scss" scoped>
.collection-index-header {
  height: 150px;
  background-color: #222222;
  padding-top: 60px;

  ul {
    width: 100%;
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;

    li {
      width: 200px;
      margin: 0 5px;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: center;
      height: 120px;

      img {
        max-width: 70px;
        max-height: 100px;
        justify-self: center;
      }

      span {
        font-size: 0.8rem;
        color: #cfcfcf;
      }
    }
  }
}
</style>
