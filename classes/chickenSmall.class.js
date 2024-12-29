class ChickenSmall extends MovableObject {
  width = 60;
  height = 50;
  y = 380;
  energy = true;
  isKilled = false;
  offset = {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  };

  IMAGES_SMALL_CHICKEN_WALKING = [
    "assets/img/3_enemies_chicken/chicken_small/1_walk/1_w.png",
    "assets/img/3_enemies_chicken/chicken_small/1_walk/2_w.png",
    "assets/img/3_enemies_chicken/chicken_small/1_walk/3_w.png",
  ];

  IMAGES_DEAD = ["assets/img/3_enemies_chicken/chicken_small/2_dead/dead.png"];

  constructor() {
    super().loadImage(
      "assets/img/3_enemies_chicken/chicken_small/1_walk/1_w.png"
    );
    this.loadImages(this.IMAGES_SMALL_CHICKEN_WALKING);
    this.x = 200 + Math.random() * 3500;
    this.speed = 0.15 + Math.random() * 0.25;
  }

  animation() {
    setInterval(() => {
      if (!this.isGetKilled) {
        this.moveLeft();
        this.otherDirection = false;
      }
    }, 1000 / 60);

    setInterval(() => {
      if (this.energy && this.isGetKilled) {
        this.energy = false;
        this.loadImage(
          "assets/img/3_enemies_chicken/chicken_small/2_dead/dead.png"
        );
        setTimeout(() => {
          this.spliceChicken(this.getIndexChicken(this));
        }, 1000);
      } else if (!this.isGetKilled)
        this.playAnimation(this.IMAGES_SMALL_CHICKEN_WALKING);
    }, 200);
  }

  spliceChicken(i) {
    lvl1.enemies.splice(i, 1);
  }

  getIndexChicken(obj) {
    for (let i = 0; i < lvl1.enemies.length; i++) {
      if (lvl1.enemies[i].x == obj.x) {
        return i;
      }
    }
  }
}
