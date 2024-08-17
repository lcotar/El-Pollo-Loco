let canvas;
let ctx;
let character = new MovableObject();

function init() {
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");

  console.log("My Character is", character);

  // character.src = "./assets/img/2_character_pepe/2_walk/W-21.png";
  // ctx.drawImage(character, 20, 20, 50, 150);
}
