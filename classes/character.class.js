/**
 * The `class Character extends MovableObject` statement is creating a new class named `Character` that
 * extends the `MovableObject` class. This means that the `Character` class inherits all the properties
 * and methods from the `MovableObject` class. By extending `MovableObject`, the `Character` class can
 * reuse and build upon the functionality defined in the `MovableObject` class, promoting code
 * reusability and maintaining a clear hierarchy in the codebase.
 * */
class Character extends MovableObject {
  height = 300;
  y = 80;
  speed = 10;
  world;
  animationFrame = 0;
  lastAction = 0;
  isJump = false;
  endHurt = false;
  isSleep = false;
  bottle = new Bottle();
  offset = {
    top: 104,
    bottom: 0,
    left: 20,
    right: 40,
  };

  IMAGES_IDLE_PEPE = [
    "assets/img/2_character_pepe/1_idle/idle/I-1.png",
    "assets/img/2_character_pepe/1_idle/idle/I-2.png",
    "assets/img/2_character_pepe/1_idle/idle/I-3.png",
    "assets/img/2_character_pepe/1_idle/idle/I-4.png",
    "assets/img/2_character_pepe/1_idle/idle/I-5.png",

    "assets/img/2_character_pepe/1_idle/idle/I-6.png",
    "assets/img/2_character_pepe/1_idle/idle/I-7.png",
    "assets/img/2_character_pepe/1_idle/idle/I-8.png",
    "assets/img/2_character_pepe/1_idle/idle/I-9.png",
    "assets/img/2_character_pepe/1_idle/idle/I-10.png",
  ];

  IMAGES_SLEEPING = [
    "assets/img/2_character_pepe/1_idle/long_idle/I-11.png",
    "assets/img/2_character_pepe/1_idle/long_idle/I-12.png",
    "assets/img/2_character_pepe/1_idle/long_idle/I-13.png",
    "assets/img/2_character_pepe/1_idle/long_idle/I-14.png",
    "assets/img/2_character_pepe/1_idle/long_idle/I-15.png",
    "assets/img/2_character_pepe/1_idle/long_idle/I-16.png",
    "assets/img/2_character_pepe/1_idle/long_idle/I-17.png",
    "assets/img/2_character_pepe/1_idle/long_idle/I-18.png",
    "assets/img/2_character_pepe/1_idle/long_idle/I-19.png",
    "assets/img/2_character_pepe/1_idle/long_idle/I-20.png",
  ];

  IMAGES_WALKING = [
    "assets/img/2_character_pepe/2_walk/W-21.png",
    "assets/img/2_character_pepe/2_walk/W-22.png",
    "assets/img/2_character_pepe/2_walk/W-23.png",
    "assets/img/2_character_pepe/2_walk/W-24.png",
    "assets/img/2_character_pepe/2_walk/W-25.png",
    "assets/img/2_character_pepe/2_walk/W-26.png",
  ];

  IMAGES_JUMPING = [
    "assets/img/2_character_pepe/3_jump/J-31.png",
    "assets/img/2_character_pepe/3_jump/J-32.png",
    "assets/img/2_character_pepe/3_jump/J-33.png",
    "assets/img/2_character_pepe/3_jump/J-34.png",
    "assets/img/2_character_pepe/3_jump/J-35.png",
    "assets/img/2_character_pepe/3_jump/J-36.png",
    "assets/img/2_character_pepe/3_jump/J-37.png",
    "assets/img/2_character_pepe/3_jump/J-38.png",
    "assets/img/2_character_pepe/3_jump/J-39.png",
  ];

  IMAGES_HURT = [
    "assets/img/2_character_pepe/4_hurt/H-41.png",
    "assets/img/2_character_pepe/4_hurt/H-42.png",
    "assets/img/2_character_pepe/4_hurt/H-43.png",
  ];

  IMAGES_DEAD = [
    "assets/img/2_character_pepe/5_dead/D-51.png",
    "assets/img/2_character_pepe/5_dead/D-52.png",
    "assets/img/2_character_pepe/5_dead/D-53.png",
    "assets/img/2_character_pepe/5_dead/D-54.png",
    "assets/img/2_character_pepe/5_dead/D-55.png",
    "assets/img/2_character_pepe/5_dead/D-56.png",
    "assets/img/2_character_pepe/5_dead/D-57.png",
  ];

  // walkingSound = new Audio("assets/audio/Walking_through_grass_(long).mp3");

  constructor() {
    super().loadImage("assets/img/2_character_pepe/2_walk/W-21.png");
    this.loadImages(this.IMAGES_WALKING);
    this.loadImages(this.IMAGES_JUMPING);
    this.loadImages(this.IMAGES_DEAD);
    this.loadImages(this.IMAGES_HURT);
    this.loadImages(this.IMAGES_IDLE_PEPE);
    this.loadImages(this.IMAGES_SLEEPING);
    this.applyGravity();
    this.animation();
  }

  /**
   * The `animation()` method in the `Character` class is responsible for setting up two intervals.
   * */
  animation() {
    setInterval(() => {
      this.walkingFunctionInterval();
    }, 12);

    setInterval(() => {
      this.deadFunctionInterval();
      this.checkJump();
      this.checkMovement();
      this.ifIsHurt();
    }, 150);

    setInterval(() => {
      this.stopAnimation();
    }, 6000);
    /* setInterval(() => {
      // this.walkingSound.pause();
      if (this.world.keyboard.RIGHT && this.x < this.world.lvl.lvlEndX) {
        this.moveRight();
        this.walkingSound.play();
        this.otherDirection = false; // not mirroring character
      }

      if (this.world.keyboard.LEFT && this.x > 0) {
        this.moveLeft();
        this.walkingSound.play();
        this.otherDirection = true; // mirroring character
      }

      if (this.world.keyboard.SPACE && !this.isAboveGround()) {
        this.jump();
      }

      this.world.cameraX = -this.x + 100;
    }, 1000 / 60);

    setInterval(() => {
      if (this.isDead()) {
        this.playAnimation(this.IMAGES_DEAD);
      } else if (this.isHurt()) {
        this.playAnimation(this.IMAGES_HURT);
      } else if (this.isAboveGround()) {
        this.playAnimation(this.IMAGES_JUMPING);
      } else {
        if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
          // Walk animation
          this.playAnimation(this.IMAGES_WALKING);
        }
      }
    }, 50);*/
  }

  /**
   * The `ifIsHurt()` method in the `Character` class is checking if the character is hurt. If the character is hurt,
   * it triggers the `playAnimation()` method with the `IMAGES_HURT` images to display the hurt animation.
   * Additionally, it sets the `endHurt` property to `true`, indicating that the hurt state has ended.
   * */
  ifIsHurt() {
    if (this.isHurt()) this.playAnimation(this.IMAGES_HURT);
    this.endHurt = true;
  }

  /**
   * The `walkingFunctionInterval()` method in the `Character` class is responsible for handling the character's movement based on keyboard input.
   * It checks if the right or left arrow keys are pressed to move the character right or left respectively.
   * If the character is within the level boundaries and not at the end boss position, it moves the character in the corresponding direction.
   * Additionally, it sets the `otherDirection` property to control the character's orientation.
   * If the space key is pressed and the character is not already in a jump state, it triggers the character to jump
   * and sets the `isJump` and `endHurt` properties accordingly.
   * Finally, it adjusts the camera position based on the character's movement.
   * */
  walkingFunctionInterval() {
    let endBossPosition = this.world.boss.x;
    let isMoving = false;

    if (
      this.world.keyboard.RIGHT &&
      this.x < this.world.lvl.lvlEndX &&
      this.x < endBossPosition
    ) {
      this.moveRight();
      this.otherDirection = false;
      isMoving = true;
    }
    if (this.world.keyboard.LEFT && this.x > 0) {
      this.moveLeft();
      this.otherDirection = true;
    }
    if (this.world.keyboard.SPACE && !this.isAboveGround()) {
      this.isJump = true;
      this.jump();
      this.endHurt = false;
    }
    this.world.cameraX = -this.x + 100;
  }

  /**
   * The `deadFunctionInterval()` method in the `Character` class is setting up an interval that checks if the character is dead.
   * If the character is dead, it triggers the `playAnimation()` method with the `IMAGES_DEAD` images to display the dead animation.
   * Additionally, it includes a `setTimeout()` function that calls the `endGame()` function after 1 second when the character is dead.
   * This function is responsible for handling the animation and game logic related to the character's death state.
   * */
  deadFunctionInterval() {
    setInterval(() => {
      if (this.isDead()) {
        this.playAnimation(this.IMAGES_DEAD);
        setTimeout(() => {
          endGame();
        }, 1000);
      }
    }, 4000);
  }

  /**
   * The `checkMovement()` method in the `Character` class is responsible for checking the character's movement based on keyboard input.
   * If the right or left arrow keys are pressed, indicating movement in those directions, it triggers the `playAnimation()` method
   * with the `IMAGES_WALKING` images to display the walking animation.
   * Additionally, it sets the `isJump` property to `false` to indicate that the character is not in a jump state.
   * If there is no movement input detected, it calls the `stopAnimation()` method to handle stopping the animation based on the character's state.
   * */
  checkMovement() {
    if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
      this.playAnimation(this.IMAGES_WALKING);
      this.isJump = false;
    } else {
      this.stopAnimation();
    }
  }

  /**
   * The `checkJump()` method in the `Character` class is responsible for handling the character's jumping behavior.
   * Here's a breakdown of what it does:
   * */
  checkJump() {
    if (this.world.keyboard.SPACE && !this.isJump && !this.isAboveGround()) {
      this.isJump = true;
      this.world.audios.jumpSoundCharacter.play();
      this.jump();
    }

    if (this.isAboveGround()) {
      this.playAnimation(this.IMAGES_JUMPING);
    }

    if (!this.isAboveGround() && this.isJump) {
      this.isJump = false;
    }
  }

  /**
   * The `stopAnimation()` method in the `Character` class is responsible for managing the character's animation when there is no movement input detected.
   * Here's a breakdown of what it does:
   * */
  stopAnimation() {
    this.lastAction = new Date().getTime();
    let timePassed = new Date().getTime() - this.lastAction;
    timePassed = timePassed / 1000;
    let isMoving = false;

    if (
      !isMoving &&
      !this.isJump &&
      !this.world.keyboard.RIGHT &&
      !this.world.keyboard.LEFT
    ) {
      this.playAnimation(this.IMAGES_IDLE_PEPE);
    } else if (timePassed > 5 && isMoving) {
      this.playAnimation(this.IMAGES_SLEEPING);
      this.world.audios.snoreSound.play();
      this.isSleep = true;
    } else {
      !this.isSleep;
      this.world.audios.snoreSound.pause();
    }
  }
}
