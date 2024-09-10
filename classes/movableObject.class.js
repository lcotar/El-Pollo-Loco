class MovableObject {
  x = 120;
  y = 280;
  img;
  height = 150;
  width = 100;
  imgCache = {};
  currentImg = 0;
  speed = 0.15;
  otherDirection = false;

  loadImage(path) {
    this.img = new Image();
    this.img.src = path;
  }

  loadImages(array) {
    array.forEach((path) => {
      let img = new Image();
      img.src = path;
      this.imgCache[path] = img;
    });
  }

  playAnimation(images) {
    let i = this.currentImg % this.IMAGES_WALKING.length; // let i = 0 % 6; => 0, Rest 0
    let path = images[i];
    this.img = this.imgCache[path];
    this.currentImg++;
  }

  moveRight() {
    console.log("moving right");
  }

  moveLeft() {
    setInterval(() => {
      this.x -= 0.15;
      if (this.x < -this.width) {
        this.x = Math.random() * 500;
      }
    }, 1000 / 60);
  }
}
