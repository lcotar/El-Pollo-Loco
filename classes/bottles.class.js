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

  constructor() {
    super().loadImage("assets/img/6_salsa_bottle/1_salsa_bottle_on_ground.png");

    this.loadImages(this.IMAGES_BOTTLES_ON_GROUND);
    this.x = 200 + Math.random() * 3600;
    this.animation();
  }

  animation() {
    setInterval(() => {
      this.playAnimation(this.IMAGES_BOTTLES_ON_GROUND);
    }, 500);
  }

  getIndexBottles(mo) {
    for (let i = 0; i < lvl1.bottles.length; i++) {
      if (lvl1.bottles[i].x == mo.x) {
        return i;
      }
    }
  }
}
