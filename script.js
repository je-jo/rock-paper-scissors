// global variables
let playerScore = 0;
let computerScore = 0;
let runningScore = 0;



// function to randomly choose rock paper or scissors
function computerPlay() {
    let computerSelection = ["ROCK", "PAPER", "SCISSORS"];
    return computerSelection[Math.floor(Math.random() * computerSelection.length)];
}


// function to play a single round
function playRound(playerSelection, computerSelection) {

    playerSelection = prompt("Rock, paper, scissors?", "").toUpperCase();  //get input from user  
    console.log(`You chose ${playerSelection}`);

    computerSelection = computerPlay();
    console.log(`The Machine chose ${computerSelection}`);

    
    

    if (playerSelection === computerSelection) {
        return "It's a tie, play again!";
    }
    else if (playerSelection === "ROCK") {
        if (computerSelection === "PAPER") {
            computerScore += 1;
            // return `You lose! Paper beats rock! The Machine has ${computerScore} points.`;
        } else if (computerSelection === "SCISSORS") {
            playerScore += 1;
            // return `You win! Rock beats scissors! You have ${playerScore} points.`;
        }
    }
    else if (playerSelection === "PAPER") {
        if (computerSelection === "SCISSORS") {
            computerScore += 1;
            // return `You lose! Scissors beat paper! The Machine has ${computerScore} points.`;
        } else if (computerSelection === "ROCK") {
            playerScore += 1;
            // return `You win! Paper beats rock! You have ${playerScore} points.`;
        }
    }
    else if (playerSelection === "SCISSORS") {
        if (computerSelection === "ROCK") {
            computerScore += 1;
            // return `You lose! Rock beats scissors! The Machine has ${computerScore} points.`;
        } else if (computerSelection === "PAPER") {
            playerScore += 1;
            // return `You win! Scissors beat paper! You have ${playerScore} points.`;
        }
    }
    return `You: ${playerScore}; The Machine: ${computerScore};`
}

// function to play 5 rounds and declare winner
function game() {
    for (let gamesPlayed = 0; gamesPlayed < 5; gamesPlayed++) {
        playRound();
        console.log(`You: ${playerScore}; The Machine: ${computerScore};`);
        runningScore = `${playerScore} : ${computerScore}`;
        console.log(runningScore);
    }
    if (playerScore > computerScore) {
        return "You fought the Machine and you WON!";
    } else if (playerScore < computerScore) {
        return "You fought the Machine and you LOST!";
    } else {
        return "It's a tie!";
    }
}



