import { ref } from 'vue'

import bilibiliLogo from '@/assets/images/logos/bilibili-down.png'
import rosaLogo from '@/assets/images/logos/rosa-down.png'
import vantLogo from '@/assets/images/logos/vant-down.png'
import weraceLogo from '@/assets/images/logos/u9-down.png'
import xtxLogo from '@/assets/images/logos/xtx-down.png'

export const headerContents = ref([
  { imgUrl: rosaLogo, name: '蔷薇丛的小书架' },
  { imgUrl: vantLogo, name: '智慧商城' },
  { imgUrl: xtxLogo, name: '小兔鲜儿' },
  { imgUrl: weraceLogo, name: 'WeRace' },
  { imgUrl: bilibiliLogo, name: 'B站首页复刻' }
])

export const galleryListContents = ref([
  {
    id: 1,
    routerName: 'bookshelf',
    imgUrl: rosaLogo,
    name: '蔷薇丛的小书架',
    desc: 'Vue 3 项目，大量使用 Element Plus 组件库'
  },
  {
    id: 2,
    routerName: 'shopping-mall',
    imgUrl: vantLogo,
    name: '智慧商城',
    desc: 'Vue 2 项目，配合 Vant UI 实现，移动端布局'
  },
  { id: 3, routerName: 'xtx', imgUrl: xtxLogo, name: '小兔鲜儿', desc: '纯 HTML + CSS 项目' },
  {
    id: 4,
    routerName: 'werace',
    imgUrl: weraceLogo,
    name: 'WeRace',
    desc: 'PHP & MySQL 项目，强化了前端基础，打通了基础全栈'
  },
  {
    id: 5,
    routerName: 'bilibili',
    imgUrl: bilibiliLogo,
    name: 'B站首页复刻',
    desc: '第一份前端工程，HTML + CSS + 少量 JS'
  }
])
