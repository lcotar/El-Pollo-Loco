class Cloud extends MovableObject {
  y = 50;
  height = 150;

  constructor() {
    super().loadImage("/assets/img/5_background/layers/4_clouds/1.png");
    this.x = Math.random() * 500;
    this.width = 500;
  }
}
