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
/*
let guess;
let guesses = 0;
let hit = 0;
let isSunk = false;


let shipLoc1 = Math.floor(Math.random() * 5);
let ShipLoc2 = shipLoc1 + 1;
let shipLoc3 = ShipLoc2 + 1;


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
let stats = "You took " + guesses + " guesses to sink the battleship, " + "this means your accuracy was " + ((3/guesses) * 100) + "%";
alert(stats)
*/

/*
-------- BUBBLE CO NEEDS HELP ---------
------ TASK ------
- MAKE AN ARRAY OF SCORES
- PRINT TOTAL NUMBER OF SCORES
- PRINT HIGHEST SCORE
- PRINT SOLUTION WITH HIGHEST SCORE
*/

// let scores = [60,50,60,58,54,54,58,50,52,54,48,69,
//               34,55,51,52,44,51,69,64,66,55,52,61,
//               46,31,57,52,44,18,41,53,55,61,51,44];
// let highScore = 0;

// for(let i = 0; i < scores.length;i++){
//   output = "Bubble solution #" + i + " scores: " + scores[i] + "<br>";
//   document.write(output);
//   if(scores[i] > highScore){
//     highScore = scores[i];
//   }
// }
// let solutionCount = "Total number of tested solutions: " + "<b>" + scores.length + "</b>" + "<br>";
// document.write(solutionCount);

// let highestScore = "The solution's highest score is: " + "<b>" + highScore + "</b>" + "<br>";
// document.write(highestScore)

// /* ------ NEW TASK ------
// - display the number of solutions with the highest score (is there more than one?)
// */

// let bestSolution = [];
// for (let i = 0; i < scores.length;i++){
//   if(scores[i] == highScore){
//     bestSolution.push(i)
//   }
// }
// document.write("Solutions with the highest score: " + "<b>" + bestSolution + "<b>" + "<br>");


/*
------- TASK ----------
Use functions to modify previous bubble co code
Must do everything it did before
*/

let scores = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69,
  34, 55, 51, 52, 44, 51, 69, 64, 66, 55, 52, 61,
  46, 31, 57, 52, 44, 18, 41, 53, 55, 61, 51, 44];

function printAndGetHighScore(scores){
  let highScore = 0;
  let output = 0;
  for(let i=0;i<scores.length;i++){
    output = "Bubble solution #" + i + " scores: " + scores[i] + "<br>";
    document.write(output);
    if(scores[i] > highScore){
      highScore = scores[i];
    }
  }return highScore;
}

let highScore = printAndGetHighScore(scores);
document.write("Bubble tests: " + scores.length + "<br>");
document.write("Highest bubble score: " + highScore + "<br>");

function getBestResults(scores,highScore){
  let bestSolution = [];
  for (let i = 0; i < scores.length; i++) {
    if (scores[i] == highScore) {
      bestSolution.push(i)
    }
  }return bestSolution;
}

let bestSolution = getBestResults(scores,highScore);
document.write("Solutions with the highest score: " + "<b>" + bestSolution + "<b>" + "<br>");
