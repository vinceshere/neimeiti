<template>
  <div class="timer">
   <span>Tempo:{{ currentTime }}</span>
  </div>
</template>

<script>
export default {
  name: 'timer',
  data () {
    return {
      timer: null
    }
  },
  beforeDestroy () {
    clearInterval(this.timer)
    this.timer = null
  },
  computed: {
    currentTime () {
      return this.$store.state.gameState.timeRemaining
    },
    gamePrepared () {
      return this.$store.state.gameState.gamePrepared
    }
  },
  watch: {
    gamePrepared (newValue) {
      if (!this.timer && newValue) {
        setTimeout(() => {
          this.startTimer()
        }, 500)
      }
    },
    currentTime (newCount, oldCount) {
      if (newCount === 0) {
        clearInterval(this.timer)
        this.timer = null
        this.$store.commit('lostLevel')
      }
    }
  },
  methods: {
    startTimer () {
      this.timer = setInterval(() => {
        this.$store.commit('gameTimerUpdate')
      }, 1000)
    }
  }
}
</script>
