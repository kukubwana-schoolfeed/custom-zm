'use client'
import { useEffect } from 'react'
import { gsap } from 'gsap'

const MAX_PULL = 6

export default function MagneticButtons() {
  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)').matches
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (!finePointer || reducedMotion) return

    const onMove = (e: MouseEvent) => {
      document.querySelectorAll<HTMLElement>('.btn-primary').forEach(btn => {
        const rect = btn.getBoundingClientRect()
        const cx = rect.left + rect.width / 2
        const cy = rect.top + rect.height / 2
        const dist = Math.hypot(e.clientX - cx, e.clientY - cy)
        const radius = Math.max(rect.width, rect.height)

        if (dist < radius) {
          const pull = 1 - dist / radius
          const x = ((e.clientX - cx) / radius) * MAX_PULL * pull
          const y = ((e.clientY - cy) / radius) * MAX_PULL * pull
          gsap.to(btn, { x, y, duration: 0.3, ease: 'power2.out' })
        } else {
          gsap.to(btn, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1, 0.4)' })
        }
      })
    }

    window.addEventListener('mousemove', onMove)
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return null
}
