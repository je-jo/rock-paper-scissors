let playerScore = 0;
let computerScore = 0;
let computerSelection;
let newgame;
const result = document.querySelector('#result');
result.textContent = "0 : 0";

const crock = document.querySelector("#c-rock");
const cpaper = document.querySelector("#c-paper");
const cscissors = document.querySelector("#c-scissors");


function computerPlay() {
    computerSelection = ["ROCK", "PAPER", "SCISSORS"];
    return computerSelection[Math.floor(Math.random() * computerSelection.length)];
}

function addActive(computerSelection) {
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
    game();
});

const ppaper = document.querySelector("#p-paper");
ppaper.addEventListener("click", () => {
    removeActive();
    playRound("PAPER", computerSelection);
    ppaper.classList.add("active");
    console.log(`You: ${playerScore}; The Machine: ${computerScore};`)
    game();
});

const pscissors = document.querySelector("#p-scissors");
pscissors.addEventListener("click", () => {
    removeActive();
    playRound("SCISSORS", computerSelection);
    pscissors.classList.add("active");
    console.log(`You: ${playerScore}; The Machine: ${computerScore};`)
    game();
});




// function to play a single round
function playRound(playerSelection, computerSelection) {

    console.log(`You chose ${playerSelection}`);

    computerSelection = computerPlay();
    addActive(computerSelection);
    console.log(`The Machine chose ${computerSelection}`);



    if (playerSelection === computerSelection) {
        round.textContent = "It's a tie, play again!";
    }

    else if (playerSelection === "ROCK") {
        if (computerSelection === "PAPER") {
            computerScore += 1;
            round.textContent = `You lose! Paper covers rock! The Machine has ${computerScore} points.`;
        } else if (computerSelection === "SCISSORS") {
            playerScore += 1;
            round.textContent = `You win! Rock crushes scissors! You have ${playerScore} points.`;
        }
    }

    else if (playerSelection === "PAPER") {
        if (computerSelection === "SCISSORS") {
            computerScore += 1;
            round.textContent = `You lose! Scissors cut paper! The Machine has ${computerScore} points.`;
        } else if (computerSelection === "ROCK") {
            playerScore += 1;
            round.textContent = `You win! Paper covers rock! You have ${playerScore} points.`;
        }
    }

    else if (playerSelection === "SCISSORS") {
        if (computerSelection === "ROCK") {
            computerScore += 1;
            round.textContent = `You lose! Rock crushes scissors! The Machine has ${computerScore} points.`;
        } else if (computerSelection === "PAPER") {
            playerScore += 1;
            round.textContent = `You win! Scissors cut paper! You have ${playerScore} points.`;
        }
    }

}

const endmessage = document.querySelector('#endmessage');
const round = document.querySelector('#round');

// function to play 5 rounds and declare winner
function game() {
    let runningScore = `${playerScore} : ${computerScore}`;
    result.textContent = `${runningScore}`;


    if (playerScore == 5 || computerScore == 5) {

        // disable all other buttons

        if (playerScore > computerScore) {
            endmessage.innerHTML = "<p>You fought the Machine and you WON!<p>"
            const newgame = document.createElement('button');
            newgame.textContent = 'New Game';

            newgame.addEventListener("click", () => {
                playerScore = 0;
                computerScore = 0;
                runningScore = `${playerScore} : ${computerScore}`;
                result.textContent = `${runningScore}`;
                removeActive();
            });

            endmessage.appendChild(newgame);
            





        } else if (playerScore < computerScore) {
            endmessage.innerHTML = "<p>You fought the Machine and you LOST!</p>"
            const newgame = document.createElement('button');
            newgame.textContent = 'New Game';

            newgame.addEventListener("click", () => {
                playerScore = 0;
                computerScore = 0;
                runningScore = `${playerScore} : ${computerScore}`;
                result.textContent = `${runningScore}`;
                removeActive();
            });

            endmessage.appendChild(newgame);
            
        }

    }
}















