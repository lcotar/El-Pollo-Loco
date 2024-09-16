/* `class Cloud extends MovableObject` is creating a new class named `Cloud` that extends the
`MovableObject` class. This means that the `Cloud` class inherits all the properties and methods of
the `MovableObject` class, allowing it to reuse and extend functionality defined in the
`MovableObject` class. */
class Cloud extends MovableObject {
  y = 50;
  height = 150;
  width = 500;

  constructor() {
    super().loadImage("assets/img/5_background/layers/4_clouds/1.png");
    this.x = Math.random() * 500;
    this.animation();
  }

  animation() {
    this.moveLeft();
  }
}
