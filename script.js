let playerScore = 0;
let computerScore = 0;
let computerSelection;
let playerSelection;

const main = document.querySelector("main");
// const buttons = document.querySelectorAll("div.choice>button");
// const machineButtons = document.querySelectorAll("div.machine-choice>button");


// function rotate() {
    
//     for (let num = 0; num < machineButtons.length; num++) {
//         machineButtons[num].classList.add('rotate');
//     }
// };

const active = document.getElementsByClassName("active");

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
        removeActive();
        playerSelection = e.currentTarget.id;
        tink.currentTime = 0;
        tink.play();
        playRound(playerSelection, computerSelection);
        e.currentTarget.classList.add("active");
        console.log(`You: ${playerScore}; The Machine: ${computerScore};`)
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

function removeActive() {
    for (let i = active.length - 1; i >= 0; i--) {
       active[i].classList.remove('active', 'win');
    }
 };

//  function removeRotate() {
//     for (let num = 0; num < machineButtons.length; num++) {
//         machineButtons[num].classList.remove('rotate');
//     }
// };



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
        main.appendChild(endmessage);
        // for (let i = 0; i < buttons.length; i++) {
        //      buttons[i].disabled = true;
        // }
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
    // for (let i = 0; i < buttons.length; i++) {
    //     buttons[i].disabled = false;
    // }
});

updateScore();

