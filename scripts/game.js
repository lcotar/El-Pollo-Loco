let canvas;
let world;

// let ctx;

function init() {
  canvas = document.getElementById("canvas");
  world = new World(canvas);

  console.log("My Character is", world.character);

  // character.src = "./assets/img/2_character_pepe/2_walk/W-21.png";
  // ctx.drawImage(character, 20, 20, 50, 150);
}
