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
