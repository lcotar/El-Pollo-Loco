class World {
  character = new Character();
  lvl = lvl1;
  canvas;
  ctx;
  keyboard;
  cameraX = 0;

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
    this.ctx.translate(this.cameraX, 0);
    this.addObjectsToMap(this.lvl.backgroundObjects);
    this.addToMap(this.character);

    this.addObjectsToMap(this.lvl.clouds);
    this.addObjectsToMap(this.lvl.enemies);

    this.ctx.translate(-this.cameraX, 0);

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
    // => mo = movable Objects
    if (mo.otherDirection) {
      this.ctx.save();
      this.ctx.translate(mo.width, 0);
      this.ctx.scale(-1, 1);
      mo.x = mo.x * -1;
    }

    this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);
    if (mo.otherDirection) {
      mo.x = mo.x * -1;
      this.ctx.restore();
    }
  }
}
