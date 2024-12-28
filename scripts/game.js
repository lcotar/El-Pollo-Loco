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

let winSound = new Audio("assets/audio/LevelComplete.mp3");
let loseSound = new Audio("assets/audio/MarioDeath.mp3");

function init() {
  canvas = document.getElementById("canvas");

  initLvl();
  audios = new AudioCollections();
  world = new World(canvas, keyboard, audios);

  handleRotation();

  // character.src = "./assets/img/2_character_pepe/2_walk/W-21.png";
  // ctx.drawImage(character, 20, 20, 50, 150);
}

function pressKeyboard() {
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
}

function pressBTNS() {
  document.getElementById("btnLeft").addEventListener("touchstart", (e) => {
    if (e.cancelable) {
      e.preventDefault();
    }
    keyboard.LEFT = true;
  });

  document.getElementById("btnLeft").addEventListener("touchend", (e) => {
    if (e.cancelable) {
      e.preventDefault();
    }
    keyboard.LEFT = false;
  });

  document.getElementById("btnRight").addEventListener("touchstart", (e) => {
    if (e.cancelable) {
      e.preventDefault();
    }
    keyboard.RIGHT = true;
  });

  document.getElementById("btnRight").addEventListener("touchend", (e) => {
    if (e.cancelable) {
      e.preventDefault();
    }
    keyboard.RIGHT = false;
  });

  document.getElementById("btnThrow").addEventListener("touchstart", (e) => {
    if (e.cancelable) {
      e.preventDefault();
    }
    keyboard.D = true;
  });

  document.getElementById("btnThrow").addEventListener("touchend", (e) => {
    if (e.cancelable) {
      e.preventDefault();
    }
    keyboard.D = false;
  });

  document.getElementById("btnJump").addEventListener("touchstart", (e) => {
    if (e.cancelable) {
      e.preventDefault();
    }
    keyboard.SPACE = true;
  });

  document.getElementById("btnJump").addEventListener("touchend", (e) => {
    if (e.cancelable) {
      e.preventDefault();
    }
    keyboard.SPACE = false;
  });
}

/**
 * The `handleRotation()` function in the provided JavaScript code is responsible for determining the
 * orientation of the device (landscape or portrait) and setting up event listeners accordingly to
 * handle keyboard input or touch events based on the orientation.
 * */
function handleRotation() {
  if (window.matchMedia("(orientation: landscape)").matches) {
    // keyboardSteering();
    pressKeyboard();
  } else if (window.matchMedia("(orientation: portrait)").matches) {
    pressBTNS();
  }
}

window.addEventListener("resize", handleRotation);
window.addEventListener("orientationchange", handleRotation);
handleRotation();

/**
 * The `startGame()` function is responsible for starting the game. When this function is called, it
 * performs the following actions:
 * */
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

  world = null;
  initLvl();
  init();

  world.start();
  backgroundAudio.play();

  backgroundAudio.volume = 0.25;
  world.audios.playAudio();
  document.getElementById("BTNS").classList.remove("d-none");
}

/**
 * The `showGameRules()` function is responsible for displaying the game rules on the webpage.
 * When this function is called, it removes the "d-none" class from the element with the id "gameRules",
 * making the game rules visible to the user. This allows users to view the rules of the game before
 * starting to play.
 * */
function showGameRules() {
  document.getElementById("gameRules").classList.remove("d-none");
}

/**
 * The `function closeRules()` is responsible for hiding the game rules section on the webpage.
 * When this function is called, it adds the "d-none" class to the element with the id "gameRules",
 * making it hidden from the user.
 * This allows users to close or hide the game rules section after viewing them.
 * */
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
    world.audios.pausingAudio();
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
    backgroundAudio.pause();
  }

  clearAllIntervals();
  document.getElementById("BTNS").classList.add("d-none");
}

/**
 * The `clearAllIntervals()` function is a utility function that is used to stop all intervals that
 * have been set using `window.setInterval()`. It iterates through interval IDs starting from 1 up to
 * 9999 and clears each interval using `window.clearInterval()`. This function ensures that all
 * intervals are stopped or cleared, preventing any further execution of code that was set to run at
 * specific intervals. It is a way to clean up and stop any ongoing interval-based actions in the game.
 * */
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

/**
 * The `quitGame()` function is responsible for redirecting the user to the `index.html` page when it is called.
 * It uses `window.open("index.html", "_self")` to open the `index.html` page in the same window,
 * effectively navigating away from the current page and loading the `index.html` page.
 * This function acts as a way to quit or exit the current game and return to the main page or homepage of the application.
 * */
function quitGame() {
  window.open("index.html", "_self");
  backgroundAudio.pause();
  backgroundAudio.volume = 0.25;
  world.audios.pausingAudio();
}

/**
 * The `function quittingGame()` is a function that redirects the user to the `index.html` page when called.
 * It uses `window.open("index.html", "_self")` to open the `index.html` page in the same window,
 * effectively navigating away from the current page and loading the `index.html` page.
 * This function acts as a way to quit or exit the current game and return to the main page or homepage of the application.
 * */
function quittingGame() {
  window.open("index.html", "_self");
}

/**
 * The `toggleSoundImage()` function is responsible for toggling the sound on and off in the game.
 * When this function is called, it checks if the mute icon has the class `muteOn`.
 * If the mute icon has the `muteOn` class, it sets the volume of background audio, win sound, and lose sound to 0,
 * effectively muting the game sounds.
 * */
function toggleSoundImage() {
  let mute = document.getElementById("mute");
  mute.classList.toggle("muteOn");

  if (mute.classList[1]) {
    backgroundAudio.volume = 0;
    world.audios.pausingAudio();
    backgroundAudio.volume = 0;
    winSound.volume = 0;
    loseSound.volume = 0;
  } else if (mute.classList[0]) {
    backgroundAudio.volume = 1;
    world.audios.playAudio();
    backgroundAudio.volume = 0.25;
    winSound.volume = 1;
    loseSound.volume = 1;
  }
}

/**
 * The `function openImpressum()` is responsible for displaying the "Impressum" section on the webpage.
 * When this function is called, it removes the "d-none" class from the element with the id "Impressum",
 * making it visible to the user. This allows users to view the Impressum section of the webpage.
 * */
function openImpressum() {
  document.getElementById("Impressum").classList.remove("d-none");
}

/**
 * The `function closeImpressum()` is responsible for hiding the "Impressum" section on the webpage.
 * When this function is called, it adds the "d-none" class to the element with the id "Impressum",
 * making it hidden from the user. This action allows users to close or hide the "Impressum" section after viewing it.
 * */
function closeImpressum() {
  document.getElementById("Impressum").classList.add("d-none");
}

/**
 * The `function showRules()` is setting the "rules" element to be hidden by adding the "d-none" class
 * to it, and then displaying the "gameRules" element by removing the "d-none" class from it.
 * This action allows users to view the game rules on the webpage after hiding the initial rules section.
 * */
function showRules() {
  document.getElementById("rules").classList.add("d-none");
  document.getElementById("gameRules").classList.remove("d-none");
}

/**
 * The `function cloesRules()` seems to have a typo in its name. It should be `function closeRules()`.
 * This function is responsible for hiding the game rules section on the webpage. When called, it adds
 * the "d-none" class to the element with the id "gameRules", making it hidden from the user.
 * This allows users to close or hide the game rules section after viewing them.
 * */
function cloesRules() {
  document.getElementById("rules").classList.remove("d-none");
  document.getElementById("gameRules").classList.add("d-none");
}
