console.log("hello there");

function getComputerChoice() {
    let random = Math.floor(Math.random() * 3) + 1;
    const choice = {1:"Rock", 2:"Paper", 3:"Scissors"};

    return choice[random];
}

function getHumanChoice() {
    const choice = {1:"Rock", 2:"Paper", 3:"Scissors"};
    let decision = Number(prompt("Choose with the following numbers: 1:Rock, 2:Paper, 3:Scissors"));

    return choice[decision];
}

console.log(getHumanChoice());