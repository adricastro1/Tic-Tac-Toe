


/*----- constants -----*/
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

/*----- app's state (variables) -----*/
let currentPlayer = 'X'

/*----- cached element references -----*/
const squareEl = document.querySelectorAll('.square')
const resetEl = document.querySelector('#btn')

/*----- event listeners -----*/

resetEl.addEventListener('click', resetGame)

/*----- functions -----*/

// X O clicking functions
squareEl.forEach(function (evt) {
    evt.addEventListener('click', handleClick)

})

function handleClick(evt) {
    evt.target.content
    console.log(evt.target.id)
    if (currentPlayer === "X" && evt.target.innerHTML === "") {
        evt.target.innerHTML = "X"
        currentPlayer = "O"
        console.log(currentPlayer)
    } else if (currentPlayer = "O" && evt.target.innerHTML === "") {
        evt.target.innerHTML = "O"
        currentPlayer = "X"
    }
}
//  reset board functions
function resetGame(){
    squareEl.forEach(square)
}

function square(square) {
    square.innerHTML = ""
    console.log("reset")
}


