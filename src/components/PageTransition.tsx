'use client'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

export default function PageTransition() {
  const pathname = usePathname()
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setVisible(true)
    const t = setTimeout(() => setVisible(false), 600)
    return () => clearTimeout(t)
  }, [pathname])

  if (!visible) return null
  return (
    <div
      className="fixed top-0 left-0 right-0 h-[3px] z-[9999] bg-[#00AAFF]"
      style={{ animation: 'lineTransition 0.6s ease forwards' }}
      aria-hidden="true"
    />
  )
}
