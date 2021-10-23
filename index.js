const results = document.querySelector('.results');
const scores = document.querySelector('.scores');
const pScore = document.querySelector('.pScore');
const cScore = document.querySelector('.cScore');
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissor = document.querySelector('.scissor');
const container = document.querySelector('.container');
const playAgain = document.querySelector('.playAgain');
let playerSelection = 'none'
let gameOver = false
let playerWin = 0;
let compWin = 0;

const computerPlay = () => {
    const play = Math.floor(Math.random()*3);
    if (play == 0) {
        return 'rock'
    }
    else if (play == 1) {
        return 'paper'
    }
    else {
        return 'scissor'
    }
}

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
    playerSelection = 'none';
    playerWin++;
    pScore.textContent = playerWin;
    if (playerWin == 5) {
        gameOver = true
    } else {
        results.textContent = `You win, ${player} beats ${computer}!`;
    }
}

const playerLost = (player, computer) => {
    playerSelection = 'none';
    compWin++
    cScore.textContent = compWin;
    if (compWin == 5) {
        gameOver = true
    } else {
        results.textContent = `You lose, ${computer} beats ${player}!`;
    }
}

const playRound = (player, computer) => {
    if (player == computer) {
        playerSelection = 'none'
        results.textContent = `You tie! Both players pick ${computer}!`
    } else {
        if (player == 'rock') {
            if (computer == 'paper') {
                return playerLost(player, computer)
            } else {
                return playerWon(player,computer)
            };
        } else if (player == 'paper') {
            if (computer == 'rock') {
                return playerWon(player,computer)
            } else {
                return playerLost(player, computer)
            }
        } else {
            if (computer == 'rock') {
                return playerLost(player, computer)
            } else {
                return playerWon(player,computer)
            };
        };
    }
}

rock.addEventListener('click', () => {
    playerSelection = 'rock';
    playRound(playerSelection, computerPlay());
    isGameOver();
});
paper.addEventListener('click', () => {
    playerSelection = 'paper';
    playRound(playerSelection, computerPlay());
    isGameOver();
});
scissor.addEventListener('click', () => {
    playerSelection = 'scissor';
    playRound(playerSelection, computerPlay());
    isGameOver();
});
playAgain.addEventListener('click', () => {
    playerSelection = 'none'
    playerWin = 0;
    compWin = 0;
    results.textContent = 'Welcome to the game!';
    rock.removeAttribute('disabled');
    paper.removeAttribute('disabled');
    scissor.removeAttribute('disabled');
    pScore.textContent = playerWin;
    cScore.textContent = compWin;
    gameOver = false;
})