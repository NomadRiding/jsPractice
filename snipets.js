document.getElementById('welcomeTitle').innerHTML = 'My JavaScript practice white board';


/*
------ TASK ------
Create a 1-D grid battleship game.
- 1 x 7 grid
- 1 ship 3 spaces
- Hit or Miss alert
- Ship sunk alert
- Game stats
*/

let guess;
let guesses = 0;
let hit = 0;
let isSunk = false;

let shipLoc1 = 2;
let ShipLoc2 = 3;
let shipLoc3 = 4;


while (isSunk == false){
  guess = prompt("Please select a number between 0 - 6")
  if(guess < 0 || guess > 6){
    alert("Please select a valid number")
  }else{
    guesses++;
    if(guess == shipLoc1 || guess == ShipLoc2 || guess == shipLoc3){
      alert("You've hit something")
      hit++;
      if(hit == 3){
        isSunk = true;
        alert("You've sunk my battleship!")
      }
    }
  }
}
