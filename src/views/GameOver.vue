<template>
  <section class="nes-container is-rounded text-center">
    game over
  </section>
</template>

<script>
import store from '@/store'

export default {
  name: 'game',
  beforeRouteEnter: (to, from, next) => {
    if (!store.state.gameEnded) {
      return next({ name: 'home' })
    }

    next()
  }
}
</script>
