const X_CLASS = 'x';
const O_CLASS = 'o';
let circleTurn

const WINNING_COMBINATIONS = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7 ,8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]

]

const cellElements = document.querySelectorAll('[data-cells]');
const board = document.getElementById('board');
const winningMessageElement = document.getElementById('winning-message')
const winningMessageTextElement = document.querySelector('[data-winning-message-text');
const restartButton = document.getElementById('reset-button');

restartButton.addEventListener('click', startGame)

startGame()

function startGame () {
    
    circleTurn = false;
    cellElements.forEach(cells => {
        cells.classList.remove(X_CLASS)
        cells.classList.remove(O_CLASS)
        cells.addEventListener('click', handleclick, {once: true})
    })

    setBoarHoverClass();
    winningMessageElement.classList.remove('show');

}



function handleclick(e) {
    console.log('Vamo vamo lo pibe!')
    const cells = e.target;
    const currentClass = circleTurn ? O_CLASS : X_CLASS
    placeMark(cells, currentClass)
    //Check for Win
    if(checkForWin(currentClass)) {
        console.log('WINNER!')
        endGame(false)
    } else if (isDraw()) {
        //Check for Draw
        endGame(true)
    } else {
        //switch turns
        swapTurns()
        setBoarHoverClass()
    }
    
    
    
}

function endGame(draw) {
    if (draw){
        winningMessageTextElement.innerText = 'DRAW!'

    } else {
        winningMessageTextElement.innerText = `${circleTurn ? "O's" : "X's"} WINS!`
}
    winningMessageElement.classList.add('show');
}

function placeMark(cells, currentClass) {
    cells.classList.add(currentClass)
}

function swapTurns() {
    circleTurn =! circleTurn
}

function setBoarHoverClass() {
    board.classList.remove(X_CLASS);
    board.classList.remove(O_CLASS);
    if (circleTurn) {
        board.classList.add(O_CLASS);
    } else {
        board.classList.add(X_CLASS);

    }
}

function checkForWin(currentClass) {
    return WINNING_COMBINATIONS.some(combination => {
        return combination.every(index => {
            return cellElements[index].classList.contains(currentClass)
        })
    })
}

function isDraw() {
    return [...cellElements].every(cells => {
        return cells.classList.contains(X_CLASS) || cells.classList.contains(O_CLASS)
    })
}