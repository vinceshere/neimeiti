import Vue from 'vue'
import Vuex from 'vuex'

import artists from './store/artists'
import gameInfo from './store/gameInfo'
import gameState from './store/gameState'
import mutations from './store/mutations'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    artists,
    gameInfo,
    gameState
  },
  mutations
})
