
function getHumanChoice(){
    return prompt("Rock, paper or scissors?");
}
function getComputerChoice(){
    let randomNum = Math.random();
    if(randomNum<=1/3){
        return "rock";
    }
    if(randomNum<=2/3){
        return "paper";
    }
    return "scissors";
}