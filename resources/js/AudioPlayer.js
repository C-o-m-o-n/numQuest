// AudioPlayer.js

class AudioPlayer {

    constructor(
        correctSoundSrc,
        wrongSoundSrc,
        clickSoundSrc,
        tickSoundSrc,
        endGameSoundSrc
    ) {
        this.correctSound = new Audio(correctSoundSrc);
        this.wrongSound = new Audio(wrongSoundSrc);
        this.clickSound = new Audio(clickSoundSrc);
        this.tickSound = new Audio(tickSoundSrc);
        this.endGameSound = new Audio(endGameSoundSrc);
        // this.endGameSound = new Audio(endGameSoundSrc);
    }

    playCorrectSound() {
        this.correctSound.play();
    }

    playWrongSound() {
        this.wrongSound.play();
    }

    playClickSound() {
        this.clickSound.play();
    }

    playTickSound() {
        this.tickSound.play();
    }
    playEndGameSound() {
        this.endGameSound.play();
    }
}

// backgroundMusic.js
class BackgroundMusicPlayer {
    constructor(tracks) {
        this.tracks = tracks;
        this.currentTrack = null;
        this.audioElement = new Audio();
    }

    playRandomTrack() {
        const randomIndex = Math.floor(Math.random() * this.tracks.length);
        const randomTrack = this.tracks[randomIndex];

        if (this.currentTrack !== randomTrack) {
            this.currentTrack = randomTrack;
            this.audioElement.src = this.currentTrack;
            this.audioElement.play();
        } else {
            this.playRandomTrack();
        }
    }

    stop() {
        this.audioElement.pause();
        this.audioElement.currentTime = 0;
    }
}

// Create an instance of the AudioPlayer class   // Export the instance for use in the mein module
export const audioPlayer = new AudioPlayer(
    '../audio/success-sound.mp3',
    '../audio/wrong.mp3',
    '../audio/click.mp3',
    '../audio/tick_time_sound.mp3',
    '../audio/tick_time_sound.mp3'
  );

// Usage
export const backgroundMusicPlayer = new BackgroundMusicPlayer([

  '../audio/lady-of-the-80.mp3',
  '../audio/digital-love.mp3',
  '../audio/a-hero-of-the-80.mp3',
  '../audio/stranger-things.mp3',
]);
