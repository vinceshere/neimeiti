<template>
  <button
    type="button"
    v-if="!$store.state.gameInfo.playerName"
    @click="getPlayerName"
    v-bind:class="{ 'is-talking': isTalking }"
    class="nes-btn is-danger">Clique aqui e diga seu nome para iniciar</button>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      recognition: null,
      isTalking: false
    }
  },
  beforeDestroy () {
    this.recognition.stop()
  },
  methods: {
    getPlayerName () {
      this.recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)()
      this.recognition.lang = 'pt-BR'
      this.recognition.interimResults = false
      this.recognition.maxAlternatives = 1

      this.isTalking = true
      this.recognition.start()

      this.recognition.onresult = (event) => {
        this.$store.commit('definePlayerName', event.results[0][0].transcript)
        this.isTalking = false
        this.recognition.stop()
      }

      this.recognition.onend = (event) => {
        this.isTalking = false
      }
    }
  }
}
</script>
