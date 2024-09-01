class Character extends MovableObject {
  height = 300;
  y = 130;
  IMAGES_WALKING = [
    "/assets/img/2_character_pepe/2_walk/W-21.png",
    "/assets/img/2_character_pepe/2_walk/W-22.png",
    "/assets/img/2_character_pepe/2_walk/W-23.png",
    "/assets/img/2_character_pepe/2_walk/W-24.png",
    "/assets/img/2_character_pepe/2_walk/W-25.png",
    "/assets/img/2_character_pepe/2_walk/W-26.png",
  ];
  currentImg = 0;

  constructor() {
    super().loadImage("/assets/img/2_character_pepe/2_walk/W-21.png");
    this.loadImages(this.IMAGES_WALKING);

    this.animation();

    /* = new Animation(this.img, 100, 300, 50, 150, 6, 100);
    this.animation.loop = true;
    this.animation.start(); */
  }

  animation() {
    setInterval(() => {
      let i = this.currentImg % this.IMAGES_WALKING.length; // let i = 0 % 6; => 0, Rest 0
      let path = this.IMAGES_WALKING[i];
      this.img = this.imgCache[path];
      this.currentImg++;
    }, 100);
  }

  jump() {}
}
