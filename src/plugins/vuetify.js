import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify)

const opts = {
  theme: {
    themes: {
      light: {
        primary: '#00bfd6',
        secondary: '#ff9300',
        black: '#212121',
        error: colors.red.accent4
      }
    }
  }
}

export default new Vuetify(opts)
