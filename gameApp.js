let btn1 = document.getElementById('btn1')
let btn2 = document.getElementById('btn2')
let btn3 = document.getElementById('btn3')
let btn4 = document.getElementById('btn4')
let btn5 = document.getElementById('btn5')
let btn6 = document.getElementById('btn6')
let btn7 = document.getElementById('btn7')
let btn8 = document.getElementById('btn8')
let btn9 = document.getElementById('btn9')


const gridBtns = document.querySelectorAll('.gameboard-container')

const playAgain = document.querySelector('.play-again')

const playerO = "O"
const playerX = "X"
let clicks = 0


for (let btn of gridBtns) {
    btn.addEventListener('click', handleChoice)

}

playerOne = false

function handleChoice(event) {
    // console.log(event.target.innerText);
    let btn = event.target
    btn.disabled = true
    console.log(btn);


    if (playerOne === false) {
        playerOne = true
        btn.innerText = playerO
    } else {
        playerOne = false
        btn.innerText = playerX
    }

    // theWinner()
    // console.log(btn1 === "O");

}

//DECIDE THE WINNER

const winnerBtns = [
    [1, 4, 7], [2, 5, 8],
    [1, 2, 3], [4, 5, 6],
    [7, 8, 9], [1, 5, 9],
    [3, 5, 7]]



// for (let i = 0; i < winnerBtns.length; i++) {
//     console.log(winnerBtns[i]);
// }





function theWinner() {
    for (btns of winnerBtns) {
        let combo = btns

        if ()
        
        console.log(combo[0]);
        console.log(combo[1]);
        console.log(combo[2]);
    }

    
}
theWinner()
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


