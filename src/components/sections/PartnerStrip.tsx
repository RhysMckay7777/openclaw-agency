import Image from 'next/image';

const partners = [
  { name: 'Claude', logo: '/partners/claude.jpg' },
  { name: 'Perplexity', logo: '/partners/perplexity.jpg' },
  { name: 'Gemini', logo: '/partners/gemini.jpg' },
];

export function PartnerStrip() {
  return (
    <section className="py-8 sm:py-12 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs sm:text-sm text-gray-500 uppercase tracking-wider mb-6 sm:mb-8">
          Our Partners
        </p>
        <div className="flex flex-wrap justify-center items-center gap-10 sm:gap-16 lg:gap-20">
          {partners.map((partner) => (
            <div 
              key={partner.name} 
              className="relative h-8 sm:h-10 w-28 sm:w-36 opacity-80 hover:opacity-100 transition-all duration-300"
              style={{ filter: 'invert(1) brightness(0.7)' }}
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
