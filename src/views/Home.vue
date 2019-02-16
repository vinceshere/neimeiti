<template>
  <section class="nes-container is-rounded text-center">
    <p>Adivinhe os nomes dos artistas.<br>Este jogo usa reconhecimento de voz, portanto permita o acesso ao microfone.</p>

    <img class="img-responsive" src="@/assets/home/vincent.jpg" alt="">

    <div v-if="$store.state.gameInfo.playerName" class="message -left user-baloon">
      <div class="nes-balloon from-left">
        <p>Olá, {{$store.state.gameInfo.playerName}}!</p>
      </div>
    </div>

    <button-get-name></button-get-name>
    <button-start-game></button-start-game>
  </section>
</template>

<script>
import GetNameButton from '@/components/GetNameButton'
import StartGameButton from '@/components/StartGameButton'

import store from '@/store'

export default {
  name: 'home',
  data () {
    return {
      isTalking: false
    }
  },
  components: {
    'button-get-name': GetNameButton,
    'button-start-game': StartGameButton
  },
  beforeRouteEnter: (to, from, next) => {
    if (store.state.gameEnded) {
      return next({ name: 'game-over' })
    }

    if (store.state.gameStarted) {
      return next({ name: 'game' })
    }

    next()
  },
  mounted () {
    this.$store.commit('endedLoading')
  },
  methods: {
    setMicPermission (value) {
      this.hasMicPermission = value
    },
    getPlayerName () {
      var recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)()
      recognition.lang = 'pt-BR'
      recognition.interimResults = false
      recognition.maxAlternatives = 1

      this.isTalking = true
      recognition.start()

      recognition.onresult = (event) => {
        this.playerName = event.results[0][0].transcript
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
