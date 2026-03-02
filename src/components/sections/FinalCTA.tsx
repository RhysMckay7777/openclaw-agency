import { CalendlyEmbed } from "@/components/sections/CalendlyEmbed";

export function FinalCTA() {
  return (
    <section
      id="contact"
      className="py-16 sm:py-24 relative overflow-hidden"
      aria-labelledby="cta-heading"
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-[#ff3b30]/10 via-transparent to-transparent"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading - matches live site exactly */}
        <div className="text-center mb-8 sm:mb-12">
          <h2
            id="cta-heading"
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 px-2"
          >
            No More Hiring & Firing.
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-gray-400 px-4">
            Set-up Your Automation Stack Which Will Scale Your Business
          </p>
        </div>

        {/* Calendly Embed - Centered and prominent like live site */}
        <div id="booking" className="bg-[#111111] rounded-xl sm:rounded-2xl border border-white/10 overflow-hidden max-w-2xl mx-auto">
          <CalendlyEmbed />
        </div>
      </div>
    </section>
  );
}
