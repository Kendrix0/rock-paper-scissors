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

const playerWin = (player, computer) => {
    return `You win, ${player} beats ${computer}!`
}

const playerLose = (player, computer) => {
    return `You lose, ${computer} beats ${player}!`
}

const playRound = (player, computer) => {
    if (player.toLowerCase() == computer) {
        return `You tie! Both players pick ${computer}!`
    } else {
        if (player.toLowerCase() == 'rock') {
            if (computer == 'paper') {
                return playerLose(player, computer)
            } else {
                return playerWin(player,computer)
            };
        } else if (player.toLowerCase() == 'paper') {
            if (computer == 'rock') {
                return playerWin(player,computer)
            } else {
                return playerLose(player, computer)
            }
        } else {
            if (computer == 'rock') {
                return playerLose(player, computer)
            } else {
                return playerWin(player,computer)
            };
        };
    }
}

const game = () => {
    let playerWin = 0;
    let compWin = 0;
    for(let i=0; i < 5; i++) {
        let result = playRound(prompt('Rock, paper, or scissor?'), computerPlay());
        console.log(result);
        if(result[4] === 'w') {
            playerWin++
        } else if (result[4] === 'l') {
            compWin++
        }
    }
    console.log('Game over! Here are your scores:')
    console.log(`Player: ${playerWin}`)
    console.log(`Computer: ${compWin}`)
    if (playerWin > compWin) {
        console.log('You won the game!')
    } else if (playerWin < compWin) {
        console.log('You lost the game!')
    } else {
        console.log('Tie game!')
    }
}

game();