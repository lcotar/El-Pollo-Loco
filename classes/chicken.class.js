/* The `class Chicken extends MovableObject` statement is creating a new class named `Chicken` that
extends the `MovableObject` class. This means that the `Chicken` class inherits all the properties
and methods from the `MovableObject` class, allowing it to reuse and extend the functionality
defined in the `MovableObject` class. This is a common practice in object-oriented programming to
promote code reusability and maintainability. */
class Chicken extends MovableObject {
  y = 350;
  height = 80;
  width = 60;
  IMAGES_WALKING = [
    "assets/img/3_enemies_chicken/chicken_normal/1_walk/1_w.png",
    "assets/img/3_enemies_chicken/chicken_normal/1_walk/2_w.png",
    "assets/img/3_enemies_chicken/chicken_normal/1_walk/3_w.png",
  ];

  chickenSound = new Audio("assets/audio/chicken.mp4");

  constructor() {
    super().loadImage(
      "assets/img/3_enemies_chicken/chicken_normal/1_walk/1_w.png"
    );
    this.loadImages(this.IMAGES_WALKING);

    this.x = 200 + Math.random() * 500;
    this.speed = 0.15 + Math.random() * 0.25;

    this.animation();
  }

  animation() {
    setInterval(() => {
      this.moveLeft();
    }, 1000 / 60);

    setInterval(() => {
      // Walk animation
      this.playAnimation(this.IMAGES_WALKING);
    }, 100);
  }

  /* isColliding() {
    if (
      character.x + character.width > chicken.x &&
      character.y + character.height > chicken.y &&
      character.x < chicken.x &&
      character.y < chicken.y + chicken.height
    );
  } */
}
