import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import LenisProvider from '@/components/LenisProvider'
import CursorSpotlight from '@/components/CursorSpotlight'
import PageTransition from '@/components/PageTransition'
import MagneticButtons from '@/components/MagneticButtons'

const SITE_TITLE = 'The Custom ZM — Custom Laptop Wraps, Phone Covers & Portraits Lusaka Zambia'
const SITE_DESCRIPTION = "The Custom ZM — Lusaka's premier custom studio. Laptop wraps, sublimation phone covers and portrait prints. Precision crafted, personally yours. Chester House, Lusaka, Zambia."

export const metadata: Metadata = {
  metadataBase: new URL('https://thecustomzm.com'),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
  keywords: 'custom laptop wrap Lusaka Zambia, custom phone cover Lusaka, portrait prints Zambia, The Custom ZM',
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: 'https://thecustomzm.com',
    siteName: 'The Custom ZM',
    images: ['/assets/og-image.png'],
    locale: 'en_ZM',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ['/assets/og-image.png'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Montserrat:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <style>{`
          :root {
            --font-bebas: 'Bebas Neue', cursive;
            --font-montserrat: 'Montserrat', sans-serif;
          }
          .headline, .font-display { font-family: 'Bebas Neue', cursive !important; }
          body { font-family: 'Montserrat', sans-serif; }
        `}</style>
      </head>
      <body style={{ background: '#0A0A0A', color: '#FFFFFF', overflowX: 'hidden' }}>
        <LenisProvider>
          <PageTransition />
          <CursorSpotlight />
          <MagneticButtons />
          <Navbar />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
        </LenisProvider>
      </body>
    </html>
  )
}
