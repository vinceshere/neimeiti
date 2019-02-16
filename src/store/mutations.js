const isLoading = (state) => {
  state.gameState.isLoading = true
}
const endedLoading = (state) => {
  state.gameState.isLoading = false
}
const addPoints = (state) => {
  state.points++
}
const addError = (state) => {
  state.errors++
}
const definePlayerName = (state, playerName) => {
  state.gameInfo.playerName = playerName
}
const gameStarted = (state) => {
  state.gameState.gameStarted = true
}
const gameEnded = (state) => {
  state.gameState.gameEnded = true
}

export default {
  isLoading,
  endedLoading,
  addPoints,
  addError,
  definePlayerName,
  gameStarted,
  gameEnded
}
