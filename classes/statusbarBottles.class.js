/**
 * The line `class StatusbarBottles extends DrawableObject` is creating a new class named
 * `StatusbarBottles` that extends (inherits from) another class named `DrawableObject`.
 * This means that the `StatusbarBottles` class will inherit all the properties and methods from the `DrawableObject` class.
 * */
class StatusbarBottles extends DrawableObject {
  IMAGES_BOTTLES = [
    "assets/img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/0.png",
    "assets/img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/20.png",
    "assets/img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/40.png",
    "assets/img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/60.png",
    "assets/img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/80.png",
    "assets/img/7_statusbars/1_statusbar/3_statusbar_bottle/orange/100.png",
  ];

  bottle = 0;

  /**
   * The `constructor()` function in the `StatusbarBottles` class is initializing the object when it is created.
   * Inside the constructor, the `loadImages()` method is called to load the images specified in the `IMAGES_BOTTLES` array.
   * The initial position (x, y) and dimensions (width, height) of the object are set,
   * and the `setBottle()` method is called with an initial value of 0 to set the initial bottle image.
   * */
  constructor() {
    super();
    this.loadImages(this.IMAGES_BOTTLES);
    this.x = 20;
    this.y = 100;
    this.width = 200;
    this.height = 60;
    this.setBottle(0);
  }

  /**
   * The `setBottle(bottle)` method in the `StatusbarBottles` class is setting the current bottle value
   * of the object to the specified value passed as an argument.
   * */
  setBottle(bottle) {
    this.bottle = bottle;
    let path = this.IMAGES_BOTTLES[this.bottleIndex()];
    this.img = this.imgCache[path];
  }

  /**
   * Determines the index of the bottle based on its value.
   * Returns the appropriate index (0 to 5) based on the current value of the `bottle` property.
   * If the `bottle` value exceeds 5, it returns 5.
   * Used to identify the bottle's index in a collection or array.
   */
  bottleIndex() {
    if (this.bottle == 0) {
      return 0;
    } else if (this.bottle == 1) {
      return 1;
    } else if (this.bottle == 2) {
      return 2;
    } else if (this.bottle == 3) {
      return 3;
    } else if (this.bottle == 4) {
      return 4;
    } else if (this.bottle == 5) {
      return 5;
    } else if (this.bottle > 5) {
      return 5;
    }
  }
}
