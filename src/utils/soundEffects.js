/**
 * Sound & Romantic Ambient Audio Engine
 * Uses Web Audio API for guaranteed zero-dependency romantic ambient soundtrack
 * and sweet micro-interaction chimes.
 */

class RomanticAudioManager {
  constructor() {
    this.ctx = null;
    this.isPlaying = false;
    this.isMuted = false;
    this.volume = 0.5;
    this.masterGain = null;
    this.padOscillators = [];
    this.melodyTimer = null;
    this.audioElement = null;
    this.useCustomAudio = false;
    this.externalAudioFailed = false;
  }

  init() {
    if (this.ctx) return;
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
        this.masterGain = this.ctx.createGain();
        this.masterGain.gain.setValueAtTime(this.isMuted ? 0 : this.volume, this.ctx.currentTime);
        this.masterGain.connect(this.ctx.destination);
      }
    } catch (e) {
      console.warn("Web Audio not supported or blocked:", e);
    }
  }

  resume() {
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume();
    }
  }

  startAmbientMusic() {
    this.init();
    this.resume();
    if (this.isPlaying) return;

    this.isPlaying = true;

    // Check if custom mp3 exists in public/music/romantic.mp3
    if (!this.audioElement && !this.externalAudioFailed) {
      const testAudio = new Audio();
      testAudio.src = "/music/romantic.mp3";
      testAudio.loop = true;
      testAudio.volume = this.volume;
      testAudio.oncanplay = () => {
        this.useCustomAudio = true;
        this.audioElement = testAudio;
        if (this.isPlaying && !this.isMuted) {
          testAudio.play().catch(() => {
            this.startProceduralAmbient();
          });
        }
      };
      testAudio.onerror = () => {
        this.externalAudioFailed = true;
        this.startProceduralAmbient();
      };
      // Timeout fallback in case error doesn't fire immediately
      setTimeout(() => {
        if (!this.useCustomAudio && this.isPlaying) {
          this.startProceduralAmbient();
        }
      }, 600);
      return;
    }

    if (this.useCustomAudio && this.audioElement) {
      this.audioElement.play().catch(() => this.startProceduralAmbient());
    } else {
      this.startProceduralAmbient();
    }
  }

  startProceduralAmbient() {
    if (!this.ctx || this.padOscillators.length > 0) return;

    // Pentatonic scale in D Major / F# minor for gentle, dreamy romantic vibes
    // D3, F#3, A3, C#4, E4, F#4, A4
    const chords = [
      [146.83, 220.00, 277.18, 329.63], // Dmaj7 (D3, A3, C#4, E4)
      [123.47, 185.00, 246.94, 293.66], // Bm7 (B2, F#3, B3, D4)
      [98.00, 146.83, 196.00, 246.94],  // Gmaj7 (G2, D3, G3, B3)
      [110.00, 164.81, 220.00, 277.18], // A9sus4 (A2, E3, A3, C#4)
    ];

    let chordIndex = 0;

    const playPadChord = () => {
      if (!this.isPlaying || !this.ctx) return;
      const now = this.ctx.currentTime;
      const currentChord = chords[chordIndex % chords.length];
      chordIndex++;

      // Create warm low-pass filtered sine/triangle drone
      currentChord.forEach((freq) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const filter = this.ctx.createBiquadFilter();

        osc.type = "sine";
        osc.frequency.setValueAtTime(freq, now);

        filter.type = "lowpass";
        filter.frequency.setValueAtTime(650, now);

        // Slow soft romantic attack and decay (8 second chord)
        gain.gain.setValueAtTime(0.0001, now);
        gain.gain.linearRampToValueAtTime(0.035, now + 2.5);
        gain.gain.linearRampToValueAtTime(0.0001, now + 7.8);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(this.masterGain);

        osc.start(now);
        osc.stop(now + 8.0);
      });
    };

    playPadChord();
    this.padTimer = setInterval(playPadChord, 7500);

    // Sweet romantic melody notes (bell-like celesta tones)
    const melodyNotes = [
      587.33, 659.25, 739.99, 880.0, 987.77, 1174.66, 880.0, 739.99
    ];

    let noteIdx = 0;
    const playMelodyNote = () => {
      if (!this.isPlaying || !this.ctx) return;
      const freq = melodyNotes[noteIdx % melodyNotes.length];
      noteIdx = (noteIdx + Math.floor(Math.random() * 3) + 1) % melodyNotes.length;

      this.playNote(freq, 2.0, 0.04, "sine");
    };

    // Staggered melodic chimes every 2-3 seconds
    this.melodyTimer = setInterval(() => {
      if (Math.random() > 0.25) {
        playMelodyNote();
      }
    }, 2400);
  }

  playNote(freq, duration = 1.5, peakGain = 0.05, type = "sine") {
    if (!this.ctx || this.isMuted) return;
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, now);

      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.linearRampToValueAtTime(peakGain, now + 0.08);
      gain.gain.exponentialRampToValueAtTime(0.00001, now + duration);

      osc.connect(gain);
      gain.connect(this.masterGain);

      osc.start(now);
      osc.stop(now + duration);
    } catch (e) {
      // AudioContext safe catch
    }
  }

  pauseAmbientMusic() {
    this.isPlaying = false;
    if (this.padTimer) {
      clearInterval(this.padTimer);
      this.padTimer = null;
    }
    if (this.melodyTimer) {
      clearInterval(this.melodyTimer);
      this.melodyTimer = null;
    }
    if (this.audioElement) {
      this.audioElement.pause();
    }
  }

  toggleMute() {
    this.isMuted = !this.isMuted;
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setValueAtTime(
        this.isMuted ? 0 : this.volume,
        this.ctx.currentTime
      );
    }
    if (this.audioElement) {
      this.audioElement.muted = this.isMuted;
    }
    if (!this.isPlaying && !this.isMuted) {
      this.startAmbientMusic();
    }
    return this.isMuted;
  }

  setVolume(val) {
    this.volume = Math.max(0, Math.min(1, val));
    if (this.masterGain && this.ctx && !this.isMuted) {
      this.masterGain.gain.setValueAtTime(this.volume, this.ctx.currentTime);
    }
    if (this.audioElement) {
      this.audioElement.volume = this.volume;
    }
  }

  // --- Interaction Micro-Sounds ---
  playHeartChime() {
    this.init();
    this.resume();
    // Warm rising harp-like arpeggio: C#5, F#5, A#5
    [554.37, 739.99, 932.33].forEach((f, idx) => {
      setTimeout(() => this.playNote(f, 1.2, 0.06, "sine"), idx * 90);
    });
  }

  playCoffeeChime() {
    this.init();
    this.resume();
    // Cozy ceramic warm acoustic chime
    this.playNote(523.25, 0.6, 0.05, "triangle");
    setTimeout(() => this.playNote(659.25, 0.9, 0.04, "sine"), 120);
  }

  playDoubleTickChime() {
    this.init();
    this.resume();
    // Subtle double electronic droplet chime: G5 -> C6
    this.playNote(783.99, 0.25, 0.06, "sine");
    setTimeout(() => {
      this.playNote(1046.50, 0.7, 0.08, "sine");
    }, 140);
  }

  playIceCreamChime() {
    this.init();
    this.resume();
    // Sweet crystalline bell
    [659.25, 830.61, 987.77].forEach((f, i) => {
      setTimeout(() => this.playNote(f, 1.4, 0.05, "sine"), i * 110);
    });
  }

  playCardFlipSound() {
    this.init();
    this.resume();
    this.playNote(440.0, 0.2, 0.03, "triangle");
  }

  playBlowCandleSound() {
    this.init();
    this.resume();
    // Gentle whoosh + triumphant celebratory romantic chord
    [523.25, 659.25, 783.99, 1046.50, 1318.51].forEach((f, i) => {
      setTimeout(() => this.playNote(f, 2.5, 0.07, "sine"), i * 100);
    });
  }
}

export const romanticAudio = new RomanticAudioManager();
