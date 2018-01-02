'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const event = require('./events')

$(() => {
  setAPIOrigin(location, config)
})

$(() => {
  $('.clickable').on('click', event.onCheckBox)
  $('#new-game-btn').on('click', event.restGame)
  $('#sign-in').on('submit', event.onSignIn)
  $('#sign-up').on('submit', event.onSignUp)
// while gameover is false boxes not clickable
})

// event handles the click and toggles the player turn

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
