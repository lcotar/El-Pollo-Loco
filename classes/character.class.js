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

  ifIsHurt() {
    if (this.isHurt()) this.playAnimation(this.IMAGES_HURT);
    this.endHurt = true;
  }

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

  checkMovement() {
    if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
      this.playAnimation(this.IMAGES_WALKING);
      this.isJump = false;
    } else {
      this.stopAnimation();
    }
  }

  checkJump() {
    if (this.world.keyboard.SPACE && !this.isJump && !this.isAboveGround()) {
      this.isJump = true;
      // this.world.audios.jumpSoundCharacter.play();
      this.jump();
    }

    if (this.isAboveGround()) {
      this.playAnimation(this.IMAGES_JUMPING);
    }

    if (!this.isAboveGround() && this.isJump) {
      this.isJump = false;
    }
  }

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
      // this.playAnimation(this.IMAGES_IDLE_PEPE);
    } else if (timePassed > 5 && isMoving) {
      this.playAnimation(this.IMAGES_SLEEPING);
      // this.world.audios.snoreSound.play();
      this.isSleep = true;
    } else {
      !this.isSleep;
      // this.world.audios.snoreSound.pause();
    }
  }
}
