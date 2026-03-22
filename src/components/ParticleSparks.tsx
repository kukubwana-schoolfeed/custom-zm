'use client'
import { useCallback } from 'react'
import { loadSlim } from '@tsparticles/slim'
import Particles from '@tsparticles/react'
import type { Engine } from '@tsparticles/engine'

export default function ParticleSparks() {
  const init = useCallback(async (engine: Engine) => {
    await loadSlim(engine)
  }, [])

  return (
    <Particles
      id="tsparticles"
      init={init}
      className="absolute inset-0 z-[1]"
      options={{
        background: { color: { value: 'transparent' } },
        fpsLimit: 60,
        particles: {
          color: { value: ['#00AAFF', '#33BBFF', '#FFFFFF'] },
          links: { enable: true, color: '#00AAFF', opacity: 0.15, distance: 100 },
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
