import Image from 'next/image';

const partners = [
  { name: 'Claude', logo: '/partners/claude.jpg' },
  { name: 'Perplexity', logo: '/partners/perplexity.jpg' },
  { name: 'Gemini', logo: '/partners/gemini.jpg' },
  { name: 'Supergrok', logo: '/partners/supergrok.jpg' },
];

export function PartnerStrip() {
  return (
    <section className="py-8 sm:py-12 border-y border-white/5 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs sm:text-sm text-gray-500 uppercase tracking-wider mb-6 sm:mb-8">
          Our Partners
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12 lg:gap-16">
          {partners.map((partner) => (
            <div 
              key={partner.name} 
              className="relative h-8 sm:h-10 w-24 sm:w-32 grayscale hover:grayscale-0 opacity-70 hover:opacity-100 transition-all duration-300"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                fill
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
