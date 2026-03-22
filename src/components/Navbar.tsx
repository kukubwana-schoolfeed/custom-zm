'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { WA_LINKS } from '@/lib/constants'

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Laptop Wraps', href: '/laptop-wraps' },
  { label: 'Phone Covers', href: '/phone-covers' },
  { label: 'Portraits', href: '/portraits' },
  { label: 'Portfolio', href: '/portfolio' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [pathname])

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-[100] transition-all duration-300"
        style={{
          background: scrolled ? 'rgba(10,10,10,0.95)' : 'transparent',
          borderBottom: scrolled ? '1px solid rgba(0,170,255,0.3)' : '1px solid transparent',
          backdropFilter: scrolled ? 'blur(10px)' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 flex-shrink-0">
            <Image src="/assets/logo.png" alt="The Custom ZM" width={48} height={48} className="object-contain" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {NAV_LINKS.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs tracking-[0.12em] uppercase font-semibold transition-colors duration-200"
                style={{
                  color: pathname === link.href ? '#00AAFF' : '#E0E0E0',
                  borderBottom: pathname === link.href ? '1px solid #00AAFF' : '1px solid transparent',
                  paddingBottom: '2px'
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA */}
          <a
            href={WA_LINKS.general}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:block btn-primary text-[11px] py-3 px-5"
          >
            Start Your Order
          </a>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-[99] bg-[#0A0A0A] flex flex-col items-center justify-center gap-8">
          {NAV_LINKS.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-3xl font-display headline text-white hover:text-[#00AAFF] transition-colors"
              style={{ animationDelay: `${i * 0.05}s`, animation: 'fadeInUp 0.4s ease forwards' }}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={WA_LINKS.general}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary mt-4"
          >
            Start Your Order →
          </a>
        </div>
      )}
    </>
  )
}
