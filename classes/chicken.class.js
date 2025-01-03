/**
 * The class Chicken extends MovableObject statement is creating a new class named Chicken that
 * extends the MovableObject class. This means that the Chicken class inherits all the properties
 * and methods from the MovableObject class, allowing it to reuse and extend the functionality
 * defined in the MovableObject class. This is a common practice in object-oriented programming to
 * promote code reusability and maintainability.
 * */
class Chicken extends MovableObject {
  y = 350;
  height = 80;
  width = 60;
  energy = true;
  isGetKilled = false;
  offset = {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  };

  IMAGES_WALKING = [
    "./assets/img/3_enemies_chicken/chicken_normal/1_walk/1_w.png",
    "./assets/img/3_enemies_chicken/chicken_normal/1_walk/2_w.png",
    "./assets/img/3_enemies_chicken/chicken_normal/1_walk/3_w.png",
  ];

  IMAGES_DEAD = ["assets/img/3_enemies_chicken/chicken_normal/2_dead/dead.png"];

  /**
   * The constructor in the Chicken class is a special method that is automatically called when a
   * new instance of the Chicken class is created. In this case, the constructor method is
   * responsible for initializing various properties of the Chicken object.
   * */
  constructor() {
    super().loadImage(
      "./assets/img/3_enemies_chicken/chicken_normal/1_walk/1_w.png"
    );

    this.loadImages(this.IMAGES_WALKING);
    this.x = 200 + Math.random() * 3500;
    this.speed = 0.15 + Math.random() * 0.25;
  }

  /**
   * The animation method in the Chicken class is setting up two intervals.
   * */
  animation() {
    setInterval(() => {
      if (!this.isGetKilled) {
        this.moveLeft();
      }
    }, 1000 / 60);

    setInterval(() => {
      if (this.energy && this.isGetKilled) {
        this.energy = false;
        this.isGetKilled = true;
        this.loadImage(
          "./assets/img/3_enemies_chicken/chicken_normal/2_dead/dead.png"
        );
        setTimeout(() => {
          this.spliceChicken(this.getIndexChicken(this));
        }, 1000);
      } else if (!this.isGetKilled) this.playAnimation(this.IMAGES_WALKING);
    }, 200);
  }

  /**
   * The spliceChicken method in the Chicken class is removing the chicken object from the
   * enemies array in the lvl1 object. It takes an index i as a parameter and uses the splice
   * method to remove the element at that index from the enemies array. This method effectively
   * removes the chicken object from the list of enemies in the game.
   * */
  spliceChicken(i) {
    lvl1.enemies.splice(i, 1);
  }

  /**
   * The getIndexChicken method in the Chicken class is a helper function that iterates through the
   * enemies array in the lvl1 object to find the index of a specific chicken object based on its x coordinate.
   * */
  getIndexChicken(obj) {
    for (let i = 0; i < lvl1.enemies.length; i++) {
      if (lvl1.enemies[i].x == obj.x) {
        return i;
      }
    }
  }
}
