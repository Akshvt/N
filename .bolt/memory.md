# Project memory

## Product intent & audience

- Science-backed supplement brand (placeholder name "N° Labs") selling premium supplements
- Minimalist Shopify-style homepage; e-commerce conversion focused
- Audience: health-conscious consumers who value scientific evidence and clean design

## Brand personality & voice

- Clinical yet refined; understated confidence over hype
- Minimal, precise language; no medical claims made (compliance-aware)
- Product lines referenced with coded/numbered naming (e.g., "N°")

## Visual design & UX direction

- Minimalist aesthetic with generous whitespace; production-quality, non-cookie-cutter
- Hero: headline with single-word color highlight (lilac accent); parallax product renders (tub + sachet drifting at different scroll speeds)
- Product trio showcase: cards with Tub/Sachet variant toggle, lifestyle photo reveal on hover, Add-to-cart button with shrink-to-check micro-interaction
- Pinned/scroll-pinned sections: "Designed for your body" split layout and benefits carousel use scroll-driven content changes then release
- Mobile responsive: split sections become stacked cards; carousels/testimonials become swipeable
- Smooth scrolling via native CSS smooth-scroll (no Lenis library)
- Icons from lucide-react; Tailwind + JSX + React hooks per stack
- `@/` path alias for imports

## Decisions, constraints & rationale

- No external UI/theme/icon packages beyond what the template provides; avoid unnecessary deps
- Native smooth scrolling chosen over Lenis to keep dependencies minimal
- Placeholders used for: prices, testimonial names, certification badge, product renders
- Newsletter form: client-side thank-you only, no backend persistence
- "View lab reports" and footer links are non-functional (target pages don't exist yet)
- Build passes and type check passes; browser visual/motion unverified

## Open questions & assumptions

- Final product names, pricing, and copy are pending (currently placeholder)
- Real product photography/renders needed to replace placeholders
- Newsletter integration backend not yet defined
- Lab reports and other linked pages not yet built
- Certification badge artwork/credibility source TBD
- Visual polish and animation timing need browser-based verification