function getComputerChoice() {
    let choice;

    const randNum = Math.floor(Math.random() * 3);

    if (randNum == 0) {
        choice = "Rock"
    } else if (randNum == 1) {
        choice = "Paper"
    } else if (randNum == 2) {
        choice = "Scissors"
    };

    return choice;
}

function getPlayerChoice() {
    let choice;
    let choiceNum = prompt("Make your choice:\n1.Rock.\n2.Paper.\n3.Scissors.");

    while (choiceNum != "1" && choiceNum != "2" && choiceNum != "3") {
        choiceNum = prompt("Please enter one of the following choices only:\n1.Rock.\n2.Paper.\n3.Scissors.");
        if (choiceNum == "1" || choiceNum == "2" || choiceNum == "3") {
            break;
        }
    };

    if (choiceNum == "1") {
        choice = "Rock";
    } else if (choiceNum == "2") {
        choice = "Paper";
    } else if (choiceNum == "3") {
        choice = "Scissors";
    } else {
        choice = null;
    }

    return choice;
}

function playRound(playerChoice, computerChoice) {
    if (playerChoice == "Rock" && computerChoice == "Paper") {
        return "You loose! Paper beats rock."
    } else if (playerChoice == "Rock" && computerChoice == "Scissors") {
        return "You win! Rock beats Scissors"
    } else if (playerChoice == "Paper" && computerChoice == "Scissors") {
        return "You loose! Scissors beat paper."
    } else if (playerChoice == "Paper" && computerChoice == "Rock") {
        return "You win! Paper beats Rock"
    } else if (playerChoice == "Scissors" && computerChoice == "Rock") {
        return "You loose! Rock beats Scissors."
    } else if (playerChoice == "Scissors" && computerChoice == "Paper") {
        return "You win! Scissors beat Paper"
    } else if (playerChoice === computerChoice) {
        return "It's a tie!";
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let round = 0; round < 5; round++) {
        let pChoice = getPlayerChoice();
        let cChoice = getComputerChoice();
        let result = playRound(pChoice, cChoice);

        if (result.startsWith("You win!")) {
            playerScore++;
        } else if (result.startsWith("You loose!")) {
            computerScore++;
        }

        console.log(result);
        console.log(`Round ${round + 1}: Player ${playerScore} - ${computerScore} Computer`);
    }

    if (playerScore > computerScore) {
        return "Player wins!";
    } else if (computerScore > playerScore) {
        return "Computer wins!";
    } else {
        return "It's a tie!";
    }
}

console.log(game());