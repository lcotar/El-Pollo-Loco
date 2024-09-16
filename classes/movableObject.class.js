/* The `class MovableObject` is defining a JavaScript class that represents a movable object in a
canvas-based game or application. It contains properties and methods related to the movement and
rendering of the object on the canvas. Here is a summary of what the class is doing: */
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
  energy = 100;
  lastHit = 0;

  /* The `applyGravity()` method in the `MovableObject` class is responsible for simulating gravity for
  the movable object. It uses `setInterval` to repeatedly check if the object is above the ground or
  if it has a positive vertical speed. If either condition is true, it updates the object's vertical
  position (`y`) by subtracting the current vertical speed (`speedY`) and then decreases the
  vertical speed by the acceleration value (`acceleration`). This creates a gravity effect where the
  object moves downward until it reaches the ground or stops moving vertically. */
  applyGravity() {
    setInterval(() => {
      if (this.isAboveGround() || this.speedY > 0) {
        this.y -= this.speedY;
        this.speedY -= this.acceleration;
      }
    }, 1000 / 25);
  }

  /* The `isAboveGround()` method in the `MovableObject` class is checking whether the object's
  vertical position (`y`) is above a certain threshold value (in this case, 120). If the `y`
  position is less than 120, the method returns `true`, indicating that the object is above the
  ground. Otherwise, it returns `false`. This method is used in conjunction with the
  `applyGravity()` method to determine if the object should continue moving downward due to gravity
  or if it has reached the ground level. */
  isAboveGround() {
    return this.y < 120;
  }

  /* The `loadImage(path)` method in the `MovableObject` class is responsible for loading a single
  image specified by the `path` parameter into the `img` property of the object. It creates a new
  `Image` object, sets the `src` property of the image object to the provided `path`, and assigns
  the image object to the `img` property of the `MovableObject` instance. This method allows the
  object to load and store a single image for later use in rendering on the canvas. */
  loadImage(path) {
    this.img = new Image();
    this.img.src = path;
  }

  /* The `loadImages(array)` method in the `MovableObject` class is responsible for loading multiple
  images into the `imgCache` property of the object. It takes an array of image paths as a
  parameter, iterates over each path in the array, creates a new `Image` object for each path, sets
  the `src` property of the image object to the path, and then stores the image object in the
  `imgCache` property with the path as the key. This allows the object to cache multiple images for
  later use in animations or rendering. */
  loadImages(array) {
    array.forEach((path) => {
      let img = new Image();
      img.src = path;
      this.imgCache[path] = img;
    });
  }

  /* The `draw(ctx)` method in the `MovableObject` class is responsible for rendering the movable
  object on the canvas. It uses the canvas context `ctx` to draw the object's image at the specified
  position (`x`, `y`) with the specified width and height (`width`, `height`). The method calls the
  `drawImage` function of the canvas context `ctx` to draw the object's image at the specified
  coordinates on the canvas. */
  draw(ctx) {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  }

  /* The `drawFrame(ctx)` method is responsible for drawing a frame around the movable object when it
  is being rendered on the canvas. It checks if the object is an instance of the `Character` or
  `Chicken` class, and if so, it draws a blue rectangular frame around the object using the canvas
  context `ctx`. */
  drawFrame(ctx) {
    if (this instanceof Character || this instanceof Chicken) {
      ctx.beginPath();
      ctx.lineWidth = "5";
      ctx.strokeStyle = "blue";
      ctx.rect(this.x, this.y, this.width, this.height);
      ctx.stroke();
    }
  }

  /* The `isColliding(mo)` method in the `MovableObject` class is a collision detection method that
  checks if the current movable object is colliding with another movable object `mo`. It determines
  collision based on the positions and dimensions of the two objects. */
  isColliding(mo) {
    /* if (
      character.x + character.width > chicken.x &&
      character.y + character.height > chicken.y &&
      character.x < chicken.x &&
      character.y < chicken.y + chicken.height
    ); */

    return (
      this.x + this.width > mo.x &&
      this.y + this.height > mo.y &&
      this.x < mo.x &&
      this.y < mo.y + mo.height
    );
  }

  hit() {
    this.energy -= 5;
    if (this.energy < 0) {
      this.energy = 0;
    } else {
      this.lastHit = new Date().getTime();
    }
  }

  isHurt() {
    let timespan = new Date().getTime() - this.lastHit; // Difference in ms
    timespan = timespan / 1000; // Difference in s

    return timespan < 1;
  }

  isDead() {
    return this.energy === 0;
  }

  /* The `playAnimation(images)` method in the `MovableObject` class is responsible for playing an
  animation by cycling through a series of images. It takes an array of image paths (`images`) as a
  parameter. */
  playAnimation(images) {
    let i = this.currentImg % images.length; // let i = 0 % 6; => 0, Rest 0
    let path = images[i];
    this.img = this.imgCache[path];
    this.currentImg++;
  }

  /* The `moveRight()` method in the `MovableObject` class is responsible for moving the object to the
  right on the canvas. It increments the `x` property of the object by the `speed` value, which
  results in the object moving towards the right side of the canvas. */
  moveRight() {
    this.x += this.speed; // Move right
  }

  /* The `moveLeft()` method in the `MovableObject` class is responsible for moving the object to the
  left on the canvas. It decrements the `x` property of the object by the `speed` value, which
  results in the object moving towards the left side of the canvas. Additionally, there is a
  conditional check that if the object moves beyond the left boundary of the canvas (i.e., `this.x <
  -this.width`), it resets the object's position to a random `x` coordinate within the canvas width
  (500 in this case). */
  moveLeft() {
    this.x -= this.speed; // Move left

    this.x -= 0.15;
    if (this.x < -this.width) {
      this.x = Math.random() * 500;
    }
  }

  /* The `jump()` method in the `MovableObject` class is responsible for making the object jump in the
  canvas-based game or application. When `jump()` is called, it sets the vertical speed (`speedY`)
  of the object to a specific value (in this case, 30). This sudden increase in vertical speed
  causes the object to move upwards on the canvas, simulating a jump motion. The gravity simulation
  implemented in the `applyGravity()` method will eventually bring the object back down to the
  ground unless additional actions are taken to keep it in the air. */
  jump() {
    this.speedY = 30;
  }
}
