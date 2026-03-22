'use client'
import { useState } from 'react'
import { ChevronDown, ChevronRight } from 'lucide-react'
import { PHONE_BRANDS } from '@/lib/phoneModels'

export default function PhoneDropdown() {
  const [mainOpen, setMainOpen] = useState(false)
  const [openBrand, setOpenBrand] = useState<string | null>(null)

  return (
    <div className="border border-[rgba(0,170,255,0.2)] bg-[#111111]">
      <button
        onClick={() => setMainOpen(!mainOpen)}
        className="w-full flex items-center justify-between px-6 py-5 text-left"
      >
        <span className="font-display headline text-xl text-white tracking-wider">CUSTOM PHONE COVERS — K200 ALL MODELS</span>
        <ChevronDown
          size={20}
          className="text-[#00AAFF] transition-transform duration-300 flex-shrink-0"
          style={{ transform: mainOpen ? 'rotate(180deg)' : 'rotate(0)' }}
        />
      </button>

      {mainOpen && (
        <div className="border-t border-[rgba(0,170,255,0.1)]">
          {PHONE_BRANDS.map(brand => (
            <div key={brand.brand} className="border-b border-[rgba(0,170,255,0.05)] last:border-b-0">
              <button
                onClick={() => setOpenBrand(openBrand === brand.brand ? null : brand.brand)}
                className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-[#1C1C1C] transition-colors"
              >
                <span className="text-[#E0E0E0] text-sm font-semibold">{brand.brand}</span>
                <ChevronRight
                  size={16}
                  className="text-[#00AAFF] transition-transform duration-200 flex-shrink-0"
                  style={{ transform: openBrand === brand.brand ? 'rotate(90deg)' : 'rotate(0)' }}
                />
              </button>

              {openBrand === brand.brand && (
                <div className="px-6 pb-4 bg-[#0F0F0F]">
                  {brand.models.map((model, i) => (
                    <div key={i} className="py-2 border-b border-[rgba(255,255,255,0.04)] last:border-b-0 flex items-center justify-between">
                      <span className="text-[#888] text-xs">{model}</span>
                      <span className="text-[#00AAFF] text-xs font-semibold ml-4 flex-shrink-0">K200</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}

          <div className="px-6 py-5 bg-[#0F0F0F] border-t border-[rgba(0,170,255,0.1)]">
            <p className="text-[#888] text-sm italic">
              Don't see your model? WhatsApp us — if it's a smartphone we most likely cover it.
              We'll have your model ready within a week. 📲
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
