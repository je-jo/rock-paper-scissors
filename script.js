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

const prock = document.querySelector("#rock");
const ppaper = document.querySelector("#paper");
const pscissors = document.querySelector("#scissors");
const crock = document.querySelector("#c-rock");
const cpaper = document.querySelector("#c-paper");
const cscissors = document.querySelector("#c-scissors");


const tink = document.getElementById("tink");
const openhat = document.getElementById("openhat");
const boom = document.getElementById("boom");



function removeActive() {
    for (let i = active.length - 1; i >= 0; i--) {
        active[i].classList.remove('active', 'win');
    }
};

function removeRotate() {
    for (let i = rotate.length - 1; i >= 0; i--) {
        rotate[i].classList.remove("rotate");
    }
};

function addRotate() {
    for (let i = 0; i < machineButtons.length; i++) {
        machineButtons[i].classList.add('rotate');
        buttons.forEach(button => button.addEventListener("animationend", removeRotate));
    }
};

playerButtons.forEach((button) => {
    button.addEventListener('click', function (e) {
        addRotate();
        removeActive();
        playerSelection = e.currentTarget.id;
        tink.currentTime = 0;
        tink.play();
        setTimeout(function () {
            playRound(playerSelection, computerSelection);
        }, 500);
        e.currentTarget.classList.add("active");
        game();
    });
});

function computerPlay() {
    computerSelection = ["rock", "paper", "scissors"];
    computerSelection = computerSelection[Math.floor(Math.random() * computerSelection.length)];
    if (computerSelection == "rock") {
        crock.classList.add("active");
    }
    else if (computerSelection == "paper") {
        cpaper.classList.add("active");
    }
    else if (computerSelection == "scissors") {
        cscissors.classList.add("active");
    }
    return computerSelection;
}


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
            cpaper.classList.add("win");
            round.textContent = `You lose! paper covers rock! The Machine has ${computerScore} points.`;
        } else if (computerSelection === "scissors") {
            playerScore += 1;
            prock.classList.add("win");
            round.textContent = `You win! rock crushes scissors! You have ${playerScore} points.`;
        }
    }
    else if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
            computerScore += 1;
            cscissors.classList.add("win");
            round.textContent = `You lose! scissors cut paper! The Machine has ${computerScore} points.`;
        } else if (computerSelection === "rock") {
            playerScore += 1;
            ppaper.classList.add("win");
            round.textContent = `You win! paper covers rock! You have ${playerScore} points.`;
        }
    }
    else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            computerScore += 1;
            crock.classList.add("win");
            round.textContent = `You lose! rock crushes scissors! The Machine has ${computerScore} points.`;
        } else if (computerSelection === "paper") {
            playerScore += 1;
            pscissors.classList.add("win");
            round.textContent = `You win! scissors cut paper! You have ${playerScore} points.`;
        }
    }
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
    setTimeout(function () {
        updateScore();
        if (playerScore == 5 || computerScore == 5) {
           // setTimeout(function () {
                main.appendChild(endmessage);
                endmessage.classList.add("animate");
          //  }, 1500);
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
    }, 500);
}

function updateScore() {
    const result = document.querySelector('#result');
    let runningScore = `${playerScore} : ${computerScore}`;
    result.textContent = `${runningScore}`;
    console.log(`You: ${playerScore}; The Machine: ${computerScore};`);
}

const newgame = document.createElement('div');
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
