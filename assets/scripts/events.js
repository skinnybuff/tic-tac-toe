'use strict'
const getFormFields = require(`../../lib/get-form-fields`)
const game = require('./engine')
const api = require('./api')
const ui = require('./ui')

const onCheckBox = function () {
  // console.log(game.playerXturn)
  // check if the position is occupiued
  if (game.gameBoard[game.getLocation(this)] !== null) {
    $('.heads-up p').text('please select and empty box.')
  } else {
    if (game.playerXturn) {
      // for player X update gamedisplay, gamboard, ui & change player turn
      $('.heads-up p').text('its player X\'s turn to move.')
      $(this).html(game.userTokenX)
      game.gameBoard[game.getLocation(this)] = 'X'
      game.playerXturn = !game.playerXturn
    } else {
      // for player O update gamedisplay, gamboard, ui & change player turn
      $('.heads-up p').text('its player O\'s turn to move.')
      $(this).html(game.userTokenO)
      game.gameBoard[game.getLocation(this)] = 'O'
      game.playerXturn = !game.playerXturn
    }
  }

  game.checkWin()
  console.log(game.gameBoard)
  // console.log(game.getLocation(this))
  // console.log(game.playerXturn)
}

const onSignIn = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signUpFailure)
}

const restGame = function () {
  console.log(game.gameBoard)
  game.gameBoard = [null, null, null, null, null, null, null, null, null]
  $('.heads-up p').text('its player X\'s turn to move.')
  $('.grid-box').empty()
  $('.grid-box').addClass('clickable')
  game.playerXturn = true
  game.gameOver = false
  // console.log(game.gameBoard)
}

module.exports = {
  onCheckBox,
  restGame,
  onSignIn
}
