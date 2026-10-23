// Small sounds for the dice, made with the browser's Web Audio instead of sound files. Nothing plays until the
// player turns the sound on, and every call is safe if the browser has no audio.

type Beep = { frequency: number; seconds: number; volume: number; type: OscillatorType; slideTo?: number }

export type Sound = {
  tick(): void // one flicker of the dice
  settle(): void // the dice stop
  yacht(): void // five of a kind
}

export function createSound(isOn: () => boolean): Sound {
  let context: AudioContext | null = null

  function beep({ frequency, seconds, volume, type, slideTo }: Beep) {
    if (!isOn()) return
    try {
      const Audio =
        window.AudioContext ?? (window as unknown as { webkitAudioContext?: typeof AudioContext }).webkitAudioContext
      if (!Audio) return
      context ??= new Audio()
      if (context.state === 'suspended') void context.resume()
      const now = context.currentTime
      const oscillator = context.createOscillator()
      const gain = context.createGain()
      oscillator.type = type
      oscillator.frequency.setValueAtTime(frequency, now)
      if (slideTo) oscillator.frequency.exponentialRampToValueAtTime(slideTo, now + seconds)
      gain.gain.setValueAtTime(volume, now)
      gain.gain.exponentialRampToValueAtTime(0.0001, now + seconds)
      oscillator.connect(gain).connect(context.destination)
      oscillator.start(now)
      oscillator.stop(now + seconds)
    } catch {
      // no audio available: stay silent
    }
  }

  return {
    tick: () => beep({ frequency: 500 + Math.random() * 400, seconds: 0.03, volume: 0.04, type: 'square' }),
    settle: () => beep({ frequency: 220, seconds: 0.18, volume: 0.12, type: 'triangle', slideTo: 90 }),
    yacht: () => {
      beep({ frequency: 660, seconds: 0.12, volume: 0.1, type: 'triangle' })
      window.setTimeout(() => beep({ frequency: 880, seconds: 0.12, volume: 0.1, type: 'triangle' }), 120)
      window.setTimeout(() => beep({ frequency: 1320, seconds: 0.25, volume: 0.1, type: 'triangle' }), 240)
    },
  }
}
