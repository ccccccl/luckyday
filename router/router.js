import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import("../pages/index/index.vue")
  },
  {
    path: 'holiday',
    component: () => import("../pages/holiday/holiday.vue")
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes // (缩写) 相当于 routes: routes
})

export default router;