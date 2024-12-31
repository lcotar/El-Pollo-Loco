let lvl1;

/**
 * The `initLvl()` function is initializing a level in a game. It creates a new instance of a level
 * object (`lvl`) with various background objects, chickens, clouds, coins, and bottles placed at
 * different positions within the level. The background objects consist of different layers with images,
 * and the other game elements like chickens, clouds, coins, and bottles are also added to the level.
 * This function sets up the initial state of the level for the game to start.
 * */
function initLvl() {
  lvl1 = new lvl(
    [
      // "Negativ Bereich"
      new BackgroundObject("./assets/img/5_background/layers/air.png", -719),

      new BackgroundObject(
        "./assets/img/5_background/layers/3_third_layer/2.png",
        -719
      ),

      new BackgroundObject(
        "./assets/img/5_background/layers/2_second_layer/2.png",
        -719
      ),

      new BackgroundObject(
        "./assets/img/5_background/layers/1_first_layer/2.png",
        -719
      ),

      new BackgroundObject("./assets/img/5_background/layers/air.png", 0),

      new BackgroundObject(
        "./assets/img/5_background/layers/3_third_layer/1.png",
        0
      ),

      new BackgroundObject(
        "./assets/img/5_background/layers/2_second_layer/1.png",
        0
      ),

      new BackgroundObject(
        "./assets/img/5_background/layers/1_first_layer/1.png",
        0
      ),

      new BackgroundObject("./assets/img/5_background/layers/air.png", 719),

      new BackgroundObject(
        "./assets/img/5_background/layers/3_third_layer/2.png",
        719
      ),

      new BackgroundObject(
        "./assets/img/5_background/layers/2_second_layer/2.png",
        719
      ),

      new BackgroundObject(
        "./assets/img/5_background/layers/1_first_layer/2.png",
        719
      ),

      // "Positiv" Bereich mit 2 Multipliziert
      new BackgroundObject("./assets/img/5_background/layers/air.png", 719 * 2),

      new BackgroundObject(
        "./assets/img/5_background/layers/3_third_layer/1.png",
        719 * 2
      ),

      new BackgroundObject(
        "./assets/img/5_background/layers/2_second_layer/1.png",
        719 * 2
      ),

      new BackgroundObject(
        "./assets/img/5_background/layers/1_first_layer/1.png",
        719 * 2
      ),

      // "Positiv" Bereich mit 3 Multipliziert
      new BackgroundObject("./assets/img/5_background/layers/air.png", 719 * 3),

      new BackgroundObject(
        "./assets/img/5_background/layers/3_third_layer/2.png",
        719 * 3
      ),

      new BackgroundObject(
        "./assets/img/5_background/layers/2_second_layer/2.png",
        719 * 3
      ),

      new BackgroundObject(
        "./assets/img/5_background/layers/1_first_layer/2.png",
        719 * 3
      ),

      // "Positiv" Bereich mit 4 Multipliziert
      new BackgroundObject("./assets/img/5_background/layers/air.png", 719 * 4),

      new BackgroundObject(
        "./assets/img/5_background/layers/3_third_layer/1.png",
        719 * 4
      ),

      new BackgroundObject(
        "./assets/img/5_background/layers/2_second_layer/1.png",
        719 * 4
      ),

      new BackgroundObject(
        "./assets/img/5_background/layers/1_first_layer/1.png",
        719 * 4
      ),

      // "Positiv" Bereich mit 5 Multipliziert
      new BackgroundObject("./assets/img/5_background/layers/air.png", 719 * 5),

      new BackgroundObject(
        "./assets/img/5_background/layers/3_third_layer/2.png",
        719 * 5
      ),

      new BackgroundObject(
        "./assets/img/5_background/layers/2_second_layer/2.png",
        719 * 5
      ),

      new BackgroundObject(
        "./assets/img/5_background/layers/1_first_layer/2.png",
        719 * 5
      ),

      // "Positiv" Bereich mit 6 Multipliziert
      new BackgroundObject("./assets/img/5_background/layers/air.png", 719 * 6),

      new BackgroundObject(
        "./assets/img/5_background/layers/3_third_layer/1.png",
        719 * 6
      ),

      new BackgroundObject(
        "./assets/img/5_background/layers/2_second_layer/1.png",
        719 * 6
      ),

      new BackgroundObject(
        "./assets/img/5_background/layers/1_first_layer/1.png",
        719 * 6
      ),

      // "Positiv" Bereich mit 7 Multipliziert
      new BackgroundObject("./assets/img/5_background/layers/air.png", 719 * 7),

      new BackgroundObject(
        "./assets/img/5_background/layers/3_third_layer/2.png",
        719 * 7
      ),

      new BackgroundObject(
        "./assets/img/5_background/layers/2_second_layer/2.png",
        719 * 7
      ),

      new BackgroundObject(
        "./assets/img/5_background/layers/1_first_layer/2.png",
        719 * 7
      ),
    ],
    [
      new Chicken(),
      new Chicken(),
      new Chicken(),
      new Chicken(),
      new Chicken(),
      new ChickenSmall(),
      new ChickenSmall(),
      new ChickenSmall(),
      new ChickenSmall(),
      new ChickenSmall(),
      new ChickenSmall(),
    ],

    [new Cloud(), new Cloud(), new Cloud(), new Cloud(), new Cloud()], // Adding clouds

    [
      new Coin(),
      new Coin(),
      new Coin(),
      new Coin(),
      new Coin(),
      new Coin(),
      new Coin(),
      new Coin(),
      new Coin(),
      new Coin(),
    ], // Adding coins

    [
      new Bottle(),
      new Bottle(),
      new Bottle(),
      new Bottle(),
      new Bottle(),
      new Bottle(),
      new Bottle(),
      new Bottle(),
      new Bottle(),
      new Bottle(),
      new Bottle(),
      new Bottle(),
      new Bottle(),
    ] // Adding bottles
  );
}
