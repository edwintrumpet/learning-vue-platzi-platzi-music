<template>
  <div id="app">
    <v-app>
        <v-container>
          <v-form class="d-flex align-baseline" @submit.prevent="search">
            <v-text-field
              type="text"
              label="Buscar canciones"
              placeholder="Buscar canciones"
              outlined
              v-model="searchQuery"
            />
            <v-btn
              color="primary"
              class="font-weight-bold ml-2"
              type="submit"
            >
              Buscar
            </v-btn>
            <v-btn
              color="error"
              class="ma-2 white--text font-weight-bold"
              fab
              small
            >
                x
            </v-btn>
          </v-form>
        </v-container>
        <v-container>
          <p>{{searchMessage}}</p>
          <v-list-item v-for="t in tracks" :key="t.name">
            <v-list-item-content>
              <v-list-item-title>
                {{ t.name }}
              </v-list-item-title>
              <v-list-item-subtitle>
                {{ t.artist }}
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-container>
    </v-app>
  </div>
</template>

<script>
const tracks = [
  { name: 'René', artist: 'Residente' },
  { name: 'Eres', artist: 'Café Tacvba' },
  { name: 'Frijolero', artist: 'Molotov' }
]
export default {
  name: 'app',
  data () {
    return {
      searchQuery: '',
      tracks: []
    }
  },
  methods: {
    search () {
      this.tracks = tracks
    }
  },

  computed: {
    searchMessage () {
      return `${this.tracks.length} resultados`
    }
  }
}
</script>
<style lang="scss">
</style>
