'use strict'

// array 1o store the state of the game
const gameBoard = [null, null, null, null, null, null, null, null, null]
// an array of all possible winning indexes
const results = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]
// a flag that toggles the play between X's turn to play and O's turn to play
const playerXturn = true

// html partials to append the markers to the game board
const userTokenX = '<p class="letter-display"> X </p>'
const userTokenO = '<p class="letter-display"> O </p>'

const checkAdjacent = function () {
  // see if any of the existing plays are adjacent
}

// sets the gameboard to the token played
const updateGameBoard = function (play) {
  if (gameBoard[getLocation(play)] !== null) {
    // the inform user of an invalid move
  } else {
    gameBoard[getLocation(play)] = checkUsersToken()
  }
}

const checkUsersToken = function () {
  if (playerXturn === true) {
    return 'X'
  } else {
    return 'O'
  }
}

const getLocation = function (element) {
  return $(element).attr('data-grid-position')
  // get the value of the play storeit in the gameboard object
}

module.exports = {
  gameBoard,
  getLocation,
  userTokenX,
  userTokenO,
  playerXturn,
  updateGameBoard
}
