/*
//////////////////////////////////////////////////

///////     game of Rock-Paper-Scissors     //////

//////////////////////////////////////////////////
*/
console.log("Welcome to the game of Rock-Paper-Scissors!");

// Get random computer int choice - return string
//
function getComputerChoice() {
    let random = Math.floor(Math.random() * 3) + 1;
    const choice = {1:"Rock", 2:"Paper", 3:"Scissors"};

    return choice[random];
}

// Prompt user int choice - return string
//
function getHumanChoice(decision) {
    const choice = {1:"Rock", 2:"Paper", 3:"Scissors"};

    return choice[decision];
}

// Initialize scores for each player
//
let humanScore = 0;
let computerScore = 0;

// Play a round
//
function playRound(humanChoice, computerChoice=getComputerChoice()) {
    if ( humanChoice == computerChoice ) {
        console.log("Boring!!! It is the same.. " + humanChoice + " neutral to " + computerChoice);
    } else if ( ( humanChoice == "Paper" && computerChoice == "Rock" ) || (humanChoice == "Scissors" && computerChoice == "Paper") ) {
        console.log("You win!! " + humanChoice + " beats " + computerChoice);
        ++humanScore;
    } else if ( (humanChoice == "Rock" && computerChoice == "Scissors") ) {
        console.log("You win!! " + humanChoice + " beats " + computerChoice);
        ++humanScore;
    } else if ( ( computerChoice == "Paper" && humanChoice == "Rock" ) || (computerChoice == "Scissors" && humanChoice == "Paper") ) {
        console.log("You lose!! " + computerChoice + " beats " + humanChoice);
        ++computerScore;
    } else if ( (humanChoice == "Rock" && computerChoice == "Scissors") ) {
        console.log("You lose!! " + computerChoice + " beats " + humanChoice);
        ++computerScore;
    }
}

//const compSelection = getComputerChoice();
//const humSelection = getHumanChoice();

//playRound(humSelection, compSelection);

// Write the logic to play the entire game
//
function playGame() {
    humanScore = 0;
    computerScore = 0;
    let winner;

    
    

    // Winner?
    if ( humanScore == computerScore ) {
        console.log("No winner... Score: " + humanScore + ":" + computerScore);
    } else if (humanScore > computerScore) {
        console.log("--> YOU WIN !!! Score: " + humanScore + ":" + computerScore);
    } else {
        console.log("--> YOU LOSE... Score: " + humanScore + ":" + computerScore);
    }
}

playGame();

// Buttons to play
const documentBody = document.querySelector("body");

const rockButton = document.createElement("button");
rockButton.textContent = "Rock";
documentBody.appendChild(rockButton);
const paperButton = document.createElement("button");
paperButton.textContent = "Paper";
documentBody.appendChild(paperButton);
const scissorsButton = document.createElement("button");
scissorsButton.textContent = "Scissors";
documentBody.appendChild(scissorsButton);

documentBody.addEventListener("click", (event) => {
    playRound(event.target.textContent);
    //console.log(event.target.textContent);
});