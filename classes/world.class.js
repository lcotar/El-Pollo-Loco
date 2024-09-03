class World {
  character = new Character();
  enemies = [new Chicken(), new Chicken(), new Chicken()];
  clouds = [new Cloud(), new Cloud()];
  backgroundObjects = [
    new BackgroundObject("assets/img/5_background/layers/air.png", 0),

    new BackgroundObject(
      "assets/img/5_background/layers/3_third_layer/1.png",
      0
    ),

    new BackgroundObject(
      "assets/img/5_background/layers/2_second_layer/1.png",
      0
    ),

    new BackgroundObject(
      "assets/img/5_background/layers/1_first_layer/1.png",
      0
    ),
  ];
  canvas;
  ctx;
  keyboard;

  constructor(canvas, keyboard) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.draw();
    this.setToWorld();
  }

  setToWorld() {
    this.character.world = this;
  }

  /* The `draw` method in the `World` class is responsible for clearing the canvas, adding the
  character, enemies, clouds, and background objects to the map, and then continuously redrawing the
  canvas by calling itself using `requestAnimationFrame`. */
  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.addObjectsToMap(this.backgroundObjects);
    this.addToMap(this.character);

    this.addObjectsToMap(this.clouds);
    this.addObjectsToMap(this.enemies);

    // Draw() wird immer wieder aufgerufen!!!
    let self = this;
    requestAnimationFrame(function () {
      self.draw();
    });
  }

  addObjectsToMap(objects) {
    objects.forEach((o) => {
      this.addToMap(o);
    });
  }

  addToMap(mo) {
    this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
  }
}
