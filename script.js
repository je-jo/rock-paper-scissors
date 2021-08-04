let playerScore = 0;
let computerScore = 0;
let computerSelection;
let playerSelection;


const main = document.querySelector("main");
const buttons = document.querySelectorAll("div.choice>button");
const machineButtons = document.getElementsByClassName("machine-button");
const playerButtons = document.querySelectorAll("button.player-choice");

const active = document.getElementsByClassName("active");
const rotate = document.getElementsByClassName("rotate");

const rockPlayer = document.querySelector("#rock");
const paperPlayer = document.querySelector("#paper");
const scissorsPlayer = document.querySelector("#scissors");
const rockComputer = document.querySelector("#c-rock");
const paperComputer = document.querySelector("#c-paper");
const scissorsComputer = document.querySelector("#c-scissors");


const tinkSound = document.getElementById("tink");
const openhatSound = document.getElementById("openhat");
const boomSound = document.getElementById("boom");



function disableButtons() {
    if (playerScore == 5 || computerScore == 5) {
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].disabled = true;
        }
    }
}




function removeActive() {
    for (let i = active.length - 1; i >= 0; i--) {
        active[i].classList.remove('active', 'win');
    }
};

function addRotate() {
    for (let i = 0; i < machineButtons.length; i++) {
        machineButtons[i].classList.add('rotate');
        buttons.forEach(button => button.addEventListener("animationend", removeRotate));
    }
};

function removeRotate() {
    for (let i = rotate.length - 1; i >= 0; i--) {
        rotate[i].classList.remove("rotate");
    }
};

playerButtons.forEach((button) => {

    button.addEventListener('click', function (e) {

        addRotate();
        removeActive();
        playerSelection = e.currentTarget.id;
        tinkSound.currentTime = 0;
        tinkSound.play();
        setTimeout(function () {
            playRound(playerSelection, computerSelection);
            updateScore();
        }, 500);
        e.currentTarget.classList.add("active");

        game();
    });
});

function computerPlay() {
    computerSelection = ["rock", "paper", "scissors"];

    computerSelection = computerSelection[Math.floor(Math.random() * computerSelection.length)];

    if (computerSelection == "rock") {
        rockComputer.classList.add("active");
    }
    else if (computerSelection == "paper") {
        paperComputer.classList.add("active");
    }
    else if (computerSelection == "scissors") {
        scissorsComputer.classList.add("active");
    }
    return computerSelection;

}


function playRound(playerSelection, computerSelection) {
    const round = document.querySelector('#round');
    computerSelection = computerPlay();
    if (playerSelection === computerSelection) {
        round.textContent = "It's a tie, play again!";
    }
    else if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            computerScore += 1;
            paperComputer.classList.add("win");
            round.textContent = `You lose! paper covers rock! The Machine has ${computerScore} points.`;
        } else if (computerSelection === "scissors") {
            playerScore += 1;
            rockPlayer.classList.add("win");
            round.textContent = `You win! rock crushes scissors! You have ${playerScore} points.`;
        }
    }
    else if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
            computerScore += 1;
            scissorsComputer.classList.add("win");
            round.textContent = `You lose! scissors cut paper! The Machine has ${computerScore} points.`;
        } else if (computerSelection === "rock") {
            playerScore += 1;
            paperPlayer.classList.add("win");
            round.textContent = `You win! paper covers rock! You have ${playerScore} points.`;
        }
    }
    else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            computerScore += 1;
            rockComputer.classList.add("win");
            round.textContent = `You lose! rock crushes scissors! The Machine has ${computerScore} points.`;
        } else if (computerSelection === "paper") {
            playerScore += 1;
            scissorsPlayer.classList.add("win");
            round.textContent = `You win! scissors cut paper! You have ${playerScore} points.`;
        }
    }
    disableButtons();
}

const endmessage = document.createElement("div");
const endSymbol = document.createElement('i');
const para = document.createElement('p');
const newgame = document.createElement('div');

function game() {
    setTimeout(function () {
        if (playerScore == 5 || computerScore == 5) {
            endmessage.setAttribute('id', 'endmessage');
            newgame.setAttribute('id', 'newgame');
            newgame.textContent = 'New Game';
            endSymbol.style.fontSize = "7rem";
            endmessage.appendChild(endSymbol);
            endmessage.appendChild(para)
            endmessage.appendChild(newgame);
            
            setTimeout(function () {
                main.appendChild(endmessage);
                endmessage.classList.add("animate");
            }, 100);
            if (playerScore > computerScore) {
                
                para.textContent = "You fought the Machine and you WON!"
                openhatSound.play();
                endSymbol.classList.add("fas", "fa-grin-stars");
            } else if (playerScore < computerScore) {
                
                para.textContent = "You fought the Machine and you LOST!"
                boomSound.play();
                endSymbol.classList.add("fas", "fa-dizzy");
            }
        }
    }, 500);
}

function updateScore() {
    const result = document.querySelector('#result');
    result.textContent = `${playerScore} : ${computerScore}`;
}



newgame.addEventListener("click", () => {
    playerScore = 0;
    computerScore = 0;
    round.textContent = "";
    updateScore();
    removeActive();
    main.removeChild(endmessage);
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = false;
    }
});

updateScore();


