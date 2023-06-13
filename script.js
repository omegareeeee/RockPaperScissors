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
            return false;
        }
        if (computerChoice == "scissor"){
            console.log( "You Won! Rock beats Scissors");
            return true;
        }
        else{
            console.log( "You Tied!");
            return null;
        }
    }  
    if (playerChoice == "paper"){
        if (computerChoice == "scissor"){
            console.log( "You Lose! Scissor beats Paper");
            return false;
        }
        if (computerChoice == "rock"){
            console.log( "You Won! Paper beats Rock");
            return true;
        }
        else{
            console.log( "You Tied!");
            return null;
        }
    }
    if (playerChoice == "scissor"){
        if (computerChoice == "rock"){
            console.log( "You Lose! Rock beats Scissor");
            return false;
        }
        if (computerChoice == "paper"){
            console.log( "You Won! Scissor beats Paper");
            return true;
        }
        else{
            console.log( "You Tied");
            return null;
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
 function hasWinner(player, ai){
    if(player == 5){
        alert("You won!!");
        return true;
    }

    if(ai == 5){
        alert("You Lost!");
        return true;
    }
 }
 const rock = document.querySelector('#rock');
 const paper = document.querySelector('#paper');
 const scissor = document.querySelector('#scissor');
 const scoreBoard = document.querySelector('#scoreBoard');
 let playerScore = 0;
 let aiScore = 0;
// add forEACH witu button.textContent
 rock.addEventListener('click', () => {
    result = playRound('rock');
    if(result){
        playerScore++;
    } else if (result === false){
        aiScore++;
    }
    scoreBoard.textContent = "ScoreBoard:" +playerScore + ":" + aiScore;
    if(hasWinner(playerScore, aiScore)){
        playerScore = 0;
        aiScore = 0;
    }
 });

 paper.addEventListener('click', () => {
    result = playRound('paper');
    if(result){
        playerScore++;
    }else if (result === false){
        aiScore++;
    }
    scoreBoard.textContent = "ScoreBoard:" +playerScore + ":" + aiScore;
    if(hasWinner(playerScore, aiScore)){
        playerScore = 0;
        aiScore = 0;
    }
 });
 scissor.addEventListener('click', () => {
    result = playRound('scissor');
    if(result){
        playerScore++;
    } else if (result === false) {
        aiScore++;
    }
    scoreBoard.textContent = "ScoreBoard:" +playerScore + ":" + aiScore;
    if(hasWinner(playerScore, aiScore)){
        playerScore = 0;
        aiScore = 0;
    }
 });
 
 


