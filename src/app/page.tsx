import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import ParticleSparks from '@/components/ParticleSparks'
import Ticker from '@/components/Ticker'
import BeforeAfterSlider from '@/components/BeforeAfterSlider'
import ScrollReveal from '@/components/ScrollReveal'
import { WA_LINKS, TESTIMONIALS, LAPTOP_HERO_IMAGE, LAPTOP_BEFORE_IMAGE, LAPTOP_AFTER_IMAGE } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'The Custom ZM — Custom Laptop Wraps, Phone Covers & Portraits Lusaka Zambia',
  description: "Lusaka's premier custom studio. Laptop wraps, sublimation phone covers and portrait prints. Precision crafted, personally yours.",
}

const MARQUEE = [
  '/assets/laptop/custom-laptop-wrap-lusaka-zambia-12.jpg',
  '/assets/cover/custom-phone-cover-lusaka-zambia%20(10).jpg',
  '/assets/potraits/portrait-print-lusaka-zambia%20(5).jpg',
  '/assets/laptop/custom-laptop-wrap-lusaka-zambia-20.jpg',
  '/assets/cover/custom-phone-cover-lusaka-zambia%20(15).jpg',
  '/assets/potraits/portrait-print-lusaka-zambia%20(12).jpg',
  '/assets/laptop/custom-laptop-wrap-lusaka-zambia-25.jpg',
  '/assets/cover/custom-phone-cover-lusaka-zambia%20(22).jpg',
  '/assets/potraits/portrait-print-lusaka-zambia%20(20).jpg',
  '/assets/laptop/custom-laptop-wrap-lusaka-zambia-35.jpg',
]

const SERVICE_CARDS = [
  {
    title: 'LAPTOP WRAPS',
    sub: 'Your setup. Your identity.',
    desc: 'Premium vinyl wraps precision-cut for your exact laptop model. Our designs or yours.',
    cta: 'Wrap Your Laptop',
    waLink: WA_LINKS.laptop,
    img: '/assets/laptop/custom-laptop-wrap-lusaka-zambia-22.jpg',
    from: 'From K100',
  },
  {
    title: 'PHONE COVERS',
    sub: 'Your phone. Your identity.',
    desc: 'Sublimation-printed custom covers for all major phone models. Bold. Vivid. Yours.',
    cta: 'Cover Your Phone',
    waLink: WA_LINKS.phone,
    img: '/assets/cover/custom-phone-cover-lusaka-zambia%20(12).jpg',
    from: 'K200 All Models',
  },
  {
    title: 'PORTRAITS',
    sub: 'Your memories. Permanently.',
    desc: 'Gallery-quality portrait prints in any size. Birthdays, weddings, graduations, memorials.',
    cta: 'Order A Print',
    waLink: WA_LINKS.portrait,
    img: '/assets/potraits/portrait-print-lusaka-zambia%20(8).jpg',
    from: 'From K180',
  },
]

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0A0A0A]">
        <ParticleSparks />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-[2]">
          <Image
            src="/assets/logo.png" alt="" width={900} height={900}
            className="object-contain w-[80vw] max-w-[900px]"
            style={{ animation: 'neonPulse 3s ease-in-out infinite' }}
            priority
          />
        </div>
        <div className="relative z-[3] max-w-7xl mx-auto px-6 pt-20 w-full grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          <div>
            <p className="section-label mb-4">Lusaka, Zambia</p>
            <h1 className="headline text-white mb-6" style={{ fontSize: 'clamp(4rem, 12vw, 9rem)' }}>
              THE<br />CUSTOM<br />ZM
            </h1>
            <p className="text-[#E0E0E0] text-lg font-medium mb-10">
              PRECISION CRAFTED.{' '}
              <em className="text-[#00AAFF] not-italic">PERSONALLY YOURS.</em>
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href={WA_LINKS.general} target="_blank" rel="noopener noreferrer" className="btn-primary">
                Start Your Order
              </a>
              <Link href="/portfolio" className="btn-outline">
                View Our Work
              </Link>
            </div>
          </div>
          <div className="hidden lg:flex items-center justify-center">
            <div
              className="relative w-full max-w-md aspect-video neon-border overflow-hidden"
              style={{ animation: 'floatUp 5s ease-in-out infinite', filter: 'drop-shadow(0 20px 60px rgba(0,170,255,0.3))' }}
            >
              <Image src={LAPTOP_HERO_IMAGE} alt="Custom laptop wrap Lusaka Zambia" fill className="object-cover" priority />
            </div>
          </div>
        </div>
      </section>

      <Ticker />

      {/* SERVICE CARDS */}
      <section className="py-24 px-6 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <p className="section-label text-center mb-4">What We Do</p>
            <h2 className="headline text-center text-white mb-16" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
              THREE WAYS TO STAND OUT
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SERVICE_CARDS.map((card, i) => (
              <ScrollReveal key={card.title} delay={i * 0.1}>
                <div className="group neon-border bg-[#141414] overflow-hidden transition-all duration-300 hover:-translate-y-2">
                  <div className="relative aspect-video overflow-hidden">
                    <Image src={card.img} alt={card.title} fill className="object-cover transition-transform duration-500 group-hover:scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent" />
                    <span className="absolute top-4 right-4 text-xs font-semibold text-[#00AAFF] bg-[#0A0A0A]/80 px-3 py-1 tracking-widest uppercase">
                      {card.from}
                    </span>
                  </div>
                  <div className="p-6">
                    <h3 className="headline text-white text-2xl mb-1">{card.title}</h3>
                    <p className="text-[#00AAFF] text-sm font-semibold mb-3">{card.sub}</p>
                    <p className="text-[#888] text-sm leading-relaxed mb-6">{card.desc}</p>
                    <a href={card.waLink} target="_blank" rel="noopener noreferrer"
                      className="btn-primary text-xs py-3 w-full text-center block">
                      {card.cta} &rarr;
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* BEFORE / AFTER */}
      <section className="py-24 px-6 bg-[#111111]">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <p className="section-label text-center mb-4">The Transformation</p>
            <h2 className="headline text-center text-white mb-12" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
              SEE THE DIFFERENCE
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <BeforeAfterSlider
              beforeSrc={LAPTOP_BEFORE_IMAGE}
              afterSrc={LAPTOP_AFTER_IMAGE}
              beforeAlt="Laptop before custom wrap"
              afterAlt="Custom laptop wrap Lusaka Zambia"
            />
          </ScrollReveal>
          <p className="text-center text-[#888] text-sm mt-6">Drag the handle to reveal the transformation</p>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="py-20 bg-[#0A0A0A] overflow-hidden">
        <ScrollReveal>
          <p className="section-label text-center mb-4">Our Work</p>
          <h2 className="headline text-center text-white mb-12" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
            OUR WORK SPEAKS
          </h2>
        </ScrollReveal>
        <div className="flex gap-4 px-4" style={{ animation: 'tickerLeft 25s linear infinite' }}>
          {[...MARQUEE, ...MARQUEE].map((src, i) => (
            <div key={i} className="flex-shrink-0 relative w-56 h-40 overflow-hidden neon-border">
              <Image src={src} alt="The Custom ZM portfolio Lusaka" fill className="object-cover" />
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 px-6 bg-[#111111]">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <p className="section-label text-center mb-4">Client Stories</p>
            <h2 className="headline text-center text-white mb-16" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
              WHAT LUSAKA SAYS
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="neon-border bg-[#141414] p-8">
                  <p className="text-[#E0E0E0] text-sm leading-relaxed mb-6 italic">&ldquo;{t.quote}&rdquo;</p>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-[#00AAFF] text-xs tracking-widest uppercase mt-1">{t.item}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-[#0A0A0A] text-center">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <h2 className="headline text-white mb-8" style={{ fontSize: 'clamp(3rem, 8vw, 7rem)' }}>
              READY TO<br /><span className="text-[#00AAFF]">STAND OUT?</span>
            </h2>
            <a href={WA_LINKS.general} target="_blank" rel="noopener noreferrer"
              className="btn-primary text-base py-5 px-12">
              Start Your Order on WhatsApp &rarr;
            </a>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
