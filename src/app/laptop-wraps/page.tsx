import type { Metadata } from 'next'
import Image from 'next/image'
import ParticleSparks from '@/components/ParticleSparks'
import BeforeAfterSlider from '@/components/BeforeAfterSlider'
import PricingDropdown from '@/components/PricingDropdown'
import ScrollReveal from '@/components/ScrollReveal'
import { WA_LINKS, PRICING, LAPTOP_GALLERY_IMAGES, LAPTOP_BEFORE_IMAGE, LAPTOP_AFTER_IMAGE } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Custom Laptop Wraps Lusaka Zambia | Starting from K100 | The Custom ZM',
  description: 'Premium custom laptop wraps in Lusaka, Zambia. Precision-cut vinyl wraps for all laptop models. Our designs from K100 or custom from K150. The Custom ZM.',
}

const HERO_IMAGES = [
  '/assets/laptop/custom-laptop-wrap-lusaka-zambia-22.jpg',
  '/assets/laptop/custom-laptop-wrap-lusaka-zambia-25.jpg',
  '/assets/laptop/custom-laptop-wrap-lusaka-zambia-30.jpg',
]

const HOW_IT_WORKS = [
  { step: '01', title: 'Choose Your Design', desc: 'Pick from our catalog of premium designs, or send us your own artwork, photo, or pattern. We make it fit perfectly.' },
  { step: '02', title: 'We Print & Cut Precisely', desc: 'Your design is printed on premium vinyl and precision-cut to match your exact laptop model. Zero guesswork.' },
  { step: '03', title: 'You Wrap & Stand Out', desc: 'Installation takes minutes. Air-bubble free. Repositionable. Walk into any room differently.' },
]

const GALLERY_CURATED = LAPTOP_GALLERY_IMAGES.slice(0, 18)

export default function LaptopWrapsPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-end pb-20 overflow-hidden bg-[#0A0A0A]">
        <ParticleSparks />
        <div className="absolute inset-0 z-[0]">
          <Image src={HERO_IMAGES[0]} alt="Custom laptop wrap Lusaka Zambia" fill className="object-cover opacity-30" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/60 to-transparent" />
        </div>
        <div className="relative z-[3] max-w-7xl mx-auto px-6 pt-24">
          <p className="section-label mb-4">The Custom ZM · Laptop Wraps</p>
          <h1 className="headline text-white mb-6" style={{ fontSize: 'clamp(3.5rem, 10vw, 8rem)' }}>
            YOUR LAPTOP.<br /><span className="text-[#00AAFF]">YOUR RULES.</span>
          </h1>
          <p className="text-[#E0E0E0] text-lg max-w-xl mb-8">
            Premium vinyl wraps precision-cut for your exact laptop model. Every detail matters. Every millimetre counts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href={WA_LINKS.laptop} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Start Your Wrap Order &rarr;
            </a>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-24 px-6 bg-[#111111]">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <p className="section-label text-center mb-4">The Process</p>
            <h2 className="headline text-center text-white mb-16" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
              HOW IT WORKS
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {HOW_IT_WORKS.map((step, i) => (
              <ScrollReveal key={step.step} delay={i * 0.15}>
                <div className="relative p-8 bg-[#141414] border border-[rgba(0,170,255,0.1)] hover:border-[rgba(0,170,255,0.4)] transition-all duration-300">
                  <span
                    className="headline text-[#00AAFF] block mb-4"
                    style={{ fontSize: '4rem', opacity: 0.3 }}
                  >
                    {step.step}
                  </span>
                  <h3 className="headline text-white text-2xl mb-3">{step.title}</h3>
                  <p className="text-[#888] text-sm leading-relaxed">{step.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="py-24 px-6 bg-[#0A0A0A]">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <p className="section-label text-center mb-4">Transparent Pricing</p>
            <h2 className="headline text-center text-white mb-4" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
              PICK YOUR PACKAGE
            </h2>
            <p className="text-center text-[#888] text-sm mb-12">All prices in Zambian Kwacha (ZMW). WhatsApp us to confirm your laptop model.</p>
          </ScrollReveal>
          <div className="space-y-4">
            <ScrollReveal delay={0.1}>
              <PricingDropdown
                title="OUR DESIGNS"
                items={PRICING.laptopOurDesigns}
                defaultOpen={true}
                linkHref={WA_LINKS.laptop}
                linkLabel="Order Our Design Wrap"
              />
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <PricingDropdown
                title="CUSTOM IMAGES (Your Photo / Artwork)"
                items={PRICING.laptopCustom}
                linkHref={WA_LINKS.laptop}
                linkLabel="Order Custom Design Wrap"
              />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* BEFORE / AFTER */}
      <section className="py-24 px-6 bg-[#111111]">
        <div className="max-w-5xl mx-auto">
          <ScrollReveal>
            <p className="section-label text-center mb-4">The Transformation</p>
            <h2 className="headline text-center text-white mb-12" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
              BEFORE &amp; AFTER
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <BeforeAfterSlider
              beforeSrc={LAPTOP_BEFORE_IMAGE}
              afterSrc={LAPTOP_AFTER_IMAGE}
              beforeAlt="Plain laptop"
              afterAlt="Custom wrapped laptop Lusaka Zambia"
            />
          </ScrollReveal>
        </div>
      </section>

      {/* GALLERY */}
      <section className="py-24 px-6 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <p className="section-label text-center mb-4">Our Work</p>
            <h2 className="headline text-center text-white mb-12" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
              LAPTOP WRAP GALLERY
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {GALLERY_CURATED.map((src, i) => (
              <ScrollReveal key={i} delay={(i % 4) * 0.05}>
                <div className="relative aspect-video overflow-hidden neon-border group">
                  <Image src={src} alt={`Custom laptop wrap Lusaka Zambia ${i + 1}`} fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-[#111111] text-center">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <h2 className="headline text-white mb-6" style={{ fontSize: 'clamp(2.5rem, 7vw, 6rem)' }}>
              YOUR SETUP.<br /><span className="text-[#00AAFF]">ELEVATED.</span>
            </h2>
            <p className="text-[#888] text-sm mb-8">WhatsApp us your laptop model and let&apos;s get started.</p>
            <a href={WA_LINKS.laptop} target="_blank" rel="noopener noreferrer" className="btn-primary text-base py-5 px-12">
              Start Your Laptop Wrap Order &rarr;
            </a>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
