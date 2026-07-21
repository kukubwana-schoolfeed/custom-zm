'use client'
import { useEffect, ReactNode } from 'react'
import Lenis from 'lenis'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function LenisProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    const finePointer = window.matchMedia('(pointer: fine)').matches
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    // Touch devices and reduced-motion users get native scrolling — no Lenis, no velocity skew.
    if (!finePointer || reducedMotion) return

    const lenis = new Lenis()
    lenis.on('scroll', (e: { velocity: number }) => {
      ScrollTrigger.update()
      window.dispatchEvent(new CustomEvent('lenis-velocity', { detail: e.velocity }))
    })
    gsap.ticker.add((time) => { lenis.raf(time * 1000) })
    gsap.ticker.lagSmoothing(0)
    return () => {
      lenis.destroy()
      gsap.ticker.remove(() => {})
    }
  }, [])
  return <>{children}</>
}
