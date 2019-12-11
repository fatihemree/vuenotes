import Vue from 'vue'
import App from './App.vue'
import store from './store'
import custom from './assets/styles/custom.scss'

Vue.config.productionTip = false

new Vue({
  store,
  custom,
  render: h => h(App)
}).$mount('#app')
