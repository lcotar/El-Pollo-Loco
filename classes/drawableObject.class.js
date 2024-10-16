/**
 * The `class DrawableObject` is defining a JavaScript class that serves as a base class for objects
 * that can be drawn on a canvas. It contains properties such as `x`, `y`, `height`, `width`, `img`,
 * `imgCache`, and `currentImg` to manage the position, size, and images associated with the drawable
 * object.
 * */
class DrawableObject {
  otherDirection = false;
  x = 120;
  y = 280;
  height = 150;
  width = 100;
  img;
  imgCache = {};
  currentImg = 0;

  /**
   * The `loadImage(path)` method in the `MovableObject` class is responsible for loading a single
   * image specified by the `path` parameter into the `img` property of the object. It creates a new
   * `Image` object, sets the `src` property of the image object to the provided `path`, and assigns
   * the image object to the `img` property of the `MovableObject` instance. This method allows the
   * object to load and store a single image for later use in rendering on the canvas.
   */
  loadImage(path) {
    this.img = new Image();
    this.img.src = path;
  }

  /**
   * The `draw(ctx)` method in the `MovableObject` class is responsible for rendering the movable
   * object on the canvas. It uses the canvas context `ctx` to draw the object's image at the specified
   * position (`x`, `y`) with the specified width and height (`width`, `height`). The method calls the
   * `drawImage` function of the canvas context `ctx` to draw the object's image at the specified
   * coordinates on the canvas.
   * */
  draw(ctx) {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }

  /**
   * The `drawFrame(ctx)` method is responsible for drawing a frame around the movable object when it
   * is being rendered on the canvas. It checks if the object is an instance of the `Character` or
   * `Chicken` class, and if so, it draws a blue rectangular frame around the object using the canvas
   * context `ctx`.
   * */
  // muss vorabgabe gelöscht werden
  drawFrame(ctx) {
    if (this instanceof Character || this instanceof Chicken) {
      ctx.beginPath();
      ctx.lineWidth = "5";
      ctx.strokeStyle = "blue";
      ctx.rect(this.x, this.y, this.width, this.height);
      ctx.stroke();
    }
  }

  /**
   * The `loadImages(array)` method in the `MovableObject` class is responsible for loading multiple
   * images into the `imgCache` property of the object. It takes an array of image paths as a
   * parameter, iterates over each path in the array, creates a new `Image` object for each path, sets
   * the `src` property of the image object to the path, and then stores the image object in the
   * `imgCache` property with the path as the key. This allows the object to cache multiple images for
   * later use in animations or rendering.
   * */
  loadImages(array) {
    array.forEach((path) => {
      let img = new Image();
      img.src = path;
      this.imgCache[path] = img;
    });
  }
}
