<script>
import appConfig from '@src/app.config'
import Layout from '@layouts/main'
import HelloWorld from '@components/HelloWorld'

export default {
  head: {
    title: 'Главная',
    meta: [{ name: 'description', content: appConfig.description }]
  },
  components: { Layout, HelloWorld }
}
</script>

<template>
  <Layout class="home">
    <img
      src="@assets/logo.png"
      class="logo"
    >
    <hello-world />
  </Layout>
</template>

<style lang="scss">
.home {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-direction: column;
}

.logo {
  display: block;
}
</style>
