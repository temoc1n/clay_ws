import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/home',
    name: 'home',
    component: () => import('../views/DashboardView.vue')
  },
  {
    path: '/shop',
    name: 'shop',
    component: () => import('../views/StoreView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/StoreView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/StoreView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
