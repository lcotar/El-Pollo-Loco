/**
 * The `class BackgroundObject extends MovableObject` statement is creating a new class called
 * `BackgroundObject` that extends the `MovableObject` class. This means that the `BackgroundObject`
 * class inherits all the properties and methods from the `MovableObject` class, allowing it to reuse
 * and extend the functionality defined in the `MovableObject` class.
 * */
class BackgroundObject extends MovableObject {
  width = 720;
  height = 480;
  // backgroundSound = new Audio("assets/audio/background_music.mp4");

  /**
   * The `constructor(imagePath, x)` function is a special method in a class that gets called when a
   * new instance of the class is created. In this case, the `BackgroundObject` class has a constructor
   * that takes two parameters: `imagePath` and `x`.
   * */
  constructor(imagePath, x) {
    super().loadImage(imagePath);
    this.x = x;
    this.y = 480 - this.height;
  }

  animation() {
    setInterval(() => {
      this.backgroundSound.play();
    });
  }
}
