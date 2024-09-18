/** The `class MovableObject extends DrawableObject` statement in the JavaScript code is creating a new
 * class named `MovableObject` that extends (inherits from) another class named `DrawableObject`. This
 * means that the `MovableObject` class will inherit all the properties and methods defined in the
 * `DrawableObject` class, allowing `MovableObject` instances to have access to those inherited
 * members. */
class MovableObject extends DrawableObject {
  speed = 0.15;
  otherDirection = false;
  speedY = 0;
  acceleration = 2.5;
  energy = 100;
  lastHit = 0;

  /** The `applyGravity()` method in the `MovableObject` class is responsible for simulating gravity for
   *  the movable object. It uses `setInterval` to repeatedly check if the object is above the ground or
   *  if it has a positive vertical speed. If either condition is true, it updates the object's vertical
   *  position (`y`) by subtracting the current vertical speed (`speedY`) and then decreases the
   *  vertical speed by the acceleration value (`acceleration`). This creates a gravity effect where the
   *  object moves downward until it reaches the ground or stops moving vertically. */
  applyGravity() {
    setInterval(() => {
      if (this.isAboveGround() || this.speedY > 0) {
        this.y -= this.speedY;
        this.speedY -= this.acceleration;
      }
    }, 1000 / 25);
  }

  /** The `isAboveGround()` method in the `MovableObject` class is checking whether the object's
   * vertical position (`y`) is above a certain threshold value (in this case, 120). If the `y`
   * position is less than 120, the method returns `true`, indicating that the object is above the
   * ground. Otherwise, it returns `false`. This method is used in conjunction with the
   * `applyGravity()` method to determine if the object should continue moving downward due to gravity
   * or if it has reached the ground level. */
  isAboveGround() {
    return this.y < 150;
  }

  /** The `isColliding(mo)` method in the `MovableObject` class is a collision detection method that
   * checks if the current movable object is colliding with another movable object `mo`. It determines
   * collision based on the positions and dimensions of the two objects. */
  isColliding(mo) {
    return (
      this.x + this.width > mo.x &&
      this.y + this.height > mo.y &&
      this.x < mo.x &&
      this.y < mo.y + mo.height
    );
  }

  /** The `hit()` method in the `MovableObject` class is reducing the `energy` property of the object by
   *  5 units when called. If the `energy` value drops below 0 after the reduction, it is set to 0 to
   *  prevent negative energy values. Additionally, the method updates the `lastHit` property with the
   *  current timestamp using `new Date().getTime()`. This timestamp is used in the `isHurt()` method to
   *  determine if the object was recently hit within a 1-second timespan. */
  hit() {
    this.energy -= 5;
    if (this.energy < 0) {
      this.energy = 0;
    } else {
      this.lastHit = new Date().getTime();
    }
  }

  /* The `isHurt()` method in the `MovableObject` class is checking if the object was recently hit
  within a 1-second timespan. It calculates the difference in milliseconds between the current time
  and the `lastHit` timestamp. Then, it converts this difference to seconds and returns `true` if
  the timespan is less than 1 second, indicating that the object is still considered "hurt" from the
  recent hit. Otherwise, it returns `false`, indicating that the object is no longer in a hurt
  state. */
  isHurt() {
    let timespan = new Date().getTime() - this.lastHit; // Difference in ms
    timespan = timespan / 1000; // Difference in s

    return timespan < 1;
  }

  /** The `isDead()` method in the `MovableObject` class is checking whether the object's `energy`
   *  property has reached 0. If the `energy` value is equal to 0, the method returns `true`, indicating
   *  that the object is considered "dead" in the context of the application or game. This method is
   *  used to determine if the object has run out of energy and should be removed or handled accordingly
   *  in the game logic. */
  isDead() {
    return this.energy === 0;
  }

  /** The `playAnimation(images)` method in the `MovableObject` class is responsible for playing an
   *  animation by cycling through a series of images. It takes an array of image paths (`images`) as a
   *  parameter. */
  playAnimation(images) {
    let i = this.currentImg % images.length; // let i = 0 % 6; => 0, Rest 0
    let path = images[i];
    this.img = this.imgCache[path];
    this.currentImg++;
  }

  /** The `moveRight()` method in the `MovableObject` class is responsible for moving the object to the
   *  right on the canvas. It increments the `x` property of the object by the `speed` value, which
   *  results in the object moving towards the right side of the canvas. */
  moveRight() {
    this.x += this.speed; // Move right
  }

  /** The `moveLeft()` method in the `MovableObject` class is responsible for moving the object to the
   *  left on the canvas. It decrements the `x` property of the object by the `speed` value, which
   *  results in the object moving towards the left side of the canvas. Additionally, there is a
   *  conditional check that if the object moves beyond the left boundary of the canvas (i.e., `this.x <
   *  -this.width`), it resets the object's position to a random `x` coordinate within the canvas width
   *  (500 in this case). */
  moveLeft() {
    this.x -= this.speed; // Move left

    this.x -= 0.15;
    if (this.x < -this.width) {
      this.x = Math.random() * 500;
    }
  }

  /** The `jump()` method in the `MovableObject` class is responsible for making the object jump in the
   * canvas-based game or application. When `jump()` is called, it sets the vertical speed (`speedY`)
   * of the object to a specific value (in this case, 30). This sudden increase in vertical speed
   * causes the object to move upwards on the canvas, simulating a jump motion. The gravity simulation
   * implemented in the `applyGravity()` method will eventually bring the object back down to the
   * ground unless additional actions are taken to keep it in the air. */
  jump() {
    this.speedY = 30;
  }
}
