const asideoverlayElement = document.getElementById('overlay');
const backdropElement = document.getElementById('backdrop');

const player1ConfigElement = document.getElementById('player-configuration-btn-1');
const player2ConfigElement = document.getElementById('player-configuration-btn-2');
const cancelOverlayButtonElement = document.getElementById('cancel-overlay-btn');
const confirmbuttonElement = document.getElementById('confirm-btn');

player1ConfigElement.addEventListener('click' , operConfigOverlay);
player2ConfigElement.addEventListener('click' , operConfigOverlay);

cancelOverlayButtonElement.addEventListener('click', closeConfigOverlay);
backdropElement.addEventListener('click', closeConfigOverlay);