import Link from 'next/link'
import Image from 'next/image'
import { WA_LINKS } from '@/lib/constants'

export default function Footer() {
  return (
    <footer className="relative bg-[#0A0A0A] border-t border-[rgba(0,170,255,0.1)] overflow-hidden pt-16 pb-8">
      {/* Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden">
        <span
          className="headline text-white whitespace-nowrap"
          style={{ fontSize: '8vw', opacity: 0.03, letterSpacing: '0.1em' }}
        >
          THE CUSTOM ZM
        </span>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Image src="/assets/logo.png" alt="The Custom ZM" width={60} height={60} className="object-contain mb-4" />
            <p className="text-[#888] text-sm leading-relaxed font-medium italic mb-2">
              Precision Crafted. Personally Yours.
            </p>
            <p className="text-[#555] text-xs leading-relaxed">
              Chester House, 5th Floor, Room 59B<br />
              Lusaka, Zambia
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="section-label mb-4">Services</h4>
            <ul className="space-y-2">
              {[['Laptop Wraps', '/laptop-wraps'], ['Phone Covers', '/phone-covers'], ['Portrait Prints', '/portraits']].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-[#888] text-sm hover:text-[#00AAFF] transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Pages */}
          <div>
            <h4 className="section-label mb-4">Pages</h4>
            <ul className="space-y-2">
              {[['Home', '/'], ['Portfolio', '/portfolio'], ['About', '/about'], ['Contact', '/contact']].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-[#888] text-sm hover:text-[#00AAFF] transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="section-label mb-4">Contact</h4>
            <ul className="space-y-2">
              <li>
                <a href="tel:+260574638038" className="text-[#888] text-sm hover:text-[#00AAFF] transition-colors">
                  +260 574 638 038
                </a>
              </li>
              <li>
                <a href={WA_LINKS.general} target="_blank" rel="noopener noreferrer"
                  className="text-[#00AAFF] text-sm font-semibold hover:text-[#33BBFF] transition-colors">
                  WhatsApp Us →
                </a>
              </li>
              <li className="text-[#555] text-xs pt-2">Mon–Sat · 8AM–6PM</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[rgba(0,170,255,0.1)] pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-[#555] text-xs">
            © 2025 The Custom ZM. All rights reserved. Lusaka, Zambia.
          </p>
          <p className="text-[#333] text-xs">Precision Crafted. Personally Yours.</p>
        </div>
      </div>
    </footer>
  )
}
