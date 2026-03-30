import { Shield, Award, Clock, MapPin, CheckCircle, Star } from 'lucide-react';

const signals = [
  { icon: CheckCircle, text: '10+ Years Experience' },
  { icon: Shield, text: 'Approved Applicators' },
  { icon: Award, text: 'Up To 25-Year Warranties' },
  { icon: Star, text: '5★ Rated' },
  { icon: Clock, text: 'Free Surveys' },
  { icon: MapPin, text: 'UK-Wide Coverage' },
];

export default function TrustBar() {
  // Double the items for infinite marquee
  const items = [...signals, ...signals, ...signals, ...signals];

  return (
    <div className="relative bg-[#111118] border-y border-[rgba(201,168,76,0.1)] overflow-hidden">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#111118] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#111118] to-transparent z-10 pointer-events-none" />

      <div className="py-4 lg:py-5 overflow-hidden">
        <div className="marquee-track">
          {items.map(({ icon: Icon, text }, i) => (
            <div
              key={`${text}-${i}`}
              className="flex items-center gap-2.5 mx-6 sm:mx-8 whitespace-nowrap"
            >
              <div className="w-6 h-6 rounded-full bg-[rgba(201,168,76,0.08)] flex items-center justify-center flex-shrink-0">
                <Icon size={12} className="text-[#c9a84c]" />
              </div>
              <span className="text-xs sm:text-sm text-[#a0a0b0] font-medium">{text}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
