class Bottle extends MovableObject {
  y = 360;
  bottles = [];
  width = 60;
  height = 80;
  offset = {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  };

  IMAGES_BOTTLES_ON_GROUND = [
    "assets/img/6_salsa_bottle/1_salsa_bottle_on_ground.png",
    "assets/img/6_salsa_bottle/2_salsa_bottle_on_ground.png",
  ];

  // IMAGES_BOTTLES_IN_AIR = ["assets/img/6_salsa_bottle/salsa_bottle.png"];

  /**
   * The `constructor()` function in the `Bottle` class is setting up initial properties and behaviors
   * when a new `Bottle` object is created. Here's a breakdown of what it is doing:
   * */
  constructor() {
    super().loadImage("assets/img/6_salsa_bottle/1_salsa_bottle_on_ground.png");

    this.loadImages(this.IMAGES_BOTTLES_ON_GROUND);
    this.x = 200 + Math.random() * 3600;

    this.animation();
  }

  /**
   * The `animation()` method in the `Bottle` class is setting up a setInterval function that
   * repeatedly calls the `playAnimation()` method with the `IMAGES_BOTTLES_ON_GROUND` array as an
   * argument every 500 milliseconds. This creates an animation effect by cycling through the images in
   * the `IMAGES_BOTTLES_ON_GROUND` array at a regular interval.
   * */
  animation() {
    setInterval(() => {
      this.playAnimation(this.IMAGES_BOTTLES_ON_GROUND);
    }, 500);
  }

  /**
   * The `getIndexBottles(mo)` method in the `Bottle` class is a function that takes a parameter `mo`
   * and iterates through the `bottles` array in the `lvl1` object. It compares the `x` property of
   * each `Bottle` object in the `bottles` array with the `x` property of the `mo` object passed as an
   * argument.
   * */
  getIndexBottles(mo) {
    for (let i = 0; i < lvl1.bottles.length; i++) {
      if (lvl1.bottles[i].x == mo.x) {
        return i;
      }
    }
  }
}
