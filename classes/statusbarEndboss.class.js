class StatusbarEndboss extends DrawableObject {
  IMAGES_ENDBOSS = [
    "assets/img/7_statusbars/2_statusbar_endboss/orange/orange0.png",
    "assets/img/7_statusbars/2_statusbar_endboss/orange/orange20.png",
    "assets/img/7_statusbars/2_statusbar_endboss/orange/orange40.png",
    "assets/img/7_statusbars/2_statusbar_endboss/orange/orange60.png",
    "assets/img/7_statusbars/2_statusbar_endboss/orange/orange80.png",
    "assets/img/7_statusbars/2_statusbar_endboss/orange/orange100.png",
  ];

  constructor() {
    super();
    this.loadImages(this.IMAGES_ENDBOSS);
    this.x = 510;
    this.y = 0;
    this.width = 200;
    this.height = 60;
    this.setBoss(100); // Startet mit voller Energie
  }

  setBoss(energy) {
    // Sicherstellen, dass die Energie im Bereich von 0 bis 100 liegt
    this.energy = Math.max(0, Math.min(energy, 100));

    let path = this.IMAGES_ENDBOSS[this.endbossIndex()];
    this.img = this.imgCache[path];
  }

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
