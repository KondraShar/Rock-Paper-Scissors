console.log("hello there");

function getComputerChoice() {
    let random = Math.floor(Math.random() * 3) + 1;
    const choice = {1:"Rock", 2:"Paper", 3:"Scissors"};

    switch(random) {
        case 1:
            return choice[1];
        case 2:
            return choice[2];
        case 3:
            return choice[3];
        default:
            return 0;
    }
    
}

function getHumanChoice() {
    const choice = {1:"Rock", 2:"Paper", 3:"Scissors"};
    let decision = Number(prompt("Choose with the following numbers: 1:Rock, 2:Paper, 3:Scissors"));

    return choice[decision];
}

console.log(getHumanChoice());