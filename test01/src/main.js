import Vue from 'vue'
import App from './App.vue'
import store from './store'
import './assets/css/test01.css'

Vue.config.productionTip = false

new Vue({
  store, // #1 store 옵션에 의해 HelloWold.vue에서 this.$store 로 저장소 접근 가능
  render: h => h(App),
}).$mount('#app')
