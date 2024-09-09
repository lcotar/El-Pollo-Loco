class Character extends MovableObject {
  height = 300;
  y = 130;
  speed = 10;
  IMAGES_WALKING = [
    "assets/img/2_character_pepe/2_walk/W-21.png",
    "assets/img/2_character_pepe/2_walk/W-22.png",
    "assets/img/2_character_pepe/2_walk/W-23.png",
    "assets/img/2_character_pepe/2_walk/W-24.png",
    "assets/img/2_character_pepe/2_walk/W-25.png",
    "assets/img/2_character_pepe/2_walk/W-26.png",
  ];
  world;

  constructor() {
    super().loadImage("assets/img/2_character_pepe/2_walk/W-21.png");
    this.loadImages(this.IMAGES_WALKING);

    this.animation();

    /* = new Animation(this.img, 100, 300, 50, 150, 6, 100);
    this.animation.loop = true;
    this.animation.start(); */
  }

  animation() {
    setInterval(() => {
      if (this.world.keyboard.RIGHT) {
        this.x += this.speed; // Move right
        this.otherDirection = false; // not mirroring character
      }

      if (this.world.keyboard.LEFT) {
        this.x -= this.speed; // Move left
        this.otherDirection = true; //mirroring character
      }
      this.world.cameraX = -this.x;
    }, 1000 / 60);

    setInterval(() => {
      if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
        // Walk animation
        let i = this.currentImg % this.IMAGES_WALKING.length; // let i = 0 % 6; => 0, Rest 0
        let path = this.IMAGES_WALKING[i];
        this.img = this.imgCache[path];
        this.currentImg++;
      }
    }, 50);
  }

  jump() {}
}
