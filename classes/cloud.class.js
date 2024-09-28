/** The `class Cloud extends MovableObject` statement is creating a new class named `Cloud` that extends
 *  the `MovableObject` class. This means that the `Cloud` class inherits all the properties and methods
 *  from the `MovableObject` class, allowing it to reuse and extend the functionality defined in the
 *  `MovableObject` class. This is a common practice in object-oriented programming to promote code
 *  reusability and maintain a hierarchical structure among classes. */
class Cloud extends MovableObject {
  y = 50;
  height = 150;
  width = 500;

  /** The `constructor` in the `Cloud` class is a special method that is automatically called when a new
   *  instance of the `Cloud` class is created. In this case, the `constructor` method is setting
   *  initial values for the `Cloud` object. */
  constructor() {
    super().loadImage("assets/img/5_background/layers/4_clouds/1.png");
    this.x = -100 + Math.random() * 4000;
    this.speed = 0.15 + Math.random() * 0.25;
    this.animation();
  }

  /** The `animation` method in the `Cloud` class is setting up an interval that repeatedly calls the
   *  `moveLeft` method of the `Cloud` object every 10 milliseconds. This causes the cloud to move to
   *  the left continuously at a certain speed specified in the `constructor` method. */
  animation() {
    setInterval(() => {
      this.moveLeft();
    }, 10);
  }
}
