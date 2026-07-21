'use client'
import { useEffect, useRef, useState } from 'react'

export default function CursorSpotlight() {
  const spotlightRef = useRef<HTMLDivElement>(null)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)').matches
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    setEnabled(finePointer && !reducedMotion)
  }, [])

  useEffect(() => {
    if (!enabled) return
    const el = spotlightRef.current
    if (!el) return
    const move = (e: MouseEvent) => {
      el.style.background = `radial-gradient(circle 400px at ${e.clientX}px ${e.clientY}px, rgba(157,184,207,0.06), transparent)`
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [enabled])

  if (!enabled) return null

  return (
    <div
      ref={spotlightRef}
      className="fixed inset-0 pointer-events-none z-[1] transition-none"
      aria-hidden="true"
    />
  )
}
