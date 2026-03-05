let humanScore = 0;
let computerScore = 0;

const currentRoundResult = document.getElementById('current-round-result');

const humanScoreEl = document.getElementById('human-score');
const computerScoreEl = document.getElementById('computer-score');

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

let buttons = document.querySelectorAll('button.choice');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const humanChoice = button.id;
        playRound(humanChoice, getComputerChoice());
    });
});

function displayCurrentRoundResult(result){
    currentRoundResult.textContent = result;
}

function displayCurrentScores(){
    humanScoreEl.textContent = humanScore;
    computerScoreEl.textContent = computerScore;
}

function playRound(humanChoice, computerChoice){
    if(humanChoice===computerChoice){
        displayCurrentRoundResult(`It's a tie! (both sides chose ${humanChoice})`);
    }
    else if(
        (humanChoice==="rock" && computerChoice==="scissors") ||
        (humanChoice==="paper" && computerChoice==="rock") ||
        (humanChoice==="scissors" && computerChoice==="paper")
    ){
        displayCurrentRoundResult(`You win! (${humanChoice} beats ${computerChoice})`);
        humanScore++;
    }else{
        displayCurrentRoundResult(`You lose! (${computerChoice} beats ${humanChoice})`);
        computerScore++;
    }
    
    displayCurrentScores();
}

// remove logic that plays 5 rounds
// create 3 buttons, one for each selection
// add a div for displaying results and change logs into dom methods
// display the running score and announce the winner once one player
// reaches 5 points