import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/css/tailwind.css'
import '@/assets/css/general.css'
import store from './store'
import device from 'vue-device-detector'

Vue.config.productionTip = false
Vue.use(device)

Vue.mixin({
  methods: {
    formatNumber (number) {
      return new Intl.NumberFormat('en-EN', { style: 'currency', currency: 'EUR' }).format(number)
    }
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
