function playAgain() {
    activePlayer = 0;
    countItems = 1;
    isGameOver = false;

    playerData = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
    ];
    gameOverElement.firstElementChild.innerHTML = 'You won, <span id="winner-name"> Player Name</span>';
    gameOverElement.style.display = 'none';
    for(let i = 0; i < 9; i++){
        gameFieldElement.children[i].textContent = '';
        gameFieldElement.children[i].classList.remove('disabled');
    }
    return;
}

function startGame() {
    if (!players[0].name || !players[1].name) {
        alert('Please Enter your name first');
        return;
    }
    playAgain();
    gameBoardElement.style.display = 'block'; 
    activeplayerNameElement.textContent = players[activePlayer].name;
}

function switchplayer() {
    if (activePlayer === 0) {
        activePlayer = 1;
    } else {
        activePlayer = 0;
    }
    activeplayerNameElement.textContent = players[activePlayer].name;
}

function checkForWinner() {
    // if(playerData[0][0] && playerData[1][1] && playerData[2][2] == 1 ){
    //     alert(players[activePlayer].name);
    // }
    // if(playerData[0][0] && playerData[1][1] && playerData[2][2] == 2 ){
    //     alert(players[activePlayer].name);
    // }
    // return;

    //logic to check for column equality
        for (let i = 0; i < 3; i++) {
        if (playerData[i][0] > 0 && playerData[i][0] == playerData[i][1] && playerData[i][0] == playerData[i][2]) {
            return playerData[i][0];
        }

        //logic to check for row equality
        for (let i = 0; i < 3; i++) {
            if (playerData[0][i] > 0 && playerData[0][i] == playerData[1][i] && playerData[0][i] == playerData[2][i]) {
                return playerData[0][i];
            }

            //logic for Diagonal: from top left to right bottom
            if (playerData[0][0] > 0 && playerData[0][0] == playerData[1][1] && playerData[0][0] == playerData[2][2])
                return playerData[0][0];
        }

        //logic for Diagonal: from bottom left to top right
        if (playerData[2][0] > 0 && playerData[2][0] == playerData[1][1] && playerData[2][0] == playerData[0][2])
            return playerData[2][0];
    }

    if (countItems >= 9) {
        return -1;
    }

    return 0;

}

function gameOver(winnerId) {
    gameOverElement.style.display = 'block';
    isGameOver = true;
    if (winnerId > 0) {
        gameOverElement.children[0].firstElementChild.textContent = players[winnerId - 1].name;
    } else {
        gameOverElement.children[0].textContent = "It's a draw!"
    }
}

function gameFieldSelect(event) {
    if(isGameOver){
        return;
    }

    const selectedField = event.target;
    const selectedPlayerRow = selectedField.dataset.row;
    const selectedPlayerCol = selectedField.dataset.col;

    if (playerData[selectedPlayerRow][selectedPlayerCol] > 0) {
        return;
    }

    selectedField.className = 'disabled';
    selectedField.textContent = players[activePlayer].symbol;
    playerData[selectedPlayerRow][selectedPlayerCol] = activePlayer + 1;
    let winnerId = checkForWinner();

    if (winnerId > 0 || winnerId < 0) {
        gameOver(winnerId);
    }

    countItems++;

    switchplayer();
}