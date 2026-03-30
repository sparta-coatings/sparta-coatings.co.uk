import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface ServiceCard {
  slug: string;
  name: string;
  shortName: string;
  heroTagline: string;
  pricing: { from?: string; label: string }[];
  category: 'residential' | 'commercial';
}

export default function ServiceGrid({ services }: { services: ServiceCard[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map((s) => (
        <Link
          key={s.slug}
          href={`/services/${s.slug}`}
          className="group bg-[#16161e] border border-[#2a2a35] rounded-xl p-6 card-hover block"
        >
          <div className="flex items-start justify-between mb-3">
            <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${
              s.category === 'commercial'
                ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                : 'bg-[rgba(201,168,76,0.1)] text-[#c9a84c] border border-[rgba(201,168,76,0.2)]'
            }`}>
              {s.category === 'commercial' ? 'Commercial' : 'Residential'}
            </span>
            <ArrowRight
              size={16}
              className="text-[#6b6b7a] group-hover:text-[#c9a84c] transition-colors mt-1"
            />
          </div>
          <h3 className="font-display font-bold text-white mb-2 group-hover:text-[#dfc06a] transition-colors">
            {s.name}
          </h3>
          <p className="text-sm text-[#6b6b7a] mb-4 leading-relaxed line-clamp-2">{s.heroTagline}</p>
          {s.pricing[0] && (
            <p className="text-sm text-[#c9a84c] font-medium">
              From {s.pricing[0].from || s.pricing[0].label}
            </p>
          )}
        </Link>
      ))}
    </div>
  );
}
