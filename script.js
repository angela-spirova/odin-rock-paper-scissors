let humanScore = 0;
let computerScore = 0;

const currentRoundResult = document.getElementById('current-round-result');

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


function playRound(humanChoice, computerChoice){
    while(!validInput(humanChoice)){
        humanChoice=prompt("Invalid choice! Please try again:");
    }
    if(humanChoice===computerChoice){
        console.log(`It's a tie! (both sides chose ${humanChoice})`);
    }
    else if(
        (humanChoice==="rock" && computerChoice==="scissors") ||
        (humanChoice==="paper" && computerChoice==="rock") ||
        (humanChoice==="scissors" && computerChoice==="paper")
    ){
        console.log(`You win! (${humanChoice} beats ${computerChoice})`);
        humanScore++;
    }else{
        console.log(`You lose! (${computerChoice} beats ${humanChoice})`);
        computerScore++;
    }
}

function playGame(){
    for(let i=0; i<5; i++){
        console.log(`Round ${i}:`);
        playRound(getHumanChoice(),getComputerChoice());
    }
    console.log('--- FINAL SCORES ---');
    console.log(`You: ${humanScore}`);
    console.log(`Computer: ${computerScore}`);
}

playGame();


// remove logic that plays 5 rounds
// create 3 buttons, one for each selection
// add a div for displaying results and change logs into dom methods
// display the running score and announce the winner once one player
// reaches 5 points