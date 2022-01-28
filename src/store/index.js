import { createStore } from "vuex"
import fighters from './fighters'

export default createStore({
  state () {
    return {
      count: 0
    }
  },
  modules: {
    fighters
  }
})