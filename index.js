const results = document.querySelector('.results');
const scores = document.querySelector('.scores');
const pScore = document.querySelector('.pScore');
const cScore = document.querySelector('.cScore');
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissor = document.querySelector('.scissor');
const container = document.querySelector('.container');
const playAgain = document.querySelector('.playAgain');

let gameOver = false;
let playerWin = 0;
let compWin = 0;

const isGameOver = () => {
    if(gameOver) {
        if (playerWin > compWin) {
            results.textContent = 'Congratulations! You win!';
        } else if (playerWin < compWin) {
            results.textContent = 'Game over! You lose!';
        }
        rock.setAttribute('disabled', true);
        paper.setAttribute('disabled', true);
        scissor.setAttribute('disabled', true);
    }
}

const playRound = (playerMove, computerMove) => {
    let roundResult = Math.floor(Math.random() * 3);
    if (roundResult === 0) {
        playerWin++;
        gameOver = (playerWin === 5);
        pScore.textContent = playerWin;
        results.textContent = `You win, ${playerMove} beats ${computerMove[roundResult]}!`;
    } else if (roundResult === 1) {
        compWin++;
        gameOver = (compWin === 5);
        cScore.textContent = compWin;
        results.textContent = `You lose, ${computerMove[roundResult]} beats ${playerMove}!`;
    } else {
        results.textContent = `Tie! Both players chose ${playerMove}.`
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