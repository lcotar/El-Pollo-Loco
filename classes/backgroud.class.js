/**
 * The `class BackgroundObject extends MovableObject` statement is creating a new class called
 * `BackgroundObject` that extends the `MovableObject` class. This means that the `BackgroundObject`
 * class inherits all the properties and methods from the `MovableObject` class, allowing it to reuse
 * and extend the functionality defined in the `MovableObject` class.
 * */
class BackgroundObject extends MovableObject {
  width = 720;
  height = 480;

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

  /**
   * The `animation` method in the `BackgroundObject` class is setting up a setInterval function that
   * plays the `backgroundSound` audio at regular intervals. However, there is a potential issue in the
   * code as the `backgroundSound` variable is commented out, so it may not work as intended. If you
   * uncomment the `backgroundSound` variable and initialize it with an audio file path, the
   * `animation` method will continuously play the background sound at the specified intervals.
   * */
  animation() {
    setInterval(() => {
      this.backgroundSound.play();
    });
  }
}
