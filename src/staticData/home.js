import { ref } from 'vue'

import rosaCover from '@/assets/images/general/rosa-cover.png'
import dawnbreakCover from '@/assets/images/general/dawnbreak-cover.png'
import contactCover from '@/assets/images/general/contact-cover.png'
import playgroundCover from '@/assets/images/general/playground-cover.png'

import shoppingMallHeroBanner from '@/assets/images/shoppingMall/shoppingMall-hero-banner-uw.png'
import bookshelfHeroBanner from '@/assets/images/bookshelf/bookshelf-hero-banner-uw.png'
import bilibiliHeroBanner from '@/assets/images/bilibili/bilibili-hero-banner-uw.png'
import weraceHerobanner from '@/assets/images/werace/werace-hero-banner-uw.png'
import xtxHerobanner from '@/assets/images/xtx/xtx-hero-banner-uw.png'

export const projectsList = ref([
  {
    id: 1,
    routerName: 'bookshelf',
    bgUrl: bookshelfHeroBanner,
    name: '蔷薇丛的小书架',
    desc: 'Vue 3 项目，大量使用 Element Plus 组件库',
    onlineUrl: 'https://bookshlef-vue3-demo.vercel.app/',
    textTheme: '#fff'
  },
  {
    id: 2,
    routerName: 'shopping-mall',
    bgUrl: shoppingMallHeroBanner,
    name: '智慧商城',
    desc: 'Vue 2 项目，配合 Vant UI 实现，移动端布局',
    textTheme: '#000'
  },
  { id: 3, routerName: 'xtx', bgUrl: xtxHerobanner, name: '小兔鲜儿', desc: '纯 HTML + CSS 项目', textTheme: '#000' },
  {
    id: 4,
    routerName: 'werace',
    bgUrl: weraceHerobanner,
    name: 'WeRace',
    desc: 'PHP & MySQL 项目，强化了前端基础，打通了基础全栈',
    textTheme: '#fff'
  },
  {
    id: 5,
    routerName: 'bilibili',
    bgUrl: bilibiliHeroBanner,
    name: 'B站首页复刻',
    desc: '第一份前端工程，HTML + CSS + 少量 JS',
    textTheme: '#000'
  }
])

export const subBannerList = ref([
  { mainTitle: '"蔷薇" - The IP', subTitle: '一如雨中蔷薇，在星光与水流之间，静静盛放。', bgUrl: rosaCover },
  { mainTitle: '改创计划 S13: 破晓', subTitle: '"咫尺侵晨，所谓破晓，终将自由。"', bgUrl: dawnbreakCover },
  { mainTitle: '与我联系', subTitle: '你的意见，我听得见', bgUrl: contactCover },
  { mainTitle: '试验场', subTitle: '探索网站背后所采用的原型技术', bgUrl: playgroundCover }
])
