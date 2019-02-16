import GAME_SETTINGS from '../helpers/gameSettings'

const gameState = {
  isLoading: false,
  gameStarted: false,
  gamePrepared: false,
  gameEnded: false,
  lifesRemaining: GAME_SETTINGS.lifes,
  currentLevel: 0,
  timeRemaining: GAME_SETTINGS.timeToAnswer
}

export default gameState
