import { ref } from 'vue'

import xiaoju1 from '@/assets/images/xiaoju-1.jpeg'
import forest1 from '@/assets/images/forest-1.jpeg'
import miku1 from '@/assets/images/miku-1.jpeg'
import furina1 from '@/assets/images/furina-1.jpeg'

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

// export projectsColorTheme = ref([

// ])

export const subBannerList = ref([
  { mainTitle: '蔷薇', subTitle: '向一朵玫瑰起誓', bgUrl: xiaoju1 },
  { mainTitle: '改创计划', subTitle: '崭新的黎明，近在咫尺', bgUrl: forest1 },
  { mainTitle: '与我联系', subTitle: '你的意见，我听得见', bgUrl: miku1 },
  { mainTitle: '试验场', subTitle: '探索网站背后所采用的原型技术', bgUrl: furina1 }
])
