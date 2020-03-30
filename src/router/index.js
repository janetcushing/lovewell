import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import { NavbarPlugin, DropdownPlugin, CollapsePlugin } from 'bootstrap-vue'


Vue.use(VueRouter)
Vue.use(NavbarPlugin)
Vue.use(DropdownPlugin)
Vue.use(CollapsePlugin)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/association',
    name: 'Association',
    component: () => import('../views/Association.vue')
  },
  {
    path: '/resources',
    name: 'Resources',
    component: () => import('../views/Resources.vue')
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: () => import('../views/Gallery.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
