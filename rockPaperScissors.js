function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice == 0){
        return 'rock';
    } else if (computerChoice == 1){
        return 'paper';
    } else return 'scissors';
}

let menu = document.querySelector('#buttonContainer');
menu.addEventListener('click', (event) => {
    let target = event.target;
    switch(target.id){
        case 'rock':
            playRound('rock')
            break;
        case 'paper':
            playRound('paper')
            break;
        case 'scissors':
        playRound('scissors')
        break;
    }
});

let playerScore = document.querySelector('#playerScore');
let computerScore = document.querySelector('#computerScore');
playerScore.textContent = 0;
computerScore.textContent = 0;

function playRound(input){
    let playerChoice = input;
    let computerChoice = getComputerChoice();

    let playerSelection = document.querySelector('#playerSelection');
    let computerSelection = document.querySelector('#computerSelection');
    playerSelection.textContent = 'Your choice: ' + playerChoice;
    computerSelection.textContent = 'Computer\'s choice: ' + computerChoice;

    let result = document.querySelector('#result');

    if (playerChoice == computerChoice){
        result.textContent = 'DRAW!';
    } else if (playerChoice == 'paper' && computerChoice == 'scissors'
        || playerChoice == 'scissors' && computerChoice == 'rock'
        || playerChoice == 'rock' && computerChoice == 'paper'){
        result.textContent = 'YOU LOSE!';
        computerScore.textContent++;
    } else if (
        playerChoice == 'paper' && computerChoice == 'rock'
        || playerChoice == 'scissors' && computerChoice == 'paper'
        || playerChoice == 'rock' && computerChoice == 'scissors'){
        result.textContent = 'YOU WIN!';
        playerScore.textContent++;
    }

    if (playerScore.textContent == 5){
        result.textContent = 'YOU HAVE WON THE GAME!';
        playAgain.style.display = 'block';
        document.querySelectorAll('.buttonToggle').forEach((element => element.disabled = true));
    }

    if (computerScore.textContent ==5){
        result.textContent = 'YOU HAVE LOST THE GAME!';
        playAgain.style.display = 'block';
        document.querySelectorAll('.buttonToggle').forEach((element => element.disabled = true));
    }
}

let playAgain = document.querySelector('#playAgainButton');
playAgain.addEventListener("click", () => {
    playerScore.textContent = 0;
    computerScore.textContent = 0;
    result.textContent = '';
    playerSelection.textContent = '';
    computerSelection.textContent = '';
    playAgain.style.display = 'none';
    document.querySelectorAll('.buttonToggle').forEach((element => element.disabled = false));
})