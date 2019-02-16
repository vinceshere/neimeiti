<template>
  <button
    type="button"
    v-if="$store.state.gameInfo.playerName"
    @click="startGame"
    class="nes-btn is-success">Iniciar</button>
</template>

<script>
export default {
  name: 'button-start-game',
  data () {
    return {
      hasMicPermission: false,
      isTalking: false,
      playerName: null
    }
  },
  components: {
  },
  methods: {
    startGame () {
      this.$store.commit('gameStarted')
      this.$router.push({ name: 'game' })
    }
  }
}
</script>
