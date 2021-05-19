let playerWins = 0;
let computerWins = 0;
let ties = 0;

function computerPlay(){
    let moveRandom = Math.floor(Math.random() * 3);
    let computerMove;

    if (moveRandom === 0) {
        computerMove = 'rock'
    } else if (moveRandom === 1) {
        computerMove = 'paper'
    } else {
        computerMove = 'scissors'
    }
    return computerMove
}

function playRound(playerSelection){
    let outcome;
    let computerSelection = computerPlay()
    
    if (playerSelection === computerSelection) {
            outcome = 'Its a tie!';
            ties++;
    } else if (playerSelection === 'rock' && computerSelection === 'scissors'){
            outcome = 'You win! Rock beats scissors!';
            playerWins++;
    } else if (playerSelection === 'rock' && computerSelection === 'paper'){
            outcome = 'You lose! Paper beats rock!';
            computerWins++;
    } else if (playerSelection === 'paper' && computerSelection === 'rock'){
            outcome = 'You win! Paper beats rock!';
            playerWins++;
    } else if (playerSelection === 'paper' && computerSelection === 'scissors'){
            outcome = 'You lose! Scissors beats paper!';
            computerWins++;
    } else if (playerSelection === 'scissors' && computerSelection === 'paper'){
            outcome = 'You win! Scissors beats paper!';
            playerWins++;
    } else if (playerSelection === 'scissors' && computerSelection === 'rock'){
            outcome = 'You lose! Rock beats scissors!';
            computerWins++;
    } else {
            outcome = 'Please input rock, paper or scissors...'
    }
    console.log(outcome);
    roundCounter();
}

function roundCounter() {
    let rounds = playerWins + computerWins + ties;
    if (rounds === 5){
        if (playerWins > computerWins) {
            console.log("You win the game! Resetting!");
            resetGame();
        } else {
            console.log("You lost the game! Better luck next time...resetting...");
            resetGame();
        }
    }
}

function resetGame() {
    playerWins = 0;
    computerWins = 0;
    ties = 0;
}

const container = document.querySelector('#container');

let playerScore = document.createElement('div');
playerScore.classList.add('playerScore');
container.appendChild(playerScore)

let computerScore = document.createElement('div');
computerScore.classList.add('computerScore');
container.appendChild(computerScore)

const rockButton = document.getElementById('rock');
rockButton.addEventListener('click', function () {
    playRound('rock');
    playerScore.textContent = `Your score: ${playerWins}`;
    computerScore.textContent = `Computer score: ${computerWins}`;
});

const paperButton = document.getElementById('paper');
paperButton.addEventListener('click', function () {
    playRound('paper');
    playerScore.textContent = `Your score: ${playerWins}`;
    computerScore.textContent = `Computer score: ${computerWins}`;  
});

const scissorsButton = document.getElementById('scissors');
scissorsButton.addEventListener('click', function () {
    playRound('scissors');
    playerScore.textContent = `Your score: ${playerWins}`;
    computerScore.textContent = `Computer score: ${computerWins}`;
});