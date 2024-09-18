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

  constructor() {
    super();
    this.loadImages(this.IMAGES_BOTTLES);
    this.x = 20;
    this.y = 100;
    this.width = 200;
    this.height = 60;
    this.setBottle(0);
  }

  setBottle(bottle) {
    this.bottle = bottle;
    let path = this.IMAGES_BOTTLES[this.bottleIndex()];
    this.img = this.imgCache[path];
  }

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
