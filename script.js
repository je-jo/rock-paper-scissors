let playerScore = 0;
let computerScore = 0;
runningScore = `${playerScore} : ${computerScore}`;
// let playerSelection = ["ROCK", "PAPER", "SCISSORS"];
let computerSelection;
const crock = document.querySelector("#c-rock");
const cpaper = document.querySelector("#c-paper");
const cscissors = document.querySelector("#c-scissors");


function computerPlay() {
    computerSelection = ["ROCK", "PAPER", "SCISSORS"];
    return computerSelection[Math.floor(Math.random() * computerSelection.length)];
}

function compSelAdd(computerSelection) {
    if (computerSelection == "ROCK") {
        crock.classList.add("active");
    }
    else if (computerSelection == "PAPER") {
        cpaper.classList.add("active");
    }
    else if (computerSelection == "SCISSORS") {
        cscissors.classList.add("active");
    }
}

function removeActive() {
    const active = document.getElementsByClassName("active");
    for (let i = active.length - 1; i >= 0; i--) {
        active[i].classList.remove('active');
    }
};

// the clicks
const prock = document.querySelector("#p-rock");
prock.addEventListener("click", () => {
    removeActive();
    playRound("ROCK", computerSelection);
    prock.classList.add("active");
    console.log(`You: ${playerScore}; The Machine: ${computerScore};`)
});

const ppaper = document.querySelector("#p-paper");
ppaper.addEventListener("click", () => {
    removeActive();
    playRound("PAPER", computerSelection);
    ppaper.classList.add("active");
    console.log(`You: ${playerScore}; The Machine: ${computerScore};`)
    console.log(`total ${runningScore}`)
});

const pscissors = document.querySelector("#p-scissors");
pscissors.addEventListener("click", () => {
    removeActive();
    playRound("SCISSORS", computerSelection);
    pscissors.classList.add("active");
    console.log(`You: ${playerScore}; The Machine: ${computerScore};`)
});




// function to play a single round
function playRound(playerSelection, computerSelection) {

    console.log(`You chose ${playerSelection}`);

    computerSelection = computerPlay();
    compSelAdd(computerSelection);
    console.log(`The Machine chose ${computerSelection}`);
    


    if (playerSelection === computerSelection) {
        return "It's a tie, play again!";
    }

    else if (playerSelection === "ROCK") {
        if (computerSelection === "PAPER") {
            computerScore += 1;
            return `You lose! Paper beats rock! The Machine has ${computerScore} points.`;
        } else if (computerSelection === "SCISSORS") {
            playerScore += 1;
            return `You win! Rock beats scissors! You have ${playerScore} points.`;
        }
    }

    else if (playerSelection === "PAPER") {
        if (computerSelection === "SCISSORS") {
            computerScore += 1;
            return `You lose! Scissors beat paper! The Machine has ${computerScore} points.`;
        } else if (computerSelection === "ROCK") {
            playerScore += 1;
            return `You win! Paper beats rock! You have ${playerScore} points.`;
        }
    }

    else if (playerSelection === "SCISSORS") {
        if (computerSelection === "ROCK") {
            computerScore += 1;
            return `You lose! Rock beats scissors! The Machine has ${computerScore} points.`;
        } else if (computerSelection === "PAPER") {
            playerScore += 1;
            return `You win! Scissors beat paper! You have ${playerScore} points.`;
        }
    }
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