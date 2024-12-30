/**
 * Represents a small chicken enemy that extends the MovableObject class.
 * Manages the chicken's movement, animations, and death behavior.
 * Provides methods to handle removal of the chicken from the game.
 * Includes walking and death animations for the chicken.
 * Features properties for size, position, and energy state.
 */
class ChickenSmall extends MovableObject {
  width = 60;
  height = 50;
  y = 380;
  energy = true;
  isKilled = false;
  offset = {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  };

  IMAGES_SMALL_CHICKEN_WALKING = [
    "assets/img/3_enemies_chicken/chicken_small/1_walk/1_w.png",
    "assets/img/3_enemies_chicken/chicken_small/1_walk/2_w.png",
    "assets/img/3_enemies_chicken/chicken_small/1_walk/3_w.png",
  ];

  IMAGES_DEAD = ["assets/img/3_enemies_chicken/chicken_small/2_dead/dead.png"];

  /**
   * Initializes a new instance of the ChickenSmall class.
   * Loads the initial walking image and preloads the walking animation images.
   * Randomly assigns the chicken's horizontal position and movement speed.
   * Sets up the chicken with its default behavior and appearance.
   */
  constructor() {
    super().loadImage(
      "assets/img/3_enemies_chicken/chicken_small/1_walk/1_w.png"
    );
    this.loadImages(this.IMAGES_SMALL_CHICKEN_WALKING);
    this.x = 200 + Math.random() * 3500;
    this.speed = 0.15 + Math.random() * 0.25;
  }

  /**
   * Manages the animation and behavior of the small chicken.
   * - Continuously moves the chicken left at 60 frames per second if not killed.
   * - If the chicken is killed and has energy, switches to the dead image and removes it from the game after 1 second.
   * - Plays the walking animation if the chicken is alive and not killed.
   * Uses two separate intervals for movement and animation, ensuring smooth gameplay.
   */
  animation() {
    setInterval(() => {
      if (!this.isGetKilled) {
        this.moveLeft();
        this.otherDirection = false;
      }
    }, 1000 / 60);

    setInterval(() => {
      if (this.energy && this.isGetKilled) {
        this.energy = false;
        this.loadImage(
          "assets/img/3_enemies_chicken/chicken_small/2_dead/dead.png"
        );
        setTimeout(() => {
          this.spliceChicken(this.getIndexChicken(this));
        }, 1000);
      } else if (!this.isGetKilled)
        this.playAnimation(this.IMAGES_SMALL_CHICKEN_WALKING);
    }, 200);
  }

  /**
   * Removes the chicken from the enemies array in the current level.
   * @param {number} i - The index of the chicken to be removed in the enemies array.
   * Ensures the chicken is no longer part of the game once it is killed.
   */
  spliceChicken(i) {
    lvl1.enemies.splice(i, 1);
  }

  /**
   * Finds the index of a specific chicken in the enemies array based on its x position.
   * @param {object} obj - The chicken object whose index is to be found.
   * @returns {number} - The index of the chicken in the enemies array.
   * Used to identify the position of the chicken for removal or other operations.
   */
  getIndexChicken(obj) {
    for (let i = 0; i < lvl1.enemies.length; i++) {
      if (lvl1.enemies[i].x == obj.x) {
        return i;
      }
    }
  }
}
