import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import ScrollReveal from '@/components/ScrollReveal'
import { WA_LINKS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'About The Custom ZM — Lusaka Zambia Custom Studio | The Custom ZM',
  description: 'The Custom ZM is Lusaka\'s premier customisation studio. Laptop wraps, phone covers and portrait prints. Based at Chester House, 5th Floor, Room 59B, Lusaka, Zambia.',
}

const VALUES = [
  {
    title: 'PRECISION',
    desc: 'Every wrap is cut to the exact dimensions of your device. Every portrait is colour-calibrated to match your photo. We obsess over the details because details are what make the difference.',
  },
  {
    title: 'PERSONALISATION',
    desc: 'This is not mass production. Every single item we create is made specifically for one person — you. Your photo, your design, your vision. We just bring the craft.',
  },
  {
    title: 'PRIDE',
    desc: 'We are proud to be Lusaka-made. We are proud to operate at a standard that competes globally. Every piece that leaves our studio represents who we are.',
  },
]

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[70vh] flex items-end pb-20 overflow-hidden bg-[#0A0A0A]">
        <div className="absolute inset-0 z-[0]">
          <div
            className="absolute inset-0"
            style={{ background: 'radial-gradient(ellipse at center, rgba(0,170,255,0.08) 0%, transparent 70%)' }}
          />
        </div>
        <div className="relative z-[3] max-w-7xl mx-auto px-6 pt-32 w-full">
          <p className="section-label mb-4">Chester House · Lusaka, Zambia</p>
          <h1 className="headline text-white mb-6" style={{ fontSize: 'clamp(3rem, 10vw, 8rem)' }}>
            BUILT IN LUSAKA.<br /><span className="text-[#00AAFF]">BUILT FOR LUSAKA.</span>
          </h1>
          <p className="text-[#E0E0E0] text-lg max-w-2xl leading-relaxed">
            The Custom ZM was built on a simple belief: Lusaka deserves premium customisation. Not cheap stickers. Not generic prints.
            Real craft. Real precision. Real products that make people stop and ask where you got that.
          </p>
        </div>
      </section>

      {/* STORY */}
      <section className="py-24 px-6 bg-[#111111]">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div>
                <p className="section-label mb-4">Our Story</p>
                <h2 className="headline text-white mb-8" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
                  THE VISION
                </h2>
                <div className="space-y-5 text-[#888] text-sm leading-relaxed">
                  <p>
                    We started with a frustration. Premium laptops walking into meetings wrapped in the same generic look.
                    Beautiful phone photos trapped inside plain black cases. Graduation memories sitting on someone&apos;s phone,
                    never printed, never displayed.
                  </p>
                  <p>
                    So we built the studio we wished existed. The Custom ZM operates from Chester House, 5th Floor, Room 59B
                    in the heart of Lusaka — and we operate at a standard that belongs on any global stage.
                  </p>
                  <p>
                    Laptop wraps precision-cut to your exact model. Sublimation phone covers so vivid they stop traffic.
                    Portrait prints in sizes big enough to command any wall. All of it custom. All of it yours.
                  </p>
                  <p className="text-[#00AAFF] font-semibold italic text-base">
                    Precision Crafted. Personally Yours.
                  </p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                {[
                  '/assets/laptop/custom-laptop-wrap-lusaka-zambia-15.jpg',
                  '/assets/potraits/portrait-print-lusaka-zambia%20(3).jpg',
                  '/assets/cover/custom-phone-cover-lusaka-zambia%20(7).jpg',
                  '/assets/laptop/custom-laptop-wrap-lusaka-zambia-32.jpg',
                ].map((src, i) => (
                  <div key={i} className="relative aspect-square overflow-hidden neon-border">
                    <Image src={src} alt="The Custom ZM work" fill className="object-cover" />
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-24 px-6 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <p className="section-label text-center mb-4">What Drives Us</p>
            <h2 className="headline text-center text-white mb-16" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
              OUR VALUES
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {VALUES.map((value, i) => (
              <ScrollReveal key={value.title} delay={i * 0.15}>
                <div className="neon-border bg-[#141414] p-10 text-center">
                  <h3 className="headline text-[#00AAFF] mb-4" style={{ fontSize: '2.5rem' }}>{value.title}</h3>
                  <p className="text-[#888] text-sm leading-relaxed">{value.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATION */}
      <section className="py-24 px-6 bg-[#111111]">
        <div className="max-w-5xl mx-auto text-center">
          <ScrollReveal>
            <p className="section-label mb-4">Where To Find Us</p>
            <h2 className="headline text-white mb-8" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
              BASED IN LUSAKA
            </h2>
            <div className="grid sm:grid-cols-3 gap-8 mb-12">
              {[
                { label: 'LOCATION', value: 'Chester House, 5th Floor\nRoom 59B, Cairo Road\nLusaka, Zambia' },
                { label: 'CONTACT', value: '+260 574 638 038\nWhatsApp anytime' },
                { label: 'HOURS', value: 'Monday – Saturday\n8:00 AM – 6:00 PM' },
              ].map(item => (
                <div key={item.label} className="neon-border bg-[#141414] p-6">
                  <p className="section-label mb-3">{item.label}</p>
                  <p className="text-[#E0E0E0] text-sm leading-relaxed whitespace-pre-line">{item.value}</p>
                </div>
              ))}
            </div>
            <a href={WA_LINKS.general} target="_blank" rel="noopener noreferrer" className="btn-primary text-base py-5 px-12">
              Start Your Order on WhatsApp &rarr;
            </a>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
