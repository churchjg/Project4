//GOLD LEVEL

//don't forget to make game responsive for phones/tablets
//don't forget to add title page and background

//SILVER LEVEL
//When StartGame button is clicked, You will want to add: Blocks, Timer, Score, and any designs you get to add in. 
// (Instructions should already be on the page)

/*window.onload = function () {
    document.querySelector('.hidden').style.display = 'none';
};
*/

//BRONZE LEVEL (Just get game to work)


let base1 = []
let base2 = []
let base3 = []

let smallestBlock = document.querySelector('#block-1')
let smallBlock = document.querySelector('#block-2')
let mediumBlock = document.querySelector('#block-3')
let largeBlock = document.querySelector('#block-4')

let blockSizeId1 = smallestBlock.getAttribute("id")
let blockSizeId2 = smallBlock.getAttribute("id")
let blockSizeId3 = mediumBlock.getAttribute("id")
let blockSizeId4 = largeBlock.getAttribute("id")

let pole1 = document.querySelector('#pole1')
let pole2 = document.querySelector('#pole2')
let pole3 = document.querySelector('#pole3')


//Empty gameplay container
let gameplay = []

//Start button is clicked, game is active
let startGame = () => {
    base1.length = 0
    // add the Ids to tower1 array
    base1.push(blockSizeId4, blockSizeId3, blockSizeId2, blockSizeId1)
    let startParent = document.getElementById('tower-one')
    startParent.appendChild(largeBlock)
    startParent.appendChild(mediumBlock)
    startParent.appendChild(smallBlock)
    startParent.appendChild(smallestBlock)
    gameplay.length = 0
    base2.length = 0
    base3.length = 0
    document.querySelector('#communicator').innerHTML = "Click the New Game button to get started"
    smallestBlock.addEventListener('click', blockClicked)
    poleClickedOff()
}
startGame()

/*
let restartButton = document.querySelector(".clear-game")
restartButton.addEventListener("click", startGame)
restartButton.onclick = function() {
    /*let minutes = document.getElementById('timer-minutes')
    let seconds = document.getElementById('timer-seconds')
    minutes = 00
    seconds = 00
    let roundMoves = document.querySelector('.moves')
    roundMoves = 0 
}
*/

//Add click listeners

function blockClickedOn() {
    smallestBlock.addEventListener('click', blockClicked)
    smallBlock.addEventListener('click', blockClicked)
    mediumBlock.addEventListener('click', blockClicked)
    largeBlock.addEventListener('click', blockClicked)
}

function blockClickedOff() {
    smallestBlock.removeEventListener("click", blockClicked)
    smallBlock.removeEventListener("click", blockClicked)
    mediumBlock.removeEventListener("click", blockClicked)
    largeBlock.removeEventListener('click', blockClicked)
}

function poleClickedOn() {
    pole1.addEventListener('click', baseClicked)
    pole2.addEventListener('click', baseClicked)
    pole3.addEventListener('click', baseClicked)
}

function poleClickedOff() {
    pole1.removeEventListener("click", baseClicked)
    pole2.removeEventListener("click", baseClicked)
    pole3.removeEventListener("click", baseClicked)
}


function checkForWin() {
    if (base3.length === 4) {
        document.querySelector('#communicator').innerHTML = 'You won in way less time than it took to make this game... congrats I guess.....'
        blockClickedOff()
        poleClickedOff()
    }
}

//empty array to store elements, changed name bc it was confusing
let idStorage = []

//Make Blocks Clickable - use Nodes - https://stackoverflow.com/questions/24974621/what-is-a-node-in-javascript#:~:text=A%20%22node%22%2C%20in%20this,document%22%20and%20%22element%22.
function blockClicked(evt) {
    // store the block id
    let blockId = evt.target.getAttribute("id")
    // grab the block
    let blockNode = document.getElementById(blockId)
    // get the parent element
    let addOnTop = blockNode.parentNode
    // store the parent id
    let topId = addOnTop.getAttribute("id")

    // Compare sizes
    if (topId == 'tower-one') {
        applySizeLogic(base1)
    } else if (topId == 'tower-two') {
        applySizeLogic(base2)
    } else if (topId == 'tower-three') {
        applySizeLogic(base3)
    }

    function applySizeLogic(baseNumber) {
        if (blockId > baseNumber[baseNumber.length - 1]) {
            document.querySelector('#communicator').innerHTML = "This is an invalid placement, please read the rules."
        } else {
            fluidGameplay()
        }
    }
    //If size logic works, continue the game play

/*
function blockClickedOn() {
    smallestBlock.addEventListener('click', blockClicked)
    smallBlock.addEventListener('click', blockClicked)
    mediumBlock.addEventListener('click', blockClicked)
    largeBlock.addEventListener('click', blockClicked)

}
*/
 /*
   start = document.getElementById('start-game')
   start.onclick = function() {
       if (timerSeconds)
   }
   */
}