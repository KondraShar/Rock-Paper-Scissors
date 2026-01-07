/*
//////////////////////////////////////////////////

///////     game of Rock-Paper-Scissors     //////

//////////////////////////////////////////////////
*/

let humanScore = 0;
let computerScore = 0;
let isGameWon = false;
const targetScore = 5;
const playButtons = document.querySelector(".button-container");
const humanScoreDisplay = document.querySelector(".human-score");
const computerScoreDisplay = document.querySelector(".computer-score");
const messageDisplay = document.querySelector(".message-container");
const humanBox = document.getElementById("#humanBox");
const computerBox = document.getElementById("#computerBox");

playButtons.addEventListener("click", (event) => {
    if (!event.target.classList.contains("rock") &&
        !event.target.classList.contains("paper") &&
        !event.target.classList.contains("scissors")) {
        return;
    }

    if(isGameWon == true) {
        humanScore = 0;
        computerScore = 0;
        humanScoreDisplay.textContent = humanScore;
        computerScoreDisplay.textContent = computerScore;
        isGameWon = false;
        playRound(event.target.textContent);
        } else {
            playRound(event.target.textContent);
        };
    });

function getComputerChoice() {
    let random = Math.floor( (Math.random() * 3) + 1);
    const choice = {1:"Rock", 2:"Paper", 3:"Scissors"};
    return choice[random];
};

function playRound(humanChoice, computerChoice = getComputerChoice()) {
    if ( humanChoice == computerChoice ) {
        messageDisplay.textContent = humanChoice + " vs " + computerChoice;

        console.log("Boring!!! It is the same.. " + humanChoice + " neutral to " + computerChoice);
    } else if (
        (humanChoice === "Rock" && computerChoice === "Scissors") ||
        (humanChoice === "Paper" && computerChoice === "Rock") ||
        (humanChoice === "Scissors" && computerChoice === "Paper")
    ) {
        messageDisplay.textContent = "You win this round!";
        humanScoreDisplay.textContent = ++humanScore;
    } else {
        messageDisplay.textContent = "Computer wins this round!";
        computerScoreDisplay.textContent = ++computerScore;
    }
    whenGameWon();
}

function whenGameWon() {
    if(humanScore == targetScore || computerScore == targetScore) {
        setWinnerView();
        isGameWon = true;
    }
};

function setWinnerView() {
    if (humanScore > computerScore) {
                console.log("--> YOU WIN !!! Score: " + humanScore + ":" + computerScore);
        } else {
            console.log("--> YOU LOSE... Score: " + humanScore + ":" + computerScore);
        };
};
