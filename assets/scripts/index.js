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
  $('#settings-btn').on('click', event.onChangePassword)
  $('#game-stats-btn').on('click', event.getGameStats)
  $('#games-saved-btn').on('click', event.getSavedGames)
  event.onStart()
// while gameover is false boxes not clickable
})
