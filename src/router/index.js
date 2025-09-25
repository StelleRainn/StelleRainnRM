import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: import('@/App.vue'), redirect: '/home' },
    { path: '/home', component: import('@/views/home/HomeIndex.vue') },
    { path: '/resume', component: import('@/views/resume/Resume.vue') },
    { path: '/collection', component: import('@/views/collection/Collection.vue') },
    { path: '/chasing-rain', component: import('@/views/chasingRain/ChasingRain.vue') },
    { path: '/rosa', component: import('@/views/rosa/Rosa.vue') },
    { path: '/reform-create', component: import('@/views/reformCreate/ReformCreate.vue') },
    { path: '/contact', component: import('@/views/contact/Contact.vue') },
    {
      path: '/playground',
      component: import('@/views/playground/Index.vue'),
      children: [
        { path: '/playground/try-elanchor', component: import('@/views/playground/TryElAnchor.vue') },
        { path: '/playground/try-elanchor2', component: import('@/views/playground/TryElAnchor2.vue') }
      ]
    }
  ]
})

export default router
