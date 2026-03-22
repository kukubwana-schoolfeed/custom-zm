'use client'
import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import ScrollReveal from '@/components/ScrollReveal'
import { LAPTOP_GALLERY_IMAGES, COVER_GALLERY_IMAGES, PORTRAIT_GALLERY_IMAGES, WA_LINKS } from '@/lib/constants'

type Category = 'ALL' | 'LAPTOP WRAPS' | 'PHONE COVERS' | 'PORTRAITS'

const TABS: Category[] = ['ALL', 'LAPTOP WRAPS', 'PHONE COVERS', 'PORTRAITS']

const PORTFOLIO_ITEMS = [
  ...LAPTOP_GALLERY_IMAGES.slice(0, 12).map(src => ({ src, cat: 'LAPTOP WRAPS' as Category, alt: 'Custom laptop wrap Lusaka Zambia' })),
  ...COVER_GALLERY_IMAGES.slice(0, 12).map(src => ({ src, cat: 'PHONE COVERS' as Category, alt: 'Custom phone cover Lusaka Zambia' })),
  ...PORTRAIT_GALLERY_IMAGES.slice(0, 12).map(src => ({ src, cat: 'PORTRAITS' as Category, alt: 'Portrait print Lusaka Zambia' })),
]

export default function PortfolioPage() {
  const [active, setActive] = useState<Category>('ALL')

  const filtered = active === 'ALL' ? PORTFOLIO_ITEMS : PORTFOLIO_ITEMS.filter(item => item.cat === active)

  return (
    <>
      {/* HERO */}
      <section className="pt-32 pb-16 px-6 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto text-center">
          <p className="section-label mb-4">The Custom ZM</p>
          <h1 className="headline text-white mb-6" style={{ fontSize: 'clamp(3.5rem, 10vw, 8rem)' }}>
            OUR <span className="text-[#00AAFF]">PORTFOLIO</span>
          </h1>
          <p className="text-[#888] text-sm max-w-xl mx-auto">
            Every piece is a custom creation. Browse our work — laptop wraps, phone covers and portrait prints from Lusaka&apos;s premier custom studio.
          </p>
        </div>
      </section>

      {/* FILTER TABS */}
      <section className="px-6 pb-4 bg-[#0A0A0A] sticky top-16 z-50">
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-2 overflow-x-auto pb-2 border-b border-[rgba(0,170,255,0.1)]">
            {TABS.map(tab => (
              <button
                key={tab}
                onClick={() => setActive(tab)}
                className="flex-shrink-0 px-5 py-2 text-xs font-bold tracking-widest uppercase transition-all duration-300"
                style={{
                  color: active === tab ? '#000' : '#888',
                  background: active === tab ? '#00AAFF' : 'transparent',
                  border: `1px solid ${active === tab ? '#00AAFF' : 'rgba(0,170,255,0.2)'}`,
                }}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* GRID */}
      <section className="py-12 px-6 bg-[#0A0A0A] min-h-[60vh]">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={active}
              layout
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3"
            >
              {filtered.map((item, i) => (
                <motion.div
                  key={`${item.src}-${i}`}
                  layout
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3, delay: (i % 8) * 0.04 }}
                  className="relative aspect-square overflow-hidden neon-border group cursor-pointer"
                >
                  <Image src={item.src} alt={item.alt} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                    <span className="section-label text-[10px]">{item.cat}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-[#111111] text-center">
        <ScrollReveal>
          <h2 className="headline text-white mb-6" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
            YOUR PIECE.<br /><span className="text-[#00AAFF]">NEXT ON THE WALL.</span>
          </h2>
          <a href={WA_LINKS.general} target="_blank" rel="noopener noreferrer" className="btn-primary text-base py-5 px-12">
            Start Your Order &rarr;
          </a>
        </ScrollReveal>
      </section>
    </>
  )
}
