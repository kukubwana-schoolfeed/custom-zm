export const WA_LINKS = {
  general: 'https://wa.me/260574638038?text=Hi%2C%20I%27d%20like%20to%20place%20an%20order%20with%20The%20Custom%20ZM',
  laptop:  'https://wa.me/260574638038?text=Hi%2C%20I%27d%20like%20to%20order%20a%20laptop%20wrap%20from%20The%20Custom%20ZM',
  phone:   'https://wa.me/260574638038?text=Hi%2C%20I%27d%20like%20to%20order%20a%20custom%20phone%20cover%20from%20The%20Custom%20ZM',
  portrait:'https://wa.me/260574638038?text=Hi%2C%20I%27d%20like%20to%20order%20a%20portrait%20print%20from%20The%20Custom%20ZM',
}

export const PRICING = {
  laptopOurDesigns: [
    { name: 'Top Cover Only', price: 100 },
    { name: 'Top + Keyboard', price: 180 },
    { name: 'Full All-Around Coverage', price: 270 },
  ],
  laptopCustom: [
    { name: 'Custom Top Only', price: 150 },
    { name: 'Custom Top + Keyboard', price: 280 },
    { name: 'Custom All-Around', price: 400 },
  ],
  phoneCover: 200,
  portraits: [
    { size: '40 × 30 cm', price: 180 },
    { size: '40 × 40 cm', price: 220 },
    { size: '50 × 35 cm', price: 260 },
    { size: '60 × 40 cm', price: 300 },
    { size: '50 × 50 cm', price: 320 },
    { size: '60 × 50 cm', price: 360 },
    { size: '70 × 50 cm', price: 400 },
    { size: '70 × 70 cm', price: 460 },
    { size: '80 × 60 cm', price: 500 },
    { size: '90 × 70 cm', price: 600 },
    { size: '100 × 70 cm', price: 650 },
    { size: '100 × 80 cm', price: 720 },
    { size: '120 × 80 cm', price: 850 },
    { size: '100 × 100 cm', price: 900 },
  ]
}

export const TESTIMONIALS = [
  {
    quote: "I walked into Chester House and walked out with a laptop that looked like it came straight from a studio. People stop me every day to ask where I got it.",
    name: "Chanda M.",
    item: "Custom Laptop Wrap"
  },
  {
    quote: "My graduation portrait is massive and stunning. The colours are insane. Everyone at the ceremony was asking about it.",
    name: "Mutale K.",
    item: "Portrait Print — 100×80cm"
  },
  {
    quote: "K200 for a custom phone cover that fits perfectly and looks premium? No brainer. Best money I've spent.",
    name: "Bwalya T.",
    item: "Custom Phone Cover"
  }
]

// Curated laptop images — clean filenames without double-dots
export const LAPTOP_GALLERY_IMAGES = [
  12, 13, 14, 15, 16, 17, 18, 20, 21, 22, 23, 25, 26, 27, 28, 30, 31, 32, 33, 34, 35, 36, 37, 38, 40, 41, 42, 43
].map(n => `/assets/laptop/custom-laptop-wrap-lusaka-zambia-${n}.jpg`)

export const LAPTOP_HERO_IMAGE = '/assets/laptop/custom-laptop-wrap-lusaka-zambia-22.jpg'
export const LAPTOP_BEFORE_IMAGE = '/assets/laptop/custom-laptop-wrap-lusaka-zambia-13.jpg'
export const LAPTOP_AFTER_IMAGE  = '/assets/laptop/custom-laptop-wrap-lusaka-zambia-30.jpg'

// Phone covers — URL-encoded filenames with parentheses
export const COVER_GALLERY_IMAGES = [
  5,6,7,8,9,10,11,12,13,14,15,16,17,18,20,21,22,23,24,25,26,27,28,30,31,32,34,36,38,40,42,44,46,48
].map(n => `/assets/cover/custom-phone-cover-lusaka-zambia%20(${n}).jpg`)

// Portraits — encoded filenames (folder name is 'potraits' — preserve as-is)
export const PORTRAIT_GALLERY_IMAGES = [
  1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35
].map(n => `/assets/potraits/portrait-print-lusaka-zambia%20(${n}).jpg`)
