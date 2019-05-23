function randomNum(){
    var randomNumber = Math.random() * 6;
    randomNumber = Math.floor(randomNumber) + 1;
    return randomNumber;
}

var randomNum1 = randomNum();
var randomNum2 = randomNum();

var image1 = document.querySelectorAll("img")[0];
var image2 = document.querySelectorAll("img")[1];

function updateDice(){
    image1.setAttribute("src", "images/" + "dice" + randomNum1 + ".png");
    image2.setAttribute("src", "images/" + "dice" + randomNum2 + ".png");
}

updateDice();

if(randomNum1 > randomNum2) {
  document.querySelector("h1").innerHTML = "Dice 1 Win!";
} else if(randomNum2 > randomNum1) {
  document.querySelector("h1").innerHTML = "Dice 2 Win!";
} else {
  document.querySelector("h1").innerHTML = "Draw!";
}
