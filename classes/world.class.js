/* The `class World` in the provided JavaScript code is defining a class that represents the game world
in a 2D game. Here is a summary of what the `class World` is doing: */
class World {
  character = new Character();
  lvl = lvl1;
  canvas;
  ctx;
  keyboard;
  cameraX = 0;

  /* The `constructor` in the `World` class is a special method that is automatically called when a new
  instance of the `World` class is created. It takes two parameters `canvas` and `keyboard`, which
  are used to initialize the properties of the `World` instance. Inside the `constructor`, the
  canvas context (`ctx`) is obtained from the canvas element, and the `canvas`, `keyboard`, and
  `lvl` properties are set to the provided values. Additionally, the `draw` method is called to
  start rendering the game world on the canvas, and the `setToWorld` method is called to establish a
  reference to the current `World` instance within the `character` object. */
  constructor(canvas, keyboard) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.keyboard = keyboard;
    this.draw();
    this.setToWorld();
  }

  /* The `setToWorld` method in the `World` class is setting the `world` property of the `character`
  object to the current instance of the `World` class. This allows the `character` object to have a
  reference to the `World` instance it belongs to, which can be useful for interactions and
  communication between the character and the world within the game or application. */
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

  /* The `addObjectsToMap` method in the `World` class is responsible for iterating over an array of
  objects and adding each object to the map by calling the `addToMap` method for each object. This
  method allows for a convenient way to add multiple objects to the map without having to manually
  call `addToMap` for each object individually. */
  addObjectsToMap(objects) {
    objects.forEach((o) => {
      this.addToMap(o);
    });
  }

  /* The `addToMap` method in the `World` class is responsible for adding movable objects to the map by
  performing the following actions: */
  addToMap(mo) {
    // => mo = movable Objects
    if (mo.otherDirection) {
      this.flipIMG(mo);
    }

    mo.draw(this.ctx);
    mo.drawFrame(this.ctx);

    if (mo.otherDirection) {
      this.flipIMGBack(mo);
    }
  }

  /* The `flipIMG(mo)` function in the `World` class is responsible for flipping the image horizontally
  by scaling the canvas context and translating it to achieve the horizontal flip effect. It also
  updates the x-coordinate of the movable object `mo` to reflect the change in direction. */
  flipIMG(mo) {
    this.ctx.save();
    this.ctx.translate(mo.width, 0);
    this.ctx.scale(-1, 1);
    mo.x = mo.x * -1;
  }

  /* The `flipIMGBack(mo)` function in the `World` class is responsible for restoring the canvas
  context after flipping the image horizontally using the `flipIMG(mo)` function. */
  flipIMGBack(mo) {
    mo.x = mo.x * -1;
    this.ctx.restore();
  }
}
