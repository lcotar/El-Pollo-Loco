/**
 * The `class endboss extends MovableObject` statement is creating a new class named `endboss` that
 * extends the `MovableObject` class. This means that the `endboss` class inherits all the properties
 * and methods from the `MovableObject` class, allowing it to reuse and extend the functionality
 * defined in the `MovableObject` class.
 * */
class Endboss extends MovableObject {
  height = 400;
  width = 250;
  y = 50;
  energy = 100;
  bottleHurt = false;
  attack = false;
  attackCount = 0;
  count = false;
  offset = {
    top: 64,
    bottom: 16,
    left: 48,
    right: 48,
  };

  IMAGES_WALKING = [
    "./assets/img/4_enemie_boss_chicken/1_walk/G1.png",
    "./assets/img/4_enemie_boss_chicken/1_walk/G2.png",
    "./assets/img/4_enemie_boss_chicken/1_walk/G3.png",
    "./assets/img/4_enemie_boss_chicken/1_walk/G4.png",
  ];

  IMAGES_ALERT = [
    "./assets/img/4_enemie_boss_chicken/2_alert/G5.png",
    "./assets/img/4_enemie_boss_chicken/2_alert/G6.png",
    "./assets/img/4_enemie_boss_chicken/2_alert/G7.png",
    "./assets/img/4_enemie_boss_chicken/2_alert/G8.png",
    "./assets/img/4_enemie_boss_chicken/2_alert/G9.png",
    "./assets/img/4_enemie_boss_chicken/2_alert/G10.png",
    "./assets/img/4_enemie_boss_chicken/2_alert/G11.png",
    "./assets/img/4_enemie_boss_chicken/2_alert/G12.png",
  ];

  IMAGES_ATTACK = [
    "./assets/img/4_enemie_boss_chicken/3_attack/G13.png",
    "./assets/img/4_enemie_boss_chicken/3_attack/G14.png",
    "./assets/img/4_enemie_boss_chicken/3_attack/G15.png",
    "./assets/img/4_enemie_boss_chicken/3_attack/G16.png",

    "./assets/img/4_enemie_boss_chicken/3_attack/G17.png",
    "./assets/img/4_enemie_boss_chicken/3_attack/G18.png",
    "./assets/img/4_enemie_boss_chicken/3_attack/G19.png",
    "./assets/img/4_enemie_boss_chicken/3_attack/G20.png",
  ];

  IMAGES_HURT = [
    "./assets/img/4_enemie_boss_chicken/4_hurt/G21.png",
    "./assets/img/4_enemie_boss_chicken/4_hurt/G22.png",
    "./assets/img/4_enemie_boss_chicken/4_hurt/G23.png",
  ];

  IMAGES_DEAD = [
    "./assets/img/4_enemie_boss_chicken/5_dead/G24.png",
    "./assets/img/4_enemie_boss_chicken/5_dead/G25.png",
    "./assets/img/4_enemie_boss_chicken/5_dead/G26.png",
  ];

  /**
   * The `constructor()` method in the `Endboss` class is initializing a new instance of the `Endboss` class.
   * Here's a breakdown of what the `constructor()` method is doing:
   * */
  constructor() {
    super().loadImage(this.IMAGES_WALKING[0]);
    this.loadImages(this.IMAGES_WALKING);
    this.loadImages(this.IMAGES_ALERT);
    this.loadImages(this.IMAGES_ATTACK);
    this.loadImages(this.IMAGES_DEAD);
    this.loadImages(this.IMAGES_HURT);

    this.energy = 100;
    this.x = 5000;
    this.speed = 0.85 + Math.random() * 0.5;
    this.animation();
  }

  /* The `animation()` method in the `Endboss` class is setting up intervals for three different
 functions to be executed periodically: */
  animation() {
    setInterval(() => {
      this.checkBottleHurt();
    }, 100);

    setInterval(() => {
      this.moveEndboss();
    }, 1000 / 60);

    setInterval(() => {
      this.attackCharacter();
    }, 10);
  }

  /**
   * `checkBottleHurt()` is a method in the `Endboss` class that checks the status of the `bottleHurt`
   * property and the energy level of the endboss. Here's a breakdown of what `checkBottleHurt()` is
   * doing:
   * */
  checkBottleHurt() {
    if (this.bottleHurt && this.energy > 0) {
      this.playAnimation(this.IMAGES_HURT);
      setTimeout(() => {
        this.bottleHurt = false;
        this.attack = true;
      }, 1000);
    } else if (this.attack) {
      this.playAnimation(this.IMAGES_ATTACK);
      this.attackCharacter();
    } else if (this.energy == 0) {
      this.playAnimation(this.IMAGES_DEAD);
      setTimeout(() => {
        winGame();
      }, 3000);
    } else {
      this.playAnimation(
        this.energy < 40 ? this.IMAGES_ALERT : this.IMAGES_WALKING
      );
    }
  }

  /**
   * The `moveEndboss()` method in the `Endboss` class is responsible for controlling the movement behavior of the endboss character.
   * Here's a breakdown of what `moveEndboss()` is doing:
   * */
  moveEndboss() {
    if (this.energy > 0 && !this.attack) {
      if (this.count < 200) {
        this.count++;
        this.moveLeft();
        this.otherDirection = false;
      } else if (this.count < 400) {
        this.count++;
        this.moveRight();
        this.otherDirection = true;
      } else this.count = 0;
    }
  }

  /**
   * The `attackCharacter()` method in the `Endboss` class is responsible for handling the attack behavior of the endboss character.
   * Here's a breakdown of what `attackCharacter()` is doing:
   * */
  attackCharacter() {
    if (this.attack) {
      this.attackCount++;
      this.speed = 3;
      this.moveLeft();
      this.otherDirection = false;
      if (this.attackCount > 200) {
        this.playAnimation(this.IMAGES_WALKING);
        this.attackCount = 0;
        this.count = 200;
        this.attack = 0;
      }
    } else this.speed = 1.5;
  }
}
