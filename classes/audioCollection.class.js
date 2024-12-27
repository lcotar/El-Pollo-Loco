class AudioCollections {
  walkingSound = new Audio("../assets/audio/Walking_through_grass_(long).mp3");
  chickenSound = new Audio("../assets/audio/ChickenScreamNoise.mp3");
  backgroundAudio = new Audio("../assets/audio/DramaticMusicSound.mp3");
  snoreSound = new Audio("assets/audio/sound_effect.mp3");
  jumpSoundCharacter = new Audio("assets/audio/jumpSound.mp3");
  coinSound = new Audio("assets/audio/coin.mp3");
  hurtSound = new Audio("assets/audio/sound_effect.mp3"); // hurting sound
  pickBottleSound = new Audio("assets/audio/collect_item.mp3"); // pick Bottles
  chickenDeadSound = new Audio("assets/audio/chicken_dead.mp3"); // chicken dead
  // backgroundAudio = new Audio("audio/background-music.mp3"); // Zeile löschen
  winSound = new Audio("assets/audio/LevelComplete.mp3"); // .mp3 Datei verwenden
  loseSound = new Audio("assets/audio/MarioDeath.mp3"); // .mp3 Datei verwenden
  bottleSplash = new Audio("assets/audio/bottle.mp3"); // Bottle splashing

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
