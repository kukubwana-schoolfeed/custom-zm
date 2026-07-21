'use client'
import { useRef, useLayoutEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface Props {
  width?: number
  className?: string
  center?: boolean
}

export default function PlotterLine({ width = 64, className = '', center = false }: Props) {
  const lineRef = useRef<SVGLineElement>(null)

  useLayoutEffect(() => {
    const el = lineRef.current
    if (!el) return
    const length = el.getTotalLength()

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      el.style.strokeDashoffset = '0'
      return
    }

    gsap.set(el, { strokeDasharray: length, strokeDashoffset: length })
    const tween = gsap.to(el, {
      strokeDashoffset: 0,
      duration: 0.7,
      ease: 'power2.inOut',
      scrollTrigger: { trigger: el, start: 'top 90%', toggleActions: 'play none none none' },
    })
    return () => { tween.kill() }
  }, [])

  return (
    <svg
      width={width}
      height={4}
      viewBox={`0 0 ${width} 4`}
      className={`${center ? 'mx-auto' : ''} block mb-3 ${className}`}
      aria-hidden="true"
    >
      <line ref={lineRef} x1="0" y1="2" x2={width} y2="2" stroke="var(--edge)" strokeWidth="1" />
    </svg>
  )
}
