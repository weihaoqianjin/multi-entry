import Vue from 'vue'
import App from './beta.vue'
import router from '../../router'
 
Vue.config.productionTip = false
console.log('from beta main.js')
 
new Vue({
  router,
  render: h => h(App)
}).$mount('#beta')