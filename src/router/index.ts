import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/zvonok-test/', component: () => import('@/pages/index.vue') },
  ],
})

export default router
