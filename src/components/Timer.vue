<template>
  <div class="timer">
   <span>{{ $store.state.gameState.timeRemaining }}</span>
  </div>
</template>

<script>
export default {
  name: 'timer'
}
</script>
