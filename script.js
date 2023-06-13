function getComputerChoice (){
    choice = Math.floor((Math.random()*3) +1);
    if (choice == 1){
        return "rock";
    }
    if (choice == 2){
        return "paper";
    }
    if (choice == 3){
        return "scissor";
    }
}
 function playRound(playerChoice){
    computerChoice = getComputerChoice();

    if (playerChoice == "rock"){
        if (computerChoice == "paper"){
            console.log( "You Lose! Paper beats Rock");
        }
        if (computerChoice == "scissor"){
            console.log( "You Won! Rock beats Scissors");
        }
        else{
            console.log( "You Tied!");
        }
    }  
    if (playerChoice == "paper"){
        if (computerChoice == "scissor"){
            console.log( "You Lose! Scissor beats Paper");
        }
        if (computerChoice == "rock"){
            console.log( "You Won! Paper beats Rock");
        }
        else{
            console.log( "You Tied!");
        }
    }
    if (playerChoice == "scissor"){
        if (computerChoice == "rock"){
            console.log( "You Lose! Rock beats Scissor");
        }
        if (computerChoice == "paper"){
            console.log( "You Won! Scissor beats Paper");
        }
        else{
            console.log( "You Tied");
        }
    }
}

 function getplayerChoice(){
    while(true){
        playerChoice = prompt("Rock, Paper, or Scissor?");
        playerChoice = playerChoice.toLowerCase();

        switch (playerChoice){
            case "rock":
            case "paper":
            case "scissor":
                return playerChoice;
            default:
                console.log("Invalid answer");
                break;
        }

    }
 }

 const rock = document.querySelector('#rock');
 const paper = document.querySelector('#paper');
 const scissor = document.querySelector('#scissor');

 rock.addEventListener('click', () => {
    playRound('rock');
 });
 paper.addEventListener('click', () => {
    playRound('paper');
 });
 scissor.addEventListener('click', () => {
    playRound('scissor');
 });