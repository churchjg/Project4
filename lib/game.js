//GOLD LEVEL

//don't forget to make game responsive for phones/tablets
//don't forget to add title page and background
//Scoring based on user time
//Save user scores despite refresh


//SILVER LEVEL
//When StartGame button is clicked, You will want to add: Blocks, Timer, Score, and any designs you get to add in. 
// (Instructions should already be on the page)
//Restart button that returns the game to its original state and clears in-play arrays
//Timer that runs following start button click
//keep track of round moves
//keep track of round wins


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
let timer = document.querySelector('#timer');

let timerMinutes = document.getElementById('timer-minutes');
let timerSeconds = document.getElementById('timer-seconds');
let secondsCounter = 0

let wins = document.querySelector('#wins')
let winsCounter = 0
let movesNumber = document.querySelector('#moves')
let start = document.querySelector('.start-game')
let movesCounter = 0

//Function for increasing the counter.
function increaseMoves() {
    movesCounter++;
    movesNumber.innerText = movesCounter;
}

//From stackoverflow
function setTime() {
	++secondsCounter; //incrementer
	timerSeconds.innerHTML = pad(secondsCounter % 60);
	timerMinutes.innerHTML = pad(parseInt(secondsCounter / 60));
}
// pad function adds extra 0 to the clock if minutes length is less than two digits, also from StackOverflow.
function pad(val) {
	let valString = val + ''; //turns the current time into a string
	if (valString.length < 2) {
		//checks if its a single or double digit
		return '0' + valString; //if it is a single digit, return it with a 0 in front.
	} else {
		return valString; //otherwise, return string unchanged.
	}
}
//starting the timer
function startTimer() {
	if (timerSeconds.innerHTML === '00') {
		countUp = setInterval(setTime, 1000); 
	}
}

/*
function startTimer() {
    let minutes = document.getElementById('timer-minutes')
    let seconds = document.getElementById('timer-seconds')
    function time() {
       minutes = setTimeout(add, 1000);
       seconds = setTimeout(add, 1000)
    }
    time()
}
start.addEventListener('click', startTimer)
*/

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
    start.addEventListener('click', startTimer)
    smallestBlock.addEventListener('click', blockClicked)
    poleClickedOff()
}
startGame()


let restartButton = document.querySelector(".clear-game")
restartButton.addEventListener("click", startGame)
restartButton.onclick = function () {
    timerSeconds.innerText = '00';
    movesNumber.innerText = ''
    movesCounter = 0
    clearInterval(countUp);
}


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
        winsCounter++
        wins.innerText = winsCounter
        blockClickedOff()
        poleClickedOff()
        clearInterval(countUp);
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
    function fluidGameplay() {
        gameplay.push(blockId)
        idStorage.push(topId)
        document.querySelector('#communicator').innerHTML = "Please click a pole to place your block on"
        poleClickedOn()
        blockClickedOff()
    }
}

function blockClickedOn() {
    smallestBlock.addEventListener('click', blockClicked)
    smallBlock.addEventListener('click', blockClicked)
    mediumBlock.addEventListener('click', blockClicked)
    largeBlock.addEventListener('click', blockClicked)
}
//Make Poles clickable (had to add invisble base so it could reference each pole)
function baseClicked(evt) {
    // store poles id 
    let baseId = evt.target.getAttribute("id")
    // get array for the clicked pole
    if (baseId == 'pole1') {
        // grab the parent  
        let parent1 = document.querySelector('#tower-one')
        // use the pole array and parent in moveBlock 
        moveBlock(base1, parent1)
    } else if (baseId == 'pole2') {
        let parent2 = document.querySelector('#tower-two')
        moveBlock(base2, parent2)
    } else if (baseId == 'pole3') {
        let parent3 = document.querySelector('#tower-three')
        moveBlock(base3, parent3)
    }

    function moveBlock(base, parent) {
        // if the pole is empty - push first item of gameplay array to the selected pole
        if (base.length < 1) {
            base.push(gameplay[0])
            // store the first item of the gameplay array
            let currentBlock = document.getElementById(gameplay[0])
            // move it to the correct base
            parent.appendChild(currentBlock)
            if (idStorage == 'tower-one') {
                base1.pop()
                idStorage.length = 0
            } else if (idStorage == 'tower-two') {
                base2.pop()
                idStorage.length = 0
            } else if (idStorage == 'tower-three') {
                base3.pop()
                idStorage.length = 0
            }
            document.querySelector('#communicator').innerHTML = 'Choose your next block'
            gameplay.length = 0
            blockClickedOn()
            poleClickedOff()
            increaseMoves()
        } else {
            // track the bottom block on the pole
            let tracker = base[((base.length) - 1)]
            // push that block to gameplay
            gameplay.push(tracker)
            // if move is accepted 
            if (gameplay[0] < gameplay[1]) {
                // push the first block from gameplay to the pole array
                base.push(gameplay[0])
                // grab the gameplay object
                let smallerBlock = document.getElementById(gameplay[0])
                // move the block to the pole
                parent.appendChild(smallerBlock)
                // remove the block from the pole it was on before
                if (idStorage == 'tower-one') {
                    // remove the last block from the pole array
                    base1.pop()
                    idStorage.length = 0
                } else if (idStorage == 'tower-two') {
                    base2.pop()
                    idStorage.length = 0
                } else if (idStorage == 'tower-three') {
                    base3.pop()
                    idStorage.length = 0
                }
                document.querySelector('#communicator').innerHTML = 'Choose another block to move'
                gameplay.length = 0
                blockClickedOn()
                poleClickedOn()
                checkForWin()
                increaseMoves()
            } else {
                document.querySelector('#communicator').innerHTML = "That is an illegal move, please read the rules"
                gameplay.length = 0
                idStorage.length = 0
                blockClickedOn()
            }
        }
    }
}
