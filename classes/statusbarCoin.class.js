class StatusbarCoin extends DrawableObject {
  IMAGES_COIN = [
    "assets/img/7_statusbars/1_statusbar/1_statusbar_coin/green/0.png",
    "assets/img/7_statusbars/1_statusbar/1_statusbar_coin/green/20.png",
    "assets/img/7_statusbars/1_statusbar/1_statusbar_coin/green/40.png",
    "assets/img/7_statusbars/1_statusbar/1_statusbar_coin/green/60.png",
    "assets/img/7_statusbars/1_statusbar/1_statusbar_coin/green/80.png",
    "assets/img/7_statusbars/1_statusbar/1_statusbar_coin/green/100.png",
  ];

  coin = 0;

  constructor() {
    super();
    this.loadImages(this.IMAGES_COIN);
    this.x = 20;
    this.y = 50;
    this.width = 200;
    this.height = 60;
    this.setCoin(0);
  }

  setCoin(coin) {
    this.coin = coin;
    let path = this.IMAGES_COIN[this.coinIndex()]; // Korrigiert
    this.img = this.imgCache[path];
  }

  coinIndex() {
    if (this.coin == 0) {
      return 0;
    } else if (this.coin == 1) {
      return 1;
    } else if (this.coin == 2) {
      return 2;
    } else if (this.coin == 3) {
      return 3;
    } else if (this.coin == 4) {
      return 4;
    } else {
      return 5; // Hier wird alles >= 5 abgedeckt
    }
  }
}
