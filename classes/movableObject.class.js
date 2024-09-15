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
  speedY = 0;
  acceleration = 2.5;

  applyGravity() {
    setInterval(() => {
      if (this.isAboveGround() || this.speedY > 0) {
        this.y -= this.speedY;
        this.speedY -= this.acceleration;
      }
    }, 1000 / 25);
  }

  isAboveGround() {
    return this.y < 120;
  }

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

  draw(ctx) {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }

  drawFrame(ctx) {
    ctx.beginPath();
    ctx.lineWidth = "5";
    ctx.strokeStyle = "blue";
    ctx.rect(this.x, this.y, this.width, this.height);
    ctx.stroke();
  }

  playAnimation(images) {
    let i = this.currentImg % this.IMAGES_WALKING.length; // let i = 0 % 6; => 0, Rest 0
    let path = images[i];
    this.img = this.imgCache[path];
    this.currentImg++;
  }

  moveRight() {
    this.x += this.speed; // Move right
  }

  moveLeft() {
    this.x -= this.speed; // Move left

    this.x -= 0.15;
    if (this.x < -this.width) {
      this.x = Math.random() * 500;
    }
  }

  jump() {
    this.speedY = 30;
  }
}
