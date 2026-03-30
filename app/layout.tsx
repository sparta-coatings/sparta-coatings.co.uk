import type { Metadata } from 'next';
import { Space_Grotesk, Plus_Jakarta_Sans } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

const GA_ID = process.env.NEXT_PUBLIC_GA_ID || 'G-SWFD03F3P0';

export const metadata: Metadata = {
  title: {
    default: 'Professional Spray Coating Services UK | Sparta Coatings',
    template: '%s | Sparta Coatings',
  },
  description:
    'Sparta Coatings — professional spray painting for cladding, kitchens, UPVC, roofs & more. Approved applicators. South England & UK-wide. Get a free quote today.',
  metadataBase: new URL('https://www.sparta-coatings.co.uk'),
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Professional Spray Coating Services UK | Sparta Coatings',
    description:
      'Specialist on-site spray coating contractors. Approved applicators for HD Sharmans, Giromax, Liquisil, Kolorbond & Tikkurila. Free surveys UK-wide.',
    type: 'website',
    locale: 'en_GB',
    url: 'https://www.sparta-coatings.co.uk',
    siteName: 'Sparta Coatings',
  },
  robots: { index: true, follow: true },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'Sparta Coatings',
  description:
    'Specialist on-site spray coating contractors covering the South of England and wider UK. Approved applicators for HD Sharmans, Giromax, Liquisil, Kolorbond, Tikkurila and more.',
  url: 'https://www.sparta-coatings.co.uk',
  telephone: '+447521229809',
  email: 'info@sparta-coatings.co.uk',
  areaServed: 'United Kingdom',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday'],
      opens: '07:00',
      closes: '19:00',
    },
  ],
  serviceType: [
    'Cladding Spraying',
    'Kitchen Cabinet Spraying',
    'UPVC Window Spraying',
    'UPVC Door Spraying',
    'Metal Roof Coating',
    'Warehouse Spraying',
    'Steelwork Spraying',
    'Fence & Gate Spraying',
    'Shop Front Spraying',
    'Ceiling Spraying',
    'Lift Door Spraying',
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${jakarta.variable} ${spaceGrotesk.variable}`}>
      <head>
        <link rel="icon" href="/logo.svg" type="image/svg+xml" />
        <link rel="alternate icon" href="/logo.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
        <Script id="ga-init" strategy="afterInteractive">{`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}', { page_path: window.location.pathname });
        `}</Script>
      </head>
      <body className="antialiased bg-[#FAF9F6] text-[#111111]">{children}</body>
    </html>
  );
}
