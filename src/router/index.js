import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    // 如果有保存的位置（比如浏览器前进后退），则返回保存的位置
    if (savedPosition) {
      return savedPosition
    }
    // 否则滚动到页面顶部
    return { top: 0 }
  },
  routes: [
    { path: '/', component: () => import('@/App.vue'), redirect: '/home' },
    { path: '/home', name: 'home', component: () => import('@/views/home/HomeIndex.vue') },
    { path: '/resume', name: 'resume', component: () => import('@/views/resume/ResumeIndex.vue') },
    { path: '/collection', name: 'collectionIndex', component: () => import('@/views/collection/CollectionIndex.vue') },
    { path: '/chasing-rain', name: 'chasing-rain', component: () => import('@/views/chasingRain/ChasingRain.vue') },
    { path: '/rosa', name: 'rosa', component: () => import('@/views/rosa/Rosa.vue') },
    { path: '/reform-create', name: 'reform-create', component: () => import('@/views/reformCreate/ReformCreate.vue') },
    { path: '/contact', name: 'contact', component: () => import('@/views/contact/Contact.vue') },
    {
      // 忽略父组件，仅利用路由父子关系（4.1+特性）
      path: '/project',
      children: [
        {
          path: 'bookshelf', // 使用相对路径，url渲染结果为 /project/bookshelf
          name: 'bookshelf',
          component: () => import('@/views/projects/Bookshelf.vue')
        },
        {
          path: 'shopping-mall',
          name: 'shopping-mall',
          component: () => import('@/views/projects/ShoppingMall.vue')
        },
        {
          path: 'xtx',
          name: 'xtx',
          component: () => import('@/views/projects/Xtx.vue')
        },
        {
          path: 'werace',
          name: 'werace',
          component: () => import('@/views/projects/WeRace.vue')
        },
        {
          path: 'bilibili',
          name: 'bilibili',
          component: () => import('@/views/projects/Bilibili.vue')
        }
      ]
    },
    {
      path: '/playground',
      children: [
        { path: 'try-elanchor', component: () => import('@/views/playground/single/TryElAnchor.vue') },
        {
          path: 'try-elanchor2',
          name: 'try-elanchor2',
          component: () => import('@/views/playground/single/TryElAnchor2.vue')
        },
        { path: 'chasing-rain-beta-1', component: () => import('@/views/playground/single/ChasingRainBeta1.vue') },
        { path: 'chasing-rain-beta-2', component: () => import('@/views/playground/single/ChasingRainBeta2.vue') },
        { path: 'continual-gradient', component: () => import('@/views/playground/single/ContinualGradient.vue') }
      ]
    }
  ]
})

export default router
