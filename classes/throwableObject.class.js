class ThrowableObject extends MovableObject {
  constructor(x, y) {
    super().loadImage(
      "assets/img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png"
    );
    this.x = x;
    this.y = y;
    this.height = 60;
    this.width = 50;
    this.throw();
  }

  throw(x, y) {
    this.x = x;
    this.y = y;
    this.speedY = 30;
    /* speedX = 20; */

    this.applyGravity();

    setInterval(() => {
      this.x += 10;
    }, 25);
  }
}
