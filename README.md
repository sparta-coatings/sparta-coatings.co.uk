# Sparta Coatings

> Professional surface coating solutions — official website for [sparta-coatings.co.uk](https://sparta-coatings.co.uk)

[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?logo=typescript)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8?logo=tailwindcss)](https://tailwindcss.com)
[![License](https://img.shields.io/badge/license-MIT-green)](#license)

---

## About

This is the source code for the Sparta Coatings website — a high-performance, luxury-styled marketing site built with Next.js 15 App Router, Framer Motion animations, and Tailwind CSS.

---

## Tech Stack

| Layer | Technology | Version |
|-------|------------|--------|
| Framework | Next.js (App Router) | 15.0.0 |
| UI Library | React | 19.0.0 |
| Styling | Tailwind CSS | 4 |
| Animations | Framer Motion | 12.x |
| Icons | Lucide React | 0.575.0 |
| Utilities | clsx + tailwind-merge | latest |
| Language | TypeScript | 5 |

---

## Project Structure

```
spartacoatings.co.uk/
├── app/                  # Next.js App Router — pages & layouts
├── components/           # Reusable UI components
├── lib/                  # Utility functions & helpers
├── public/               # Static assets (images, fonts, icons)
├── new site content/     # Content assets & copy
├── .gitignore
├── next.config.ts
├── postcss.config.mjs
├── tailwind.config       # (via postcss)
├── tsconfig.json
├── package.json
└── README.md
```

---

## Getting Started

### Prerequisites

- **Node.js** v18+
- **npm** (or yarn / pnpm)

### Installation

```bash
# Clone the repository
git clone https://github.com/sparta-coatings/sparta-coatings.co.uk.git
cd sparta-coatings.co.uk

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Scripts

```bash
npm run dev      # Start development server (hot reload)
npm run build    # Build for production
npm run start    # Start production server
```

---

## Deployment

The site is deployed via **Hostinger** or **Vercel**. Push to `main` to trigger a production build.

```bash
git add .
git commit -m "your message"
git push origin main
```

For manual deployment via the included Python script:

```bash
python deploy_sparta.py
```

---

## Key Features

- White luxury aesthetic with smooth Framer Motion animations
- Fully responsive mobile-first design
- Next.js 15 App Router with server components
- Optimised images via `next/image`
- Per-service page routing
- TypeScript throughout

---

## License

MIT License — Copyright (c) 2026 Sparta Coatings

---

## Contact

- **Website:** [sparta-coatings.co.uk](https://sparta-coatings.co.uk)
- **Email:** info@sparta-coatings.co.uk
- **GitHub:** [@sparta-coatings](https://github.com/sparta-coatings)
