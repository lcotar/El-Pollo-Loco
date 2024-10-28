class AudioCollections {
  walkingSound = new Audio("assets/audio/Walking_through_grass_(long).mp3");
  chickenSound = new Audio("assets/audio/ChickenScreamNoise.mp3");
  backgroundAudio = new Audio("assets/audio/DramaticMusicSound.mp3");
  snoreSound = new Audio("assets/audio/Snoring.mp4");
  jumpSoundCharacter = new Audio("assets/audio/jumpSound.mp3");
  coinPickSound = new Audio("assets/audio/coin.mp3");
  hurtSound = new Audio("assets/audio/hurt_sound.mp3"); // hurting sound
  pickBottleSound = new Audio("assets/audio/pick_bottle.mp3"); // pick Bottles
  chickenDeadSound = new Audio("assets/audio/chicken_dead.mp3"); // chicken dead
  // backgroundAudio = new Audio("audio/background-music.mp3"); // Zeile löschen
  winSound = new Audio("assets/audio/SuperMarioBros.LevelComplete.mp4");
  loseSound = new Audio("assets/audio/MarioFall(Waa).mp4");
  bottleSplash = new Audio("assets/audio/SplashSound.mp3"); // Bottle splashing

  constructor() {
    this.pausingAudio();
  }

  pausingAudio() {
    this.walkingSound.volume = 0;
    this.snoreSound.volume = 0;
    this.jumpSoundCharacter.volume = 0;
    this.coinSound.volume = 0;
    this.hurtSound.volume = 0;
    this.pickBottleSound.volume = 0;
    this.chickenDeadSound.volume = 0;
    this.backgroundAudio.volume = 0;
    this.winSound.volume = 0;
    this.loseSound.volume = 0;
    this.bottleSplash.volume = 0;
  }

  playAudio() {
    this.walkingSound.volume = 1;
    this.snoreSound.volume = 1;
    this.jumpSoundCharacter.volume = 1;
    this.coinSound.volume = 1;
    this.hurtSound.volume = 1;
    this.pickBottleSound.volume = 1;
    this.chickenDeadSound.volume = 1;
    this.backgroundAudio.volume = 1;
    this.winSound.volume = 1;
    this.loseSound.volume = 1;
    this.bottleSplash.volume = 1;
  }
}
