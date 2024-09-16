/* The `class endboss extends MovableObject` statement is creating a new class named `endboss` that
extends the `MovableObject` class. This means that the `endboss` class inherits all the properties
and methods from the `MovableObject` class, allowing it to reuse and extend the functionality
defined in the `MovableObject` class. */
class endboss extends MovableObject {
  height = 400;
  width = 250;
  y = 50;

  IMAGES_WALKING = [
    "assets/img/4_enemie_boss_chicken/2_alert/G5.png",
    "assets/img/4_enemie_boss_chicken/2_alert/G6.png",
    "assets/img/4_enemie_boss_chicken/2_alert/G7.png",
    "assets/img/4_enemie_boss_chicken/2_alert/G8.png",
    "assets/img/4_enemie_boss_chicken/2_alert/G9.png",
    "assets/img/4_enemie_boss_chicken/2_alert/G10.png",
    "assets/img/4_enemie_boss_chicken/2_alert/G11.png",
    "assets/img/4_enemie_boss_chicken/2_alert/G12.png",
  ];

  constructor() {
    super().loadImage(this.IMAGES_WALKING[0]);
    this.loadImages(this.IMAGES_WALKING);
    this.x = 700;
    this.animation();
  }

  animation() {
    setInterval(() => {
      // Walk animation
      this.playAnimation(this.IMAGES_WALKING);
    }, 100);
  }
}
