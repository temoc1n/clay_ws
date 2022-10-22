import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('../views/DashboardView.vue')
  },
  {
    path: '/store',
    name: 'store',
    component: () => import('../views/StoreView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
