function play() {
  hideElement("section-1");
  showElement("section-2");
  continueGame();
}

let currentScore = document.getElementById("currentScore");
let currentLife = document.getElementById("currentLife");
let sum = 0;
console.log(sum);
let sum2 = 5;
function scoreIncrement(currentAlphabet, playerPressed) {
  if (currentAlphabet === playerPressed) {
    currentScore.innerText = sum + 1;
    sum = Number(currentScore.innerText);
    console.log("correctly pressed", playerPressed);
    removeBackgroundColor(playerPressed);
    continueGame();
  } else {
    if (sum2 === 0) {
      hideElement("section-2");
      showElement("gameOver");
    }

    currentLife.innerText = sum2 - 1;
    sum2 = Number(currentLife.innerText);
  }
  let gameOverScore = document.getElementById("gameOverScore");
  gameOverScore.innerText = sum;
}

function keyPressDetect(event) {
  let playerPressed = event.key;
  if (playerPressed === "Escape") {
    playAgain()
  }

  let currentAlphabet = document.getElementById("currentAlphabet").innerText;
  scoreIncrement(playerPressed, currentAlphabet);
}

document.addEventListener("keyup", keyPressDetect);

function continueGame() {
  let randomAlphabet = createRandomAlphabet();
  let currentAlphabet = document.getElementById("currentAlphabet");
  currentAlphabet.innerText = randomAlphabet;

  setBackgroundColor(randomAlphabet);
}

function playAgain() {
  showElement("gameOver");
  hideElement("section-2");
}

function playAgain2() {
  hideElement("gameOver");
  showElement("section-2");
  let currentLife = document.getElementById("currentLife");
  currentLife.innerText = 5;
  sum2 = 5;
  let currentScore = document.getElementById("currentScore");
  currentScore.innerText = 0;
  sum = 0;
}
