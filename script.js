/////////html elements
let chance = document.getElementById("chances");
let btnGuess = document.querySelector(".btnGuess");
let inputValue=document.querySelector(".inputs-Values");
let noOfTry=document.getElementById("try");
let msg = document.getElementsByClassName("final-output");
let newBtn = document.querySelector(".btnNewGame");
//////global variables
let randomNumber = Math.floor(Math.random() * 100 + 1);
let count = 0;
let triesLeft = 5;
/////////////this function update the no of try and no of chances 
function tryChances(){
  count++;
  noOfTry.textContent = "tries:" + count;
  triesLeft--;
  if(triesLeft ===0){
    chance.textContent = "You have lost! The game number was " + randomNumber;
    btnGuess.disabled=true;
    inputValue.value="";
  }
  else {
    chance.textContent = "chances left:" + triesLeft;
  }

}
///this function guess the number
function guessNumber() {
    console.log("our random number ==" + randomNumber);
    let guess=parseFloat(inputValue.value);
    if(guess === "" || guess <= 0 || guess > 100 || isNaN(guess)){
        msg[0].innerHTML ="Please enter a number between 1 and 100";
      } 
    else{
      tryChances();
      if(guess > randomNumber){
        msg[0].innerHTML ="Number is too high";
      }
      else if(guess < randomNumber){
        msg[0].innerHTML ="Number is too low";
      }
      else if(guess === randomNumber) {
        msg[0].innerHTML ="You win";
        btnGuess.disabled=true;
        return;
      }
    }
}
// For this task we will be making a "New Game" button function which will reset our game,
// Once the user clicks on this button the user will have new random number to guess
// 1. Reset the values inside the body of the function
// 2. Attach our new game button using an event listener to the .btnNewGame button 
function newGame() {
  inputValue.value = "";
  btnGuess.disabled=false;
  randomNumber = Math.floor(Math.random() * 100 + 1);
  count = 0;
  noOfTry.textContent = "tries:" + count;
  chance.innerHTML = "Number of chances: 5"; 
  triesLeft=5;
  msg[0].textContent="Guess a number between 1 and 100";
}

function keyBoardEvents(e) {
  if (e.keyCode === 13 && btnGuess.disabled===false) {
    guessNumber();  

  }
}
newBtn.addEventListener("click", newGame);
btnGuess.addEventListener("click", guessNumber);
document.addEventListener("keypress", keyBoardEvents);