class BackgroundObject extends MovableObject {
  width = 720;
  height = 480;
  backgroundSound = new Audio("assets/audio/background_music.mp4");

  constructor(imagePath, x) {
    super().loadImage(imagePath);
    this.x = x;
    this.y = 480 - this.height;
  }

  animation() {
    setInterval(() => {
      this.backgroundSound.play();
    });
  }
}
