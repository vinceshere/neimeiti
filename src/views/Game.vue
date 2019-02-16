<template>
  <section class="nes-container is-rounded text-center">
    <div class="flex-container">
      <score></score>
      <timer></timer>
    </div>
    <game-image></game-image>
    <lives-indicator></lives-indicator>
  </section>
</template>

<script>
import store from '@/store'

import Score from '@/components/Score'
import LivesIndicator from '@/components/LivesIndicator'
import Timer from '@/components/Timer'
import GameImage from '@/components/GameImage'

export default {
  name: 'game',
  data () {
    return {
      timer: null
    }
  },
  components: {
    'score': Score,
    'timer': Timer,
    'lives-indicator': LivesIndicator,
    'game-image': GameImage
  },
  beforeRouteEnter: (to, from, next) => {
    if (!store.state.gameState.gameStarted) {
      return next({ name: 'home' })
    }

    if (store.state.gameState.gameEnded) {
      return next({ name: 'game-over' })
    }

    next()
  },
  methods: {

  }
}
</script>
