'use stric'

const engine = require('./engine')

// html partials to append the markers to the game board
const userTokenX = '<p class="letter-display"> X </p>'
const userTokenO = '<p class="letter-display"> O </p>'

// sets the gameboard to the token played
const updateGameBoard = function (element, tokenString) {
  $(element).html(userTokenX)
  engine.game.gameBoard[engine.getLocation(element)] = tokenString
  engine.game.playerXturn = !engine.game.playerXturn
}

const gameWon = function (side) {
  $('.heads-up p').text(`Player ${side} WINS.`)
  $('main div')
}

const uiReset = function () {
  $('.heads-up p').text('')
  $('.grid-box').empty()
  $('.grid-box').addClass('clickable')
}
module.exports = {
  userTokenO,
  userTokenX,
  updateGameBoard,
  gameWon,
  uiReset
}
