/**
 * The `class StatusbarEndboss extends DrawableObject` statement is creating a new class named
 * `StatusbarEndboss` that extends the `DrawableObject` class.
 * This means that the `StatusbarEndboss` class inherits properties and methods from the `DrawableObject` class,
 * allowing it to reuse and extend functionality defined in the `DrawableObject` class.
 * This is a common practice in object-oriented programming to promote code reusability and maintain a hierarchical structure among classes.
 * */
class StatusbarEndboss extends DrawableObject {
  energy = 100;

  IMAGES_ENDBOSS = [
    "./assets/img/7_statusbars/2_statusbar_endboss/orange/orange0.png",
    "./assets/img/7_statusbars/2_statusbar_endboss/orange/orange20.png",
    "./assets/img/7_statusbars/2_statusbar_endboss/orange/orange40.png",
    "./assets/img/7_statusbars/2_statusbar_endboss/orange/orange60.png",
    "./assets/img/7_statusbars/2_statusbar_endboss/orange/orange80.png",
    "./assets/img/7_statusbars/2_statusbar_endboss/orange/orange100.png",
  ];

  /**
   * The `constructor()` function in the `StatusbarEndboss` class is initializing a new instance of the class.
   * Inside the constructor, the following actions are performed:
   * */
  constructor() {
    super().loadImages(this.IMAGES_ENDBOSS);
    this.x = 510;
    this.y = 0;
    this.width = 200;
    this.height = 60;
    this.setBoss(100); // Startet mit voller Energie
  }

  /**
   * The `setBoss(energy)` method in the `StatusbarEndboss` class is responsible for setting the energy level of the end boss.
   * It takes an `energy` parameter, which represents the new energy level to be set for the end boss.
   * */
  setBoss(energy) {
    // Sicherstellen, dass die Energie im Bereich von 0 bis 100 liegt
    this.energy = Math.max(0, Math.min(energy, 100));

    let path = this.IMAGES_ENDBOSS[this.endbossIndex()];
    this.img = this.imgCache[path];
  }

  /**
   * The `endbossIndex()` method in the `StatusbarEndboss` class is determining the index of the image
   * to be displayed based on the current energy level of the end boss.
   * It uses a descending conditional check to determine which image index corresponds to the current energy level.
   * The method returns an index value between 0 and 5, which is then used to set the appropriate image for the end boss status bar.
   * */
  endbossIndex() {
    // Absteigende Bedingungsprüfung für bessere Lesbarkeit
    if (this.energy == 100) {
      return 5;
    } else if (this.energy > 80) {
      return 4;
    } else if (this.energy > 60) {
      return 3;
    } else if (this.energy > 40) {
      return 2;
    } else if (this.energy > 20) {
      return 1;
    } else {
      return 0;
    }
  }
}
