<template>
  <section class="nes-container is-rounded text-center">
    <h2>Game Over</h2>
    <p>Pontos: {{$store.state.gameInfo.score}}</p>

    <button
      type="button"
      @click="playAgain"
      class="nes-btn is-success">Jogar novamente</button>
  </section>
</template>

<script>
import store from '@/store'

export default {
  name: 'game',
  beforeRouteEnter: (to, from, next) => {
    if (!store.state.gameState.gameEnded) {
      return next({ name: 'home' })
    }

    next()
  },
  mounted () {
    let sound = '/audio/game-over.wav'
    var audio = new Audio(sound)
    audio.play()
  },
  methods: {
    playAgain () {
      this.$store.commit('resetGame')
      this.$router.push({ name: 'home' })
    }
  }
}
</script>
