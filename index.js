// Your code here
// Assuming these variables exist in your game:
const DODGER = document.getElementById('dodger');
const GAME_WIDTH = 400; // Example width, adjust to your game
const DODGER_WIDTH = 40; // Example dodger width

// Move the dodger left
function moveDodgerLeft() {
  const leftNumbers = DODGER.style.left.replace('px', '');
  const left = parseInt(leftNumbers, 10);

  if (left > 0) {
    DODGER.style.left = `${left - 4}px`;
  }
}

// Move the dodger right
function moveDodgerRight() {
  const leftNumbers = DODGER.style.left.replace('px', '');
  const left = parseInt(leftNumbers, 10);

  if (left < (GAME_WIDTH - DODGER_WIDTH)) {
    DODGER.style.left = `${left + 4}px`;
  }
}