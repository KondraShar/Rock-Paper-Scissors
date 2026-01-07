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

playButtons.addEventListener("click", (event) => {
    if (!event.target.classList.contains("rock") &&
        !event.target.classList.contains("paper") &&
        !event.target.classList.contains("scissors")) {
        return;
    }

    if(isGameWon == true) {
        // Reset score and ui
        humanScore = 0;
        computerScore = 0;
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

function playRound(humanChoice, computerChoice=getComputerChoice()) {
    if ( humanChoice == computerChoice ) {
        console.log("Boring!!! It is the same.. " + humanChoice + " neutral to " + computerChoice);
    } else if (
        (humanChoice === "Rock" && computerChoice === "Scissors") ||
        (humanChoice === "Paper" && computerChoice === "Rock") ||
        (humanChoice === "Scissors" && computerChoice === "Paper")
    ) {
        console.log("You win this round!");
        humanScore++;
    } else {
        console.log("Computer wins this round!");
        computerScore++;
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
