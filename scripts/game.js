function startGame(){
    if(!players[0].name || !players[1].name){
        alert('Please Enter your name first');
        return;
    }
    gameBoardElement.style.display = 'block';
    activeplayerNameElement.textContent = players[activePlayer].name;
}

function switchplayer(){
    if(activePlayer === 0){
        activePlayer = 1;
    }else{
        activePlayer = 0;
    }
    activeplayerNameElement.textContent = players[activePlayer].name;
}

function gameFieldSelect(event){
    const selectedField = event.target;
    const selectedPlayerRow = selectedField.dataset.row;
    const selectedPlayerCol = selectedField.dataset.col;

    if(playerData[selectedPlayerRow][selectedPlayerCol]>0){
        return;
    }

    selectedField.textContent = players[activePlayer].symbol;
    playerData[selectedPlayerRow][selectedPlayerCol] = activePlayer + 1;
    

    switchplayer();

}