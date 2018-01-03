'use stric'

const engine = require('./engine')
const store = require('./store')

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
}

const uiReset = function () {
  $('.heads-up p').text('')
  $('.grid-box').empty()
  $('.grid-box').addClass('clickable')
}

const headsUp = function (message) {
  $('.heads-up p').text(`${message}`)
}

const signUpSuccess = function (data) {
  // console.log(data)
  headsUp('You have sucessfuly signed up.')
}

const signInSuccess = function (data) {
  console.log(data.user.email)
  store.user = data.user
  $('#sign-in').hide()
  $('#sign-out').show()
  $('label').html('<span>' + store.user.email + '</span> <a>settings</a>')
  $('#sign-up').hide()
  $('#sign-up-toggle').hide()
}

const signOutSuccess = function (data) {
  console.log(data)
  $('#sign-in').show()
  $('#sign-out').hide()
}

const apiFailure = function (error) {
  console.log(error)
}

const updateStats = function () {
  $('#win-display').text(store.player.wins)
  $('#loss-display').text(store.player.losses)
  $('#tie-display').text(store.player.ties)
}

const checkLogIn = function () {

}

const resetSuccess = function (data) {
  console.log(data)
  headsUp('Player X\'s turn to play')
}

module.exports = {
  userTokenO,
  userTokenX,
  updateGameBoard,
  gameWon,
  uiReset,
  signInSuccess,
  signUpSuccess,
  signOutSuccess,
  apiFailure,
  headsUp,
  checkLogIn,
  updateStats,
  resetSuccess
}
