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
    this.setBoss(100);
  }

  setBoss(energy) {
    this.energy = energy;
    let path = this.IMAGES_ENDBOSS[this.endbossIndex()];
    this.img = this.imageCache[path];
  }

  endbossIndex() {
    if (this.energy >= 100) {
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
