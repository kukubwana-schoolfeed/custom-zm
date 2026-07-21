'use client'
import { useRef, useLayoutEffect, ReactNode } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface Props {
  children: ReactNode
  className?: string
}

export default function WrapReveal({ children, className = '' }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' },
      })
      tl.fromTo(el,
        { clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)' },
        { clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)', duration: 0.9, ease: 'power3.out' }
      ).fromTo(el,
        { scale: 1.015 },
        { scale: 1, duration: 0.35, ease: 'power2.out' },
        '-=0.15'
      )
    }, ref)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={ref} className={className} style={{ overflow: 'hidden' }}>
      {children}
    </div>
  )
}
