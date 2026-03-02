export function PartnerStrip() {
  return (
    <section className="py-8 sm:py-12 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs sm:text-sm text-gray-500 mb-6 sm:mb-8 uppercase tracking-wider">
          Our Partner
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 md:gap-16 opacity-60">
          {/* Partner logos */}
          <PartnerLogo name="OpenClaw" />
          <PartnerLogo name="Claude AI" />
          <PartnerLogo name="OpenAI" />
          <PartnerLogo name="Make" />
          <PartnerLogo name="n8n" />
        </div>
      </div>
    </section>
  );
}

function PartnerLogo({ name }: { name: string }) {
  return (
    <div className="flex items-center gap-1.5 sm:gap-2 text-gray-400">
      <div className="w-6 h-6 sm:w-8 sm:h-8 rounded bg-white/10 flex items-center justify-center">
        <span className="text-[10px] sm:text-xs font-bold">{name[0]}</span>
      </div>
      <span className="text-xs sm:text-sm font-medium">{name}</span>
    </div>
  );
}
