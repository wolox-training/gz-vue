import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const routes = { signup: 'signup', home: 'home', login: 'login' }

export default new Router({
  routes: [
    {
      path: '/',
      name: routes.home,
      component: () => import(/* webpackChunkName: "navbar" */ './components/NavBar.vue')
    },
    {
      path: '/login',
      name: routes.login,
      component: () => import(/* webpackChunkName: "login" */ './components/Login.vue')
    },
    {
      path: '/signup',
      name: routes.signup,
      component: () => import(/* webpackChunkName: "signup" */ './views/SignUp.vue')
    }
  ]
})
