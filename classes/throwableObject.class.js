/**
 * The `class ThrowableObjects extends MovableObject` statement in JavaScript is defining a new class
 * named `ThrowableObjects` that extends (inherits from) another class named `MovableObject`.
 * This means that the `ThrowableObjects` class inherits all the properties and methods of the `MovableObject` class.
 * */
class ThrowableObjects extends MovableObject {
  speedY = 30;
  speedX = 20;
  world;

  IMAGES_BOTTLE_ROTATION = [
    "assets/img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png",
    "assets/img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png",
    "assets/img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png",
    "assets/img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png",
  ];

  IMAGES_SPLASH = [
    "assets/img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png",
    "assets/img/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png",
    "assets/img/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png",
    "assets/img/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png",
    "assets/img/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png",
    "assets/img/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png",
  ];

  /**
   * The `constructor(x, y, world)` function in the `ThrowableObjects` class is the constructor method
   * that gets called when a new instance of the `ThrowableObjects` class is created. Here is a breakdown of what it does:
   * */
  constructor(x, y, world) {
    super().loadImage(
      "assets/img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png"
    );
    this.loadImages(this.IMAGES_BOTTLE_ROTATION);
    this.loadImages(this.IMAGES_SPLASH);
    this.world = world;

    this.x = x;
    this.y = y;
    this.height = 60;
    this.width = 50;
    this.throw();
    this.applyGravity();
    this.animation();
  }

  /**
   * The `throw()` method in the `ThrowableObjects` class is responsible for simulating the throwing
   * action of the throwable object within the game world. Here is a breakdown of what it does:
   * */
  throw() {
    this.speedY = 30;
    let splashed = false;

    setInterval(() => {
      if (
        !world.splashedBottle &&
        !splashed &&
        !world.character.otherDirection
      ) {
        this.playAnimation(this.IMAGES_BOTTLE_ROTATION);
        this.x += 8;
      } else if (world.character.otherDirection) {
        this.playAnimation(this.IMAGES_BOTTLE_ROTATION);
        this.x -= 8;
      }
      if (this.y >= 360 && !splashed)
        this.triggerSplash(), (splashed = true), (world.bottleOnGround = false);
      if (this.hitsEnemy() || (this.hitsBoss() && !splashed))
        this.triggerSplash(), (splashed = true);
    }, 25);
  }

  /**
   * The `hitsEnemy()` method in the `ThrowableObjects` class is checking if the throwable object has
   * collided with any of the enemies present in the game world. It uses the `some()` method to iterate
   * over the array of enemies (`world.lvl.enemies`) and returns `true` if the throwable object is
   * colliding with any of the enemies. This method helps determine if the throwable object has hit an enemy in the game.
   * */
  hitsEnemy() {
    return world.lvl.enemies.some((enemy) => this.isColliding(enemy));
  }

  /**
   * The `hitsBoss()` method in the `ThrowableObjects` class is checking if the throwable object has
   * collided with the boss object present in the game world. It uses the `isColliding()` method to
   * determine if there is a collision between the throwable object and the boss object. If a collision
   * is detected, the method returns `true`, indicating that the throwable object has hit the boss.
   * This method helps in detecting collisions specifically with the boss character in the game.
   * */
  hitsBoss() {
    return this.isColliding(world.boss);
  }

  /**
   * The `triggerSplash()` method in the `ThrowableObjects` class is responsible for triggering the
   * splash effect when certain conditions are met. Here is a breakdown of what it does:
   * */
  triggerSplash() {
    this.loadImages(this.IMAGES_SPLASH);
    this.playAnimation(this.IMAGES_SPLASH);
    world.audios.bottleSplash.play();
    this.x -= 8;
  }

  /**
   * The `animation()` method in the `ThrowableObjects` class is checking if the `world.splashedBottle`
   * property is set to true. If it is true, then it sets an interval that repeatedly plays the
   * animation using the images from `IMAGES_SPLASH` array every 50 milliseconds. This means that the
   * method continuously updates the visual representation of the object to show the splash animation
   * if the bottle has been splashed.
   * */
  animation() {
    if (world.splashedBottle == true) {
      setInterval(() => {
        this.playAnimation(this.IMAGES_SPLASH);
      }, 50);
    }
  }
}
