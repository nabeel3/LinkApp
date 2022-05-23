import AdminendPanel from '../layouts/adminPanel/AdminPanel.vue'

export default {
    path: '/admin',
    component: AdminendPanel,

    children: [
    {
      path: '/admin',
      name: '/admin',
      component: () => import('@/components/Pages/admin/Post/list.vue')
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
    {
      path: "/post/:id",
      name: "post-details",
      component: () => import("@/components/Pages/admin/Post/Post.vue")
    },

    {
      path: '/videos',
      name: '/videos',
      component: () => import('@/components/Pages/admin/Video/list.vue')
    },

    {
      path: '/add/video',
      name: '/add/video',
      component: () => import('@/components/Pages/admin/Video/Create.vue')
    },
    {
      path: "/video/:id",
      name: "video-details",
      component: () => import("@/components/Pages/admin/Video/Post.vue")
    },

  {
    path: '/tags',
    name: '/tags',
    component: () => import('@/components/Pages/admin/tags/List.vue')
  },

  {
    path: '/add/tag',
    name: '/add/tag',
    component: () => import('@/components/Pages/admin/tags/Create.vue')
  },
  {
    path: "/tag/:id",
    name: "tag-details",
    component: () => import("@/components/Pages/admin/tags/Tag.vue")
  },

  ]
}



