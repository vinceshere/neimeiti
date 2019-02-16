import GAME_SETTINGS from '../helpers/gameSettings'

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

const settingGame = (state) => {
  state.gameState.gamePrepared = false
}

const gamePrepared = (state) => {
  state.gameState.gamePrepared = true
}

const gameStarted = (state) => {
  state.gameState.gameStarted = true
}

const gameEnded = (state) => {
  state.gameState.gameEnded = true
  state.gameState.timeRemaining = GAME_SETTINGS.timeToAnswer
  state.gameState.lifesRemaining = GAME_SETTINGS.lifes
}

const gameTimerUpdate = (state) => {
  state.gameState.timeRemaining--
}

const lostLevel = (state) => {
  const newLifesRemaining = [...state.gameState.lifesRemaining]
  newLifesRemaining.splice(state.gameState.lifesRemaining.length - 1, 1)

  state.gameState.lifesRemaining = newLifesRemaining
  state.gameState.timeRemaining = GAME_SETTINGS.timeToAnswer
  state.gameState.currentLevel++
}

const wonLevel = (state) => {
  state.gameInfo.score += (state.gameState.timeRemaining * 10)
  state.gameState.timeRemaining = GAME_SETTINGS.timeToAnswer
  state.gameState.currentLevel++
}

const resetGame = (state) => {
  state.gameInfo.score = 0
  state.gameState.timeRemaining = GAME_SETTINGS.timeToAnswer
  state.gameState.isLoading = false
  state.gameState.gameStarted = false
  state.gameState.gamePrepared = false
  state.gameState.gameEnded = false
  state.gameState.lifesRemaining = GAME_SETTINGS.lifes
  state.gameState.currentLevel = 0
  state.gameState.timeRemaining = GAME_SETTINGS.timeToAnswer
}

export default {
  isLoading,
  endedLoading,
  addPoints,
  addError,
  definePlayerName,
  gameStarted,
  settingGame,
  gamePrepared,
  gameEnded,
  gameTimerUpdate,
  lostLevel,
  wonLevel,
  resetGame
}
