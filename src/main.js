import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  store.state.gameState.isLoading = true
  next()
})

router.afterEach((to, from) => {
  store.state.gameState.isLoading = false
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
