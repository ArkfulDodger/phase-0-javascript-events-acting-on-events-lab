// gobal variables
const moveIncrement = 10;

// dodger setup
const dodger = document.getElementById('dodger');
dodger.style.width = parseInt(getComputedStyle(dodger).width, 10);
dodger.style.backgroundColor = "#FF69B4";

// game width
const game = document.getElementById('game');
game.style.width = parseInt(getComputedStyle(game).width, 10);

// document event handler
document.addEventListener('keydown', (e) => inputHandler(e));

//movement callback functions
function inputHandler(e) {
    switch (e.key) {
        case 'ArrowRight':
        case 'd':
            moveDodgerRight();
            break;
        case 'ArrowLeft':
        case 'a':
            moveDodgerLeft();
            break;
        default:
            console.log(`unassigned key pressed`);
            break;
    }
    retainInBounds();
}

function moveDodgerLeft() {
    const positionVal = parseInt(dodger.style.left, 10);
    dodger.style.left = `${positionVal-moveIncrement}px`;
}

function moveDodgerRight() {
    const positionVal = parseInt(dodger.style.left, 10);
    dodger.style.left = `${positionVal+moveIncrement}px`;
}

function retainInBounds() {
    // set bounds and get current position
    const leftBound = 0;
    const rightBound = game.style.width - dodger.style.width;
    const currentPosition = parseInt(dodger.style.left, 10);

    // clamp dodger position to bounds
    dodger.style.left = `${Math.max(Math.min(currentPosition, rightBound), leftBound)}px`;
}