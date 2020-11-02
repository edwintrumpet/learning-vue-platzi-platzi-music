<template>
  <div id="app">
    <v-app>
      <div>
      <v-btn
        depressed
        elevation="2"
        color="secondary"
      >
        Primary
      </v-btn>
      </div>
    </v-app>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Vue works!'
    }
  }
}
</script>

<style lang="scss">
</style>
