'use strict'
const getFormFields = require(`../../lib/get-form-fields`)
const engine = require('./engine')
const api = require('./api')
const ui = require('./ui')

const onCheckBox = function () {
  // console.log(engine.playerXturn)
  // check if the position is occupiued
  if (engine.game.gameBoard[engine.getLocation(this)] !== null) {
    $('.heads-up p').text('please select and empty box.')
  } else {
    if (engine.game.playerXturn) {
      // for player X update gamedisplay, gamboard, ui & change player turn
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
  // console.log(engine.game.gameBoard)
  // console.log(engine.game.getLocation(this))
  // console.log(engine.game.playerXturn)
}

const onSignIn = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  console.log(data)
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.apiFailure)
}

const onSignUp = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  console.log(data)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.apiFailure)
}

const restGame = function () {
  // console.log(engine.game.gameBoard)
  engine.game.gameBoard = [null, null, null, null, null, null, null, null, null]
  ui.uiReset()
  engine.game.playerXturn = true
  engine.game.gameOver = false
  // console.log(engine.gameBoard)
}

module.exports = {
  onCheckBox,
  restGame,
  onSignIn,
  onSignUp
}
