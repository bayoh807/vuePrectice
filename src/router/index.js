import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
      path: '/',
    //   component: require('@/views/index.vue').default
    },
    {
      path: '/about',
    //   component: require('@/views/about.vue').default
    },
    {
      path: '/:catchAll(.*)',
    //   component: require('@/views/404.vue').default
    }
  ]
  
  const router = createRouter({
    history: createWebHistory(),
    routes
  })
  
  export default router