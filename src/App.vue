<template>
  <div id="app">
    <v-app>
        <v-card width="320" min-height="409" class="ma-auto">
          <v-img height="80" :src="require('./assets/logo.jpg')" contain />
          <v-card-title class="d-flex justify-center font-weight-black primary--text">
            Registro de estación Platzi
          </v-card-title>
          <v-card-text>
            <v-form>
              <v-container class="d-flex flex-column">
                <v-text-field label="Nombre" color="secondary" />
                <v-text-field label="Apellido" color="secondary" />
                <v-text-field label="Cargo" color="secondary" />
                <v-btn class="align-self-end font-weight-bold" color="primary" type="submit">Enviar</v-btn>
              </v-container>
            </v-form>
          </v-card-text>
        </v-card>
    </v-app>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {}
  }
}
</script>
<style lang="scss">
</style>
