const winnerMessage = document.querySelector(".winner-message")
let gridBtns = document.querySelectorAll('.gameboard-item')
const playAgain = document.querySelector('.play-again')
const oceanBtn = document.querySelector('.ocean-sound')
const rockBtn = document.querySelector('.surf-rock')
let shredder = document.querySelectorAll('.shredder')

playAgain.addEventListener('click', handlePlayAgain)
oceanBtn.addEventListener('click', handleOcean)
rockBtn.addEventListener('click', handleRock)



let playerO = "🏄‍♂️"
let playerX = "🌊"

let btnClicks = 0


for (let btn of gridBtns) {
    btn.addEventListener('click', handleChoice)

}

let playerOne = false

function handleChoice(event) {
    let btn = event.target
    btn.disabled = true
    btnClicks++

    whapaPlay()

    if (playerOne === false) {
        playerOne = true
        btn.innerText = playerO
    } else {
        playerOne = false
        btn.innerText = playerX
    }

    draw()
    theWinner();
}

//DECIDE THE WINNER

const winnerBtns = [
    [1, 4, 7], [2, 5, 8],
    [1, 2, 3], [4, 5, 6],
    [7, 8, 9], [1, 5, 9],
    [3, 5, 7], [3, 6, 9]
]

function theWinner() {
    for (btn of winnerBtns) {

        let condition1 = btn[0]
        let condition2 = btn[1]
        let condition3 = btn[2]
        let c1 = gridBtns[condition1 - 1]
        let c2 = gridBtns[condition2 - 1]
        let c3 = gridBtns[condition3 - 1]
        if (c1.innerText === playerO && c2.innerText === playerO && c3.innerText === playerO) {
            winnerMessage.innerText = `Gnarly! ${playerO} conquered the ${playerX}`
            endGame()
            awesomePlay()


        } else if (c1.innerText === playerX && c2.innerText === playerX && c3.innerText === playerX) {
            winnerMessage.innerText = `WOAH! The ${playerX} wiped out the ${playerO}`

            endGame()
            noWayPlay()


        }
    }
}

function endGame() {
    for (let button of gridBtns) {
        button.disabled = true
        // btn.removeEventListener('click', handleChoice)
    }

}

function handlePlayAgain() {


    for (let btn of gridBtns) {  //current disables but not clears
        btn.disabled = false
        btn.innerText = null
        winnerMessage.innerText = ""
        btnClicks = 0
    }
}


function whapaPlay() {
    let whapa = new Audio('./whapa.m4a')
    whapa.play()
}

function noWayPlay() {
    let noWay = new Audio('./noWay.m4a')
    noWay.play();
}

function awesomePlay() {
    let awesome = new Audio('./thatsAwesome.m4a')
    awesome.play()
}

let isPlaying = false

let waves = new Audio('./waves.m4a');
function handleOcean() {
    waves.volume = 0.2;
    if (isPlaying === false) {
        isPlaying = true
        waves.play()
    } else {
        isPlaying = false
        waves.pause()

    }
}


let rock = new Audio('./SurfarisWipeOut.m4a')
function handleRock() {

    rock.volume = 0.1;
    if (isPlaying === false) {
        isPlaying = true
        rock.play()
    } else {
        isPlaying = false
        rock.pause()

    }
}

function draw() {
    for (buttons of gridBtns)
        if (btnClicks === 9 && buttons != ("")) {
            winnerMessage.innerText = ("Bogus, you kooks drew")
        }
}

for (let icon of shredder) {
    icon.addEventListener('click', handleShredder)

}

function handleShredder(event) {
    let btn = event.target;
    btn.disabled = true


    if (playerOne === false) {
        playerOne = true
        playerO = btn.innerText
    } else {
        playerOne = false
        playerX = btn.innerText
        console.log(playerX);
    }
    disableIconBtns()
}

function disableIconBtns() {

    for (let button of shredder) {  
        if (btnClicks === 2) {
            button.disable = true
        }
    }
}







