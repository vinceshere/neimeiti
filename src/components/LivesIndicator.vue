<template>
  <div class="lifes">
   <span>
     <span>Vidas:</span>
     <i v-for="(life, index) in $store.state.gameState.lifesRemaining" v-bind:key="index" class="nes-icon heart is-small"></i>
   </span>
  </div>
</template>

<script>
export default {
  name: 'lives-indicator',
  computed: {
    lifesRemaining () {
      return this.$store.state.gameState.lifesRemaining
    }
  },
  watch: {
    lifesRemaining (newCount, oldCount) {
      if (!newCount.length) {
        this.$store.commit('gameEnded')
        this.$router.push({ name: 'game-over' })
      }
    }
  }
}
</script>
