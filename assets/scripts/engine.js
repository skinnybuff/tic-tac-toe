'use strict'

const ui = require('./ui')

// array 1o store the state of the game
const gameBoard = [null, null, null, null, null, null, null, null, null]
// an array of all possible winning indexes
const solutions = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]
// a bool for a finsihed game
let gameOver = false
// a bool for traking palyers turn
const playerXturn = true

const gameWon = function (side) {
  ui.gameWon(side)
  gameOver = true
}

const checkWin = function () {
  // console.log('Game Over: ' + gameOver)
  if (!gameOver) {
    solutions.forEach(function (solution) {
      // console.log('A: ' + solution[0] + ' B: ' + solution[1] + ' C: ' + solution[2])
      if (gameBoard[solution[0]] === 'X' && gameBoard[solution[1]] === 'X' && gameBoard[solution[2]] === 'X') {
        console.log('X Wins!')
        gameWon('X')
      }

      if (gameBoard[solution[0]] === 'O' && gameBoard[solution[1]] === 'O' && gameBoard[solution[2]] === 'O') {
        console.log('O Wins!')
        gameWon('O')
      }
    })
  } else {
    // $('.heads-up p').text('pleasse start a new game.')
    console.log('please start a new game.')
  }
}
// get the location of the play from the gameboard data attribute
const getLocation = function (element) {
  return $(element).attr('data-grid-position')
}

module.exports = {
  gameBoard,
  getLocation,
  solutions,
  checkWin,
  gameOver,
  playerXturn
}
