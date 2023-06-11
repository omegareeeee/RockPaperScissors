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
 function playRound(playerChoice, computerChoice){
    if (playerChoice == "rock"){
        if (computerChoice == "paper"){
            return "You Lose! Paper beats Rock";
        }
        if (computerChoice == "scissor"){
            return "You Won! Rock beats Scissors"
        }
        else{
            return "You Tied!"
        }
    }  
    if (playerChoice == "paper"){
        if (computerChoice == "scissor"){
            return "You Lose! Scissor beats Paper"
        }
        if (computerChoice == "rock"){
            return "You Won! Paper beats Rock"
        }
        else{
            return "You Tied!"
        }
    }
    if (playerChoice == "scissor"){
        if (computerChoice == "rock"){
            return "You Lose! Rock beats Scissor"
        }
        if (computerChoice == "paper"){
            return "You Won! Scissor beats Paper"
        }
        else{
            return "You Tied"
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

 console.log(playRound(getplayerChoice(), getComputerChoice()));