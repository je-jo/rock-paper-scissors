let playerScore = 0;
let computerScore = 0;
let computerSelection;
let playerSelection;

const main = document.querySelector("main");
const buttons = document.querySelectorAll("div.choice>button");
const machineButtons = document.getElementsByClassName("machine-button");



function addRotate() {
    for (let num = 0; num < machineButtons.length; num++) {
        machineButtons[num].classList.add('rotate');
        buttons.forEach(button => button.addEventListener("animationend", removeRotate));
    }
};
function removeRotate() {
    for (let n = rotate.length - 1; n >= 0; n--) {
        rotate[n].classList.remove("rotate");
    }
};

const active = document.getElementsByClassName("active");
const rotate = document.getElementsByClassName("rotate");

const prock = document.querySelector("#rock");
const ppaper = document.querySelector("#paper");
const pscissors = document.querySelector("#scissors");
const crock = document.querySelector("#c-rock");
const cpaper = document.querySelector("#c-paper");
const cscissors = document.querySelector("#c-scissors");


const tink = document.getElementById("tink");
const openhat = document.getElementById("openhat");
const boom = document.getElementById("boom");


const playerButtons = document.querySelectorAll("div.player-choice>button");

playerButtons.forEach((button) => {
    button.addEventListener('click', function (e) {
        addRotate();
        removeActive();
        playerSelection = e.currentTarget.id;
        tink.currentTime = 0;
        tink.play();
        playRound(playerSelection, computerSelection);
        e.currentTarget.classList.add("active");
        console.log(`You: ${playerScore}; The Machine: ${computerScore};`);
        game();
    });
});

function computerPlay() {
    computerSelection = ["rock", "paper", "scissors"];
    computerSelection = computerSelection[Math.floor(Math.random() * computerSelection.length)];
    if (computerSelection == "rock") {
        setTimeout(function () {
            crock.classList.add("active");
        }, 400);
    }
    else if (computerSelection == "paper") {
        setTimeout(function () {
            cpaper.classList.add("active");
        }, 400);
    }
    else if (computerSelection == "scissors") {
        setTimeout(function () {
            cscissors.classList.add("active");
        }, 400);
    }
    return computerSelection;
}

function removeActive() {
    for (let i = active.length - 1; i >= 0; i--) {
        active[i].classList.remove('active', 'win');
    }
};





function playRound(playerSelection, computerSelection) {
    const round = document.querySelector('#round');
    console.log(`You chose ${playerSelection}`);
    computerSelection = computerPlay();
    console.log(`The Machine chose ${computerSelection}`);
    if (playerSelection === computerSelection) {
        round.textContent = "It's a tie, play again!";
    }
    else if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            computerScore += 1;
            setTimeout(function () {
                cpaper.classList.add("win");
            }, 450);
            round.textContent = `You lose! paper covers rock! The Machine has ${computerScore} points.`;
        } else if (computerSelection === "scissors") {
            playerScore += 1;
            setTimeout(function () {
                prock.classList.add("win");
            }, 450);
            round.textContent = `You win! rock crushes scissors! You have ${playerScore} points.`;
        }
    }
    else if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
            computerScore += 1;
            setTimeout(function () {
                cscissors.classList.add("win");
            }, 450);
            round.textContent = `You lose! scissors cut paper! The Machine has ${computerScore} points.`;
        } else if (computerSelection === "rock") {
            playerScore += 1;
            setTimeout(function () {
                ppaper.classList.add("win");
            }, 450);
            round.textContent = `You win! paper covers rock! You have ${playerScore} points.`;
        }
    }
    else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            computerScore += 1;
            setTimeout(function () {
                crock.classList.add("win");
            }, 450);
            round.textContent = `You lose! rock crushes scissors! The Machine has ${computerScore} points.`;
        } else if (computerSelection === "paper") {
            playerScore += 1;
            setTimeout(function () {
                pscissors.classList.add("win");
            }, 450);
            round.textContent = `You win! scissors cut paper! You have ${playerScore} points.`;
        }
    }
}



function updateScore() {
    const result = document.querySelector('#result');
    let runningScore = `${playerScore} : ${computerScore}`;
    result.textContent = `${runningScore}`;
}

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
        setTimeout(function () {
            main.appendChild(endmessage);
        }, 1500);
         for (let i = 0; i < buttons.length; i++) {
              buttons[i].disabled = true;
         }
        if (playerScore > computerScore) {
            win.classList.add("fas", "fa-grin-stars");
            para.textContent = "You fought the Machine and you WON!"
            openhat.play();
        } else if (playerScore < computerScore) {
            win.classList.add("fas", "fa-dizzy");
            para.textContent = "You fought the Machine and you LOST!"
            boom.play();
        }
    }
}

const newgame = document.createElement('div');
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

updateScore();
