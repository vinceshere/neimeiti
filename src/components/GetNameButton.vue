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
      isTalking: false
    }
  },
  methods: {
    getPlayerName () {
      var recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)()
      recognition.lang = 'pt-BR'
      recognition.interimResults = false
      recognition.maxAlternatives = 1

      this.isTalking = true
      recognition.start()

      recognition.onresult = (event) => {
        this.$store.commit('definePlayerName', event.results[0][0].transcript)
        this.isTalking = false
        recognition.stop()
      }

      recognition.onend = (event) => {
        this.isTalking = false
      }
    }
  }
}
</script>
