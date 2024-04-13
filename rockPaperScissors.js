// computer makes random choice of rock, paper, or scissors
function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    if (computerChoice == 0){
        return 'rock';
    } else if (computerChoice == 1){
        return 'paper';
    } else return 'scissors';
}

// player makes choice of rock, paper, or scissors
function getPlayerChoice() {
    let playerChoice = '';

    while (true){
    playerChoice = prompt('Make your choice', 'Rock / Paper / Scissors').toLowerCase();
    if (playerChoice == 'rock' || playerChoice == 'paper' || playerChoice == 'scissors'){
        return playerChoice; 
    } else alert('Invalid choice');
    }
}

// round is played with winner announced
function playRound(){
    let playerChoice = getPlayerChoice();
    let computerChoice = getComputerChoice();

    console.log('Your choice: ' + playerChoice);
    console.log('Computer\'s choice: ' + computerChoice);

    if (playerChoice == computerChoice){
        console.log('DRAW!');
    } else if (playerChoice == 'paper' && computerChoice == 'scissors'
        || playerChoice == 'scissors' && computerChoice == 'rock'
        || playerChoice == 'rock' && computerChoice == 'paper'){
        console.log('YOU LOSE!');
        return 'computer';
    } else if (
        playerChoice == 'paper' && computerChoice == 'rock'
        || playerChoice == 'scissors' && computerChoice == 'paper'
        || playerChoice == 'rock' && computerChoice == 'scissors'){
        console.log('YOU WIN!');
        return 'player';
    }
}

// a game of 5 rounds is played
function playGame(){
    let playerWins = 0;
    let computerWins = 0;
    let drawCount = 0;
    let winner = '';

    for (let i = 1; i <= 5; i++){
        console.log(`---ROUND ${i}---`);
        winner = playRound();

        if (winner == 'player'){
            playerWins++;
        } else if (winner == 'computer'){
            computerWins++;
        } else drawCount++;
    }

    console.log('-------------')
    console.log('Player Wins: ' + playerWins);
    console.log('Computer Wins: ' + computerWins);
    console.log('Draw: ' + drawCount);
    console.log('-------------')

    if (playerWins > computerWins){
        console.log('!!! YOU HAVE WON !!!');
    } else if (playerWins < computerWins){
        console.log('!!! THE COMPUTER WINS !!!');
    } else console.log('!!! IT\'S A DRAW !!!');

}

playGame();