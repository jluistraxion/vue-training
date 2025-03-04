import { createWebHistory, createRouter } from 'vue-router'

const routes = [
  { 
    name: 'home',
    path: '/', 
    component: () => import('@/views/HomeView.vue')
  },
  { 
    name: 'products',
    path: '/products', 
    component: () => import('@/views/Products.vue')
  },
  {
    name: 'not-found',
    path: '/:pathMatch(.*)*',
    component: () => import('@/views/ErrorPageView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})


export default router