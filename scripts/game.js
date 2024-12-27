let canvas;
let world;
let audios;
let keyboard = new Keyboard();
let intervalIDs = [];
let ctx;
// gameStart = true;
// gameEnd = false;

let backgroundAudio = new Audio(
  "assets/audio/Walking_through_grass_(long).mp3"
);
let winSound = new Audio("../assets/audio/LevelComplete.mp3");
let loseSound = new Audio("../assets/audio/MarioDeath.mp3");

function init() {
  canvas = document.getElementById("canvas");

  initLvl();

  world = new World(canvas, keyboard, audios);
  audios = new AudioCollections();

  // handleOrientation();

  // character.src = "./assets/img/2_character_pepe/2_walk/W-21.png";
  // ctx.drawImage(character, 20, 20, 50, 150);
}

window.addEventListener("keydown", (e) => {
  if (e.keyCode == 39) {
    keyboard.RIGHT = true;
  }

  if (e.keyCode == 37) {
    keyboard.LEFT = true;
  }

  if (e.keyCode == 38) {
    keyboard.UP = true;
  }

  if (e.keyCode == 40) {
    keyboard.DOWN = true;
  }

  if (e.keyCode == 32) {
    keyboard.SPACE = true;
  }

  if (e.keyCode == 68) {
    keyboard.D = true;
  }
});

window.addEventListener("keyup", (e) => {
  if (e.keyCode == 39) {
    keyboard.RIGHT = false;
  }

  if (e.keyCode == 37) {
    keyboard.LEFT = false;
  }

  if (e.keyCode == 38) {
    keyboard.UP = false;
  }

  if (e.keyCode == 40) {
    keyboard.DOWN = false;
  }

  if (e.keyCode == 32) {
    keyboard.SPACE = false;
  }

  if (e.keyCode == 68) {
    keyboard.D = false;
  }
});

function startGame() {
  let start = document.getElementById("startBTN");
  let startGame = document.getElementById("start");
  let impr = document.getElementById("btnCTNInfo");
  let gameRule = document.getElementById("rules");
  let endscreen = document.getElementById("endScreen");
  gameStart = true;
  gameEnd = false;

  if (gameStart) {
    start.classList.add("d-none");
    startGame.classList.add("d-none");
    impr.classList.add("d-none");
    gameRule.classList.add("d-none");
    endscreen.classList.add("d-none");
  }

  // world = null;
  initLvl();

  // init();
  // intervalIDs.push(interval);
  world.start();
  backgroundAudio.play();

  backgroundAudio.volume = 0.25;
  // world.audios.playAudio();
  document.getElementById("BTNS").classList.remove("d-none");
}

function showGameRules() {
  document.getElementById("gameRules").classList.remove("d-none");
}

function closeRules() {
  document.getElementById("gameRules").classList.add("d-none");
}

/**
 * The `endGame()` function is setting the `gameStart` variable to false and `gameEnd` variable to
 * true. It then hides the start button element and shows the end screen element on the page.
 * Additionally, it stops the game from running further actions.
 * */
function endGame() {
  let start = document.getElementById("start");
  let endscreen = document.getElementById("endScreen");
  gameStart = false;
  gameEnd = true;
  if (gameEnd) {
    start.classList.add("d-none");
    endscreen.classList.remove("d-none");
    // world.audios.pausingAudio();
    clearAllIntervals();
  }
}

/**
 * The `winGame()` function is displaying the winning screen and playing a win sound when the game is
 * won. It sets the `gameWin` variable to true, shows the winning screen element on the page, and plays
 * the win sound. Additionally, it clears all intervals using the `clearAllIntervals()` function and
 * hides the game buttons element.
 * */
function winGame() {
  let win = document.getElementById("winningScreen");
  gameWin = true;
  if (gameWin) {
    win.classList.remove("d-none");
    winSound.play();
  }

  clearAllIntervals();
  document.getElementById("BTNS").classList.add("d-none");
}

/* Alternative (quick and dirty), um alle Intervalle zu beenden. */
function clearAllIntervals() {
  for (let i = 1; i < 9999; i++) window.clearInterval(i);
}

/**
 * The `restartGame()` function is responsible for restarting the game. When this function is called,
 * it performs the following actions:
 * */
function restartGame() {
  document.getElementById("endScreen").classList.add("d-none");
  document.getElementById("winningScreen").classList.add("d-none");
  clearAllIntervals();
  world = null;
  initLvl();
  init();
  backgroundAudio.play();
  backgroundAudio.volume = 0.25;
  world.audios.playAudio();
  world.start();
}

function quitGame() {
  window.open("index.html", "_self");
  backgroundAudio.pause();
  backgroundAudio.volume = 0.25;
  world.audios.pauseAudio();
}

function quittingGame() {
  window.open("index.html", "_self");
}

/* function toggleSoundImage() {
  if (AudioCollections.muted == false) {
    AudioCollections.muted = true;
  } else {
    AudioCollections.muted = false;
  }
} */

/**
 * The `function openImpressum()` is responsible for displaying the "Impressum" section on the webpage.
 * When this function is called, it removes the "d-none" class from the element with the id
 * "Impressum", making it visible to the user. This allows users to view the Impressum section of the webpage.
 * */
function openImpressum() {
  document.getElementById("Impressum").classList.remove("d-none");
}

function closeImpressum() {
  document.getElementById("Impressum").classList.add("d-none");
}

function showRules() {
  document.getElementById("rules").classList.add("d-none");
  document.getElementById("gameRules").classList.remove("d-none");
}

function cloesRules() {
  document.getElementById("rules").classList.remove("d-none");
  document.getElementById("gameRules").classList.add("d-none");
}
