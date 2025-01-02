let canvas;
let world;
let audios;
let keyboard = new Keyboard();
let ctx;
let isMuted = false;

let backgroundAudio = new Audio(
  "./assets/audio/Walking_through_grass_(long).mp3"
);

let winSound = new Audio("./assets/audio/LevelComplete.mp3");
let loseSound = new Audio("./assets/audio/MarioDeath.mp3");

/**
 * Initializes the game environment and objects.
 * Sets up the canvas, initializes the level, audio collection, and world.
 * Handles character rotation and draws the character image on the canvas (commented out code).
 * Prepares the game for interaction by loading necessary elements.
 */
function init() {
  canvas = document.getElementById("canvas");
  handleRotation();
}

/**
 * Listens for keyboard keydown and keyup events to manage the state of pressed keys.
 * Updates the `keyboard` object with boolean values (`true` when a key is pressed, `false` when released).
 * Supports movement (left, right, up, down), jumping (space), and other actions (e.g., D key).
 * Ensures that the character or action responds to key presses and stops when the keys are released.
 */
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

function handleRotation() {
  if (window.matchMedia("(pointer: coarse)").matches) {
    pressBTNS();
  } else {
    pressKeyboard();
  }
}

window.addEventListener("resize", handleRotation);
window.addEventListener("orientationchange", handleRotation);
handleRotation();

/**
 * Starts the game and sets the initial game state.
 * Hides the start button, game introduction, and other UI elements.
 * Updates global variables to indicate the game has started and not ended.
 * Calls the function to initialize and start the game world.
 * Ensures a clean transition to the gameplay by managing UI visibility.
 */
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

  startWorld(); // Hier wird die neue Funktion aufgerufen
}

/**
 * Initializes and starts the game world.
 * Sets up the level, audio collections, and game world instance.
 * Plays the background audio with a specified volume.
 * Makes the control buttons visible by removing a CSS class.
 * Ensures all necessary game audio is activated.
 */
function startWorld() {
  world = null;
  initLvl();
  audios = new AudioCollections();
  world = new World(canvas, keyboard, audios);

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
 * When this function is called, it adds the "d-none" class to the element with the id "gameRules", making it hidden from the user.
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
 * Listens for the "Space" key press and prevents the default browser behavior.
 * This is useful for avoiding unintended actions, such as restarting a game,
 * when the spacebar is pressed.
 * Adds an event listener to the "keydown" event for this purpose.
 * Ensures smoother user interactions in applications requiring precise key control.
 */
function restartGameKeyboard() {
  // Abfangen der Leertaste, um Neustart durch diese zu verhindern
  document.addEventListener("keydown", function (event) {
    if (event.code === "Space") {
      event.preventDefault();
    }
  });
}

/**
 * Restarts the game by resetting game elements, initializing levels,
 * and playing background audio.
 * Invokes a separate function to handle spacebar prevention logic.
 * Hides the end and winning screens, clears all intervals, and resets the game world.
 * Reinitializes the game setup and starts the game loop.
 * Ensures that background audio and world-specific audio are played at the correct volume.
 */
function restartGame() {
  // Aufruf der separaten Funktion, um die Leertasten-Abfanglogik auszuführen
  restartGameKeyboard();

  document.getElementById("endScreen").classList.add("d-none");
  document.getElementById("winningScreen").classList.add("d-none");
  clearAllIntervals();
  world = null;
  initLvl();
  init();
  startGame();
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
 * Prevents the default action of the spacebar to avoid interfering with other functionalities.
 * Specifically useful for ensuring that pressing the spacebar does not trigger unintended behavior,
 * such as scrolling or toggling elements when interacting with the application.
 * Adds a "keydown" event listener that detects the spacebar key (" ") and stops its default action.
 * Helps maintain control over user interactions for applications with keyboard-driven actions.
 */
function toggleSoundImgKeyboard() {
  document.addEventListener("keydown", (event) => {
    if (event.key === " ") event.preventDefault();
  });
}

/**
 * Toggles the sound settings and updates the sound icon based on the current state.
 * Calls a function to prevent unintended behavior caused by the spacebar key.
 * Switches between "sound on" and "sound off" states, updating the icon accordingly.
 * Adjusts the volume of background, win, and lose sounds and toggles world audio playback.
 * Ensures a smooth and user-friendly way to manage sound settings within the application.
 */
function toggleSoundImage() {
  toggleSoundImgKeyboard();

  let mute = document.getElementById("mute");
  let isOn = mute.classList.contains("muteOn");
  mute.classList.toggle("muteOn", !isOn);
  mute.classList.toggle("muteOff", isOn);
  mute.src = isOn
    ? "./assets/img/11_icons/soundOn.png"
    : "./assets/img/11_icons/soundOff.png";
  isMuted = !isOn;

  backgroundAudio.volume = isOn ? 0.25 : 0;
  winSound.volume = isOn ? 1 : 0;
  loseSound.volume = isOn ? 1 : 0;
  isOn ? world.audios.playAudio() : world.audios.pausingAudio();
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

/**
 * Listens for touch events on mobile button elements and updates the keyboard state.
 * Tracks touchstart and touchend events for each button (left, right, jump, throw) to control the corresponding movement or action.
 * Prevents default behavior for touch events to ensure the game functions correctly.
 * Updates the `keyboard` object with `true` when the button is pressed and `false` when released.
 */
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
