import '@babel/polyfill'
import Vue from 'vue'
import App from './App.vue'
import createRouter from '@router'
import createStore from '@state/store'

if (process.client) {
  require('./registerServiceWorker')
}

// Don't warn about using the dev version of Vue in development
Vue.config.productionTip = process.env.NODE_ENV === 'production'

export default () => {
  const store = createStore()
  const router = createRouter()

  return new Vue({
    router,
    store,
    render: h => h(App)
  })
}
