'use client'

import { WA_LINKS } from '@/lib/constants'

export default function ContactForm() {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const name = (form.elements.namedItem('name') as HTMLInputElement).value
    const service = (form.elements.namedItem('service') as HTMLSelectElement).value
    const msg = (form.elements.namedItem('message') as HTMLTextAreaElement).value
    const text = encodeURIComponent(`Hi, I'm ${name}. I'd like to order: ${service}. ${msg}`)
    window.open(`https://wa.me/260574638038?text=${text}`, '_blank')
  }

  return (
    <div className="neon-border bg-[#141414] p-6">
      <p className="section-label mb-4">Quick Order Message</p>
      <p className="text-[#888] text-xs mb-6">Fill this out and we will open WhatsApp with your details pre-filled.</p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="section-label block mb-2">Your Name</label>
          <input name="name" required placeholder="Your name"
            className="w-full bg-[#0A0A0A] border border-[rgba(0,170,255,0.2)] text-white px-4 py-3 text-sm focus:outline-none focus:border-[#00AAFF] transition-colors placeholder-[#444]" />
        </div>
        <div>
          <label className="section-label block mb-2">Service</label>
          <select name="service" className="w-full bg-[#0A0A0A] border border-[rgba(0,170,255,0.2)] text-white px-4 py-3 text-sm focus:outline-none focus:border-[#00AAFF] transition-colors">
            <option value="a custom laptop wrap">Laptop Wrap</option>
            <option value="a custom phone cover">Phone Cover</option>
            <option value="a portrait print">Portrait Print</option>
          </select>
        </div>
        <div>
          <label className="section-label block mb-2">Details</label>
          <textarea name="message" rows={4} placeholder="Your laptop model / phone model / portrait size..."
            className="w-full bg-[#0A0A0A] border border-[rgba(0,170,255,0.2)] text-white px-4 py-3 text-sm focus:outline-none focus:border-[#00AAFF] transition-colors resize-none placeholder-[#444]" />
        </div>
        <button type="submit" className="btn-primary w-full text-center">
          Send via WhatsApp &rarr;
        </button>
      </form>
    </div>
  )
}
