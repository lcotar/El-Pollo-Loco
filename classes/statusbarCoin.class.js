/**
 * The `class StatusbarCoin extends DrawableObject` statement in JavaScript is creating a new class
 * named `StatusbarCoin` that extends (inherits from) the `DrawableObject` class.
 * This means that the `StatusbarCoin` class inherits all properties and methods from the `DrawableObject` class,
 * allowing it to reuse and extend the functionality defined in `DrawableObject`.
 * */
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

  /**
   * The `constructor()` in the `StatusbarCoin` class is a special method that is automatically called when a new instance of the class is created.
   * In this case, it initializes a `StatusbarCoin` object by setting default values for its properties such as `x`,
   * `y`, `width`, `height`, and `coin`.
   * It also loads the images for the status bar coin from the `IMAGES_COIN` array and sets the initial coin value to 0 using the `setCoin(0)` method.
   * */
  constructor() {
    super();
    this.loadImages(this.IMAGES_COIN);
    this.x = 20;
    this.y = 50;
    this.width = 200;
    this.height = 60;
    this.setCoin(0);
  }

  /**
   * The `setCoin(coin)` method in the `StatusbarCoin` class is responsible for updating the `coin`
   * property of the object and setting the corresponding image for the status bar coin based on the value passed as an argument.
   * */
  setCoin(coin) {
    this.coin = coin;
    let path = this.IMAGES_COIN[this.coinIndex()]; // Korrigiert
    this.img = this.imgCache[path];
  }

  /**
   * The `coinIndex()` function in the `StatusbarCoin` class is determining the index of the coin image
   * in the `IMAGES_COIN` array based on the current value of the `coin` property.
   * It checks the value of `coin` and returns the corresponding index in the array. If `coin` is 0, it returns 0;
   * if `coin` is 1, it returns 1; and so on. If `coin` is 5 or greater, it returns 5 to cover all values
   * greater than or equal to 5. This index is then used to retrieve the appropriate image path from the `IMAGES_COIN` array.
   * */
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
