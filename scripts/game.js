let canvas;
let world;
let audio;
let keyboard = new Keyboard();

let ctx;
/* gameStart = true;
gameEnd = false;
let backgroundAudio = new Audio("assets/audio/DramaticMusicSound.mp3");
let winSound = new Audio("assets/audio/LevelComplete.mp3");
let loseSound = new Audio("assets/audio/MarioDeath.mp3"); */

function init() {
  canvas = document.getElementById("canvas");

  initLvl();
  world = new World(canvas, keyboard, audio);
  // audio = new AudioCollection();
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
  let start = document.getElementById("start");
  let endscreen = document.getElementById("endscreen");
  gameStart = true;
  gameEnd = false;
  if (gameStart) {
    start.classList.add("d-none");
    endscreen.classList.add("d-none");
  }
  world = null;
  initLevel();
  init();
  backgroundAudio.play();
  backgroundAudio.volume = 0.25;
  world.audios.playAudio();
  document.getElementById("buttons").classList.remove("d-none");
}

function endGame() {
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
