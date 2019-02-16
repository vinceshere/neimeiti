<template>
  <div class="score">
   <span>
     Vidas:
     <i v-if="$store.state.gameState.lifesRemaining >= 1" class="nes-icon heart is-medium"></i>
     <i v-if="$store.state.gameState.lifesRemaining >= 2" class="nes-icon heart is-medium"></i>
     <i v-if="$store.state.gameState.lifesRemaining >= 3" class="nes-icon heart is-medium"></i>
   </span>
  </div>
</template>

<script>
export default {
  name: 'lives-indicator'
}
</script>
