/**
 * The `class AudioCollections` is defining a class in JavaScript that represents a collection of audio elements.
 * It contains properties for various audio sounds such as walking, chicken sound, background,
 * music, snoring, jumping, coin collection, hurting, picking bottles, chicken death, win sound, lose, sound, and bottle splashing.
 * */
class AudioCollections {
  walkingSound = new Audio("/assets/audio/Walking_through_grass_(long).mp3");
  chickenSound = new Audio("/assets/audio/ChickenScreamNoise.mp3");
  backgroundAudio = new Audio("/assets/audio/DramaticMusicSound.mp3");
  snoreSound = new Audio("/assets/audio/sound_effect.mp3");
  jumpSoundCharacter = new Audio("/assets/audio/jumpSound.mp3");
  coinSound = new Audio("/assets/audio/coinSound.mp3");
  hurtSound = new Audio("/assets/audio/sound_effect.mp3"); // hurting sound
  pickBottleSound = new Audio("/assets/audio/collect_item.mp3"); // pick Bottles
  chickenDeadSound = new Audio("/assets/audio/ChickenScreamNoise.mp3"); // chicken dead
  winSound = new Audio("/assets/audio/LevelComplete.mp3"); // .mp3 Datei verwenden
  loseSound = new Audio("/assets/audio/MarioDeath.mp3"); // .mp3 Datei verwenden
  bottleSplash = new Audio("/assets/audio/bottle.mp3"); // Bottle splashing

  /**
   * The `constructor()` method in the `AudioCollections` class is setting up the initial state of the
   * class when an instance of the class is created. In this case, the constructor is calling the
   * `pausingAudio()` method, which sets the volume of all the audio elements in the collection to 0, effectively pausing them.
   * This ensures that when a new `AudioCollections` object is created, all
   * audio elements start in a paused state until explicitly played using the `playAudio()` method.
   * */
  constructor() {
    this.pausingAudio();
  }

  /**
   * The `pausingAudio()` method in the `AudioCollections` class is setting the volume of all the audio
   * elements in the collection to 0. This effectively pauses all the audio elements when a new instance
   * of the `AudioCollections` class is created. This ensures that all audio elements start in a paused
   * state until explicitly played using the `playAudio()` method.
   * */
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

  /**
   * The `playAudio()` method in the `AudioCollections` class is setting the volume of all the audio
   * elements in the collection to 1. This effectively plays all the audio elements at full volume when called.
   * By invoking this method, you can start playing all the audio sounds that are part of the `AudioCollections` class.
   * */
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
