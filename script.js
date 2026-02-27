function getComputerChoice(){
    let num = Math.random()*100;
    if(num<=100/3){
        return "rock";
    }
    if(num<=200/3){
        return "paper";
    }
    return "scissors";
}
