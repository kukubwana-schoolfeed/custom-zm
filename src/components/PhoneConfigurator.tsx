'use client'
import { useState } from 'react'
import PhoneDropdown from './PhoneDropdown'
import PhoneMockup from './PhoneMockup'
import { COVER_GALLERY_IMAGES } from '@/lib/constants'
import { PHONE_BRANDS } from '@/lib/phoneModels'

function pickCoverImage(model: string) {
  let hash = 0
  for (const c of model) hash = (hash * 31 + c.charCodeAt(0)) >>> 0
  return COVER_GALLERY_IMAGES[hash % COVER_GALLERY_IMAGES.length]
}

const DEFAULT_MODEL = PHONE_BRANDS[0].models[0]

export default function PhoneConfigurator() {
  const [selectedModel, setSelectedModel] = useState(DEFAULT_MODEL)

  return (
    <div className="grid lg:grid-cols-[auto_1fr] gap-10 items-start">
      <PhoneMockup modelName={selectedModel} imageSrc={pickCoverImage(selectedModel)} />
      <PhoneDropdown selectedModel={selectedModel} onSelectModel={setSelectedModel} />
    </div>
  )
}
