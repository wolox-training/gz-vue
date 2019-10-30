import Vue from 'vue'
import VueI18n from 'vue-i18n'
import App from './App.vue'
import Vuelidate from 'vuelidate'
import router from './router'
import store from './store'
import { resource as messages } from './utils/resources'

Vue.config.productionTip = false
Vue.use(Vuelidate)
Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: 'es',
  messages
})

new Vue({
  i18n,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
