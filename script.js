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