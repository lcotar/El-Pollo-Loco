let canvas;
let world;
let keyboard = new Keyboard();

// let ctx;

function init() {
  canvas = document.getElementById("canvas");
  world = new World(canvas, keyboard);

  console.log("My Character is", world.character);

  // character.src = "./assets/img/2_character_pepe/2_walk/W-21.png";
  // ctx.drawImage(character, 20, 20, 50, 150);
}

window.addEventListener("keydown", (e) => {
  if (e.keyCode == 39) {
    keyboard.right = true;
  }

  if (e.keyCode == 37) {
    keyboard.left = true;
  }

  if (e.keyCode == 38) {
    keyboard.up = true;
  }

  if (e.keyCode == 40) {
    keyboard.down = true;
  }

  if (e.keyCode == 32) {
    keyboard.space = true;
  }
  console.log(e);
});

window.addEventListener("keyup", (e) => {
  if (e.keyCode == 39) {
    keyboard.right = false;
  }

  if (e.keyCode == 37) {
    keyboard.left = false;
  }

  if (e.keyCode == 38) {
    keyboard.up = false;
  }

  if (e.keyCode == 40) {
    keyboard.down = false;
  }

  if (e.keyCode == 32) {
    keyboard.space = false;
  }
  console.log(e);
});
