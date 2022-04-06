let randomNumber1 = Math.floor(Math.random() * 6) + 1
let randomDiceImage = "dice" + randomNumber1 + ".png"
let randomImageSource = "dieceimages/" + randomDiceImage
let img1 = document.querySelectorAll("img")[0]
img1.setAttribute("src", randomImageSource)



let randomNumber2 = Math.floor(Math.random() * 6) + 1
let randomImageSource2 = "dieceimages/dice" + randomNumber2 + ".png"
let img2 = document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2)



let winner = document.querySelector("h1")
if (randomNumber1 > randomNumber2) {
    winner.innerHTML = "player 1 is winner ⛳"
}
else if (randomNumber2 > randomNumber1) {
    winner.innerHTML = "player 2 is winner ⛳"
}
else {
    winner.innerHTML = "draw🤘"
}























