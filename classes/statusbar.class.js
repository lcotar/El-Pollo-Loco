/** The line `class Statusbar extends DrawableObject` is creating a new class named `Statusbar` that
 * extends the `DrawableObject` class. This means that the `Statusbar` class inherits all the
 * properties and methods from the `DrawableObject` class, allowing it to reuse and build upon the
 * functionality defined in the `DrawableObject` class. This is a common practice in object-oriented
 * programming to promote code reusability and maintainability. */
class Statusbar extends DrawableObject {
  IMAGES_HEALTH = [
    "assets/img/7_statusbars/1_statusbar/2_statusbar_health/blue/0.png",
    "assets/img/7_statusbars/1_statusbar/2_statusbar_health/blue/20.png",
    "assets/img/7_statusbars/1_statusbar/2_statusbar_health/blue/40.png",
    "assets/img/7_statusbars/1_statusbar/2_statusbar_health/blue/60.png",
    "assets/img/7_statusbars/1_statusbar/2_statusbar_health/blue/80.png",
    "assets/img/7_statusbars/1_statusbar/2_statusbar_health/blue/100.png",
  ];

  percentage = 100;

  /**
   * The `constructor()` in the `Statusbar` class is a special method that is automatically called when
   * a new instance of the `Statusbar` class is created.
   * In this specific constructor:
   * */
  constructor() {
    super();
    this.loadImages(this.IMAGES_HEALTH);
    this.x = 20;
    this.y = 0;
    this.width = 200;
    this.height = 60;
    this.setPercentage(100);
  }

  /**
   * The `setPercentage(percentage)` method in the `Statusbar` class is responsible for updating the
   * status bar's visual representation based on the given percentage value.
   * */
  setPercentage(percentage) {
    this.percentage = percentage;
    let path = this.IMAGES_HEALTH[this.resolveIMGIndex()];
    this.img = this.imgCache[path];
  }

  /** The `resolveIMGIndex()` method in the `Statusbar` class is determining the index of the image to
   *  be displayed based on the current percentage value of the status bar. It checks the percentage
   *  value and returns the corresponding index in the array of images (`IMAGES_HEALTH`) based on
   *  predefined thresholds. The method essentially maps the percentage value to the appropriate image
   *  index for the status bar's visual representation. */
  resolveIMGIndex() {
    if (this.percentage == 100) {
      return 5;
    } else if (this.percentage > 80) {
      return 4;
    } else if (this.percentage > 60) {
      return 3;
    } else if (this.percentage > 40) {
      return 2;
    } else if (this.percentage > 20) {
      return 1;
    } else {
      return 0;
    }
  }
}
