import AdminendPanel from '../layouts/adminPanel/AdminPanel.vue'

export default {
    path: '/admin',
    component: AdminendPanel,

    children: [
    {
      path: '/admin',
      name: '/admin',
      component: () => import('@/components/Pages/admin/Home.vue')
    },

    {
      path: '/posts',
      name: '/posts',
      component: () => import('@/components/Pages/admin/Post/list.vue')
    },

    {
      path: '/add',
      name: '/add',
      component: () => import('@/components/Pages/admin/Post/Create.vue')
    },

  

    
  

  ]
}



