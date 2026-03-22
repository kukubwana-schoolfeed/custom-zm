'use client'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

interface PricingItem {
  name: string
  price: number
}

interface Props {
  title: string
  items: PricingItem[]
  defaultOpen?: boolean
  linkHref?: string
  linkLabel?: string
}

export default function PricingDropdown({ title, items, defaultOpen = false, linkHref, linkLabel }: Props) {
  const [open, setOpen] = useState(defaultOpen)

  return (
    <div className="border border-[rgba(0,170,255,0.2)] bg-[#111111] overflow-hidden transition-all duration-300 hover:border-[rgba(0,170,255,0.4)]">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between px-6 py-5 text-left"
      >
        <span className="font-display headline text-xl text-white tracking-wider">{title}</span>
        <ChevronDown
          size={20}
          className="text-[#00AAFF] transition-transform duration-300 flex-shrink-0"
          style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}
        />
      </button>

      {open && (
        <div className="px-6 pb-6">
          <div className="border-t border-[rgba(0,170,255,0.1)] pt-4 space-y-3">
            {items.map((item, i) => (
              <div key={i} className="flex items-center justify-between">
                <span className="text-[#E0E0E0] text-sm">{item.name}</span>
                <span className="text-[#00AAFF] font-semibold text-base ml-4 flex-shrink-0">K{item.price}</span>
              </div>
            ))}
          </div>
          {linkHref && linkLabel && (
            <a href={linkHref} target="_blank" rel="noopener noreferrer"
              className="btn-primary mt-6 w-full text-center block">
              {linkLabel}
            </a>
          )}
        </div>
      )}
    </div>
  )
}
