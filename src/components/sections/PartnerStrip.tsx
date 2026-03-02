export function PartnerStrip() {
  return (
    <section className="py-12 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm text-gray-500 mb-8 uppercase tracking-wider">
          Our Partner & Technology Stack
        </p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-60">
          {/* Partner logos - placeholder divs for actual logos */}
          <PartnerLogo name="OpenClaw" />
          <PartnerLogo name="Claude AI" />
          <PartnerLogo name="OpenAI" />
          <PartnerLogo name="Anthropic" />
          <PartnerLogo name="Make" />
          <PartnerLogo name="n8n" />
        </div>
      </div>
    </section>
  );
}

function PartnerLogo({ name }: { name: string }) {
  return (
    <div className="flex items-center gap-2 text-gray-400">
      <div className="w-8 h-8 rounded bg-white/10 flex items-center justify-center">
        <span className="text-xs font-bold">{name[0]}</span>
      </div>
      <span className="text-sm font-medium">{name}</span>
    </div>
  );
}
