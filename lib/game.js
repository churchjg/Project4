let startGame = document.querySelector('.start-game')

function newGame(evt) {
    evt.preventDefault()
    turn = 0
    playerTurn.innerHTML = " "
    /*for (let i = 0; i < boxes.length; i++){
        boxes[i].classList.remove('blue')
        boxes[i].classList.remove('red')
        playerTurn.classList.remove('red', 'blue', 'game-over')
        boxes[i].innerText = ' '
        boxes[i].addEventListener('click', showMark)
    }
    red = []
    blue = []
    isWinner = false */
}
startGame.addEventListener('click', newGame)