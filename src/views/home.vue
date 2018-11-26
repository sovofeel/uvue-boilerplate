<script>
import appConfig from '@src/app.config'
import Layout from '@layouts/main'

export default {
  head: {
    title: 'Главная',
    meta: [{ name: 'description', content: appConfig.description }]
  },
  components: { Layout }
}
</script>

<template>
  <Layout>
    <h1>Home page</h1>
  </Layout>
</template>
