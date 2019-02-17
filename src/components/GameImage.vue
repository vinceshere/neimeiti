<template>
  <div
    class="game-image"
    v-bind:class="{ preparing: !gamePrepared }"
    v-bind:style="{ backgroundImage: gamePrepared ? `url(${currentArtistImage()})`: `` }"
  >
    <span class="warning" v-if="!gamePrepared">Preparando jogo...</span>
  </div>
</template>

<script>
import shuffleArray from '@/helpers/shuffleArray'

export default {
  name: 'game-image',
  data () {
    return {
      artists: [],
      totalAssets: 0,
      recognition: null
    }
  },
  mounted () {
    this.artists = this.$store.state.artists
    this.totalAssets = this.artists.length

    this.artists = shuffleArray(this.artists)

    if (this.assetsLoaded < this.totalAssets) {
      this.preloadAsset()
    }
  },
  beforeDestroy () {
    if (this.recognition) {
      this.recognition.stop()
    }
  },
  computed: {
    gamePrepared () {
      return this.$store.state.gameState.gamePrepared
    },
    currentLevel () {
      return this.$store.state.gameState.currentLevel
    },
    assetsLoaded () {
      return this.$store.state.gameState.assetsLoaded
    }
  },
  watch: {
    currentLevel (newCount, oldCount) {
      if (newCount > this.$store.state.artists.length) {
        this.$store.commit('gameEnded')
      }

      if (this.gamePrepared) {
        this.getUserResponse()
      }
    },
    assetsLoaded (newCount) {
      if (newCount >= this.totalAssets) {
        this.$store.commit('gamePrepared')
        this.getUserResponse()
      }
    }
  },
  methods: {
    preloadAsset () {
      this.artists.forEach((artist) => {
        const image = new Image()
        image.src = `/img/artists/${artist.slug}.jpg`
        image.onload = () => {
          this.$store.commit('assetLoaded')

          if (this.assetsLoaded >= this.totalAssets) {
            this.$store.commit('gamePrepared')
          }
        }
      })
    },
    currentArtistImage () {
      if (!this.artists.length) {
        return false
      }
      return `/img/artists/${this.artists[this.currentLevel].slug}.jpg`
    },
    getUserResponse () {
      this.recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition)()
      this.recognition.lang = 'pt-BR'
      this.recognition.interimResults = false
      this.recognition.maxAlternatives = 1
      this.recognition.continuous = true

      this.recognition.start()

      this.recognition.onresult = (event) => {
        const response = event.results[0][0].transcript.toLowerCase()
        const artistName = this.$store.state.artists[this.currentLevel].name.toLowerCase()

        const answer = artistName.indexOf(response) > -1

        if (answer) {
          this.$store.commit('wonLevel')
        } else {
          this.$store.commit('lostLevel')
        }

        this.recognition.stop()
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
