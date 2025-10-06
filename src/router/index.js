import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: () => import('@/App.vue'), redirect: '/home' },
    { path: '/home', component: () => import('@/views/home/HomeIndex.vue') },
    { path: '/resume', component: () => import('@/views/resume/ResumeIndex.vue') },
    { path: '/collection', component: () => import('@/views/collection/CollectionIndex.vue') },
    { path: '/chasing-rain', component: () => import('@/views/chasingRain/ChasingRain.vue') },
    { path: '/rosa', component: () => import('@/views/rosa/Rosa.vue') },
    { path: '/reform-create', component: () => import('@/views/reformCreate/ReformCreate.vue') },
    { path: '/contact', component: () => import('@/views/contact/Contact.vue') },
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
      component: () => import('@/views/playground/PlaygroundIndex.vue'),
      children: [
        { path: 'try-elanchor', component: () => import('@/views/playground/single/TryElAnchor.vue') },
        { path: 'try-elanchor2', component: () => import('@/views/playground/single/TryElAnchor2.vue') }
      ]
    }
  ]
})

export default router
