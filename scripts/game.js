let canvas;
let world;
let audios;
let keyboard = new Keyboard();

let ctx;
gameStart = true;
gameEnd = false;
let backgroundAudio = new Audio(
  "assets/audio/Walking_through_grass_(long).mp3"
);
let winSound = new Audio("assets/audio/LevelComplete.mp3");
let loseSound = new Audio("assets/audio/MarioDeath.mp3");

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
  let impr = document.getElementById("btnCTNInfo");
  let gameRule = document.getElementById("rules");
  let endscreen = document.getElementById("endscreen");
  gameStart = true;
  gameEnd = false;

  if (gameStart) {
    start.classList.add("d-none");
    impr.classList.add("d-none");
    gameRule.classList.add("d-none");
    endscreen.classList.add("d-none");
  }

  world = null;
  initLvl();
  init();
  backgroundAudio.play();
  backgroundAudio.volume = 0.25;
  world.audios.playAudio();
  document.getElementById("buttons").classList.remove("d-none");
}

function showGameRules() {
  document.getElementById("gameRules").classList.remove("d-none");
}

function closeRules() {
  document.getElementById("gameRules").classList.add("d-none");
}

/* function addButtons() {
  console.log("addButtons");
  document.getElementById("BTNS").innerHTML = `
  <button class="btns" id="btnPlay" onclick="startGame()"></button>
  <button class="btns" id="btnHelp"></button>
  <button class="btns" id="btnFullscreen" onclick="fullscreenOn()"></button>`;
}

function setStartScreen() {
  addButtons();
  let overlay = document.getElementById("canvasOverlay");
  overlay.classList.add("start");
}

function setGameScreen() {
  let overlay = document.getElementById("canvasOverlay");
  overlay.removeAttribute("class");
} */

/* function endGame() {
  let start = document.getElementById("start");
  let endscreen = document.getElementById("endscreen");
  gameStart = false;
  gameEnd = true;
  if (gameEnd) {
    start.classList.add("d-none");
    endscreen.classList.remove("d-none");
    world.audios.pauseAudio();
  }
}

function winGame() {
  let win = document.getElementById("winScreen");
  gameWin = true;
  if (gameWin) {
    win.classList.remove("d-none");
    winSound.play();
  }

  clearAllIntervals();
  document.getElementById("btns").classList.add("d-none");
} */
