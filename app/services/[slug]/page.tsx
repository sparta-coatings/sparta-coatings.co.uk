import { getServiceBySlug, getAllSlugs } from '@/lib/services';
import type { Metadata } from 'next';
import ServicePageClient from './ServicePageClient';

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: service.faqs.map((faq: { q: string; a: string }) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  };

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    alternates: { canonical: `/services/${slug}` },
    other: {
      'script:ld+json': JSON.stringify(faqSchema),
    },
  };
}

export default function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return <ServicePageClient params={params} />;
}
