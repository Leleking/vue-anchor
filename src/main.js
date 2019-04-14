import Vue from 'vue'
import App from './App.vue'
import { router } from './router'
import store from './store'
import plugins  from './utils/plugins'
Vue.use(plugins)
Vue.config.productionTip = false

/* eslint-disable no-new*/
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
