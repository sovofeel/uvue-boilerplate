<script>
import appConfig from '@src/app.config'

export default {
  // TODO: нужно конструировать название и контент на основе категории + тест для этого
  head: {
    titleTemplate(title) {
      title = typeof title === 'function' ? title(this.$store) : title
      return title ? `${title} | ${appConfig.title}` : appConfig.title
    },
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'description', content: 'stie awesome' }
    ]
  }
}
</script>

<template>
  <div id="app">   
    <no-ssr>
      <vue-progress-bar/>
    </no-ssr>
    <div class="page">
      <router-view />
    </div>
  </div>
</template>
