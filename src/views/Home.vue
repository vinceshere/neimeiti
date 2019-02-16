<template>
  <main>
    <header class="text-center">
      <h1>NeimeIt</h1>
      <p>Adivinhe os nomes.</p>
    </header>

    <section class="nes-container is-rounded text-center">
      <img class="img-responsive" src="@/assets/home/vincent.jpg" alt="">

      <div v-if="playerName" class="message -left user-baloon">
        <div class="nes-balloon from-left">
          <p>Olá, {{playerName}}!</p>
        </div>
      </div>

      <button type="button" v-if="playerName" @click="startGame" class="nes-btn is-success">Iniciar</button>
      <button type="button" v-else @click="askForMicPermission" v-bind:class="{ 'is-talking': isTalking }" class="nes-btn is-danger">Clique aqui e diga seu nome para iniciar</button>
    </section>

    <footer class="footer">
      <p>
        <a href="https://nostalgic-css.github.io/NES.css/" target="_blank">Design by NES.css</a>
        <span>-</span>
        <a href="https://www.v1nce.com.br" target="_blank">Development by Vince</a>
      </p>
    </footer>
  </main>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      hasMicPermission: false,
      isTalking: false,
      playerName: null
    }
  },
  methods: {
    setMicPermission (value) {
      console.log(this)
      this.hasMicPermission = value
    },
    askForMicPermission () {
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
    },
    startGame () {

    }
  }
}
</script>
