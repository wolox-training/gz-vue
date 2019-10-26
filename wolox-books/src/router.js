import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
export const routes = { signup: 'signup', home: 'home', login: 'login' }

export default new Router({
  routes: [
    {
      path: '/login',
      name: routes.login,
      component: () => import(/* webpackChunkName: "login" */ './views/Login.vue')
    },
    {
      path: '/signup',
      name: routes.signup,
      component: () => import(/* webpackChunkName: "signup" */ './views/SignUp.vue')
    },
    {
      path: '/home',
      name: routes.home,
      component: () => import(/* webpackChunkName: "Home" */ './views/Home.vue')
    },
    {
      path: '/',
      redirect: { name: routes.login }
    }
  ]
})
