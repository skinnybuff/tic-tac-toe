'use strict'
const getFormFields = require(`../../lib/get-form-fields`)
const engine = require('./engine')
const api = require('./api')
const ui = require('./ui')
const store = require('./store')

const onStart = function () {
  $('#sign-out').hide()
  // TODO: get calc game states data to display
  $('#stats-data').hide()
  $('#sign-up').hide()
  $('#change-password').hide()
  // TODO: hide games list on start after debugged
  // $('#saved-games-display').hide()
  ui.headsUp('Please Login or Sign up.')
}

const sendCellObj = function (element) {
  let cellVal = ''
  engine.playerXturn ? cellVal = 'x' : cellVal = 'o'
  const cell = {
    'game': {
      'cell': {
        'index': engine.getLocation(element),
        'value': cellVal
      },
      'over': engine.game.gameOver
    }
  }
  // console.log(cell)
  store.updateCell = cell
}

const onCheckBox = function () {
  // only run if player is logged in
  if (store.user !== undefined && !engine.game.gameOver) {
  // console.log(engine.playerXturn)
  // check if the position is occupiued
    if (engine.game.gameBoard[engine.getLocation(this)] !== null) {
      $('.heads-up p').text('please select and empty box.')
    } else {
      if (engine.game.playerXturn) {
        // for player X update gamedisplay, gamboard, ui & change player turnconsole.l
        $('.heads-up p').text('its player O\'s turn to move.')
        $(this).html(ui.userTokenX)
        engine.game.gameBoard[engine.getLocation(this)] = 'X'
        engine.game.playerXturn = !engine.game.playerXturn
      } else {
        // for player O update gamedisplay, gamboard, ui & change player turn
        $('.heads-up p').text('its player X\'s turn to move.')
        $(this).html(ui.userTokenO)
        engine.game.gameBoard[engine.getLocation(this)] = 'O'
        engine.game.playerXturn = !engine.game.playerXturn
      }
    }
    engine.checkWin()
    sendCellObj(this)
    engine.logGameChange(engine.getLocation(this), engine.game.gameBoard[engine.getLocation(this)], engine.game.gameOver)
  }
}

const onSignIn = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  // console.log(data)
  // console.log(store.player)
  api.signIn(data)
    .then(ui.signInSuccess)
    .then(ui.getGamesSuccess)
    .catch(ui.apiFailure)
}

const onSignUp = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  // console.log(data)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.apiFailure)
}

const onSignOut = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  // console.log(data)
  api.signOut(data)
    .then(ui.signOutSuccess)
    .catch(ui.apiFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  ui.showPasswordChange()
}

const resetGame = function () {
  if (store.user) {
    api.getGames()
      .then(ui.getGamesSuccess)
      .catch(ui.apiFailure)
    api.newGame()
      .then(ui.resetSuccess)
      .catch(ui.apiFailure)
    engine.game.gameBoard = [null, null, null, null, null, null, null, null, null]
    ui.uiReset()
    engine.game.playerXturn = true
    engine.game.gameOver = false
    // console.log(engine.gameBoard)
  }
}

const onGetGames = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  // console.log(data)
  api.getGames(data)
    .then(ui.getGamesSuccess)
    .catch(ui.apiFailure)
}

const getGameStats = function () {
  // console.log('get stats')
  if (store.user) {
    $('#games-saved-btn').toggleClass('inactive')
    $('#game-stats-btn').toggleClass('inactive')
    $('#saved-games-display').hide()
    $('#meta-data').show()
  }
}

// TODO: display the games list
const getSavedGames = function () {
  // console.log('saved games')
  if (store.user) {
    $('#games-saved-btn').toggleClass('inactive')
    $('#game-stats-btn').toggleClass('inactive')
    $('#meta-data').hide()
    $('#saved-games-display').show()
  }
  // api.savedGames()
  //   .then(ui.savedSuccess)
  //   .catch(ui.apiFailure)
}

// create x-template
// create fillin html tag
// loop over the data foreach
// attach data point to fillin
// append to template

module.exports = {
  onStart,
  onCheckBox,
  resetGame,
  onSignIn,
  onSignUp,
  onSignOut,
  onGetGames,
  onChangePassword,
  getGameStats,
  getSavedGames,
  sendCellObj
}
