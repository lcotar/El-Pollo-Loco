/**
 * The class Character extends MovableObject statement is creating a new class named Character that
 * extends the MovableObject class. This means that the Character class inherits all the properties
 * and methods from the MovableObject class. By extending MovableObject, the Character class can
 * reuse and build upon the functionality defined in the MovableObject class, promoting code
 * reusability and maintaining a clear hierarchy in the codebase.
 * */
class Character extends MovableObject {
  height = 290;
  y = 80;
  speed = 10;
  world;
  animationFrame = 0;
  lastAction = 0;
  isJump = false;
  endHurt = false;
  isSleep = false;
  bottle = new Bottle();
  idlecounter = 0;
  offset = {
    top: 104,
    bottom: 0,
    left: 20,
    right: 40,
  };

  IMAGES_IDLE_PEPE = [
    "./assets/img/2_character_pepe/1_idle/idle/I-1.png",
    "./assets/img/2_character_pepe/1_idle/idle/I-2.png",
    "./assets/img/2_character_pepe/1_idle/idle/I-3.png",
    "./assets/img/2_character_pepe/1_idle/idle/I-4.png",
    "./assets/img/2_character_pepe/1_idle/idle/I-5.png",

    "./assets/img/2_character_pepe/1_idle/idle/I-6.png",
    "./assets/img/2_character_pepe/1_idle/idle/I-7.png",
    "./assets/img/2_character_pepe/1_idle/idle/I-8.png",
    "./assets/img/2_character_pepe/1_idle/idle/I-9.png",
    "./assets/img/2_character_pepe/1_idle/idle/I-10.png",
  ];

  IMAGES_SLEEPING = [
    "./assets/img/2_character_pepe/1_idle/long_idle/I-11.png",
    "./assets/img/2_character_pepe/1_idle/long_idle/I-12.png",
    "./assets/img/2_character_pepe/1_idle/long_idle/I-13.png",
    "./assets/img/2_character_pepe/1_idle/long_idle/I-14.png",
    "./assets/img/2_character_pepe/1_idle/long_idle/I-15.png",
    "./assets/img/2_character_pepe/1_idle/long_idle/I-16.png",
    "./assets/img/2_character_pepe/1_idle/long_idle/I-17.png",
    "./assets/img/2_character_pepe/1_idle/long_idle/I-18.png",
    "./assets/img/2_character_pepe/1_idle/long_idle/I-19.png",
    "./assets/img/2_character_pepe/1_idle/long_idle/I-20.png",
  ];

  IMAGES_WALKING = [
    "./assets/img/2_character_pepe/2_walk/W-21.png",
    "./assets/img/2_character_pepe/2_walk/W-22.png",
    "./assets/img/2_character_pepe/2_walk/W-23.png",
    "./assets/img/2_character_pepe/2_walk/W-24.png",
    "./assets/img/2_character_pepe/2_walk/W-25.png",
    "./assets/img/2_character_pepe/2_walk/W-26.png",
  ];

  IMAGES_JUMPING = [
    "./assets/img/2_character_pepe/3_jump/J-31.png",
    "./assets/img/2_character_pepe/3_jump/J-32.png",
    "./assets/img/2_character_pepe/3_jump/J-33.png",
    "./assets/img/2_character_pepe/3_jump/J-34.png",
    "./assets/img/2_character_pepe/3_jump/J-35.png",
    "./assets/img/2_character_pepe/3_jump/J-36.png",
    "./assets/img/2_character_pepe/3_jump/J-37.png",
    "./assets/img/2_character_pepe/3_jump/J-38.png",
    "./assets/img/2_character_pepe/3_jump/J-39.png",
  ];

  IMAGES_HURT = [
    "./assets/img/2_character_pepe/4_hurt/H-41.png",
    "./assets/img/2_character_pepe/4_hurt/H-42.png",
    "./assets/img/2_character_pepe/4_hurt/H-43.png",
  ];

  IMAGES_DEAD = [
    "./assets/img/2_character_pepe/5_dead/D-51.png",
    "./assets/img/2_character_pepe/5_dead/D-52.png",
    "./assets/img/2_character_pepe/5_dead/D-53.png",
    "./assets/img/2_character_pepe/5_dead/D-54.png",
    "./assets/img/2_character_pepe/5_dead/D-55.png",
    "./assets/img/2_character_pepe/5_dead/D-56.png",
    "./assets/img/2_character_pepe/5_dead/D-57.png",
  ];

  constructor() {
    super().loadImage("./assets/img/2_character_pepe/2_walk/W-21.png");
    this.loadImages(this.IMAGES_WALKING);
    this.loadImages(this.IMAGES_JUMPING);
    this.loadImages(this.IMAGES_DEAD);
    this.loadImages(this.IMAGES_HURT);
    this.loadImages(this.IMAGES_IDLE_PEPE);
    this.loadImages(this.IMAGES_SLEEPING);
    this.applyGravity();
    this.animation();
    this.gameStartTime = new Date().getTime();
  }

  /**
   * The animation() method in the Character class is responsible for setting up two intervals.
   * */
  animation() {
    setInterval(() => {
      this.walkingFunctionInterval();
    }, 12);

    setInterval(() => {
      this.deadFunctionInterval();
      this.checkJump();
      this.checkMovement();
      this.ifIsHurt();
    }, 150);

    setInterval(() => {
      this.stopAnimation();
    }, 6000);
  }

  /**
   * The ifIsHurt() method in the Character class is checking if the character is hurt. If the character is hurt,
   * it triggers the playAnimation() method with the IMAGES_HURT images to display the hurt animation.
   * Additionally, it sets the endHurt property to true, indicating that the hurt state has ended.
   * */
  ifIsHurt() {
    if (this.isHurt()) this.playAnimation(this.IMAGES_HURT);
    this.endHurt = true;
  }

  /**
   * Die Funktion walkingFunctionInterval() Prüft die entsprechenden X-Werte des Characters und des Endbosses.
   * Des Weiteren prüft sie die entsprechenden Tasten, hier die rechte & die linke Pfeiltaste als auch die Leertaste, für die Bewegungen
   * und das Springen des Characters gedrückt werden. Welche dann die entsprechenden Aktionen ausführt.
   */
  walkingFunctionInterval() {
    let endBossPosition = this.world.boss.x;
    let isMoving = false;

    if (
      this.world.keyboard.RIGHT &&
      this.x < this.world.lvl.lvlEndX &&
      this.x < endBossPosition
    ) {
      this.moveRight();
      this.otherDirection = false;
      isMoving = true;
    }
    if (this.world.keyboard.LEFT && this.x > 0) {
      this.moveLeft();
      this.otherDirection = true;
    }
    if (this.world.keyboard.SPACE && !this.isAboveGround()) {
      this.isJump = true;
      this.jump();
      this.endHurt = false;
    }
    this.world.cameraX = -this.x + 100;
  }

  /**
   * Die deadFunctionInterval() überprüft regelmässig, ob der Charakter "tot" ist und die entsprechende Animation abspielt, wenn das der Fall sein.
   * Der setInterval sorgt dafür, dass der darin enthaltene Code regelmässig alle 4 Sekunden ausgeführt wird.
   * Wenn die isDead() = true zurückgegeben wird, bedeutet das, dass es überprüft wird, ob der Charakter gestorben ist.
   * Sollte Charakter tot ist, wird die Funktion playAnimation() aufgerufen und die Bilder "IMAGES_DEAD" werden abgespielt.
   * "setTimeout(() => {" verzögert den Code um 1 Sekunde bevor die Funktion "endGame()" ausgeführt werden kann.
   * Die "setTimeout()"-Funktion legt fest, dass der Code innerhalb von 1 Sekunde nach dem Tod des Charakters ausgeführt wird.
   * Die "setInterval()"-Funktion und legt fest, dass der gesamte Prozess Zur überprüfung des Todes des Characters alle 4 Sekunden wiederholt wird.
   */
  deadFunctionInterval() {
    setInterval(() => {
      if (this.isDead()) {
        this.playAnimation(this.IMAGES_DEAD);
        setTimeout(() => {
          endGame();
        }, 1000);
      }
    }, 4000);
  }

  /**
   * The checkMovement() method in the Character class is responsible for checking the character's movement based on keyboard input.
   * If the right or left arrow keys are pressed, indicating movement in those directions, it triggers the playAnimation() method
   * with the IMAGES_WALKING images to display the walking animation.
   * Additionally, it sets the isJump property to false to indicate that the character is not in a jump state.
   * If there is no movement input detected, it calls the stopAnimation() method to handle stopping the animation based on the character's state.
   * */
  checkMovement() {
    if (this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
      this.playAnimation(this.IMAGES_WALKING);
      this.isJump = false;
    } else {
      this.stopAnimation();
    }
  }

  /**
   * The checkJump() method in the Character class is responsible for handling the character's jumping behavior.
   * Here's a breakdown of what it does:
   * */
  checkJump() {
    if (this.world.keyboard.SPACE && !this.isJump && !this.isAboveGround()) {
      this.isJump = true;
      this.world.audios.jumpSoundCharacter.play();
      this.jump();
    }

    if (this.isAboveGround()) {
      this.playAnimation(this.IMAGES_JUMPING);
    }

    if (!this.isAboveGround() && this.isJump) {
      this.isJump = false;
    }
  }

  /**
   * Determines the character's animation state based on activity and game conditions.
   * Calls `movingOrJumping()` if the character is active or jumping.
   * Activates `sleepingMode()` if inactive for >5 seconds and game has run >10 seconds.
   * Defaults to `backToIDLE()` when no conditions for movement or sleep are met.
   * Uses `stopAnimationDefine()` to get required state data for logic decisions.
   */
  stopAnimation() {
    const { currentTime, timeSinceLastAction, timeSinceGameStart, isMoving } =
      this.stopAnimationDefine();

    if (isMoving || this.isJump) {
      this.movingOrJumping(currentTime);
    } else if (
      timeSinceLastAction > 5 &&
      timeSinceGameStart > 10 &&
      !this.isJump
    ) {
      if (!this.isSleep) {
        this.sleepingMode();
      }
    } else {
      this.backToIDLE();
    }
  }

  /**
   * Defines and calculates key variables for managing the character's animation state.
   * Determines the current time, time since the last action, and time since the game started.
   * Checks if the character is currently moving or performing a jump action.
   * Returns an object containing all calculated values for use in animation logic.
   * Keeps the animation logic modular and reusable across different functions.
   */
  stopAnimationDefine() {
    const currentTime = new Date().getTime();
    const timeSinceLastAction = (currentTime - this.lastAction) / 1000; // Zeit in Sekunden
    const timeSinceGameStart = (currentTime - this.gameStartTime) / 1000; // Zeit seit Spielbeginn
    const isMoving =
      this.world.keyboard.RIGHT ||
      this.world.keyboard.LEFT ||
      this.world.keyboard.SPACE ||
      this.world.keyboard.D;

    return { currentTime, timeSinceLastAction, timeSinceGameStart, isMoving };
  }

  /**
   * Handles the character's behavior during movement or jumping actions.
   * Sets the character to awake (isSleep = false) and updates the lastAction timestamp.
   * Pauses any snoring sounds and stops the sleep animation loop if active.
   * Plays the default idle animation ("IMAGES_IDLE_PEPE") to indicate activity.
   * Ensures the character does not transition into sleep while active.
   */
  movingOrJumping(currentTime) {
    this.isSleep = false;
    this.lastAction = currentTime;
    this.world.audios.snoreSound.pause();
    clearInterval(this.sleepAnimationInterval);
    this.playAnimation(this.IMAGES_IDLE_PEPE);
  }

  /**
   * Activates the sleeping mode for the character.
   * Marks the character as asleep (isSleep = true) and starts snoring sounds.
   * Initiates a fast sleep animation loop for "IMAGES_SLEEPING".
   * The animation updates at a high speed (every 100ms).
   * Ensures the character remains in a sleeping state visually and audibly.
   */
  sleepingMode() {
    this.isSleep = true;
    this.world.audios.snoreSound.play();
    this.sleepAnimationInterval = setInterval(() => {
      this.playAnimation(this.IMAGES_SLEEPING);
    }, 100);
  }

  /**
   * Resets the character's state to idle mode.
   * Stops the sleep animation and snoring sound effects.
   * Ensures the character is marked as awake (isSleep = false).
   * Clears any active sleep animation intervals.
   * Plays the default idle animation for the character.
   */
  backToIDLE() {
    this.isSleep = false;
    this.world.audios.snoreSound.pause();
    clearInterval(this.sleepAnimationInterval);
    this.playAnimation(this.IMAGES_IDLE_PEPE);
  }
}
