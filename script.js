let playerScore = 0;
let computerScore = 0;
let computerSelection;



const main = document.querySelector("main");
const result = document.querySelector('#result');

const buttons = document.querySelectorAll("div.choice>button");

const prock = document.querySelector("#p-rock");
const ppaper = document.querySelector("#p-paper");
const pscissors = document.querySelector("#p-scissors");
const crock = document.querySelector("#c-rock");
const cpaper = document.querySelector("#c-paper");
const cscissors = document.querySelector("#c-scissors");



const newgame = document.createElement('div');

// the clicks
prock.addEventListener("click", () => {
    removeActive();
    playRound("ROCK", computerSelection);
    prock.classList.add("active");
    console.log(`You: ${playerScore}; The Machine: ${computerScore};`)
    game();
});


ppaper.addEventListener("click", () => {
    removeActive();
    playRound("PAPER", computerSelection);
    ppaper.classList.add("active");
    console.log(`You: ${playerScore}; The Machine: ${computerScore};`)
    game();
});


pscissors.addEventListener("click", () => {
    removeActive();
    playRound("SCISSORS", computerSelection);
    pscissors.classList.add("active");
    console.log(`You: ${playerScore}; The Machine: ${computerScore};`)
    game();
});

newgame.addEventListener("click", () => {
    playerScore = 0;
    computerScore = 0;
    updateScore();
    removeActive();
    main.removeChild(endmessage);
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = false;
    }
});


function updateScore() {
    let runningScore = `${playerScore} : ${computerScore}`;
    result.textContent = `${runningScore}`;

}

function computerPlay() {
    computerSelection = ["ROCK", "PAPER", "SCISSORS"];
    computerSelection = computerSelection[Math.floor(Math.random() * computerSelection.length)];
    if (computerSelection == "ROCK") {
        crock.classList.add("active");
    }
    else if (computerSelection == "PAPER") {
        cpaper.classList.add("active");
    }
    else if (computerSelection == "SCISSORS") {
        cscissors.classList.add("active");
    }
    return computerSelection;
}


function removeActive() {
    const active = document.getElementsByClassName("active");
    for (let i = active.length - 1; i >= 0; i--) {
        active[i].classList.remove('active');
    }
};

// function to play a single round
function playRound(playerSelection, computerSelection) {
    const round = document.querySelector('#round');

    console.log(`You chose ${playerSelection}`);

    computerSelection = computerPlay();
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

// function to play 5 rounds and declare winner
function game() {
    const endmessage = document.createElement("div");
    endmessage.setAttribute('id', 'endmessage');
    const win = document.createElement('i');
    win.style.fontSize = "7rem";
    const para = document.createElement('p');
    newgame.setAttribute('id', 'newgame');
    newgame.textContent = 'New Game';
    endmessage.appendChild(win);
    endmessage.appendChild(para)
    endmessage.appendChild(newgame);
    updateScore();
    if (playerScore == 5 || computerScore == 5) {
        round.textContent = "";
        main.insertBefore(endmessage, result);
        // for (let i = 0; i < buttons.length; i++) {
        //      buttons[i].disabled = true;
        // }
        if (playerScore > computerScore) {
            win.classList.add("fas", "fa-grin-stars");
            para.textContent = "You fought the Machine and you WON!"
        } else if (playerScore < computerScore) {
            win.classList.add("fas", "fa-dizzy");
            para.textContent = "You fought the Machine and you LOST!"
        }
    }
}

updateScore();

