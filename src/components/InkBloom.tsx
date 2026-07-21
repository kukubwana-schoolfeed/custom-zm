'use client'
import { useRef, useLayoutEffect, ReactNode } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface Props {
  children: ReactNode
  className?: string
}

export default function InkBloom({ children, className = '' }: Props) {
  const ref = useRef<HTMLDivElement>(null)

  useLayoutEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    gsap.set(el, { filter: 'grayscale(1)' })
    const tween = gsap.to(el, {
      filter: 'grayscale(0)',
      duration: 1.2,
      ease: 'power1.out',
      scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' },
    })
    return () => { tween.kill() }
  }, [])

  return <div ref={ref} className={className}>{children}</div>
}
