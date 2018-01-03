'use strict'

const ui = require('./ui')
const store = require('./store')

const game = {
  // array to store the state of the game
  gameBoard: [null, null, null, null, null, null, null, null, null],
  // a bool to flag if a game is  finsihed
  gameOver: false,
  // a bool for traking palyers turn
  playerXturn: true
}

// an array of all possible winning indexes
const solutions = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]

const gameWon = function (side) {
  ui.gameWon(side)
  game.gameOver = true
}

const checkWin = function () {
  // console.log('Game Over: ' + game.gameOver)
  if (!game.gameOver) {
    solutions.forEach(function (solution) {
      // console.log('A: ' + solution[0] + ' B: ' + solution[1] + ' C: ' + solution[2])
      if (game.gameBoard[solution[0]] === 'X' && game.gameBoard[solution[1]] === 'X' && game.gameBoard[solution[2]] === 'X') {
        // console.log('X Wins!')
        gameWon('X')
        store.player.wins++
        ui.updateStats()
      }

      if (game.gameBoard[solution[0]] === 'O' && game.gameBoard[solution[1]] === 'O' && game.gameBoard[solution[2]] === 'O') {
        // console.log('O Wins!')
        gameWon('O')
        store.player.losses++
        ui.updateStats()
      }
    })
    // add a check for a tied game
  } else {
    // console.log('please start a new game.')
    ui.headsUp('Please start a new game.')
  }
}
// get the location of the play from the gameboard data attribute
const getLocation = function (element) {
  return $(element).attr('data-grid-position')
}

const logGameChange = function () {
  // game.gameBoard to update
}

module.exports = {
  getLocation,
  solutions,
  checkWin,
  game
}
