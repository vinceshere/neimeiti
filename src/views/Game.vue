<template>
  <section class="nes-container is-rounded text-center">
    <div
      class="game-image"
      v-bind:class="{preparing: !gamePrepared}"
      v-bind:style="{ backgroundImage: gamePrepared ? `url(${currentArtistImage()})`: `` }"
    >
      <score></score>
      <timer></timer>
      <lives-indicator></lives-indicator>
      <span v-if="!gamePrepared">Preparando jogo...</span>
    </div>
  </section>
</template>

<script>
import store from '@/store'
import shuffleArray from '@/helpers/shuffleArray'

import Score from '@/components/Score'
import LivesIndicator from '@/components/LivesIndicator'
import Timer from '@/components/Timer'

export default {
  name: 'game',
  data () {
    return {
      gamePrepared: false,
      assetsLoaded: 0,
      totalAssets: 0,
      artists: []
    }
  },
  components: {
    'score': Score,
    'timer': Timer,
    'lives-indicator': LivesIndicator
  },
  beforeRouteEnter: (to, from, next) => {
    if (!store.state.gameState.gameStarted) {
      return next({ name: 'home' })
    }

    if (store.state.gameState.gameEnded) {
      return next({ name: 'game-over' })
    }

    next()
  },
  mounted () {
    this.artists = this.$store.state.artists
    this.totalAssets = this.artists.length

    this.artists = shuffleArray(this.artists)
    this.preloadAssets()
  },
  methods: {
    preloadAssets () {
      this.artists.forEach( (artist) => {
        const image = new Image();
        image.src = `/img/artists/${artist.slug}.jpg`;
        image.onload = () => {
          this.assetsLoaded = this.assetsLoaded + 1

          if (this.assetsLoaded >= this.totalAssets) {
            this.gamePrepared = true
            this.startLevel()
          }
        }
      })
    },
    startLevel () {

    },
    currentArtistImage() {
      return `/img/artists/${this.artists[this.$store.state.gameState.currentLevel].slug}.jpg`
    }
  }
}
</script>
