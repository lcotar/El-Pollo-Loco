/**
 * The class World in the provided JavaScript code is defining a class that represents the game world
 * in a 2D game. Here is a summary of what the class World is doing:
 * */
class World {
  character = new Character(this);
  chicken = new Chicken(this);
  lvl = lvl1;
  canvas;
  ctx;
  keyboard;
  cameraX = 0;
  backgroundImageWorld;
  boss = new Endboss();
  statusBar = new Statusbar();
  statusBarBottle = new StatusbarBottles();
  statusBarCoins = new StatusbarCoin();
  statusBarBoss = new StatusbarEndboss();
  throwableObjects = [];
  sound = false;
  bottle = false;
  bottles = 0;
  coins = 0;
  bottleOnGround = false;
  splashedBottle = false;
  audios;

  /**
   * The constructor in the World class is a special method that is automatically called when a new
   * instance of the World class is created. It takes two parameters canvas and keyboard, which
   * are used to initialize the properties of the World instance. Inside the constructor, the
   * canvas context (ctx) is obtained from the canvas element, and the canvas, keyboard, and
   * lvl properties are set to the provided values. Additionally, the draw method is called to
   * start rendering the game world on the canvas, and the setToWorld method is called to establish a
   * reference to the current World instance within the character object.
   * */
  constructor(canvas, keyboard, audioCollection) {
    this.ctx = canvas.getContext("2d");
    this.canvas = canvas;
    this.audios = audioCollection;
    this.keyboard = keyboard;
    this.draw();
    this.setToWorld();
    this.run();
  }

  /**
   * The setToWorld method in the World class is setting the world property of the character
   * object to the current instance of the World class. This allows the character object to have a
   * reference to the World instance it belongs to, which can be useful for interactions and
   * communication between the character and the world within the game or application.
   * */
  setToWorld() {
    this.character.world = this;
  }

  /**
   * The checkCollision() method in the World class is responsible for periodically checking for
   * collisions between the character and enemies in the game world. It uses setInterval() to
   * repeatedly execute a function that iterates over the enemies in the current level (lvl) and
   * checks if the character is colliding with any of them.
   * */
  run() {
    setInterval(() => {
      this.checkCollisions();
    }, 20);

    setInterval(() => {
      this.checkThrowObjects();
    }, 150);

    setInterval(() => {
      this.bottlesForEndboss();
    }, 150);
  }

  /**
   * Starts the animation for all enemies in the current level.
   * Iterates over the enemies array and triggers the `animation` method for each enemy.
   * Ensures that the `enemies` array exists before execution.
   * Logs an error if the level or enemies are not defined.
   * Can be extended to handle asynchronous animations or error management.
   */
  start() {
    this.lvl.enemies.forEach((enemy) => {
      enemy.animation();
    });
  }

  /**
   * The above code is a comment block in JavaScript. It appears to be a placeholder for a function called `checkCollisions()`.
   * The function is likely intended to check for collisions between objects in a game or simulation.
   * However, the actual implementation of the `checkCollisions()` function is not provided in the code snippet.
   * */
  checkCollisions() {
    this.forEachEnemy();
    this.forEachBottles();
    this.forEachCoins();
    this.forEndboss();
  }

  /**
   * The above code is a comment block in JavaScript. It appears to be a placeholder for a function called `forEachCoins()`.
   * */
  forEachCoins() {
    this.lvl.coins.forEach((coins, index) => {
      if (this.character.isColliding(coins)) {
        this.coins++;
        this.audios.coinSound.play();
        this.statusBarCoins.setCoin(this.coins);
        this.lvl.coins.splice(index, 1); //
      }
    });
  }

  /**
   * The `forEachBottles()` method in the `World` class is iterating over the array of bottles present
   * in the current level (`lvl`) of the game world. For each bottle, it checks if the character is
   * colliding with that bottle and if the number of bottles collected by the character is less than 5.
   * If a collision is detected and the character has collected less than 5 bottles, the method performs the following actions:
   * */
  forEachBottles() {
    this.lvl.bottles.forEach((bottles, index) => {
      if (this.character.isColliding(bottles) && this.bottles < 5) {
        this.audios.pickBottleSound.play();
        this.bottles++;
        this.statusBarBottle.setBottle(this.bottles);
        this.bottle = true;
        this.lvl.bottles.splice(index, 1);
      }
    });
  }

  /**
   * The `forEachEnemy()` method in the `World` class is iterating over the enemies present in the current level (`lvl`) of the game world.
   * For each enemy, it checks if the character is colliding with that enemy.
   * If a collision is detected, it performs the following actions:
   * */
  forEachEnemy() {
    this.lvl.enemies.forEach((enemy) => {
      if (this.character.isColliding(enemy)) {
        if (this.character.speedY < 0 && this.character.isAboveGround()) {
          enemy.isGetKilled = true;
          this.audios.chickenDeadSound.play();
        } else if (!enemy.isGetKilled) {
          this.audios.hurtSound.play();
          this.character.hit();
          this.statusBar.setPercentage(this.character.energy);
        }
      }
    });
  }

  /**
   * The `forEndboss()` method in the `World` class is checking if the character is colliding with the
   * boss entity in the game world. If a collision is detected, it plays a hurt sound, decreases the
   * character's energy, and updates the status bar to reflect the character's energy level.
   * This method handles the interaction between the character and the boss entity during gameplay.
   * */
  forEndboss() {
    if (this.character.isColliding(this.boss)) {
      this.audios.hurtSound.play();
      this.character.hit();
      this.statusBar.setPercentage(this.character.energy);
    }
  }

  /**
   * The `checkThrowObjects()` method in the `World` class is responsible for checking if the character
   * is attempting to throw a bottle in the game. It checks if the "D" key is pressed and if the character has collected at least one bottle.
   * If these conditions are met, a new `ThrowableObjects`
   * instance (representing a thrown bottle) is created at a specific position relative to the character.
   * The method then adds this thrown bottle to the `throwableObjects` array, decreases the count of available bottles,
   * updates the bottle count in the status bar, and sets up collision detection for the thrown bottle with enemies and the end boss.
   * */
  checkThrowObjects() {
    if (this.keyboard.D && this.bottles > 0) {
      let bottle = new ThrowableObjects(
        this.character.x + 40,
        this.character.y + 100
      );
      this.throwableObjects.push(bottle);
      this.bottles--;
      this.statusBarBottle.setBottle(this.bottles);
      setInterval(() => {
        this.checkCollisionEndbossBottle(bottle);
      }, 600);
      setInterval(() => {
        this.checkCollisionEnemyBottle(bottle);
      }, 10);
    }
  }

  /**
   * The `bottlesForEndboss()` method in the `World` class is checking if the boss entity in the game
   * world still has energy remaining and if the number of bottles collected by the character is less than 5.
   * If both conditions are met, it triggers the `endGame()` function. This method essentially
   * serves as a check to determine if the character has collected enough bottles to defeat the boss entity in the game.
   * */
  bottlesForEndboss() {
    if (this.boss.energy > 0 && this.lvl.bottles < 5) {
      endGame();
    }
  }

  /**
   * The `checkCollisionEnemyBottle(bottle)` method in the `World` class is responsible for checking if
   * a thrown bottle (represented by the `bottle` parameter) collides with any enemies in the game world.
   * */
  checkCollisionEnemyBottle(bottle) {
    this.lvl.enemies.forEach((enemy) => {
      if (bottle.isColliding(enemy)) {
        this.audios.chickenDeadSound.play();
        enemy.isGetKilled = true;
        this.throwableObjects.splice(-1, 1);
      }
    });
  }

  /**
   * The `checkCollisionEndbossBottle(bottle)` method in the `World` class is responsible for checking
   * if a thrown bottle (represented by the `bottle` parameter) collides with the boss entity in the
   * game world. If a collision is detected between the thrown bottle and the boss entity, the method,
   * performs the following actions:
   * */
  checkCollisionEndbossBottle(bottle) {
    if (this.boss.isColliding(bottle)) {
      this.throwableObjects.splice(-1, 1);
      this.boss.energy = this.boss.energy - 20;
      this.boss.bottleHurt = true;
      this.boss.checkBottleHurt();
      this.statusBarBoss.setBoss(this.boss.energy);
    }
  }

  /**
   * The draw method in the World class is responsible for clearing the canvas, adding the
   * character, enemies, clouds, and background objects to the map, and then continuously redrawing the
   * canvas by calling itself using requestAnimationFrame.
   * */
  draw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    this.ctx.translate(this.cameraX, 0);
    this.objectsAddToMap();
    this.addToMap(this.character);
    this.ctx.translate(-this.cameraX, 0); // Back
    this.statusbarsAddToMap();

    // Draw() wird immer wieder aufgerufen!!!
    let self = this;
    requestAnimationFrame(function () {
      self.draw();
    });
  }

  /**
   * The above code is a comment block in JavaScript. It is not executable code. It appears to be a
   * placeholder for a function call `statusbarsAddToMap()`.
   * */
  statusbarsAddToMap() {
    this.addToMap(this.statusBar);
    this.addToMap(this.statusBarCoins);
    this.addToMap(this.statusBarBottle);
    this.addToMap(this.statusBarBoss);
    this.ctx.translate(this.cameraX, 0);
    this.ctx.translate(-this.cameraX, 0);
  }

  /**
   * The above code is a comment block in JavaScript. It appears to be calling a function named
   * `objectsAddToMap()`. However, the actual implementation of the function is not provided in the code snippet.
   * */
  objectsAddToMap() {
    this.addObjectsToMap(this.lvl.backgroundObjects);
    this.addObjectsToMap(this.lvl.clouds);
    this.addObjectsToMap(this.lvl.enemies);
    this.addObjectsToMap(this.boss);
    this.addObjectsToMap(this.throwableObjects);
    this.addObjectsToMap(this.lvl.coins);
    this.addObjectsToMap(this.lvl.bottles);
  }

  /**
   * The addObjectsToMap method in the World class is responsible for iterating over an array of
   * objects and adding each object to the map by calling the addToMap method for each object. This
   * method allows for a convenient way to add multiple objects to the map without having to manually
   * call addToMap for each object individually.
   * */
  addObjectsToMap(objects) {
    if (Array.isArray(objects)) {
      objects.forEach((o) => {
        this.addToMap(o);
      });
    } else {
      this.addToMap(objects);
    }
  }

  /**
   * The addToMap method in the World class is responsible for adding movable objects to the map by
   * performing the following actions:
   * */
  addToMap(mo) {
    // => mo = movable Objects
    if (mo?.otherDirection) {
      this.flipIMG(mo);
    }

    mo?.draw(this.ctx);

    if (mo?.otherDirection) {
      this.flipIMGBack(mo);
    }
  }

  /**
   * The flipIMG(mo) function in the World class is responsible for flipping the image horizontally
   * by scaling the canvas context and translating it to achieve the horizontal flip effect. It also
   * updates the x-coordinate of the movable object mo to reflect the change in direction.
   * */
  flipIMG(mo) {
    this.ctx.save();
    this.ctx.translate(mo.width, 0);
    this.ctx.scale(-1, 1);
    mo.x = mo.x * -1;
  }

  /**
   * The flipIMGBack(mo) function in the World class is responsible for restoring the canvas
   * context after flipping the image horizontally using the flipIMG(mo) function.
   * */
  flipIMGBack(mo) {
    mo.x = mo.x * -1;
    this.ctx.restore();
  }
}
