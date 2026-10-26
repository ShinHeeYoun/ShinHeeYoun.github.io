import { useEffect, useRef } from 'react'
import { isBlankArea, type ElementLike } from '../lib/blankArea'
import { addBurst, createBurst, isAlive, opacityOf, stepParticle, type Particle } from '../lib/confetti'

const MAX_STEP = 1 / 30 // a long pause (another tab) must not throw the pieces across the screen

// Yellow confetti where the bare background of the page is clicked or tapped: the margins of a wide screen, and the
// gaps between things on a narrow one. A click on anything else works as usual and shows nothing. Readers who asked
// their device for less motion get none. The canvas covers the screen but lets every click through.
export default function ClickConfetti() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const context = canvas?.getContext('2d')
    if (!canvas || !context) return
    const ctx = context

    let particles: Particle[] = []
    let frame = 0
    let last = 0

    function resize() {
      const ratio = window.devicePixelRatio || 1
      canvas!.width = Math.round(window.innerWidth * ratio)
      canvas!.height = Math.round(window.innerHeight * ratio)
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0)
    }

    function draw() {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)
      for (const p of particles) {
        ctx.globalAlpha = opacityOf(p)
        ctx.fillStyle = p.color
        if (p.round) {
          ctx.beginPath()
          ctx.arc(p.x, p.y, p.size / 2, 0, Math.PI * 2)
          ctx.fill()
        } else {
          ctx.save()
          ctx.translate(p.x, p.y)
          ctx.rotate(p.angle)
          ctx.fillRect(-p.size / 2, -p.size / 4, p.size, p.size / 2)
          ctx.restore()
        }
      }
      ctx.globalAlpha = 1
    }

    function tick(now: number) {
      const seconds = Math.min(MAX_STEP, (now - last) / 1000)
      last = now
      particles = particles.map((p) => stepParticle(p, seconds)).filter(isAlive)
      draw()
      frame = particles.length > 0 ? requestAnimationFrame(tick) : 0
    }

    function onClick(event: MouseEvent) {
      if (event.button !== 0 || !(event.target instanceof Element)) return
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
      if (!isBlankArea(event.target as unknown as ElementLike, (element) => getComputedStyle(element as unknown as Element))) return
      particles = addBurst(particles, createBurst(event.clientX, event.clientY))
      if (frame === 0) {
        last = performance.now()
        frame = requestAnimationFrame(tick)
      }
    }

    resize()
    window.addEventListener('resize', resize)
    document.addEventListener('click', onClick)
    return () => {
      window.removeEventListener('resize', resize)
      document.removeEventListener('click', onClick)
      cancelAnimationFrame(frame)
    }
  }, [])

  return <canvas ref={canvasRef} aria-hidden="true" className="pointer-events-none fixed inset-0 z-[60] h-full w-full" />
}
