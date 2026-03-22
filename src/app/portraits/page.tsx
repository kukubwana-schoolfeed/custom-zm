import type { Metadata } from 'next'
import Image from 'next/image'
import ParticleSparks from '@/components/ParticleSparks'
import PricingDropdown from '@/components/PricingDropdown'
import ScrollReveal from '@/components/ScrollReveal'
import { WA_LINKS, PRICING, PORTRAIT_GALLERY_IMAGES } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Custom Portrait Prints Lusaka Zambia | All Sizes | The Custom ZM',
  description: 'Gallery-quality custom portrait prints in Lusaka, Zambia. Any size from 40x30cm to 100x100cm. Birthdays, weddings, graduations, memorials. The Custom ZM.',
}

const GALLERY_CURATED = PORTRAIT_GALLERY_IMAGES.slice(0, 15)

const USE_CASES = [
  { icon: '🏠', title: 'HOME DECOR', desc: 'Transform blank walls into galleries. Your favourite memories, your loved ones, your story — displayed in gallery-quality print.' },
  { icon: '💼', title: 'OFFICE SPACES', desc: 'Inspire your team. Personalise your workspace. A custom portrait makes any office feel human.' },
  { icon: '🎁', title: 'GIFTS', desc: "The most thoughtful gift you can give. A portrait print of a moment that matters — birthdays, anniversaries, new babies." },
  { icon: '🎓', title: 'GRADUATION & EVENTS', desc: 'Graduation photos deserve more than a phone screen. Print them large. Frame them proud. Make them permanent.' },
]

export default function PortraitsPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[85vh] flex items-end pb-20 overflow-hidden bg-[#0A0A0A]">
        <ParticleSparks />
        <div className="absolute inset-0 z-[0]">
          <Image
            src="/assets/potraits/portrait-print-lusaka-zambia%20(15).jpg"
            alt="Portrait print Lusaka Zambia" fill className="object-cover opacity-25" priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/50 to-transparent" />
        </div>
        <div className="relative z-[3] max-w-7xl mx-auto px-6 pt-24 w-full">
          <p className="section-label mb-4">The Custom ZM · Portrait Prints</p>
          <h1 className="headline text-white mb-6" style={{ fontSize: 'clamp(3rem, 10vw, 8rem)' }}>
            YOUR STORY.<br /><span className="text-[#00AAFF]">PERMANENTLY PRINTED.</span>
          </h1>
          <p className="text-[#E0E0E0] text-lg max-w-xl mb-8 italic">
            Birthdays. Graduations. Weddings. Memorials. Some moments deserve to live on your wall forever.
          </p>
          <a href={WA_LINKS.portrait} target="_blank" rel="noopener noreferrer" className="btn-primary">
            Order Your Portrait Print &rarr;
          </a>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-24 px-6 bg-[#111111]">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <p className="section-label text-center mb-4">Our Work</p>
            <h2 className="headline text-center text-white mb-16" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
              MOMENTS MADE PERMANENT
            </h2>
          </ScrollReveal>
          <div className="columns-2 sm:columns-3 lg:columns-4 gap-3 space-y-3">
            {GALLERY_CURATED.map((src, i) => (
              <ScrollReveal key={i} delay={(i % 4) * 0.05}>
                <div className="relative overflow-hidden neon-border group break-inside-avoid mb-3">
                  <Image src={src} alt={`Portrait print Lusaka Zambia ${i + 1}`} width={400} height={500}
                    className="object-cover w-full transition-transform duration-500 group-hover:scale-105" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* USE CASES */}
      <section className="py-24 px-6 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <p className="section-label text-center mb-4">Perfect For</p>
            <h2 className="headline text-center text-white mb-16" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
              EVERY OCCASION
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {USE_CASES.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.1}>
                <div className="neon-border bg-[#141414] p-8 text-center">
                  <span className="text-4xl block mb-4">{item.icon}</span>
                  <h3 className="headline text-[#00AAFF] text-xl mb-3">{item.title}</h3>
                  <p className="text-[#888] text-sm leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-24 px-6 bg-[#111111]">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <p className="section-label text-center mb-4">Sizes & Pricing</p>
            <h2 className="headline text-center text-white mb-4" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
              CHOOSE YOUR SIZE
            </h2>
            <p className="text-center text-[#888] text-sm mb-12">
              All prices in Zambian Kwacha (ZMW). Larger sizes available — WhatsApp us.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="border border-[rgba(0,170,255,0.2)] bg-[#111111]">
              <div className="px-6 py-5 border-b border-[rgba(0,170,255,0.1)]">
                <span className="font-display headline text-xl text-white tracking-wider">PORTRAIT PRINT SIZES & PRICING</span>
              </div>
              <div className="px-6 pb-6 pt-4 space-y-3">
                <div className="grid grid-cols-3 gap-4 pb-2 border-b border-[rgba(0,170,255,0.1)]">
                  <span className="section-label">Size</span>
                  <span className="section-label">Price</span>
                  <span className="section-label">Order</span>
                </div>
                {PRICING.portraits.map((item, i) => (
                  <div key={i} className="grid grid-cols-3 gap-4 py-1 border-b border-[rgba(255,255,255,0.03)] last:border-b-0">
                    <span className="text-[#E0E0E0] text-sm">{item.size}</span>
                    <span className="text-[#00AAFF] font-semibold">K{item.price}</span>
                    <a href={WA_LINKS.portrait} target="_blank" rel="noopener noreferrer"
                      className="text-[#00AAFF] text-xs hover:text-[#33BBFF] font-semibold transition-colors">
                      Order &rarr;
                    </a>
                  </div>
                ))}
              </div>
              <div className="px-6 py-4 bg-[#0F0F0F] border-t border-[rgba(0,170,255,0.1)]">
                <p className="text-[#888] text-sm italic">
                  Not sure which size? WhatsApp us and we&apos;ll help you choose the perfect size for your space.
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-[#0A0A0A] text-center">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <h2 className="headline text-white mb-6" style={{ fontSize: 'clamp(2.5rem, 7vw, 6rem)' }}>
              MAKE IT<br /><span className="text-[#00AAFF]">PERMANENT.</span>
            </h2>
            <p className="text-[#888] text-sm mb-8">Send us your photo. Tell us your size. We do the rest.</p>
            <a href={WA_LINKS.portrait} target="_blank" rel="noopener noreferrer" className="btn-primary text-base py-5 px-12">
              Order Your Portrait Print &rarr;
            </a>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
