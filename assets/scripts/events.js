'use strict'

const game = require('./engine')

const onCheckBox = function () {
  // check if the position is occupiued
  if (game.gameBoard[game.getLocation(this)] !== null) {
    console.log('false move')
    $('.heads-up p').text('thats not a valid move.')
  } else {
    // check whos turn it is and place the proper marker
    if (game.playerXturn) {
      game.gameBoard[game.getLocation(this)] = game.userTokenX
      $(this).html(game.userTokenX)
      console.log(game.playerXturn)
      game.playerXturn = false
      $('.heads-up p').text('its player O\'s turn to move.')
    } else {
      game.gameBoard[game.getLocation(this)] = game.userTokenO
      $(this).html(game.userTokenO)
      console.log(game.playerXturn)
      game.playerXturn = true
      $('.heads-up p').text('its player X\'s turn to move.')
    }
  }
}

module.exports = {
  onCheckBox
}
