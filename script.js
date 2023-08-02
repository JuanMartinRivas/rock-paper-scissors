function getComputerChoice(){
    let choice;

    const randNum = Math.floor(Math.random() * 3);

    if (randNum == 0){
        choice = "Rock"
    } else if (randNum == 1){
        choice = "Paper"
    } else if (randNum == 2){
        choice = "Scissors"
    };

    return choice;
}

function getPlayerChoice(){
    let choice;
    let choiceNum = prompt("Make your choice:\n1.Rock.\n2.Paper.\n3.Scissors.");

    if (choiceNum == "1"){
        choice = "Rock";
    } else if (choiceNum == "2"){
        choice = "Paper";
    } else if (choiceNum == "3"){
        choice = "Scissors";
    } else {
        choice = null;
    }

    return choice;
}

console.log(getPlayerChoice());