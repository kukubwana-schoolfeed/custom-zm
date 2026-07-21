# CLAUDE.md — The Custom ZM (v2: Chrome-First Retrofit)
## Read fully before touching any file. This is the project rulebook; EXECUTION-BRIEF.md is the work order.

## What this project is
Next.js 16 (App Router) + React 19 + Tailwind v4, deployed by Vercel's Git integration — every push builds automatically. Animation stack already installed: GSAP + @gsap/react + ScrollTrigger, framer-motion, Lenis, split-type, tsparticles, lucide-react. Pages: home, laptop-wraps, phone-covers, portraits, portfolio, about, contact. All ordering flows go to WhatsApp with prefilled messages — that pattern is sacred, keep it.

## GROUND TRUTH — the only permitted business facts
- Phone / WhatsApp: **+260 574 638 038**
- Location: Chester House, 5th Floor, Room 59B, Lusaka, Zambia · Mon–Sat 8AM–6PM
- Prices (as published): Laptop wraps from K100 · Phone covers K200 all models · Portraits from K180
- Tagline: "Precision Crafted. Personally Yours." · Canonical domain: https://thecustomzm.com
- Never invent prices, claims, models, clients, or filenames.

## BRAND v2 — CHROME-FIRST (derived from the logo: black + steel chrome; neon only as the precision edge)
Replace the color system in `src/app/globals.css` (`:root` AND the Tailwind `@theme` mirror) with:

```css
:root {
  --black:          #0A0A0A;
  --black-soft:     #111111;
  --card-bg:        #141414;
  --card-hover:     #1C1C1C;
  --white:          #FFFFFF;
  --grey:           #888888;

  /* chrome-first system — from the logo's steel undertone */
  --steel:          #9DB8CF;
  --steel-bright:   #CBDAE8;
  --steel-dim:      rgba(157, 184, 207, 0.14);
  --chrome-gradient: linear-gradient(180deg, #F5F8FB 0%, #C7D3DE 38%, #8296AA 50%, #E9EFF5 62%, #9FAFC2 100%);

  /* neon survives ONLY as the precision edge */
  --edge:           #00AAFF;
  --edge-glow:      rgba(0, 170, 255, 0.25);
  --edge-glow-soft: rgba(0, 170, 255, 0.08);

  --border:         rgba(157, 184, 207, 0.16);
  --border-bright:  rgba(157, 184, 207, 0.45);
}
```

Rules:
- `#00AAFF` (and 33BBFF / 0088CC) may exist ONLY inside the --edge token definitions. Everywhere else migrates: **steel** for labels, borders, icons, secondary text accents; **--edge** only for thin precision highlights — plotter lines, active nav underline, the before/after slider handle, small hover glows.
- `.headline-chrome`: the chrome gradient with `background-clip: text`, applied to every Bebas display heading (`.headline`), plus a slow moving sheen (GSAP background-position sweep) when the heading enters view.
- Buttons: `.btn-primary` → background `#EEF3F8`, color `#0A0A0A`, hover lifts 2px with `box-shadow: 0 0 30px var(--edge-glow)`. `.btn-outline` → steel border/text, hover fills steel-bright with black text.
- `.section-label` → steel. Scrollbar thumb + ::selection → steel family. `.neon-border` → steel border at rest; edge glow on hover only.

## MOTION LAW — craft-correlated, disciplined
- Every scroll animation is ScrollTrigger-gated: plays entering the viewport, pauses fully off-screen. Only `transform` and `opacity` animate.
- The motion vocabulary comes from the craft: **WrapReveal** (clip-path wipe like vinyl being applied), **PlotterLine** (a thin --edge SVG line drawing before headings, like a cutter tracing), **InkBloom** (grayscale → full colour, like sublimation ink), the before/after handle **auto-glide** on first view, magnetic primary CTAs (desktop pointer only), ticker skew from scroll velocity (clamped).
- **Lenis smooth scroll runs only on `(pointer: fine)` devices** and never under reduced motion — touch devices get native scrolling.
- Global `prefers-reduced-motion: reduce` support: CSS stops ticker/float/pulse keyframes; JS guards skip GSAP timelines, magnetic buttons, sparks, and show finished states.

## ASSETS LAW
- Structure: `public/assets/portraits/`, `public/assets/cover/`, `public/assets/laptop/` — all `.webp`, max 1600px long side. Plus `assets/logo.webp` and `assets/og-image.png` (1200×630).
- The misspelled `potraits/` folder is gone. Filename law: lowercase, hyphens, zero-padded numbers, no spaces or parentheses, ever.
- Reference rewrite rule (applies across all of src/): `potraits` → `portraits`; ` (N).jpg` → `-NN.webp` (N zero-padded to 2 digits); any remaining local-asset `.jpg` → `.webp`.
- Nine stray product .mp4 files that lived in the image folders are parked out of the project (unreferenced by any code).

## SEO & SHARE LAW
- `/blog` and `/blog/[slug]` must exist, rendered from `src/lib/blogPosts.ts` (50 posts currently orphaned), linked from the footer, with per-post metadata and `generateStaticParams`.
- `app/sitemap.ts` (all routes + every post) and `app/robots.ts` exist.
- Root layout metadata gains `metadataBase: new URL('https://thecustomzm.com')`, full `openGraph` and `twitter` (summary_large_image) blocks using `/assets/og-image.png`.
- Template leftovers in public/ (next.svg, vercel.svg, globe.svg, file.svg, window.svg) are deleted.

## DEPLOYMENT LAW
All work happens on branch **v2-chrome**. Push the branch → Vercel builds a preview deployment → the user approves the preview → only on the user's explicit "merge and ship" does the branch merge to main. Production is never edited directly. No secrets in any tracked file, no credentials in the git remote URL.
