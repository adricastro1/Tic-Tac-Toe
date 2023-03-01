/*----- constants -----*/
// 1.1
const colors = {
    'null': 'white',
    'player1': 'pink',
    'player-1': 'red',
}
console.log(colors["player-1"])
// 1.2
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
// 2.
let board = [null, null, null, null, null, null, null, null, null]
let winner = null;
let currentPlayer = "X"

/*----- cached element references -----*/
const squareEl = document.querySelectorAll('.square')
const resetEl = document.querySelector('#btn')

/*----- event listeners -----*/
squareEl.forEach(function (evt) {
    evt.addEventListener('click', handleClick)

})

resetEl.addEventListener('click', resetGame)

/*----- functions -----*/


function handleClick(evt) {
    evt.target.content
    console.log(evt.target.id)
    if (currentPlayer === "X" && evt.target.innerHTML === "") {
        evt.target.innerHTML = "X"
        currentPlayer = "O"
    } else if (currentPlayer = "O" && evt.target.innerHTML === "") {
        evt.target.innerHTML = "O"
        currentPlayer = "X"
    }
}



// reset game function
function resetGame(){
    squareEl.forEach(square)
}

function square(evt) {
    evt.innerHTML = ""
    console.log("reset")
}