import Vue from 'vue'
import App from './App.vue'
import store from './store/modules/simple-store'
import './assets/css/test01.css'

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
