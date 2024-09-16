/* The `class lvl` is defining a class in JavaScript called `lvl`. This class has properties for
`enemies`, `clouds`, `backgroundObjects`, and `lvlEndX`. The `constructor` method is used to
initialize the `enemies`, `clouds`, and `backgroundObjects` properties when a new instance of the
`lvl` class is created. The `lvlEndX` property is set to a default value of 2200. */
class lvl {
  enemies;
  clouds;
  backgroundObjects;
  lvlEndX = 2200;

  /** The `constructor(enemies, clouds, backgroundObjects)` method in the `lvl` class is initializing
  the `enemies`, `clouds`, and `backgroundObjects` properties of the class with the values passed as
  arguments when a new instance of the `lvl` class is created. This means that when you create a new
  `lvl` object, you can provide values for `enemies`, `clouds`, and `backgroundObjects`, and those
  values will be assigned to the corresponding properties of the object.*/
  constructor(enemies, clouds, backgroundObjects) {
    this.enemies = enemies;
    this.clouds = clouds;
    this.backgroundObjects = backgroundObjects;
  }
}
