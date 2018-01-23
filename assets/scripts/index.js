'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const event = require('./events')

$(() => {
  setAPIOrigin(location, config)
})

$(() => {
  $('.clickable').on('click', event.onCheckBox)
  $('#new-game-btn').on('click', event.resetGame)
  $('#sign-in').on('submit', event.onSignIn)
  $('#sign-up').on('submit', event.onSignUp)
  $('#sign-out').on('submit', event.onSignOut)
  $('#sign-up-toggle').on('click', function () {
    $('#sign-up').show()
  })
  $('#meta-data').hide()
  $('#saved-games-display').hide()
  $('#settings-btn').on('click', event.onChangePassword)
  $('#game-stats-btn').on('click', event.getGameStats)
  $('#games-saved-btn').on('click', event.getSavedGames)
  event.onStart()

  if ('content' in document.createElement('template')) {
    // run saved games template here
  }
})
