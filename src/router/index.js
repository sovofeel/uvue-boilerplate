import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'

Vue.use(Router)

export default () => {
  const router = new Router({
    routes,
    // Use the HTML5 history API (i.e. normal-looking routes)
    // instead of routes with hashes (e.g. example.com/#/about).
    // This may require some server configuration in production:
    // https://router.vuejs.org/en/essentials/history-mode.html#example-server-configurations
    mode: 'history',
    // чтобы был завершающий / у ссылок
    pathToRegexOptions: { strict: true }
  })
  return router
}
