class World {
  character = new Character();
  enemies = [new Chicken(), new Chicken(), new Chicken()];
  clouds = [new Cloud(), new Cloud()];
  backgroundObjects = [
    new BackgroundObject(
      "assets/img/5_background/layers/3_third_layer/1.png",
      0
    ),
  ];
  canvas;
  ctx;

  constructor(canvas) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.draw();
  }

  /* The `draw` method in the `World` class is responsible for clearing the canvas, adding the
  character, enemies, clouds, and background objects to the map, and then continuously redrawing the
  canvas by calling itself using `requestAnimationFrame`. */
  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.addToMap(this.character);

    this.addObjectsToMap(this.clouds);
    this.addObjectsToMap(this.enemies);
    this.addObjectsToMap(this.backgroundObjects);

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
