let btn1 = document.getElementById('btn1')
let btn2 = document.getElementById('btn2')
let btn3 = document.getElementById('btn3')
let btn4 = document.getElementById('btn4')
let btn5 = document.getElementById('btn5')
let btn6 = document.getElementById('btn6')
let btn7 = document.getElementById('btn7')
let btn8 = document.getElementById('btn8')
let btn9 = document.getElementById('btn9')

const winnerMessage = document.querySelector(".winner-message")


const gridBtns = document.querySelectorAll('.gameboard-item')

const playAgain = document.querySelector('.play-again')
playAgain.addEventListener('click', handlePlayAgain)



const playerO = "🏄‍♂️"
const playerX = "🌊"



for (let btn of gridBtns) {
    btn.addEventListener('click', handleChoice)

}

playerOne = false

function handleChoice(event) {
    // console.log(event.target.innerText);
    let btn = event.target
    btn.disabled = true
    // console.log(btn);





    if (playerOne === false) {
        playerOne = true
        btn.innerText = playerO
    } else {
        playerOne = false
        btn.innerText = playerX
    }

    theWinner();

    // console.log(btn1 === "O");

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
        console.log(c1.innerText);
        console.log(c2.innerText);
        console.log(c3.innerText);
        if (c1.innerText === "🏄‍♂️" && c2.innerText === "🏄‍♂️" && c3.innerText === "🏄‍♂️") {
            winnerMessage.innerText = `Oh gnarly. ${playerO} wins`
            // alert("🏄‍♂️ Wins");
            endGame()
        } else if (c1.innerText === "🌊" && c2.innerText === "🌊" && c3.innerText === "🌊") {
            winnerMessage.innerText = `Oh gnarly. ${playerX} wins`
            // alert("🌊 Wins");
            endGame()


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
    }
}

// function youWon() {
//     if (classList.contains("winner"))
//         classList.remove('winner')
// } else {
//     classList.add('winner')
// }

// function whapaPlay(){
//     let whapa = new Audio('../benjackson/Downloads/whapa.m4a')
//     Audio.play()
// }





// // }


// function theWinner() {
//     if (btn1.innerText === "O" && btn4.innerText === "O" && btn7.innerText === "O") {
//         console.log("O is the winner");
//     } else if (btn3.innerText === "O" && btn6.innerText === "O" && btn9.innerText === "O") {
//         console.log("O is the winner");
//     } else if (btn2.innerText === "O" && btn5.innerText === "O" && btn8.innerText === "O") {

//     } else if (btn1.innerText === "O" && btn4.innerText === "O" && btn7.innerText === "O") {

//     }
// }




