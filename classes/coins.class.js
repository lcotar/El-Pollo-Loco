/**
 * Represents a coin object that extends the MovableObject class.
 * Manages the coin's properties, including its position and animation.
 * Provides an animation method to create a rotating coin effect.
 * Randomly assigns the coin's horizontal and vertical position on creation.
 * Includes offset values for collision detection.
 */
class Coin extends MovableObject {
  y = 100;
  coins = [];
  offset = {
    top: 0,
    bottom: 40,
    left: 0,
    right: 0,
  };

  IMAGES_COINS = [
    "./assets/img/8_coin/coin_1.png",
    "./assets/img/8_coin/coin_2.png",
  ];

  /**
   * Initializes a new instance of the Coin class.
   * Loads the initial coin image and preloads the coin animation images.
   * Randomly assigns the coin's horizontal and vertical positions within a defined range.
   * Starts the animation to create a rotating coin effect.
   */
  constructor() {
    super().loadImage("./assets/img/8_coin/coin_1.png");
    this.loadImages(this.IMAGES_COINS);
    this.x = 200 + Math.random() * 3600;
    this.y = 0 + Math.random() * 250;
    this.animation();
  }

  /**
   * Handles the coin's animation, creating a rotating effect.
   * Cycles through the images in the IMAGES_COINS array at an interval of 350 milliseconds.
   * Ensures the coin appears to rotate continuously during the game.
   */
  animation() {
    setInterval(() => {
      this.playAnimation(this.IMAGES_COINS);
    }, 350);
  }
}
