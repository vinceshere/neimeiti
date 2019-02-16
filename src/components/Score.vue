<template>
  <div class="score">
   <span>Pontos: {{ $store.state.gameInfo.score }}</span>
  </div>
</template>

<script>
export default {
  name: 'score'
}
</script>
