import type { Metadata } from 'next'
import Image from 'next/image'
import ParticleSparks from '@/components/ParticleSparks'
import PhoneDropdown from '@/components/PhoneDropdown'
import ScrollReveal from '@/components/ScrollReveal'
import { WA_LINKS, COVER_GALLERY_IMAGES } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Custom Phone Covers Lusaka Zambia — All iPhone, Samsung, Tecno Models | K200 | The Custom ZM',
  description: 'Custom sublimation phone covers in Lusaka, Zambia. All models — iPhone, Samsung, Tecno, Infinix, Huawei and more. K200 for all models. The Custom ZM.',
}

const GALLERY_CURATED = COVER_GALLERY_IMAGES.slice(0, 16)

export default function PhoneCoversPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[80vh] flex items-end pb-20 overflow-hidden bg-[#0A0A0A]">
        <ParticleSparks />
        <div className="absolute inset-0 z-[0]">
          <Image
            src="/assets/cover/custom-phone-cover-lusaka-zambia%20(10).jpg"
            alt="Custom phone cover Lusaka Zambia" fill className="object-cover opacity-25" priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/60 to-transparent" />
        </div>
        <div className="relative z-[3] max-w-7xl mx-auto px-6 pt-24 w-full">
          <p className="section-label mb-4">The Custom ZM · Phone Covers</p>
          <h1 className="headline text-white mb-6" style={{ fontSize: 'clamp(3.5rem, 10vw, 8rem)' }}>
            YOUR PHONE.<br /><span className="text-[#00AAFF]">YOUR IDENTITY.</span>
          </h1>
          <p className="text-[#E0E0E0] text-lg max-w-xl mb-4">
            Sublimation-printed custom covers for every major phone model in Zambia. Bold. Vivid. Precisely yours.
          </p>
          <div className="inline-flex items-center gap-3 mb-8 bg-[#141414] border border-[rgba(0,170,255,0.3)] px-6 py-3">
            <span className="text-[#00AAFF] font-display headline text-3xl">K200</span>
            <span className="text-[#888] text-sm">for all models, all designs</span>
          </div>
          <div>
            <a href={WA_LINKS.phone} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Order Your Custom Cover &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* FLOATING PHONE SHOWCASE */}
      <section className="py-24 px-6 bg-[#111111]">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <p className="section-label text-center mb-4">Bold. Vivid. Yours.</p>
            <h2 className="headline text-center text-white mb-16" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
              EVERY PHONE. EVERY STYLE.
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {GALLERY_CURATED.map((src, i) => (
              <ScrollReveal key={i} delay={(i % 4) * 0.05}>
                <div className="relative aspect-square overflow-hidden neon-border group cursor-pointer">
                  <Image src={src} alt={`Custom phone cover Lusaka Zambia ${i + 1}`} fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-[#00AAFF] font-semibold text-sm">K200</span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* PHONE MODELS DROPDOWN */}
      <section className="py-24 px-6 bg-[#0A0A0A]">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <p className="section-label text-center mb-4">Compatible Models</p>
            <h2 className="headline text-center text-white mb-4" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
              ALL MODELS COVERED
            </h2>
            <p className="text-center text-[#888] text-sm mb-12">
              Browse all supported models below. K200 flat rate — no surprises.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <PhoneDropdown />
          </ScrollReveal>
        </div>
      </section>

      {/* WHY CUSTOM */}
      <section className="py-24 px-6 bg-[#111111]">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <p className="section-label text-center mb-4">Why Custom?</p>
            <h2 className="headline text-center text-white mb-16" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
              MORE THAN PROTECTION
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: 'SUBLIMATION QUALITY', desc: 'Not a sticker. Not a print-on-demand. True sublimation means the design is fused into the cover — colours that never fade.' },
              { title: 'PRECISION FIT', desc: 'Cut and moulded for your exact phone model. All ports. All buttons. Perfect access. No generic sizing.' },
              { title: 'YOUR DESIGN', desc: 'Your photo. Your artwork. Your favourite quote. We print exactly what you send us, exactly as you see it.' },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.1}>
                <div className="neon-border bg-[#141414] p-8">
                  <h3 className="headline text-[#00AAFF] text-xl mb-4">{item.title}</h3>
                  <p className="text-[#888] text-sm leading-relaxed">{item.desc}</p>
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
            <h2 className="headline text-white mb-6" style={{ fontSize: 'clamp(2.5rem, 7vw, 6rem)' }}>
              K200.<br /><span className="text-[#00AAFF]">YOUR PHONE.</span>
            </h2>
            <p className="text-[#888] text-sm mb-8">WhatsApp us your phone model and your design. That&apos;s all it takes.</p>
            <a href={WA_LINKS.phone} target="_blank" rel="noopener noreferrer" className="btn-primary text-base py-5 px-12">
              Order Your Custom Cover &rarr;
            </a>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
