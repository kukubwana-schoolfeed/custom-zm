import type { Metadata } from 'next'
import ScrollReveal from '@/components/ScrollReveal'
import ContactForm from '@/components/ContactForm'
import { WA_LINKS } from '@/lib/constants'

export const metadata: Metadata = {
  title: 'Contact The Custom ZM — Start Your Order — Lusaka Zambia',
  description: 'Contact The Custom ZM in Lusaka, Zambia. Start your custom laptop wrap, phone cover or portrait print order via WhatsApp. Chester House, 5th Floor, Room 59B.',
}

export default function ContactPage() {
  return (
    <>
      {/* HERO */}
      <section className="pt-32 pb-16 px-6 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto">
          <ScrollReveal>
            <p className="section-label mb-4">Get In Touch</p>
            <h1 className="headline text-white mb-6" style={{ fontSize: 'clamp(3.5rem, 10vw, 8rem)' }}>
              START YOUR<br /><span className="text-[#00AAFF]">ORDER.</span>
            </h1>
            <p className="text-[#888] text-lg max-w-xl">
              Every custom piece starts with a conversation. WhatsApp us — tell us what you want, and we&apos;ll make it happen.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* CONTACT GRID */}
      <section className="py-16 px-6 bg-[#0A0A0A]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">

          {/* LEFT — Contact Info */}
          <ScrollReveal>
            <div className="space-y-6">
              <a
                href={WA_LINKS.general}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full text-center block text-base py-5"
              >
                Start Your Order on WhatsApp &rarr;
              </a>

              <div className="grid gap-4">
                {[
                  { label: 'PHONE', value: '+260 574 638 038', href: 'tel:+260574638038', isLink: true },
                  { label: 'WHATSAPP', value: 'wa.me/260574638038', href: WA_LINKS.general, isLink: true },
                  { label: 'LOCATION', value: 'Chester House, 5th Floor, Room 59B\nCairo Road, Lusaka, Zambia', href: null, isLink: false },
                  { label: 'HOURS', value: 'Monday – Saturday · 8AM – 6PM', href: null, isLink: false },
                ].map(item => (
                  <div key={item.label} className="neon-border bg-[#141414] p-5">
                    <p className="section-label mb-2">{item.label}</p>
                    {item.isLink && item.href ? (
                      <a href={item.href} target="_blank" rel="noopener noreferrer"
                        className="text-[#E0E0E0] text-sm hover:text-[#00AAFF] transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-[#E0E0E0] text-sm whitespace-pre-line">{item.value}</p>
                    )}
                  </div>
                ))}
              </div>

              <div className="border border-[rgba(0,170,255,0.15)] bg-[#141414] p-6">
                <p className="section-label mb-4">Quick Order Links</p>
                <div className="space-y-3">
                  {[
                    { label: 'Laptop Wrap', link: WA_LINKS.laptop },
                    { label: 'Phone Cover', link: WA_LINKS.phone },
                    { label: 'Portrait Print', link: WA_LINKS.portrait },
                  ].map(item => (
                    <a key={item.label} href={item.link} target="_blank" rel="noopener noreferrer"
                      className="flex items-center justify-between text-sm text-[#888] hover:text-[#00AAFF] transition-colors py-2 border-b border-[rgba(255,255,255,0.04)] last:border-0">
                      <span>Order {item.label}</span>
                      <span className="text-[#00AAFF]">&rarr;</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* RIGHT — Map + Form */}
          <ScrollReveal delay={0.2}>
            <div className="space-y-6">
              <div className="w-full aspect-video neon-border overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3846.2!2d28.284!3d-15.416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1940f4d8d8d8d8d8%3A0x1234567890abcdef!2sChester%20House%2C%20Cairo%20Rd%2C%20Lusaka%2C%20Zambia!5e0!3m2!1sen!2szm!4v1234567890"
                  width="100%" height="100%"
                  style={{ border: 0, filter: 'invert(0.8) hue-rotate(180deg)' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <ContactForm />
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  )
}
