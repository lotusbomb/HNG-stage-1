const colorBox = document.getElementById("colorBox")
const colorOptions = document.querySelectorAll(".btn")
const gameStatus = document.getElementById("gameStatus")
const scoreField = document.getElementById("score")
const newGame = document.getElementById("newGameButton")

let score = 0;
let targetColor;

function getAnyColor() {
    const r = Math.floor(Math.random() * 256)
    const g= Math.floor(Math.random() * 256)
    const b = Math.floor(Math.random() * 256)
    return `rgb(${r}, ${g}, ${b})`
}


function startNewGame() {
    //to generate random colors
    let colors = []
    for (let i = 0; i < colorOptions.length; i++) {
        colors.push(getAnyColor())
    }

    //to generate a random color
    targetColor = colors[Math.floor(Math.random() * colors.length)]
    colorBox.style.backgroundColor = targetColor

    colorOptions .forEach((btn, index) => {
        btn.style.backgroundColor = colors[index]
        btn.onclick = () => correctColor(colors[index])
    })

    //game caption
    gameStatus.textContent = "Make a guess!"
}

function correctColor (selectColor) {
    if (selectColor === targetColor) {
        gameStatus.textContent = "Nice One!"
        score++
        scoreField.textContent = score
    } else{
        gameStatus.textContent = "Wrong! Pick Again."
    }
}

newGame.addEventListener("click", startNewGame);

startNewGame();
