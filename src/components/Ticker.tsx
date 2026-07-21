'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

const TICKER_TEXT = 'CUSTOM LAPTOP WRAPS • THE CUSTOM ZM • LUSAKA ZAMBIA • PHONE COVERS • PORTRAIT PRINTS • PRECISION CRAFTED • PERSONALLY YOURS • '

const MAX_SKEW = 4

export default function Ticker() {
  const tickerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (!window.matchMedia('(pointer: fine)').matches) return

    const onVelocity = (e: Event) => {
      const velocity = (e as CustomEvent<number>).detail
      const skew = gsap.utils.clamp(-MAX_SKEW, MAX_SKEW, velocity * 0.5)
      gsap.to(tickerRef.current, { skewX: skew, duration: 0.3, ease: 'power2.out', overwrite: true })
    }

    window.addEventListener('lenis-velocity', onVelocity)
    return () => window.removeEventListener('lenis-velocity', onVelocity)
  }, [])

  return (
    <div className="w-full overflow-hidden bg-[#111111] border-y border-[rgba(157,184,207,0.15)] py-4 select-none">
      <div
        ref={tickerRef}
        className="flex whitespace-nowrap"
        style={{ animation: 'tickerLeft 30s linear infinite' }}
      >
        {[0, 1].map(i => (
          <span key={i} className="flex items-center gap-0 flex-shrink-0">
            {TICKER_TEXT.split('•').map((item, j) => (
              <span key={j} className="flex items-center">
                <span className="section-label px-4">{item.trim()}</span>
                {j < TICKER_TEXT.split('•').length - 2 && (
                  <span className="text-[var(--steel)] opacity-40 px-1">•</span>
                )}
              </span>
            ))}
          </span>
        ))}
      </div>
    </div>
  )
}
