
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },
  {
    path: '/login',
    component: () => import('layouts/Logon.vue'),
    children: [
      { path: '', component: () => import('pages/login.vue') }
    ]
  },
  {
    path: '/register',
    component: () => import('layouts/Logon.vue'),
    children: [
      { path: '', component: () => import('pages/register.vue') }
    ]
  },
  {
    path: '/preregistered',
    component: () => import('layouts/Logon.vue'),
    children: [
      { path: '', component: () => import('pages/preRegistered.vue') }
    ]
  },
  {
    path: '/nonregistered',
    component: () => import('layouts/Logon.vue'),
    children: [
      { path: '', component: () => import('pages/nonRegistered.vue') }
    ]
  },
  {
    path: '/registercnpj',
    component: () => import('layouts/Logon.vue'),
    children: [
      { path: '', component: () => import('pages/registerCNPJ.vue') }
    ]
  },
  {
    path: '/cnpjdados',
    component: () => import('layouts/Logon.vue'),
    children: [
      { path: '', component: () => import('pages/registerCNPJDados.vue') }
    ]
  },
  {
    path: '/buscarendereco',
    component: () => import('layouts/Logon.vue'),
    children: [
      { path: '', component: () => import('pages/buscarCEP.vue') }
    ]
  },
  {
    path: '/registrarendereco',
    component: () => import('layouts/Logon.vue'),
    children: [
      { path: '', component: () => import('pages/registerAddress.vue') }
    ]
  },
  {
    path: '/registerreview',
    component: () => import('layouts/Logon.vue'),
    children: [
      { path: '', component: () => import('pages/registerReview.vue') }
    ]
  },
  {
    path: '/confirmation',
    component: () => import('layouts/Logon.vue'),
    children: [
      { path: '', component: () => import('pages/registerSaved.vue') }
    ]
  },
  {
    path: '/shop',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/shop.vue') }
    ]
  },
  {
    path: '/produto',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/produtoVender.vue') }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes
