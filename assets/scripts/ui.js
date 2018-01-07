'use stric'

const engine = require('./engine')
const store = require('./store')
const api = require('./api')

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

const signOutSuccess = function (data) {
  // console.log(data)
  $('#sign-in').show()
  $('#sign-out').hide()
}

const apiFailure = function (error) {
  // console.log(error)
  headsUp('There was an error please try again')
  return error
}

const updateStats = function () {
  $('#win-display').text(store.player.wins)
  $('#loss-display').text(store.player.losses)
  $('#tie-display').text(store.player.ties)
}

const checkLogIn = function () {

}

const showPasswordChange = function () {
  $('#change-password').show()
}

const changePasswordSuccess = function (data) {
  // console.log(data)
  $('#change-password').hide()
  headsUp('Your Password has been updated')
}

const savedSuccess = function (data) {
  console.log(data)
}

// loads the game object from the api and stores it in the update game obj
const resetSuccess = function (data) {
  // console.log(data.game)
  store.updateGame = data.game
  headsUp('Player X\'s turn to play')
  $('.meta-data').html('<ul><li>Game Id: ' + store.updateGame.id + '</li><li>Player Id: ' + store.updateGame.player_x.id + '</li></ul>')
  console.log(store.updateGame)
}

const updateGameSuccess = function (data) {
  // console.log(data.game)
  store.updateGame = data.game
  console.log(store.updateGame)
}

const signInSuccess = function (data) {
  // console.log(data.user.email)
  store.user = data.user
  $('#sign-in').hide()
  $('#sign-out').show()
  $('label').prepend('<span>' + store.user.email + '</span>')
  $('#sign-up').hide()
  $('#sign-up-toggle').hide()
  api.newGame()
    .then(resetSuccess)
    .catch(apiFailure)
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
  resetSuccess,
  showPasswordChange,
  changePasswordSuccess,
  savedSuccess,
  updateGameSuccess
}
