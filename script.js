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
    if (playerChoice = "rock"){
        if (computerChoice = "paper"){
            return "you lose"
        }
        if (computerChoice = "scissors"){
            return "you won"
        }
        else{
            return "you tied"
        }
    }  
    if (playerChoice = "paper"){
        if (computerChoice = "scissors"){
            return "you lose"
        }
        if (computerChoice = "rock"){
            return "you won"
        }
        else{
            return "you tied"
        }
    }
    if (playerChoice = "scissor"){
        if (computerChoice = "rock"){
            return "you lose"
        }
        if (computerChoice = "paper"){
            return "you won"
        }
        else{
            return "you tied"
        }
    }
 }