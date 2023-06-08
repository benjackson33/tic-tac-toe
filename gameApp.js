const winnerMessage = document.querySelector(".winner-message")
let gridBtns = document.querySelectorAll('.gameboard-item')
const playAgain = document.querySelector('.play-again')
const oceanBtn = document.querySelector('.ocean-sound')
const rockBtn = document.querySelector('.surf-rock')

playAgain.addEventListener('click', handlePlayAgain)
oceanBtn.addEventListener('click', handleOcean)
rockBtn.addEventListener('click', handleRock)



const playerO = "🏄‍♂️"
const playerX = "🌊"

let clicks = 0


for (let btn of gridBtns) {
    btn.addEventListener('click', handleChoice)

}

let playerOne = false

function handleChoice(event) {
    // console.log(event.target.innerText);
    let btn = event.target
    btn.disabled = true
    // console.log(btn);
    clicks++
    console.log(clicks);

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
        if (c1.innerText === "🏄‍♂️" && c2.innerText === "🏄‍♂️" && c3.innerText === "🏄‍♂️") {
            winnerMessage.innerText = `Gnarly! ${playerO} wins`
            endGame()
            // youWon()
            noWayPlay()

        } else if (c1.innerText === "🌊" && c2.innerText === "🌊" && c3.innerText === "🌊") {
            winnerMessage.innerText = `Sick! ${playerX} wins`

            endGame()
            // youWon()
            awesomePlay()

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
        clicks = 0
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

function handleOcean() {
    let waves = new Audio('./waves.m4a')
    waves.volume = 0.2
    waves.play()
}

function handleRock(){
    let rock = new Audio('./SurfarisWipeOut.m4a')
    rock.volume = 0.1
    rock.play()
}

function draw() {
    for (buttons of gridBtns)
        if (clicks === 9 && buttons != ("")) {
            winnerMessage.innerText = ("Bogus, you kooks drew")
        }
}









