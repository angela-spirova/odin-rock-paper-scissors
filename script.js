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

function getHumanChoice(){
    return prompt("Choose rock, paper or scissors:");
}

paper beats rock 
rock beats scissors
scissors beat paper

function playRound(humanChoice, computerChoice){
    
}

function playGame(){
    for(let i=0; i<5; i++){
        playRound(getHumanChoice(),getComputerChoice());
    }
}

playGame();