# RD Developers — Website Build Plan

**Client:** RD Developers, Ahmedabad  
**Scope:** Single umbrella website covering Hotel + Restaurant and two Farm/Resort properties  
**Stack:** Next.js (App Router) → Cloudflare Workers + Sanity CMS

---

## Properties

| Property | Type |
|---|---|
| RD's Hotel | Hotel + Restaurant (50+ 3-star rooms) |
| RDS Farm | Resort + Party Plot |
| RDS Farm 2 | Resort + Party Plot (adjacent to RDS Farm) |

**Rules:** No prices displayed anywhere. All bookings via inquiry (WhatsApp + contact form).

---

## Tech Stack

| Layer | Tool |
|---|---|
| Framework | Next.js 15 (App Router) |
| CMS | Sanity.io (free tier) |
| Image CDN | Sanity CDN (`cdn.sanity.io`) |
| Deployment | Cloudflare Workers via `@opennextjs/cloudflare` |
| Cache (ISR) | Cloudflare Workers KV |
| Static Assets | Cloudflare R2 |
| Domain | Cloudflare Registrar |

---

## Site Structure

```
rdsvenues.com/
├── /                     → Homepage (hero, 3 property cards, highlights, about us section, contact section + Google Maps)
├── /hotel                → Hotel landing (rooms, restaurant, amenities, about section, contact + Google Maps)
├── /hotel/gallery        → Hotel photo gallery
├── /rds-farm             → RDS Farm landing (resort, party plot, capacity, about section, contact + Google Maps)
├── /rds-farm/gallery     → RDS Farm gallery
├── /rds-farm-2           → RDS Farm 2 landing (about section, contact + Google Maps)
├── /rds-farm-2/gallery   → RDS Farm 2 gallery
├── /blog                 → SEO blog (managed via Sanity)
├── /blog/[slug]          → Individual blog post
├── /offers               → Current offers/packages (no prices, CTA to inquire)
└── /gallery              → Combined gallery across all properties
```

> **Note:** `/about` and `/contact` are removed as standalone pages. About Us and Contact (with Google Maps) are sections embedded directly on the homepage and each property page. All content — including the Google Maps embed URL — is managed per-property from Sanity.

---

## UI Theme & Design System

> Inspired by: Aman, Six Senses, 1 Hotels, Auberge Resorts — editorial, minimal, nature-connected hospitality brands.

### Design Philosophy
- **Visual-first, copy-second.** Photography does the selling. Text is sparse, purposeful.
- **Warmth over sterility.** Earthy, organic tones — not stark whites or cold grays.
- **Restrained luxury.** Whitespace signals exclusivity. Never crowded, never loud.
- **Mobile-first always.** 70%+ of hospitality traffic is mobile.

---

### Color Palette

| Role | Color | Hex |
|---|---|---|
| Background (primary) | Warm cream | `#F5EFE4` |
| Background (section alt) | Soft linen | `#EDE5D8` |
| Surface (cards, modals) | Off-white | `#FAF7F2` |
| Text (primary) | Deep charcoal | `#1C1A17` |
| Text (secondary) | Warm taupe | `#7A6F62` |
| Accent (primary) | Deep forest green | `#2D5F4F` |
| Accent (secondary) | Warm gold | `#B8976A` |
| Border / Divider | Muted sand | `#D9CDBF` |
| CTA Button | Forest green | `#2D5F4F` |
| CTA Button Text | Cream | `#F5EFE4` |

> Never use pure `#FFFFFF` or `#000000`. All tones are warm and grounded.

---

### Typography

| Role | Font | Weight | Notes |
|---|---|---|---|
| Display / Hero headline | Playfair Display | 400–500 | Serif, editorial feel |
| Section headings | Playfair Display | 600 | Slightly bolder |
| Body text | Inter | 400 | Clean, readable |
| Subheadings / Labels | Inter | 500–600 | Spaced letter tracking |
| Nav links | Inter | 400 | Uppercase, 0.1em tracking |
| CTA / Buttons | Inter | 600 | Uppercase, tight tracking |

**Font sizing (fluid, clamp-based):**
- Hero headline: `clamp(2.5rem, 6vw, 5rem)`
- Section heading: `clamp(1.75rem, 3.5vw, 3rem)`
- Body: `clamp(0.95rem, 1.5vw, 1.125rem)`
- Caption / label: `0.8rem`, uppercase, 0.12em tracking

Load via `next/font/google` — no layout shift, no external requests.

---

### Layout & Spacing

- **Full-bleed images everywhere** — no borders, no rounded corners on hero images
- **Generous whitespace** — section padding: `clamp(4rem, 10vw, 8rem)` top/bottom
- **Asymmetric grids** — avoid symmetric centering; use 2/3 + 1/3 or 3/5 + 2/5 splits for text + image sections
- **Max content width:** `1280px`, centered with `auto` margins
- **Mobile:** single column, full-bleed images, stacked sections

---

### Navigation

- **Transparent sticky header** on all pages — overlays the hero with no background
- On scroll past hero: header transitions to solid cream (`#F5EFE4`) with a soft shadow
- Logo left, nav links center (desktop), WhatsApp CTA button right
- Mobile: hamburger icon → full-screen slide-in drawer from right
- Nav links: uppercase Inter, 0.1em tracking, hover underline with `transition: 0.3s ease`
- Active page link: gold accent underline (`#B8976A`)

---

### Hero Section

- **100vh full-screen** image (Sanity CDN) with a subtle dark gradient overlay at bottom (for text legibility)
- Headline centered, Playfair Display, cream color, large fluid size
- Optional short subtext below in Inter, lighter weight
- Scroll cue: animated downward chevron, fades in after 1.5s, bounces gently with CSS `@keyframes`
- No heavy CTA on hero — let the image breathe (Aman-style)

---

### Animations & Interactions

| Element | Animation |
|---|---|
| Page sections on scroll | Fade-in + subtle translateY (0 → 20px → 0), Framer Motion |
| Image hover (cards/gallery) | Slight zoom scale `1.04`, `transition: 0.5s ease` |
| CTA button hover | Background darken + `translateY(-2px)` shadow lift |
| Nav links hover | Underline slides in left-to-right |
| Lightbox open/close | Opacity + scale transition, Framer Motion |
| Offer modal | Fade-in backdrop + slide-up card |

**Rules:**
- `transition` duration: 0.3s for UI elements, 0.5s for images
- No bounces, no rotations, no excessive motion
- Respect `prefers-reduced-motion` — wrap all Framer Motion animations in a check

---

### Mobile-Specific Patterns

- Sticky bottom bar on all property pages: WhatsApp button + Call button, full width, forest green background
- Hamburger nav drawer: full-screen, cream background, large touch targets (min 48px)
- Gallery: single column vertical scroll on mobile, tap to open lightbox
- Hero text: left-aligned on mobile (not centered) for better thumb-zone readability
- All tap targets: minimum `48px × 48px`
- No hover-only interactions on mobile

---

### Gallery

- **Masonry grid** on desktop (CSS Grid, `auto-fill`, `minmax(280px, 1fr)`)
- **Single column** scroll on mobile with lazy loading
- Hover: subtle zoom + dark overlay with a thin border reveal
- Click: full-screen lightbox with blurred dark backdrop, swipe gestures on mobile, keyboard navigation on desktop
- Images loaded via Sanity CDN with width + quality params, `loading="lazy"`, `placeholder="blur"`

---

### CTA / Buttons

| Style | Usage |
|---|---|
| Primary | Forest green fill, cream text — main actions (WhatsApp, Inquire) |
| Secondary / Ghost | Transparent with green border — secondary actions (View Gallery, Learn More) |
| Text link | Underline on hover, warm taupe color — inline links |

- No "Book Now" language — use: **"Send an Inquiry"**, **"Chat on WhatsApp"**, **"Get in Touch"**
- Buttons are never garish or oversized — they fit the editorial tone

---

### Component Aesthetic Summary

| Component | Style |
|---|---|
| Property cards | Full-bleed image top, minimal text below, ghost button — no drop shadow |
| Testimonials | Large quote mark (Playfair Display), name + property label below, carousel on mobile |
| Offer card | Image left, text right on desktop — stacked on mobile, no price shown |
| Section dividers | Thin `1px` sand-colored line or generous whitespace — no heavy borders |
| Forms | Minimal underline-style inputs, no box borders, large labels above |
| Maps | Embedded `<iframe>`, rounded `8px` corners, full width |

---

## Phase 1 — Project Setup

- [ ] Init Next.js 15 project with App Router (`npx create-next-app@latest`)
- [ ] Install and configure Sanity (`npx sanity@latest init`)
- [ ] Install `next-sanity`, `@sanity/image-url`
- [ ] Set up `wrangler.toml` (do not change deployment target yet — just prepare config)
- [ ] Set up environment variables (`.env.local`)
  - `NEXT_PUBLIC_SANITY_PROJECT_ID`
  - `NEXT_PUBLIC_SANITY_DATASET`
  - `SANITY_API_TOKEN`
- [ ] Configure Tailwind CSS
- [ ] Set up base folder structure (see below)

### Folder Structure

```
/app
  /hotel
  /rds-farm
  /rds-farm-2
  /blog/[slug]
  /offers
  /gallery
/components
  /ui          → buttons, cards, modals
  /layout      → header, footer, nav
  /sections    → hero, gallery grid, inquiry CTA, testimonials
/lib
  sanity.ts    → Sanity client config
  queries.ts   → All GROQ queries
  image.ts     → Sanity image URL builder helper
/sanity
  /schemas     → All content schemas
/public
  /fonts
```

---

## Phase 2 — Sanity Schema Design

Define content types for all client-managed content.

- [ ] **Property** schema — name, slug, hero image, description, highlights[], amenities[], aboutTitle, aboutBody (portable text), googleMapsEmbedUrl, address, phone, whatsappNumber, email
- [ ] **Room** schema — name, images[], description, capacity (hotel only)
- [ ] **Gallery** schema — property reference, images[], caption
- [ ] **Offer** schema — title, description, validUntil, property (`hotel` | `farm` | `all`), image, ctaText, isActive flag (no price field)
- [ ] **BlogPost** schema — title, slug, body (portable text), coverImage, publishedAt, seoDescription
- [ ] **Testimonial** schema — name, property, rating, quote
- [ ] **SiteSettings** schema — global phone number, WhatsApp number, email, address, social links, homepageAboutTitle, homepageAboutBody (portable text), homepageGoogleMapsEmbedUrl
- [ ] **FAQ** schema — question, answer, property reference

---

## Phase 3 — Core UI Components

- [ ] **Header/Nav** — logo, property links, WhatsApp CTA button, mobile hamburger
- [ ] **Footer** — all property links, contact info, social links, copyright
- [ ] **Hero Section** — fullscreen image (Sanity CDN), headline, subtext, CTA button
- [ ] **Property Card** — image, name, short description, "Explore" link
- [ ] **Gallery Grid** — masonry or uniform grid, lightbox on click
- [ ] **Inquiry CTA Banner** — "No prices shown — WhatsApp or call us for a personalised quote"
- [ ] **WhatsApp Float Button** — fixed bottom-right, opens WhatsApp chat
- [ ] **Call Button** — `tel:` link, prominent on mobile
- [ ] **Testimonials Carousel**
- [ ] **Blog Card**
- [ ] **Offer Card** — no price, CTA to inquire
- [ ] **Offer Flash Card (Modal)** — shown once per session on first load of a hotel or farm route
  - Hotel routes (`/hotel`, `/hotel/gallery`) → shows active hotel offer
  - Farm routes (`/rds-farm`, `/rds-farm/gallery`, `/rds-farm-2`, `/rds-farm-2/gallery`) → shows active farm offer
  - Shows on every page load (no session tracking — target audience are non-repeat visitors)
  - Dismissable via close button or click outside
  - CTA: WhatsApp or Call (no form)
  - Offer content (image, title, description, CTA text) pulled from Sanity
- [ ] **About Us Section** — reusable section component (title + body text), used on homepage and all property pages
- [ ] **Contact Section** — reusable section component with WhatsApp button, call button, address, and Google Maps embed; content sourced from Sanity per page
- [ ] **Google Maps Embed** — accepts an embed URL from Sanity, rendered as `<iframe>` inside the Contact section

---

## Phase 4 — Pages

### Homepage (`/`)
- Brand hero with headline
- 3 property cards (Hotel, RDS Farm, RDS Farm 2)
- "Why RD Developers" highlights section
- Testimonials
- Inquiry CTA
- **About Us section** — brand story for RD Developers umbrella (title + body from `SiteSettings`)
- **Contact section** — global WhatsApp, call button, address, Google Maps embed (embed URL from `SiteSettings`)

### Hotel Page (`/hotel`)
- Hero image + description
- Room types grid (images + capacity, no price)
- Restaurant section
- Amenities list
- Gallery preview (link to full gallery)
- Inquiry CTA
- **About Us section** — hotel-specific story (from `Property` schema)
- **Contact section** — hotel phone, WhatsApp, address, Google Maps embed (all from `Property` schema)

### Farm Pages (`/rds-farm`, `/rds-farm-2`)
- Hero + description
- Capacity and event types (wedding, corporate, birthday, etc.)
- Combined venue note (RDS + RDA can be booked together for large events)
- Gallery preview
- Inquiry CTA
- **About Us section** — farm-specific story (from `Property` schema)
- **Contact section** — farm-specific phone, WhatsApp, address, Google Maps embed (all from `Property` schema)

> Each property page has its own independent About Us and Contact content managed entirely from Sanity, including the Google Maps embed URL.

### Blog (`/blog`, `/blog/[slug]`)
- List page with search/filter
- Individual post with structured content
- SEO metadata per post

### Offers (`/offers`)
- Cards per offer (seasonal, event-based)
- No prices — "Contact for details" on each

### Gallery (`/gallery`)
- Filter by property
- Full-resolution via Sanity CDN

---

## Phase 5 — SEO & Metadata

- [ ] `generateMetadata()` per page (title, description, OG image)
- [ ] `sitemap.ts` — auto-generated from all pages + blog slugs
- [ ] `robots.ts`
- [ ] JSON-LD structured data:
  - `Hotel` schema on hotel pages
  - `FoodEstablishment` schema for restaurant
  - `EventVenue` schema for farm pages
  - `LocalBusiness` schema on homepage/contact
  - `BlogPosting` schema on blog posts
- [ ] Canonical URLs
- [ ] OG image generation (static or dynamic via Sanity image)

---

## Phase 6 — Performance

- [ ] All images served via `cdn.sanity.io` (no `next/image` optimizer — not needed)
- [ ] Sanity `@sanity/image-url` with width/quality params per use case
- [x] ~~ISR on all content pages (`revalidate: 3600`)~~ — implemented, then reverted: traffic and update frequency don't justify the caching complexity. All pages render fully dynamic (`force-dynamic`), fetching live from Sanity on every request.
- [x] ~~Sanity webhook → `/api/revalidate` route → `revalidatePath()` on content change~~ — removed along with ISR; nothing to revalidate under fully dynamic rendering.
- [ ] Font optimization (`next/font`)
- [ ] No unnecessary client components — keep everything Server Components by default
- [ ] Lazy load gallery images (intersection observer or native `loading="lazy"`)

---

## Phase 7 — Cloudflare Workers Deployment

Run this **after** the app is fully built and tested locally.

- [ ] Install `@opennextjs/cloudflare` and `wrangler`
- [ ] Create `open-next.config.ts`
- [ ] Finalize `wrangler.toml` with KV namespace and R2 bucket bindings
- [ ] Create KV namespace via Cloudflare dashboard
- [ ] Create R2 bucket for static assets
- [ ] Test locally with `npx wrangler dev`
- [ ] Deploy with `npx wrangler deploy`
- [ ] Point Cloudflare domain DNS to the Worker
- [ ] Verify ISR cache is working via KV

### `wrangler.toml` (reference)

```toml
name = "rdsvenues"
compatibility_date = "2024-09-23"
compatibility_flags = ["nodejs_compat"]
main = ".open-next/worker.js"

[[kv_namespaces]]
binding = "NEXT_CACHE_WORKERS_KV"
id = "<your-kv-id>"

[[r2_buckets]]
binding = "ASSETS"
bucket_name = "rdsvenues-assets"
```

### `open-next.config.ts` (reference)

```ts
import type { OpenNextConfig } from "@opennextjs/cloudflare";

export default {
  default: {
    override: {
      wrapper: "cloudflare-node",
      converter: "edge",
      incrementalCache: "kv",
      tagCache: "kv",
      queue: "direct",
    },
  },
} satisfies OpenNextConfig;
```

---

## Phase 8 — Google Business Profile (GBP) Setup

Separate from website build — done in parallel or after launch.

- [ ] Create 3 separate GBP listings:
  - RD Hotel (with restaurant category)
  - RDS Farm
  - RDS Farm 2
- [ ] Upload 10+ professional photos per listing
- [ ] Fill all attributes: hours, amenities, parking, capacity
- [ ] Add services list per property
- [ ] Pre-populate Q&A section (5–10 questions per listing)
- [ ] Set up review response workflow for client
- [ ] Add website links pointing to correct property page

---

## Phase 9 — Post-Launch

- [ ] Google Analytics 4 setup
- [ ] Meta Pixel setup (for future Instagram/Facebook ads)
- [ ] Google Search Console — submit sitemap
- [ ] Core Web Vitals audit
- [ ] Train client on Sanity Studio (images, blogs, offers)
- [ ] Handoff document for client

---

## Future Scope (Phase 10+)

- Performance marketing: Meta Ads (Instagram + Facebook) — seasonal campaigns
- WhatsApp Business API — automated inquiry responses
- Simple CRM — Google Sheet or Notion for tracking WhatsApp/call leads manually
- Booking inquiry tracker for client
- Blog content calendar for ongoing SEO

---

## Environment Variables

```
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=
NEXT_PUBLIC_WHATSAPP_NUMBER=
NEXT_PUBLIC_PHONE_NUMBER=
```

---

## Notes

- Two farms (RDS Farm and RDS Farm 2) are ~20–30m apart. Market them as a combined large-event venue option.
- Never display prices anywhere. All CTAs lead to inquiry (WhatsApp or form).
- Client manages all content (images, offers, blogs) via Sanity Studio.
- Sanity CDN handles all image serving — no need for Cloudflare Images or `next/image` optimizer.
