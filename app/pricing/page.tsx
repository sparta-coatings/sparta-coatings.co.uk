import type { Metadata } from 'next';
import PricingPageClient from './PricingPageClient';

export const metadata: Metadata = {
  title: 'Spray Coating Prices & Cost Guide 2026 | Sparta Coatings',
  description:
    'Full spray coating price guide for residential, commercial & industrial services. From £150 for ceilings to £99/m² for metal roofs. Free UK surveys. Sparta Coatings.',
  alternates: { canonical: '/pricing' },
};

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    { '@type': 'Question', name: 'How much does spray coating cost?', acceptedAnswer: { '@type': 'Answer', text: 'Sparta Coatings prices start from £150 for a domestic ceiling, £275 for a single UPVC window, £975 for a kitchen respray, £50/m² for cladding, and £99/m² for metal roof coating. All prices include full surface preparation, correct priming, and minimum two topcoats. Contact us for a free survey and fixed-price quotation.' } },
    { '@type': 'Question', name: 'Do your prices include surface preparation?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. All Sparta Coatings prices include full surface preparation to manufacturer standards — cleaning, degreasing, rust treatment, mechanical keying, and the correct substrate-specific primer.' } },
    { '@type': 'Question', name: 'Do you provide fixed-price quotations?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Following a free site survey, we provide a written, fixed-price quotation with no hidden extras. You will know the exact cost of your project before any work begins.' } },
    { '@type': 'Question', name: 'Why are professional spray coating prices higher than DIY?', acceptedAnswer: { '@type': 'Answer', text: 'Professional spray coating prices reflect the correct, substrate-specific products, professional HVLP spray equipment, thorough surface preparation, and manufacturer-approved application processes — all of which are required to produce a finish that lasts 10–25 years rather than 12–18 months.' } },
    { '@type': 'Question', name: 'Is a free survey included in the price?', acceptedAnswer: { '@type': 'Answer', text: 'Yes. Every Sparta Coatings project starts with a completely free, no-obligation site survey. There is no call-out charge and no commitment required.' } },
    { '@type': 'Question', name: 'What is the most cost-effective spray coating service?', acceptedAnswer: { '@type': 'Answer', text: "For homeowners, kitchen cabinet spraying from £975 and UPVC window spraying from £275 both offer outstanding value versus full replacement. For commercial and industrial clients, cladding spraying from £50/m² is typically 60–80% cheaper than full cladding replacement — with manufacturer warranties of up to 25 years." } },
  ],
};

export default function PricingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <PricingPageClient />
    </>
  );
}
