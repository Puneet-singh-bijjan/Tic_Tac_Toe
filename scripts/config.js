function operConfigOverlay(event){
    asideoverlayElement.style.display = 'block';
    backdropElement.style.display = 'block';
    selectedPlayer = +event.target.dataset.playerid;
    formElement.firstElementChild.children[2].value = '';
}

function closeConfigOverlay(){
    asideoverlayElement.style.display = 'none';
    backdropElement.style.display = 'none';
    formElement.firstElementChild.classList.remove('error');
    errorOutputElement.textContent = '';
}

function savePlayerConfig(event){
    event.preventDefault();
    const formdata =  new FormData(event.target);
    const enteredPlayer = formdata.get('username').trim();

    if(!enteredPlayer){ //enteredPlayer === ''
        errorOutputElement.textContent = 'Please enter a valid input!';
        formElement.firstElementChild.classList.add('error');
        return;
    }

    const enteredUserName = document.getElementById('player-' + selectedPlayer);
    enteredUserName.children[1].textContent = enteredPlayer;

    // if(selectedPlayer === 1){
    //     players[0].name = enteredPlayer;
    // }else{
    //     players[1].name = enteredPlayer;
    // }

    players[selectedPlayer - 1].name = enteredPlayer;

    closeConfigOverlay();

}