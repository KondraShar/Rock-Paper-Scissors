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
const firstLine = document.querySelector(".first-line");
const secondLine = document.querySelector(".second-line");
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
        firstLine.style.fontSize = "1em";
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
            computerBox.classList.remove('highlight-red', 'highlight-green');
            humanBox.classList.remove('highlight-red', 'highlight-green');
    }, 220);
};

function generateEmoji(choice) {
    const selectionEmoji = {"Rock":"🪨","Paper":"📄","Scissors":"✂️"}
    return selectionEmoji[choice];
}

function playRound(humanChoice, computerChoice = getComputerChoice()) {

    const humanEmoji = generateEmoji(humanChoice);
    const computerEmoji = generateEmoji(computerChoice);
    if ( humanChoice == computerChoice ) {
        firstLine.textContent = "Draw";
        secondLine.textContent = humanEmoji + " vs " + computerEmoji;
        messageDisplay.classList.add('highlight-red');
        humanBox.classList.add('highlight-red');
        computerBox.classList.add('highlight-red');
        resetHighlight();
    } else if (
        (humanChoice === "Rock" && computerChoice === "Scissors") ||
        (humanChoice === "Paper" && computerChoice === "Rock") ||
        (humanChoice === "Scissors" && computerChoice === "Paper")
    ) {
        firstLine.textContent = "You win this round!";
        secondLine.textContent = humanEmoji + " beats " + computerEmoji;
        humanScoreDisplay.textContent = ++humanScore;
        humanBox.classList.add('highlight-green');
        messageDisplay.classList.add('highlight-green');
        resetHighlight();
    } else {
        firstLine.textContent = "Computer wins this round!";
        secondLine.textContent = humanEmoji + " weak against " + computerEmoji;
        computerScoreDisplay.textContent = ++computerScore;
        computerBox.classList.add('highlight-red');
        messageDisplay.classList.add('highlight-red');
        resetHighlight();
    }
    
    if(humanScore == targetScore || computerScore == targetScore) {
        setWinnerView(humanEmoji, computerEmoji);
        isGameWon = true;
    }


}


function setWinnerView(humanEmoji, computerEmoji) {
    if (humanScore > computerScore) {
            firstLine.textContent = "YOU did it!!";
            firstLine.style.fontSize = "14px";
            secondLine.textContent = humanEmoji + " beats " + computerEmoji;
            humanBox.style.backgroundColor = "rgb(51, 88, 26)";
        } else {
            firstLine.textContent = "Probably AI inside...";
            firstLine.style.fontSize = "14px";
            secondLine.textContent = humanEmoji + " weak against " + computerEmoji;
            computerBox.style.backgroundColor = "rgb(182, 53, 53)";
        };
};
