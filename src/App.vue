<template>
  <div id="app">
      <app-header/>
      <router-view/>
      <app-footer/>
  </div>
</template>

<script>

import TheHeader from '@/components/includes/TheHeader'
import TheFooter from '@/components/includes/TheFooter'

export default {
  name: 'app',
  components: {
      'app-header': TheHeader,
      'app-footer': TheFooter
  }
}
</script>

<style lang="scss">
    @import url('https://fonts.googleapis.com/css?family=Poppins:400,700');

    body, html {
        height: 100%;
        scroll-behavior: smooth;
    }

    body {
        padding-top: padding(top);
        padding-left: padding(side);
        padding-right: padding(side);
        font-family: 'Poppins', sans-serif;
    }
</style>
