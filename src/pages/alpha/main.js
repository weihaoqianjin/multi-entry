import Vue from 'vue'
import App from './alpha.vue'
import router from '../../router'
 
Vue.config.productionTip = false
console.log('from alpha main.js')
 
new Vue({
  router,
  render: h => h(App)
}).$mount('#alpha')