import '@babel/polyfill'
import Vue from 'vue'
import App from './App.vue'
import { progressbarInit } from '@plugins/progress'

if (process.client) {
  require('./registerServiceWorker')
}

// Don't warn about using the dev version of Vue in development
Vue.config.productionTip = process.env.NODE_ENV === 'production'

export default ({ router, store }) => {
  const app = new Vue({
    router,
    store,
    render: h => h(App)
  })

  // If running inside Cypress
  if (process.client && window.Cypress) {
    // Attach the app to the window, which can be useful
    // for manually setting state in Cypress commands
    // such as `cy.logIn()`
    window.__app__ = app
  }

  progressbarInit(app, router)

  return app
}
