/* 


- begin with a function playMachine that will randomly return either rock, paper or scissors

- get input from user, either rock paper or scissors, case insensintive

*/


let playerSelection = 0;
let machineSelection = 0;
let playerScore = 0;
let machineScore = 0;


function playMachine() {                                //computer randomly choose rock paper or scissors
    machineSelection = Math.floor(Math.random() * 3);          //returns a random integer between 0 and 2
    if (machineSelection === 0) {                                  //asigns string values to function results
        machineSelection = "ROCK";
    } else if (machineSelection === 1) {
        machineSelection = "PAPER";
    } else {
        machineSelection = "SCISSORS";
    }
    console.log(`The Machine chose ${machineSelection}`)
}



function play() {                            //get input from user
    playerSelection = window.prompt("Please choose rock, paper or scissors?", "");
    playerSelection = playerSelection.toUpperCase();
    console.log(`You chose ${playerSelection}`)
}




function playRound() {                          //play round
    play();
    playMachine();

    if (playerSelection === machineSelection) {
        alert("It's a tie! Play again!");
    }

    else if (playerSelection === "ROCK") {
        if (machineSelection === "PAPER") {
            machineScore += 1;
            alert(`You lose! The Machine has ${machineScore} points`);
        } else if (machineSelection === "SCISSORS") {
            playerScore += 1;
            alert(`You win! You have ${playerScore} points`);
        }
    }
    else if (playerSelection === "PAPER") {
        if (machineSelection === "SCISSORS") {
            machineScore += 1;
            alert(`You lose! The Machine has ${machineScore} points`);
        } else if (machineSelection === "ROCK") {
            playerScore += 1;
            alert(`You win! You have ${playerScore} points`);
        }
    }
    else if (playerSelection === "SCISSORS") {
        if (machineSelection === "ROCK") {
            machineScore += 1;
            alert(`You lose! The Machine has ${machineScore} points`);
        } else if (machineSelection === "PAPER") {
            playerScore += 1;
            alert(`You win! You have ${playerScore} points`);
        }
    }
    console.log(`You have ${playerScore} points.
    The Machine has ${machineScore} points.`)
}




function game() {
    playRound();
    playRound();
    playRound();
    playRound();
    playRound();
    if (playerScore > machineScore) {
        console.log("You win!");
    } else if (playerScore < machineScore) {
        console.log("You lose!");
    } else {
        console.log("It's a tie!");
    }
}


