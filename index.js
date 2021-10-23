const results = document.querySelector('.results');
const scores = document.querySelector('.scores');
const pScore = document.querySelector('.pScore');
const cScore = document.querySelector('.cScore');
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissor = document.querySelector('.scissor');
const container = document.querySelector('.container');
const playAgain = document.querySelector('.playAgain');

let gameOver = false
let playerWin = 0;
let compWin = 0;

const isGameOver = () => {
    if(gameOver) {
        if (playerWin > compWin) {
            results.textContent = 'Game over! You win!';
        } else if (playerWin < compWin) {
            results.textContent = 'Game over! You lose!';
        }
        rock.setAttribute('disabled', true);
        paper.setAttribute('disabled', true);
        scissor.setAttribute('disabled', true);
    }
}

const playerWon = (player, computer) => {
    playerWin++;
    pScore.textContent = playerWin;
    if (playerWin == 5) {
        gameOver = true
    } else {
        results.textContent = `You win, ${player} beats ${computer}!`;
    }
}

const playerLost = (player, computer) => {
    compWin++
    cScore.textContent = compWin;
    if (compWin == 5) {
        gameOver = true
    } else {
        results.textContent = `You lose, ${computer} beats ${player}!`;
    }
}

const playerTie = (player, computer) => {
    results.textContent = `Tie! Both players chose ${player}.`
}

const playRound = (player, computer) => {
    let computerPlay = Math.floor(Math.random()*3);
    if (computerPlay == 0) {
        playerWon(player, computer[computerPlay])
    } else if (computerPlay == 1) {
        playerLost(player, computer[computerPlay])
    } else {
        playerTie(player, computer[computerPlay])
    }
}

rock.addEventListener('click', () => {
    playRound('rock', ['scissor', 'paper', 'rock']);
    isGameOver();
});
paper.addEventListener('click', () => {
    playRound('paper', ['rock', 'scissor', 'paper']);
    isGameOver();
});
scissor.addEventListener('click', () => {
    playRound('scissor', ['paper', 'rock', 'scissor']);
    isGameOver();
});

playAgain.addEventListener('click', () => {
    rock.removeAttribute('disabled');
    paper.removeAttribute('disabled');
    scissor.removeAttribute('disabled');
    
    results.textContent = 'Welcome to the game!';
    
    playerWin = 0;
    compWin = 0;
    pScore.textContent = playerWin;
    cScore.textContent = compWin;
    
    gameOver = false;
})