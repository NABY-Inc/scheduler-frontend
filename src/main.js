import Vue from 'vue'
import API from './api'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'

Vue.config.productionTip = false
// set global axios like this
Vue.prototype.http = API

new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
