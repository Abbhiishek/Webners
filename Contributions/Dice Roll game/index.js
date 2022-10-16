// jshint esversion:6
let randomNumber1 = Math.ceil(Math.random() * 6); // 1-6

let randomDiceImage1 = 'dice' + randomNumber1 + '.png'; // dice1.png - dice6.png
let randomDiceImageSource1 = 'images/' + randomDiceImage1; // images/dice1.png - images/dice2.png

let image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomDiceImageSource1);


// Dice 2
let randomNumber2 = Math.ceil(Math.random() * 6); // 1-6
let randomDiceImageSource2 = 'images/' + 'dice' + randomNumber2 + '.png'; // images/dice1.png - images/dice2.png
document.querySelectorAll("img")[1].setAttribute("src", randomDiceImageSource2);


let result = undefined;
// Player 1 wins
if (randomNumber1 > randomNumber2) {
    result = "Player 1 Wins!";
}
// Player 2 wins
else if (randomNumber1 < randomNumber2) {
    result = "Player 2 Wins!";
}
// Draw game
else {
    result = "Draw game!";
}
// Show the result
document.querySelector("h1").textContent = result;

window.addEventListener('keydown', function (e) {
    if (e.key === 'q') {
        window.location.reload();
    }
}, false);