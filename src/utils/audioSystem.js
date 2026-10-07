/**
 * Web Audio & Narration System for "Abandoned but not Forgotten"
 * Generates authentic atmospheric acoustics:
 * 1. Martian Wind Acoustic Synthesizer (modelled on NASA InSight pressure sensor data)
 * 2. Apollo Quindar Radio Beeps (authentic 2525 Hz Apollo capcom audio tone)
 * 3. Text-to-Speech Story Narrator for kids and classroom accessibility
 */

class SpaceAudioEngine {
  constructor() {
    this.ctx = null;
    this.windGain = null;
    this.isWindPlaying = false;
    this.isSpeaking = false;
  }

  init() {
    if (!this.ctx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioContext();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  /**
   * Generates Martian Wind: Pink noise buffer with sweeping resonant filter
   */
  startMartianWind() {
    this.init();
    if (this.isWindPlaying) return;

    const bufferSize = this.ctx.sampleRate * 2;
    const noiseBuffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
    const output = noiseBuffer.getChannelData(0);

    // Pink noise generation
    let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      b0 = 0.99886 * b0 + white * 0.0555179;
      b1 = 0.99332 * b1 + white * 0.0750759;
      b2 = 0.96900 * b2 + white * 0.1538520;
      b3 = 0.86650 * b3 + white * 0.3104856;
      b4 = 0.55000 * b4 + white * 0.5329522;
      b5 = -0.7616 * b5 - white * 0.0168980;
      output[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.11;
      b6 = white * 0.115926;
    }

    const whiteNoise = this.ctx.createBufferSource();
    whiteNoise.buffer = noiseBuffer;
    whiteNoise.loop = true;

    // Filter simulating thin Martian atmosphere (1% of Earth's density)
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(260, this.ctx.currentTime);

    // LFO for gentle wind gusts
    const lfo = this.ctx.createOscillator();
    lfo.frequency.setValueAtTime(0.2, this.ctx.currentTime); // slow gusts
    const lfoGain = this.ctx.createGain();
    lfoGain.gain.setValueAtTime(140, this.ctx.currentTime);
    lfo.connect(lfoGain);
    lfoGain.connect(filter.frequency);

    this.windGain = this.ctx.createGain();
    this.windGain.gain.setValueAtTime(0.01, this.ctx.currentTime);
    this.windGain.gain.exponentialRampToValueAtTime(0.18, this.ctx.currentTime + 2);

    whiteNoise.connect(filter);
    filter.connect(this.windGain);
    this.windGain.connect(this.ctx.destination);

    whiteNoise.start();
    lfo.start();
    this.windSource = whiteNoise;
    this.isWindPlaying = true;
  }

  stopMartianWind() {
    if (!this.isWindPlaying || !this.windGain) return;
    this.windGain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 1.2);
    setTimeout(() => {
      try {
        if (this.windSource) this.windSource.stop();
      } catch (e) {}
      this.isWindPlaying = false;
    }, 1300);
  }

  /**
   * Plays the famous Apollo Quindar Intro Tone (2525 Hz)
   */
  playQuindarTone() {
    this.init();
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(2525, this.ctx.currentTime); // official Apollo intro pitch

    gain.gain.setValueAtTime(0, this.ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.07, this.ctx.currentTime + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.25);

    osc.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start();
    osc.stop(this.ctx.currentTime + 0.26);
  }

  /**
   * Narrates story content for school children and classroom presentations
   */
  speakText(text, onEnd) {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 0.95;
    utterance.pitch = 1.05; // clear, engaging tone

    utterance.onend = () => {
      this.isSpeaking = false;
      if (onEnd) onEnd();
    };

    utterance.onerror = () => {
      this.isSpeaking = false;
      if (onEnd) onEnd();
    };

    this.isSpeaking = true;
    window.speechSynthesis.speak(utterance);
  }

  stopSpeaking() {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      this.isSpeaking = false;
    }
  }
}

export const spaceAudio = new SpaceAudioEngine();
