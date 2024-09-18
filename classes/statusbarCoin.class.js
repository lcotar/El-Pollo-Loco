class StatusbarCoin extends DrawableObject {
  IMAGES_COIN = [
    "assets/img/7_statusbars/1_statusbar/1_statusbar_coin/green/0.png",
    "assets/img/7_statusbars/1_statusbar/1_statusbar_coin/green/20.png",
    "assets/img/7_statusbars/1_statusbar/1_statusbar_coin/green/40.png",
    "assets/img/7_statusbars/1_statusbar/1_statusbar_coin/green/60.png",
    "assets/img/7_statusbars/1_statusbar/1_statusbar_coin/green/80.png",
    "assets/img/7_statusbars/1_statusbar/1_statusbar_coin/green/100.png",
  ];

  coins = 0;

  constructor() {
    super();
    this.loadImages(this.IMAGES_COIN);
    this.x = 0;
    this.y = 50;
    this.width = 200;
    this.height = 60;
    this.setCoin(0);
  }

  setCoin(coins) {
    this.coins = coins;
    let path = this.IMAGES_COINS[this.coinIndex()];
    this.img = this.imageCache[path];
  }

  coinIndex() {
    if (this.coins == 0) {
      return 0;
    } else if (this.coins == 1) {
      return 1;
    } else if (this.coins == 2) {
      return 2;
    } else if (this.coins == 3) {
      return 3;
    } else if (this.coins == 4) {
      return 4;
    } else if (this.coins == 5) {
      return 5;
    } else if (this.coins > 5) {
      return 5;
    }
  }
}
