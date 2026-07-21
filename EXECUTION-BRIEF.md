# EXECUTION BRIEF — The Custom ZM v2 (chrome brand · craft motion · blog live · share cards)
## How to run

Phase by phase, in order. After each phase print `DONE: Phase N — summary`. If the user said "run all", keep going without stopping. Resume at the first incomplete phase after any interruption. CLAUDE.md is the rulebook; quoted copy is final. This is a Next.js project: **all work on branch `v2-chrome`, never on main.**

## Phase 0 — Preflight
1. Read CLAUDE.md fully. Confirm you're in the repo root (package.json present).
2. `node -v` — note whether Node exists. If yes, QA will include a local build; if no, QA relies on the Vercel preview build.
3. Verify the new assets are in place: `public/assets/portraits/` (71 .webp), `public/assets/cover/` (50), `public/assets/laptop/` (66), plus `assets/logo.webp` and `assets/og-image.png` — and that the old `potraits/` folder is gone. Missing → STOP and say so.
4. `git checkout -b v2-chrome`, then commit the asset swap: `git add -A && git commit -m "assets: optimized webp set, clean filenames"`. Do not push yet.

## Phase 1 — Reference migration
1. Apply the rewrite rule across all of `src/` (pages, components, `src/lib/constants.ts`): `potraits` → `portraits`; ` (N).jpg` → `-NN.webp` with N zero-padded to 2 digits; any remaining local `/assets/...jpg` → `.webp`; `/assets/logo.png` → `/assets/logo.webp`.
2. Verify: write a quick script that extracts every `/assets/...` path referenced in `src/` and checks the file exists in `public/`. Fix every miss.
3. Greps must return zero: `potraits` · `(1).jpg`-style patterns · `logo.png`.

## Phase 2 — Chrome-first brand shift
1. Replace the `:root` block and the Tailwind `@theme` colors in `src/app/globals.css` with the CLAUDE.md token system (steel / chrome-gradient / edge; the old --blue family is removed).
2. Migrate every usage of the old blues (`#00AAFF`, `#33BBFF`, `#0088CC`, `--blue*`, `rgba(0,170,255,…)`) — steel for labels/borders/icons/secondary accents; `--edge` only for thin precision highlights (active nav underline, slider handle, plotter lines, small hover glows). After this, `#00AAFF` appears only inside the --edge token definitions.
3. Add `.headline-chrome` (chrome gradient, background-clip text) and apply it to all Bebas display headings site-wide; add a slow sheen sweep (GSAP, background-position) that runs once when each heading enters view.
4. Update `.btn-primary` / `.btn-outline` / `.section-label` / scrollbar / ::selection / `.neon-border` per CLAUDE.md. The `neonPulse` keyframe reduces to a subtle steel glow or is retired where it looks arcade-like.

## Phase 3 — Craft motion components
New client components in `src/components/`, all ScrollTrigger-gated (play in view, pause off-screen), all skipped under reduced motion:
1. **WrapReveal.tsx** — wraps an image/card; reveals with a diagonal clip-path wipe plus a tiny settle, like vinyl being applied. Use on the three home service cards, product-page gallery images, and about-page images.
2. **PlotterLine.tsx** — a thin `--edge` SVG line (1px) that draws itself (stroke-dashoffset) beneath section labels before the heading animates in.
3. **InkBloom.tsx** — image starts `grayscale(1)` and blooms to full colour entering the viewport. Apply to the portfolio grid and the before/after images.
4. **BeforeAfterSlider** — extend: on first entering view, the handle auto-glides 30% → 60% → 50% once (1.6s, eased), then behaves exactly as now. Handle uses `--edge`.
5. Magnetic hover (max 6px translate toward cursor, spring back) on `.btn-primary` instances only, `matchMedia('(pointer: fine)')` only.
6. Ticker: skew proportional to Lenis scroll velocity, clamped to ±4deg, none on touch.

## Phase 4 — Phone-cover configurator
On phone-covers: selecting a model in the existing PhoneDropdown updates a phone mockup — the cover art slide/flip-swaps (≈400ms) and the model name updates, using only data already in `src/lib/phoneModels.ts` and existing cover images. If the data has no per-model frames, use one tasteful generic frame with swapping art + model label. Invent no models, no prices.

## Phase 5 — Blog resurrection
1. Inspect the export shape of `src/lib/blogPosts.ts`, then build `src/app/blog/page.tsx` (listing: chrome headline, cards with title/excerpt/category/date as available) and `src/app/blog/[slug]/page.tsx` (clean readable article layout, ending with a CTA to the relevant product page + WhatsApp). Use `generateStaticParams` and per-post `generateMetadata`.
2. Footer gains a Blog link under Pages; add to desktop nav only if it fits without crowding.
3. Create `src/app/sitemap.ts` (all routes + all posts) and `src/app/robots.ts`.

## Phase 6 — Share cards & cleanup
1. Root layout metadata: add `metadataBase: new URL('https://thecustomzm.com')`, `openGraph` (title, description, url, siteName, images: ['/assets/og-image.png'] with 1200×630) and `twitter` (card: 'summary_large_image', same image).
2. Delete `public/next.svg`, `vercel.svg`, `globe.svg`, `file.svg`, `window.svg`.

## Phase 7 — Motion discipline
1. LenisProvider: instantiate Lenis only when `(pointer: fine)` matches AND reduced motion is not requested; otherwise plain native scroll (and no velocity skew).
2. Global `prefers-reduced-motion: reduce` CSS: ticker static, float/pulse animations off, images in final (full-colour) state; JS guards in every new component; ParticleSparks and CursorSpotlight render nothing on touch or reduced motion.

## Phase 8 — QA, preview, stop
1. If Node exists: `npm install && npm run build` must pass — fix every error and warning that blocks the build.
2. Greps: `potraits` = 0 · old ` (N).jpg` patterns = 0 · `#00AAFF` only inside --edge token definitions · `next.svg` = 0. Every internal link and asset path resolves.
3. Commit: `git add -A && git commit -m "v2: chrome brand, craft motion, phone configurator, blog live, share cards"` then `git push -u origin v2-chrome`.
4. Report what changed, then STOP. Tell the user: Vercel is now building a **preview** of branch v2-chrome — open the Vercel dashboard → custom-zm project → the v2-chrome deployment → Visit, and review it on desktop and phone. **Main is untouched.**
5. Only on the user's exact command `merge and ship`: `git checkout main && git merge v2-chrome && git push`. Production updates itself.
