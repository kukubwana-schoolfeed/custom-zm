'use client'
import { useCallback, useEffect, useState } from 'react'
import { loadSlim } from '@tsparticles/slim'
import Particles from '@tsparticles/react'
import type { Engine } from '@tsparticles/engine'

export default function ParticleSparks() {
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)').matches
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    setEnabled(finePointer && !reducedMotion)
  }, [])

  const init = useCallback(async (engine: Engine) => {
    await loadSlim(engine)
  }, [])

  if (!enabled) return null

  return (
    <Particles
      id="tsparticles"
      init={init}
      className="absolute inset-0 z-[1]"
      options={{
        background: { color: { value: 'transparent' } },
        fpsLimit: 60,
        particles: {
          color: { value: ['#9DB8CF', '#CBDAE8', '#FFFFFF'] },
          links: { enable: true, color: '#9DB8CF', opacity: 0.15, distance: 100 },
          move: { enable: true, speed: 1.2, random: true, direction: 'none' },
          number: { value: 60 },
          opacity: { value: { min: 0.3, max: 0.8 } },
          shape: { type: 'circle' },
          size: { value: { min: 1, max: 3 } },
        },
        detectRetina: true,
      }}
    />
  )
}
