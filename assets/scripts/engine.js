'use strict'

// array 1o store the state of the game
const gameBoard = [null, null, null, null, null, null, null, null, null]
// an array of all possible winning indexes
const solutions = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]
// a bool for a finsihed game
let gameOver = false
// a bool for traking palyers turn
let playerXturn = true
// html partials to append the markers to the game board
const userTokenX = '<p class="letter-display"> X </p>'
const userTokenO = '<p class="letter-display"> O </p>'
//  row of 3 is ana array to hold the game board plays and check for wins

const checkWin = function () {
  // check for a win
  // console.log('Game Over: ' + gameOver)
  if (!gameOver) {
    gameBoard.forEach(
      function (boxVal) {
        // console.log(boxVal + ' is found at location ' + gameBoard.indexOf(boxVal))
        if (boxVal === 'X') {
        // look for exs
          solutions.forEach(function (solution) {
            if (solution.every(function (index) {
              console.log(index)
              if (gameBoard[index] === 'X') {
                return true
              }
            })) {
              $('.heads-up p').text('Player X WINS.')
              gameOver = true
            }
          })
        }
        if (boxVal === 'O') {
        // push index of box value onto array of OH's
          solutions.forEach(function (solution) {
            if (solution.every(function (index) {
              if (gameBoard[index] === 'O') {
                return true
              }
            })) {
              $('.heads-up p').text('Player O WINS.')
              gameOver = true
            }
          })
        }
      }
    )
    // check the resulting array against the solutions array
  } else {
    $('.heads-up p').text('please start a new game.')
  }
}
// get the location of the play from the gameboard data attribute
const getLocation = function (element) {
  return $(element).attr('data-grid-position')
}

// sets the gameboard to the token played
const updateGameBoard = function (element, tokenString) {
  $(element).html(userTokenX)
  gameBoard[getLocation(element)] = tokenString
  playerXturn = !playerXturn
}

module.exports = {
  gameBoard,
  getLocation,
  userTokenX,
  userTokenO,
  updateGameBoard,
  solutions,
  checkWin,
  gameOver,
  playerXturn
}
