import FrontendPanel from '../layouts/frontendPanel/FrontendPanel.vue'
import HomeView from '../views/HomeView.vue'

export default {
    path: '/',
    component: FrontendPanel,
    redirect: '/home',

    children: [
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
  
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },

  ]
}


