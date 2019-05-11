<template>
  <div id="app">
      <app-header/>
      <router-view/>
      <app-footer/>
  </div>
</template>

<script>

import TheHeader from './components/includes/TheHeader.vue'
import TheFooter from './components/includes/TheFooter.vue'

export default {
  name: 'app',
  components: {
      'app-header': TheHeader,
      'app-footer': TheFooter
  }
}
</script>

<style lang="scss">
    body, html {
        height: 100%;
    }

    body {
        padding-top: padding(top);
        padding-left: padding(side);
        padding-right: padding(side);
    }
</style>
