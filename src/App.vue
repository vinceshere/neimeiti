<template>
  <div id="app">
    <main>
      <app-header></app-header>
      <router-view/>
      <app-footer></app-footer>
    </main>

    <app-loading v-if="$store.state.gameState.isLoading"></app-loading>
  </div>
</template>

<style lang="scss">
@import './App';
</style>

<script>
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Loading from '@/components/Loading'

export default {
  components: {
    'app-header': Header,
    'app-footer': Footer,
    'app-loading': Loading
  },
  created () {
    this.$router.beforeEach = (to, from, next) => {
      this.$store.commit('isLoading')
      next()
    }
  }
}
</script>
