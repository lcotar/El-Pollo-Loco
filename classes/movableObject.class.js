class MovableObject {
  x = 120;
  y = 280;
  img;
  height = 150;
  width = 100;
  imgCache = {};
  currentImg = 0;

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

  moveRight() {
    console.log("moving right");
  }

  moveLeft() {}
}
