'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const event = require('./events')

$(() => {
  setAPIOrigin(location, config)
})

$(() => {
  $('.heads-up p').text('its player X\'s turn to move.')
  $('.clickable').on('click', event.onCheckBox)
  $('#new-game-btn').on('click', event.restGame)
  $('#sign-in').on('submit', function (event) {
    event.preventDefault()
    console.log('submit')
  })
  $('#sign-up').on('submit', function (event) {
    event.preventDefault()
    console.log('submit')
  })
})

// event handles the click and toggles the player turn

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
