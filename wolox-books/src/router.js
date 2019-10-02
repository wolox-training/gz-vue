import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const routes = { signup: 'signup', home: 'home' }

export default new Router({
  routes: [
    {
      path: '/',
      name: routes.home,
      redirect: { name: routes.signup }
    },
    {
      path: '/signup',
      name: routes.signup,
      component: () => import(/* webpackChunkName: "signup" */ './views/SignUp.vue')
    }
  ]
})
