// 1) Define required constants
const colors = {
    'player1': null,
    'player-1': null,
}

const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
// console.log(winningCombos[1])


//2) Define required variables used to track the state of the game

let currentPlayer = 'X'

// 3) Store elements on the page that will be accessed in code more than once in variables to make code more concise, readable and performant.
const squareEl = document.querySelectorAll('.square')

// 4) Upon loading the app should:
//   4.1) Initialize the state variables
//   4.2) Render those values to the page
//   4.3) Wait for the user to click a square


function handleClick(evt) {
    evt.target.content
    console.log(evt.target.id )
    if (currentPlayer === "X" && evt.target.innerHTML === "") {
        evt.target.innerHTML = "X"
        currentPlayer = "O"
        console.log(currentPlayer)
    } else if (currentPlayer = "O" && evt.target.innerHTML === "") {
        evt.target.innerHTML = "O"
        currentPlayer = "X"
    } 
}

// 5) Handle a player clicking a square
squareEl.forEach(function (evt) {
    evt.addEventListener('click', handleClick)

})

// 6) Handle a player clicking the replay button
