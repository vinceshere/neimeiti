<template>
  <div
    class="game-image"
    v-bind:class="{ preparing: !gamePrepared }"
    v-bind:style="{ backgroundImage: gamePrepared ? `url(${currentArtistImage()})`: `` }"
  >
    <span class="warning" v-if="!gamePrepared">Preparando nivel...</span>
  </div>
</template>

<script>
import shuffleArray from '@/helpers/shuffleArray'

export default {
  name: 'game-image',
  data () {
    return {
      artists: [],
      assetsLoaded: 0,
      totalAssets: 0
    }
  },
  mounted () {
    this.artists = this.$store.state.artists
    this.totalAssets = this.artists.length

    this.artists = shuffleArray(this.artists)
    this.preloadAsset()
  },
  computed: {
    gamePrepared () {
      return this.$store.state.gameState.gamePrepared
    },
    currentLevel () {
      return this.$store.state.gameState.currentLevel
    }
  },
  watch: {
    currentLevel (newCount, oldCount) {
      if (newCount >= this.$store.state.artists.length) {
        this.$store.commit('gameEnded')
        return
      }

      this.$store.commit('settingGame')
      this.preloadAsset()
    },
    gamePrepared (newCount, oldCount) {
      if (newCount) {
        this.getUserResponse()
      }
    }
  },
  methods: {
    preloadAsset () {
      const image = new Image()
      image.src = `/img/artists/${this.artists[this.currentLevel].slug}.jpg`
      image.onload = () => {
        this.assetsLoaded = this.assetsLoaded + 1
        this.$store.commit('gamePrepared')
      }
    },
    currentArtistImage () {
      if (!this.artists.length) {
        return false
      }
      return `/img/artists/${this.artists[this.currentLevel].slug}.jpg`
    },
    getUserResponse () {
      var recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)()
      recognition.lang = 'pt-BR'
      recognition.interimResults = false
      recognition.maxAlternatives = 1
      recognition.continuous = true

      recognition.start()

      recognition.onresult = (event) => {
        const response = event.results[0][0].transcript.toLowerCase()
        const artistName = this.$store.state.artists[this.currentLevel].name.toLowerCase()

        const answer = artistName.indexOf(response) > -1

        if (answer) {
          this.$store.commit('wonLevel')
        } else {
          this.$store.commit('lostLevel')
        }

        this.playSound(answer)
      }
    },
    playSound (answer) {
      let sound = '/audio/wrong.wav'

      if (answer) {
        sound = '/audio/correct.wav'
      }

      var audio = new Audio(sound)
      audio.play()
    }
  }
}
</script>
