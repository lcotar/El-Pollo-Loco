class ThrowableObjects extends MovableObject {
  speedY = 30;
  speedX = 20;
  world;

  IMAGES_BOTTLE_ROTATION = [
    "assets/img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png",
    "assets/img/6_salsa_bottle/bottle_rotation/2_bottle_rotation.png",
    "assets/img/6_salsa_bottle/bottle_rotation/3_bottle_rotation.png",
    "assets/img/6_salsa_bottle/bottle_rotation/4_bottle_rotation.png",
  ];

  IMAGES_SPLASH = [
    "assets/img/6_salsa_bottle/bottle_rotation/bottle_splash/1_bottle_splash.png",
    "assets/img/6_salsa_bottle/bottle_rotation/bottle_splash/2_bottle_splash.png",
    "assets/img/6_salsa_bottle/bottle_rotation/bottle_splash/3_bottle_splash.png",
    "assets/img/6_salsa_bottle/bottle_rotation/bottle_splash/4_bottle_splash.png",
    "assets/img/6_salsa_bottle/bottle_rotation/bottle_splash/5_bottle_splash.png",
    "assets/img/6_salsa_bottle/bottle_rotation/bottle_splash/6_bottle_splash.png",
  ];

  constructor(x, y, world) {
    super().loadImage(
      "assets/img/6_salsa_bottle/bottle_rotation/1_bottle_rotation.png"
    );
    this.loadImages(this.IMAGES_BOTTLE_ROTATION);
    this.loadImages(this.IMAGES_SPLASH);
    this.world = world;

    this.x = x;
    this.y = y;
    this.height = 60;
    this.width = 50;
    this.throw();
    this.applyGravity();
    this.animation();
  }

  throw() {
    this.speedY = 30;
    let splashed = false;

    setInterval(() => {
      if (
        !world.splashedBottle &&
        !splashed &&
        !world.character.otherDirection
      ) {
        this.playAnimation(this.IMAGES_BOTTLE_ROTATION);
        this.x += 8;
      } else if (world.character.otherDirection) {
        this.playAnimation(this.IMAGES_BOTTLE_ROTATION);
        this.x -= 8;
      }
      if (this.y >= 360 && !splashed)
        this.triggerSplash(), (splashed = true), (world.bottleOnGround = false);
      if (this.hitsEnemy() || (this.hitsBoss() && !splashed))
        this.triggerSplash(), (splashed = true);
    }, 25);
  }

  hitsEnemy() {
    return world.lvl.enemies.some((enemy) => this.isColliding(enemy));
  }

  hitsBoss() {
    return this.isColliding(world.boss);
  }

  triggerSplash() {
    this.loadImages(this.IMAGES_SPLASH);
    this.playAnimation(this.IMAGES_SPLASH);
    // world.audios.bottleSplash.play();
    this.x -= 8;
  }

  animation() {
    if (world.splashedBottle == true) {
      setInterval(() => {
        this.playAnimation(this.IMAGES_SPLASH);
      }, 50);
    }
  }
}
