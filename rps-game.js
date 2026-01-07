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
const humanBox = document.querySelector(".human-score-box");
const computerBox = document.querySelector(".computer-score-box");

playButtons.addEventListener("click", (event) => {
    if (!event.target.classList.contains("rock") &&
        !event.target.classList.contains("paper") &&
        !event.target.classList.contains("scissors")) {
        return;
    }

    if(isGameWon == true) {
        humanScore = 0;
        computerScore = 0;
        humanBox.style.backgroundColor = "white";
        computerBox.style.backgroundColor = "white";
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

function resetHighlight() {
    setTimeout(() => {
            messageDisplay.classList.remove('highlight-red', 'highlight-green');
    }, 220);
    setTimeout(() => {
            humanBox.classList.remove('highlight-red', 'highlight-green');
    }, 220);
    setTimeout(() => {
            computerBox.classList.remove('highlight-red', 'highlight-green');
    }, 220);
};

function playRound(humanChoice, computerChoice = getComputerChoice()) {
    if ( humanChoice == computerChoice ) {
        messageDisplay.textContent = humanChoice + " vs " + computerChoice;
        console.log("Boring!!! It is the same.. " + humanChoice + " neutral to " + computerChoice);
        messageDisplay.classList.add('highlight-red');
        humanBox.classList.add('highlight-red');
        computerBox.classList.add('highlight-red');
        resetHighlight();
    } else if (
        (humanChoice === "Rock" && computerChoice === "Scissors") ||
        (humanChoice === "Paper" && computerChoice === "Rock") ||
        (humanChoice === "Scissors" && computerChoice === "Paper")
    ) {
        messageDisplay.textContent = "You win this round!";
        humanScoreDisplay.textContent = ++humanScore;
        humanBox.classList.add('highlight-green');
        messageDisplay.classList.add('highlight-green');
        resetHighlight();
    } else {
        
        messageDisplay.textContent = "Computer wins this round!";
        computerScoreDisplay.textContent = ++computerScore;
        computerBox.classList.add('highlight-red');
        messageDisplay.classList.add('highlight-red');
        resetHighlight();
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
            messageDisplay.textContent = "YOU did it!!";
            humanBox.style.backgroundColor = "rgb(51, 88, 26)";
        } else {
            messageDisplay.textContent = "Probably AI inside...";
            computerBox.style.backgroundColor = "rgb(182, 53, 53)";
        };
};
