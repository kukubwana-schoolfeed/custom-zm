'use client'
import { useRef, useState, useCallback, useLayoutEffect } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import InkBloom from './InkBloom'

gsap.registerPlugin(ScrollTrigger)

interface Props {
  beforeSrc: string
  afterSrc: string
  beforeAlt?: string
  afterAlt?: string
}

export default function BeforeAfterSlider({ beforeSrc, afterSrc, beforeAlt = 'Before', afterAlt = 'After' }: Props) {
  const [position, setPosition] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)
  const dragging = useRef(false)

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const pct = Math.min(Math.max(((clientX - rect.left) / rect.width) * 100, 2), 98)
    setPosition(pct)
  }, [])

  // First-view auto-glide: 30% -> 60% -> 50%, once, then normal drag behavior.
  useLayoutEffect(() => {
    const el = containerRef.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const obj = { p: 50 }
    const st = ScrollTrigger.create({
      trigger: el,
      start: 'top 80%',
      once: true,
      onEnter: () => {
        obj.p = 30
        setPosition(30)
        gsap.timeline()
          .to(obj, { p: 60, duration: 0.9, ease: 'power2.inOut', onUpdate: () => setPosition(obj.p) })
          .to(obj, { p: 50, duration: 0.7, ease: 'power2.inOut', onUpdate: () => setPosition(obj.p) })
      },
    })
    return () => st.kill()
  }, [])

  const onMouseDown = () => { dragging.current = true }
  const onMouseUp = () => { dragging.current = false }
  const onMouseMove = (e: React.MouseEvent) => { if (dragging.current) updatePosition(e.clientX) }
  const onTouchMove = (e: React.TouchEvent) => updatePosition(e.touches[0].clientX)

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-video overflow-hidden cursor-col-resize select-none"
      onMouseDown={onMouseDown}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseUp}
      onMouseMove={onMouseMove}
      onTouchMove={onTouchMove}
    >
      {/* Before */}
      <div className="absolute inset-0">
        <InkBloom className="absolute inset-0">
          <Image src={beforeSrc} alt={beforeAlt} fill className="object-cover" />
        </InkBloom>
        <span className="absolute top-4 left-4 section-label bg-[#0A0A0A]/80 px-3 py-1">Before</span>
      </div>

      {/* After — clipped */}
      <div className="absolute inset-0" style={{ clipPath: `inset(0 0 0 ${position}%)` }}>
        <InkBloom className="absolute inset-0">
          <Image src={afterSrc} alt={afterAlt} fill className="object-cover" />
        </InkBloom>
        <span className="absolute top-4 right-4 section-label bg-[var(--steel-bright)]/90 text-black px-3 py-1">After</span>
      </div>

      {/* Handle */}
      <div
        className="absolute top-0 bottom-0 w-[2px] bg-[var(--edge)] z-10"
        style={{ left: `${position}%`, transform: 'translateX(-50%)' }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black border-2 border-[var(--edge)] flex items-center justify-center shadow-[0_0_20px_var(--edge-glow)]">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="var(--edge)">
            <path d="M5 8l-3-3v2H0v2h2v2l3-3zm6 0l3 3v-2h2V7h-2V5l-3 3z"/>
          </svg>
        </div>
      </div>
    </div>
  )
}
