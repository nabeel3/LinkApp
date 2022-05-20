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
    {
      path: "/post/:id",
      name: "post-details",
      component: () => import("@/components/Pages/admin/Post/Post.vue")
    },

    {
      path: '/video',
      name: '/video',
      component: () => import('@/components/Pages/admin/Video/list.vue')
    },

    {
      path: '/ad/video',
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
    component: () => import('@/components/Pages/admin/Tag/list.vue')
  },

  {
    path: '/add/tag',
    name: '/add/tag',
    component: () => import('@/components/Pages/admin/Tag/Create.vue')
  },
  {
    path: "/tag/:id",
    name: "tag-details",
    component: () => import("@/components/Pages/admin/Tag/Post.vue")
  },

  ]
}



