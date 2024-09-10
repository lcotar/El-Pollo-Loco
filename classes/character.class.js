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

  walkingSound = new Audio("assets/audio/Walking_through_grass_(long).mp3");

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
      this.walkingSound.pause();
      if (this.world.keyboard.RIGHT && this.x < this.world.lvl.lvlEndX) {
        this.x += this.speed; // Move right
        this.otherDirection = false; // not mirroring character
        this.walkingSound.play();
      }

      if (this.world.keyboard.LEFT && this.x > 0) {
        this.x -= this.speed; // Move left
        this.otherDirection = true; //mirroring character
        this.walkingSound.play();
      }
      this.world.cameraX = -this.x + 100;
    }, 1000 / 60);

    setInterval(() => {
      if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
        // Walk animation
        this.playAnimation(this.IMAGES_WALKING);
      }
    }, 50);
  }

  jump() {}
}
