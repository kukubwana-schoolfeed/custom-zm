'use client'
import { useEffect, useRef } from 'react'

const TICKER_TEXT = 'CUSTOM LAPTOP WRAPS • THE CUSTOM ZM • LUSAKA ZAMBIA • PHONE COVERS • PORTRAIT PRINTS • PRECISION CRAFTED • PERSONALLY YOURS • '

export default function Ticker() {
  const tickerRef = useRef<HTMLDivElement>(null)

  return (
    <div className="w-full overflow-hidden bg-[#111111] border-y border-[rgba(0,170,255,0.15)] py-4 select-none">
      <div
        ref={tickerRef}
        className="flex whitespace-nowrap"
        style={{ animation: 'tickerLeft 30s linear infinite' }}
      >
        {[0, 1].map(i => (
          <span key={i} className="flex items-center gap-0 flex-shrink-0">
            {TICKER_TEXT.split('•').map((item, j) => (
              <span key={j} className="flex items-center">
                <span className="section-label text-[#00AAFF] px-4">{item.trim()}</span>
                {j < TICKER_TEXT.split('•').length - 2 && (
                  <span className="text-[#00AAFF] opacity-40 px-1">•</span>
                )}
              </span>
            ))}
          </span>
        ))}
      </div>
    </div>
  )
}
