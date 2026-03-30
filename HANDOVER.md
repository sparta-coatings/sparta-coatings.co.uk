# Sparta Coatings — Complete Website Rebuild Handover

**Date:** 2026-03-28
**Client:** Sparta Coatings
**Domain:** sparta-coatings.co.uk
**Repo:** https://github.com/jonnyallum/sparta-coatings.co.uk.git
**Status:** FULL REBUILD — delete everything except logo files, start from scratch

---

## 1. PROJECT BRIEF

Rebuild the Sparta Coatings website from the ground up. The old site's style and UI is rejected entirely. Only the logo is kept. The new site must be world-class, dark premium design with quote-form-focused CTAs throughout.

### Design Direction: Dark Premium
- Deep charcoal/navy backgrounds (#0a0a0f or similar very dark tones)
- Clean whites for text (#f5f5f5, #ffffff)
- **Gold accent colour** derived from the Spartan helmet logo — use a refined gold (#c9a84c or #d4a843) not a brassy/tacky gold
- Consider a secondary accent: electric blue or teal for interactive elements (buttons, links, hover states)
- Luxury industrial feel — think high-end contractor, not painter & decorator
- Generous white space, bold typography, large hero imagery
- Subtle animations (Framer Motion) — parallax on scroll, fade-in sections, smooth transitions
- The site should feel like a premium brand, not a local trades website

### Primary Goal: Quote Form Conversions
- Every page must drive toward the quote form
- Sticky/floating CTA on scroll (mobile and desktop)
- Quote form appears on every page (inline or modal)
- "Get a Free Quote" is the primary CTA everywhere
- Phone number visible but secondary to form
- Form fields: Name, Phone, Email, Postcode, Service Required (dropdown), Project Description, How did you hear about us (dropdown)

### Logo Files (KEEP THESE — do not delete)
- `public/logo.png` — 1024x1024 PNG (gold Spartan helmet on dark background)
- `public/logo.svg` — SVG version
- `final logo.svg` — SVG source file (root of project)

---

## 2. TECH STACK

- **Framework:** Next.js 15+ with App Router
- **React:** 19
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Output:** Static export (`next export`) for Hostinger shared hosting
- **Forms:** Client-side form that posts to an endpoint (Formspree, or a simple email API)

### Next.js Config Requirements
```js
// next.config.js
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true, // Required for static export
  },
}
```

---

## 3. SITE STRUCTURE & ROUTING

```
/                       → Homepage
/about/                 → About Us
/services/              → Services overview (grid of all 16 services)
/services/kitchen-cabinet-spraying/
/services/upvc-window-spraying/
/services/upvc-door-spraying/
/services/conservatory-spraying/
/services/garage-door-spraying/
/services/fascia-soffit-spraying/
/services/gutter-spraying/
/services/house-exterior-spraying/
/services/fence-gate-spraying/
/services/ceiling-spraying/
/services/cladding-spraying/
/services/metal-roof-coating/
/services/warehouse-industrial-spraying/
/services/shop-front-spraying/
/services/steelwork-spraying/
/services/lift-door-spraying/
/pricing/               → Full pricing page
/areas/                 → Areas we cover
/contact/               → Contact page
```

**Total pages: 22** (1 home + 1 about + 1 services index + 16 service pages + 1 pricing + 1 areas + 1 contact)

---

## 4. COMPONENT ARCHITECTURE

```
components/
├── layout/
│   ├── Navbar.tsx          — Sticky nav, logo left, links center, CTA button right
│   ├── Footer.tsx          — Full footer with service links, contact info, legal
│   ├── MobileMenu.tsx      — Slide-out mobile menu with service categories
│   └── FloatingCTA.tsx     — Sticky bottom bar on mobile / floating button on desktop
├── sections/
│   ├── Hero.tsx            — Full-viewport hero with background image, overlay, headline
│   ├── TrustBar.tsx        — Horizontal scroller: approvals, years, insurance, ratings
│   ├── ServiceGrid.tsx     — Card grid for services (residential + commercial tabs)
│   ├── WhyChooseUs.tsx     — Icon + text feature blocks
│   ├── Testimonials.tsx    — Carousel or grid of customer quotes
│   ├── ApprovedApplicators.tsx — Manufacturer logos/names table
│   ├── RecentProjects.tsx  — Image gallery with captions
│   ├── PricingTable.tsx    — Styled pricing tables (reusable)
│   ├── ProcessSteps.tsx    — Numbered step-by-step process visual
│   ├── FAQAccordion.tsx    — Expandable FAQ section
│   ├── AreasCoverage.tsx   — County sections with town lists
│   └── CTABanner.tsx       — Full-width call-to-action banner
├── forms/
│   ├── QuoteForm.tsx       — Main quote request form
│   └── QuickContact.tsx    — Simplified inline form (name, phone, service)
├── ui/
│   ├── Button.tsx          — Primary (gold), secondary (outline), ghost variants
│   ├── Card.tsx            — Service card, testimonial card, pricing card
│   ├── Badge.tsx           — "From £275", "10-Year Warranty" etc.
│   ├── SectionHeading.tsx  — Consistent section title + subtitle pattern
│   └── Container.tsx       — Max-width centered container
└── seo/
    ├── SchemaMarkup.tsx    — JSON-LD schema injection component
    └── MetaTags.tsx        — Per-page meta title/description
```

---

## 5. DESIGN SYSTEM

### Typography
- **Headings:** Inter or Outfit (bold, clean, modern geometric sans-serif)
- **Body:** Inter or system sans-serif stack
- **Hero headlines:** Very large (clamp(2.5rem, 5vw, 4.5rem)), tight letter-spacing
- **Section headings:** 2rem-3rem, semi-bold
- **Body text:** 1rem-1.125rem, comfortable line-height (1.7)

### Colour Palette
```css
:root {
  /* Backgrounds */
  --bg-primary: #0a0a0f;        /* Deep dark (almost black) */
  --bg-secondary: #111118;       /* Slightly lighter dark */
  --bg-card: #16161e;            /* Card/surface background */
  --bg-elevated: #1c1c26;        /* Elevated surfaces */

  /* Gold accent (from logo) */
  --gold: #c9a84c;               /* Primary gold */
  --gold-light: #dfc06a;         /* Hover/light gold */
  --gold-dark: #a68a3a;          /* Pressed/dark gold */

  /* Text */
  --text-primary: #f5f5f5;       /* Main text */
  --text-secondary: #a0a0b0;     /* Muted text */
  --text-accent: #c9a84c;        /* Gold text for highlights */

  /* Interactive accent (optional secondary) */
  --accent: #3b82f6;             /* Blue for links/interactive if needed */

  /* Borders */
  --border: #2a2a35;             /* Subtle borders */
  --border-gold: rgba(201, 168, 76, 0.3); /* Gold border, subtle */
}
```

### Spacing & Layout
- Max content width: 1280px
- Section padding: py-20 to py-28 (generous vertical spacing)
- Card grid: 3-col desktop, 2-col tablet, 1-col mobile
- Service pages: sidebar layout on desktop (content left, sticky quote form right)

### Animations (Framer Motion)
- Sections fade-in on scroll (IntersectionObserver + motion.div)
- Hero text: staggered word reveal
- Cards: subtle scale on hover (1.02)
- Numbers/stats: count-up animation
- Mobile menu: slide from right
- Page transitions: fade

---

## 6. STOCK IMAGERY REQUIREMENTS

**Critical rule:** Images must look authentic — NOT obviously stock photography. They should match UK settings, real spray coating work, and look like they could be from the company's own portfolio.

### Image Strategy
Use **Unsplash**, **Pexels**, or **Pixabay** for free high-quality stock images. Search for specific, niche terms rather than generic ones.

### Images Needed Per Page

**Homepage Hero:**
- Search: "industrial spray painting building" / "airless spray painting exterior" / "commercial building painting contractors"
- Need: Wide landscape shot of someone spray painting a building exterior or industrial setting
- Alternative: Close-up of professional spray gun in action with paint mist

**Service Page Heroes (one per service):**

| Service | Search Terms | What to Look For |
|---------|-------------|------------------|
| Kitchen Cabinet Spraying | "kitchen cabinet painting spray" "modern kitchen makeover" | Someone spray painting cabinet doors in a workshop, or beautiful finished kitchen |
| UPVC Window Spraying | "upvc window white house exterior" "modern house windows" | Close-up of clean UPVC windows on a house, or someone working on windows |
| UPVC Door Spraying | "front door spray painting" "modern front door house" | Attractive front door, ideally being painted or freshly finished |
| Conservatory Spraying | "conservatory exterior uk" "modern conservatory" | UK-style conservatory, before/after look |
| Garage Door Spraying | "garage door modern house" "painted garage door" | Clean modern garage door on a house |
| Fascia & Soffit | "house fascia soffit roofline" "roofline exterior" | House roofline showing fascia and soffits |
| Gutters | "house guttering exterior" "rain gutter close-up" | Guttering on a house |
| House Exterior | "house exterior painting" "render spraying house" | Full house exterior being painted or freshly painted |
| Fence & Gate | "metal gate painted black" "wrought iron railings" | Painted metal gates or railings |
| Ceiling Spraying | "ceiling painting spray" "white ceiling room" | Ceiling being painted or clean finished ceiling |
| Cladding Spraying | "industrial cladding building" "metal cladding commercial" | Commercial building with metal cladding panels |
| Metal Roof Coating | "corrugated metal roof industrial" "metal roof commercial building" | Industrial/commercial metal roof |
| Warehouse/Industrial | "warehouse exterior industrial" "industrial unit building" | Warehouse or industrial building exterior |
| Shop Front | "modern shop front" "retail shop exterior" | Clean modern shop front, preferably just painted |
| Steelwork | "structural steelwork building" "steel beams construction" | Structural steel, painted steelwork |
| Lift Doors | "elevator door modern" "lift doors building" | Clean modern lift/elevator doors |

**About Page:**
- Team/worker imagery: "spray painting contractor" "painter decorator professional"
- Workshop/van: "painting contractor van" "spray painting workshop"

**General/reusable:**
- Paint spray close-up with mist
- Professional in PPE spraying
- Before/after transformation shots
- Tools and equipment

### Image Implementation
- Use `<img>` tags with `loading="lazy"` for below-fold images
- Hero images: full-width with dark overlay gradient for text readability
- Service cards: square/4:3 ratio thumbnails
- Optimise all images before build (compress to WebP where possible)
- Store in `public/images/` with clear naming: `hero-kitchen.webp`, `service-cladding.webp` etc.

---

## 7. COMPLETE PAGE CONTENT

All page content is located in the project folder at:
```
Clients/Sparta-Coatings/new site content/
├── About Us, HomePage And Areas we cover/
│   └── Homepage, About us, Areas we cover.txt    ← Contains ALL 3 pages
├── Contact us/
│   └── contact page.txt
├── Pricing page/
│   └── Pricing.txt
└── Service Pages/
    ├── Ceilings/Service Pages - Ceilings.txt
    ├── Cladding/Service Pages- Cladding.txt
    ├── Conservatories/Services- Conservatories.txt
    ├── Doors/Service Pages- Doors.txt              ← EMPTY FILE (0 bytes)
    ├── Fences & Gates/Service Pages - Fences & Gates.txt
    ├── Garage Doors/Service Pages - Garage Doors.txt
    ├── Gutters/Service Pages - Gutters.txt          ← Contains BOTH Fascia/Soffit AND Gutter pages
    ├── House Exteriors/Service Pages - House Exteriors.txt
    ├── Kitchens/Kitchens- Service Page.txt
    ├── Lift Doors/Service Pages - Lift doors.txt
    ├── Metal Roofs/Service Pages - Metal Roofs.txt
    ├── Shop Fronts/Service Pages - Shop Fronts.txt
    ├── Steel Work/Service Pages - Steel Work.txt
    ├── Warehouses & Industrial/Service Pages - Warehouses & Industrial.txt
    └── Windows/Windows- Service Page.txt
```

### IMPORTANT CONTENT NOTES:
1. **Doors file is EMPTY** — You need to write the UPVC Door Spraying content yourself, matching the style/depth of the Windows page (they use the same Kolorbond products, similar process). Price: From £375.
2. **Gutters file contains TWO pages** — Fascia & Soffit Spraying AND Gutter Spraying. Split them into separate pages.
3. **Homepage + About + Areas are in ONE file** — Split at the clear page breaks (look for "Meta Title" markers).
4. **Every service page includes FAQ Schema JSON-LD** — implement these in `<script type="application/ld+json">` tags.
5. **Every page has Meta Title + Description** — use these exactly as written for SEO.

### Key Business Information
- **Phone:** 07521 229809
- **Email:** info@sparta-coatings.co.uk
- **Office Hours:** Monday–Friday 8am–6pm
- **Site Hours:** Monday–Saturday 7am–7pm
- **Coverage:** South England (residential), UK-wide (commercial)
- **URL:** https://www.sparta-coatings.co.uk (note: www subdomain)

---

## 8. SERVICE PAGE TEMPLATE

Every service page should follow this consistent layout:

```
┌─────────────────────────────────────────────────┐
│  HERO — Full-width image + dark overlay          │
│  H1: [Service Name]                              │
│  Subtext: [Opening paragraph]                    │
│  CTA: [Get a Free Quote]  [Call 07521 229809]   │
├─────────────────────────────────────────────────┤
│  TRUST BAR — Approved applicators, warranties    │
├──────────────────────┬──────────────────────────┤
│                      │                          │
│  MAIN CONTENT        │  STICKY SIDEBAR          │
│  (left, ~65%)        │  (right, ~35%)           │
│                      │                          │
│  • What is [service] │  ┌──────────────────┐   │
│  • Suitable types    │  │  QUOTE FORM      │   │
│  • Pricing table     │  │  (sticky on       │   │
│  • Why spray vs      │  │   scroll)         │   │
│    replace           │  │                   │   │
│  • Products used     │  │  Name             │   │
│  • Our process       │  │  Phone            │   │
│  • Popular colours   │  │  Service          │   │
│                      │  │  Message          │   │
│                      │  │  [Submit]         │   │
│                      │  └──────────────────┘   │
│                      │                          │
│                      │  Phone: 07521 229809     │
│                      │  "Free survey included"  │
├──────────────────────┴──────────────────────────┤
│  FAQ ACCORDION — Questions from content          │
├─────────────────────────────────────────────────┤
│  CTA BANNER — "Ready to transform your [X]?"   │
│  [Get Your Free Quote]                          │
├─────────────────────────────────────────────────┤
│  RELATED SERVICES — 3 cards of related services │
└─────────────────────────────────────────────────┘
```

---

## 9. DEPLOYMENT TO HOSTINGER

### Hostinger Credentials
- **Host:** 92.112.189.250
- **SSH Port:** 65002 (NOT default 22)
- **Username:** u384342620
- **Password:** Aprilia100!69.
- **Remote path:** `/home/u384342620/domains/sparta-coatings.co.uk/public_html/`

### Deployment Method: ZIP Upload (recommended for reliability)

```python
#!/usr/bin/env python3
"""Deploy Sparta Coatings to Hostinger via ZIP upload"""
import os, sys, zipfile, paramiko
from pathlib import Path

CONFIG = {
    "host": "92.112.189.250",
    "port": 65002,
    "username": "u384342620",
    "password": "Aprilia100!69.",
    "remote_dir": "/home/u384342620/domains/sparta-coatings.co.uk/public_html",
}

def deploy():
    local_out = Path("out")  # Next.js static export directory
    if not local_out.exists():
        print("ERROR: 'out' directory not found. Run 'npm run build' first.")
        sys.exit(1)

    # 1. Create ZIP
    zip_path = "/tmp/sparta-deploy.zip"
    print("Creating deployment ZIP...")
    with zipfile.ZipFile(zip_path, 'w', zipfile.ZIP_DEFLATED) as zf:
        for file in local_out.rglob('*'):
            if file.is_file():
                zf.write(file, file.relative_to(local_out))
    print(f"ZIP created: {os.path.getsize(zip_path) / 1024 / 1024:.1f} MB")

    # 2. Connect via SSH
    ssh = paramiko.SSHClient()
    ssh.set_missing_host_key_policy(paramiko.AutoAddPolicy())
    ssh.connect(CONFIG["host"], port=CONFIG["port"],
                username=CONFIG["username"], password=CONFIG["password"], timeout=30)
    sftp = ssh.open_sftp()

    remote = CONFIG["remote_dir"]
    remote_zip = f"{remote}/deploy.zip"

    # 3. Clear old files (preserve .htaccess)
    print("Clearing old files...")
    ssh.exec_command(f"find {remote} -mindepth 1 -not -name '.htaccess' -delete")

    # 4. Upload ZIP
    print("Uploading ZIP...")
    sftp.put(zip_path, remote_zip)

    # 5. Unzip on server
    print("Extracting on server...")
    stdin, stdout, stderr = ssh.exec_command(f"cd {remote} && unzip -o deploy.zip && rm deploy.zip")
    stdout.read()

    # 6. Fix permissions
    print("Setting permissions...")
    ssh.exec_command(f"find {remote} -type d -exec chmod 755 {{}} \\;")
    ssh.exec_command(f"find {remote} -type f -exec chmod 644 {{}} \\;")

    print("Deployment complete! Site live at https://www.sparta-coatings.co.uk")
    sftp.close()
    ssh.close()
    os.remove(zip_path)

if __name__ == "__main__":
    deploy()
```

### Build & Deploy Commands
```bash
# Install dependencies
npm install

# Build static export
npm run build
# This should run: next build (with output: 'export' in next.config.js)
# Output goes to: ./out/

# Deploy
python deploy_sparta.py
```

### .htaccess (create in public/ so it's included in export)
```apache
# Force HTTPS
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# Remove www (or add www — check which the SSL cert covers)
# RewriteCond %{HTTP_HOST} ^www\.(.*)$ [NC]
# RewriteRule ^(.*)$ https://%1/$1 [R=301,L]

# Custom 404
ErrorDocument 404 /404.html

# Cache static assets
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"
  ExpiresByType text/css "access plus 1 month"
  ExpiresByType application/javascript "access plus 1 month"
</IfModule>

# Gzip compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/css application/javascript application/json image/svg+xml
</IfModule>
```

---

## 10. SEO REQUIREMENTS

### Per-Page Meta (from content files)
Every content file specifies exact Meta Title and Meta Description — use them verbatim.

### Schema Markup
Every content file includes JSON-LD schema — implement as `<script type="application/ld+json">` in the page `<head>`.

Types used:
- `LocalBusiness` — Homepage, Areas
- `ContactPage` — Contact
- `FAQPage` — Every service page, Pricing page
- `Organization` — Homepage

### Sitemap
Generate `sitemap.xml` automatically or manually for all 22 pages.

### robots.txt
```
User-agent: *
Allow: /
Sitemap: https://www.sparta-coatings.co.uk/sitemap.xml
```

---

## 11. FORM HANDLING

The quote form needs to actually send emails. Options:

1. **Formspree** (easiest) — `<form action="https://formspree.io/f/YOUR_ID" method="POST">`
2. **Resend API** (already in the agency stack) — Create a simple API route or use a serverless function
3. **EmailJS** — Client-side email sending, no backend needed
4. **Netlify/Vercel Forms** — Won't work with Hostinger static hosting

**Recommended:** Formspree for simplicity with static hosting. Set up at formspree.io with info@sparta-coatings.co.uk as the recipient.

---

## 12. BUILD CHECKLIST

### Phase 1: Setup
- [ ] Backup logo files from `public/`
- [ ] Delete ALL files in the repo except `.git/` folder
- [ ] `npx create-next-app@latest . --typescript --tailwind --app --src-dir=false`
- [ ] Restore logo files to `public/`
- [ ] Install deps: `npm install framer-motion lucide-react`
- [ ] Configure `next.config.js` for static export
- [ ] Set up Tailwind with dark premium colour palette
- [ ] Set up Google Fonts (Inter/Outfit)

### Phase 2: Layout & Components
- [ ] Build `Navbar` with logo, navigation links, mobile menu, CTA button
- [ ] Build `Footer` with full service links, contact info, legal text
- [ ] Build `FloatingCTA` sticky component
- [ ] Build `QuoteForm` component
- [ ] Build `Hero` section component
- [ ] Build `TrustBar` component
- [ ] Build all UI primitives (Button, Card, Badge, Container, SectionHeading)
- [ ] Build `FAQAccordion` component
- [ ] Build `ProcessSteps` component
- [ ] Build `PricingTable` component

### Phase 3: Pages
- [ ] Homepage (hero + trust bar + services + why us + testimonials + CTA + quote form)
- [ ] About page
- [ ] Services index page (grid of all 16 services with cards)
- [ ] All 16 service pages (use template layout)
- [ ] Pricing page
- [ ] Areas We Cover page
- [ ] Contact page
- [ ] 404 page

### Phase 4: Content & Images
- [ ] Insert ALL content from text files (copy exactly — this is SEO-optimised content)
- [ ] Source and download stock images for each page
- [ ] Optimise images (compress, convert to WebP)
- [ ] Add all JSON-LD schema markup
- [ ] Add all meta titles and descriptions
- [ ] Generate sitemap.xml
- [ ] Create robots.txt
- [ ] Create .htaccess

### Phase 5: Polish & QA
- [ ] Test all pages on mobile (responsive)
- [ ] Test all forms work
- [ ] Check all links work
- [ ] Lighthouse audit (aim for 90+ on all metrics)
- [ ] Check all schema markup validates (Google Rich Results Test)
- [ ] Cross-browser test (Chrome, Firefox, Safari, Edge)

### Phase 6: Deploy
- [ ] Run `npm run build` to generate static export in `out/`
- [ ] Run deployment script to push to Hostinger
- [ ] Verify site is live at https://www.sparta-coatings.co.uk
- [ ] Test forms on live site
- [ ] Submit sitemap to Google Search Console

---

## 13. MISSING CONTENT TO WRITE

### UPVC Door Spraying Page (Doors file is empty)
Write this page matching the style of the Windows page. Key details:
- **Price:** From £375 (single door), From £850 (all external doors), French/bifold POA
- **Products:** Kolorbond WindowPrep + Kolorbond Original / DecoProt
- **Warranty:** 10-year Kolorbond adhesion guarantee
- **Types:** Front doors, back doors, French doors, bifold doors, patio doors, composite doors (UPVC elements), stable doors
- **Process:** Same 8-step process as Windows (clean, degrease, abrade, mask, Kolorbond prep, spray 2 coats, reseal silicone, inspect)
- Include FAQ Schema with 6 questions matching the pattern of other service pages

---

## 14. GIT WORKFLOW

```bash
# Start fresh
cd Clients/Sparta-Coatings
git checkout main

# Backup logos
cp public/logo.png /tmp/logo.png
cp public/logo.svg /tmp/logo.svg
cp "final logo.svg" "/tmp/final logo.svg"

# Nuclear option — delete everything except .git
find . -maxdepth 1 -not -name '.git' -not -name '.' -not -name 'new site content' -not -name 'HANDOVER.md' -exec rm -rf {} +

# Create fresh Next.js app
npx create-next-app@latest . --typescript --tailwind --app --src-dir=false --no-import-alias

# Restore logos
mkdir -p public
cp /tmp/logo.png public/logo.png
cp /tmp/logo.svg public/logo.svg
cp "/tmp/final logo.svg" "final logo.svg"

# Install additional deps
npm install framer-motion lucide-react

# Build and commit incrementally
git add -A && git commit -m "feat: fresh Next.js 15 scaffold for Sparta Coatings rebuild"
```

---

## 15. QUICK REFERENCE — ALL SERVICE PAGES

| # | Service | Slug | Price From | Content File |
|---|---------|------|-----------|-------------|
| 1 | Kitchen Cabinet Spraying | kitchen-cabinet-spraying | £975 | Kitchens/Kitchens- Service Page.txt |
| 2 | UPVC Window Spraying | upvc-window-spraying | £275 | Windows/Windows- Service Page.txt |
| 3 | UPVC Door Spraying | upvc-door-spraying | £375 | Doors/ — EMPTY, write it |
| 4 | Conservatory Spraying | conservatory-spraying | £1,199 | Conservatories/Services- Conservatories.txt |
| 5 | Garage Door Spraying | garage-door-spraying | £850 | Garage Doors/Service Pages - Garage Doors.txt |
| 6 | Fascia & Soffit Spraying | fascia-soffit-spraying | £75/m | Gutters/Service Pages - Gutters.txt (first half) |
| 7 | Gutter Spraying | gutter-spraying | £69.99/m | Gutters/Service Pages - Gutters.txt (second half) |
| 8 | House Exterior Spraying | house-exterior-spraying | £50/m² | House Exteriors/Service Pages - House Exteriors.txt |
| 9 | Fence & Gate Spraying | fence-gate-spraying | £69.99/m² | Fences & Gates/Service Pages - Fences & Gates.txt |
| 10 | Ceiling Spraying | ceiling-spraying | £150 | Ceilings/Service Pages - Ceilings.txt |
| 11 | Cladding Spraying | cladding-spraying | £50/m² | Cladding/Service Pages- Cladding.txt |
| 12 | Metal Roof Coating | metal-roof-coating | £99/m² | Metal Roofs/Service Pages - Metal Roofs.txt |
| 13 | Warehouse & Industrial Spraying | warehouse-industrial-spraying | £75/m² | Warehouses & Industrial/Service Pages - Warehouses & Industrial.txt |
| 14 | Shop Front Spraying | shop-front-spraying | POA | Shop Fronts/Service Pages - Shop Fronts.txt |
| 15 | Steelwork Spraying | steelwork-spraying | £75/m² | Steel Work/Service Pages - Steel Work.txt |
| 16 | Lift Door Spraying | lift-door-spraying | £299 | Lift Doors/Service Pages - Lift doors.txt |

---

**END OF HANDOVER — Everything needed to build is in this document and the content files.**
