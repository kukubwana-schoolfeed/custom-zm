'use client'
import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'

interface Props {
  modelName: string
  imageSrc: string
}

export default function PhoneMockup({ modelName, imageSrc }: Props) {
  const artRef = useRef<HTMLDivElement>(null)
  const prevSrc = useRef(imageSrc)

  useEffect(() => {
    if (prevSrc.current === imageSrc) return
    prevSrc.current = imageSrc
    const el = artRef.current
    if (!el) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    gsap.fromTo(el,
      { xPercent: 12, opacity: 0 },
      { xPercent: 0, opacity: 1, duration: 0.4, ease: 'power2.out' }
    )
  }, [imageSrc])

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="relative w-[220px] h-[440px] rounded-[2.5rem] border-4 border-[rgba(157,184,207,0.35)] bg-black overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
        <div className="absolute top-3 left-1/2 -translate-x-1/2 w-16 h-4 bg-black rounded-full z-10" />
        <div ref={artRef} className="absolute inset-2 rounded-[2rem] overflow-hidden">
          <Image src={imageSrc} alt={`Custom phone cover mockup — ${modelName}`} fill className="object-cover" />
        </div>
      </div>
      <p className="section-label text-center max-w-[220px]">{modelName}</p>
    </div>
  )
}
