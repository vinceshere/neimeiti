<template>
  <header class="text-center">
    <h1>NeimeIti</h1>
    <p v-if="$store.state.gameState.gamePrepared"><br />O jogo começou!<br />Diga o nome da celebridade antes do tempo esgotar.</p>
  </header>
</template>

<script>
export default {
  name: 'app-header'
}
</script>
