'use client'
import { useEffect, useRef } from 'react'

export default function CursorSpotlight() {
  const spotlightRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = spotlightRef.current
    if (!el) return
    const move = (e: MouseEvent) => {
      el.style.background = `radial-gradient(circle 400px at ${e.clientX}px ${e.clientY}px, rgba(0,170,255,0.06), transparent)`
    }
    window.addEventListener('mousemove', move)
    return () => window.removeEventListener('mousemove', move)
  }, [])

  return (
    <div
      ref={spotlightRef}
      className="fixed inset-0 pointer-events-none z-[1] transition-none"
      aria-hidden="true"
    />
  )
}
