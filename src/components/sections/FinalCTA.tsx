import { Button } from "@/components/ui/Button";
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

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Badge */}
        <div className="text-center mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[#ff3b30]/10 border border-[#ff3b30]/20 mb-6 sm:mb-8">
            <span
              className="w-2 h-2 rounded-full bg-[#ff3b30] animate-pulse"
              aria-hidden="true"
            />
            <span className="text-xs sm:text-sm font-medium text-[#ff3b30]">
              Limited Spots Available
            </span>
          </div>

          {/* Heading - matches live site */}
          <h2
            id="cta-heading"
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 px-2"
          >
            No More Hiring & Firing.
          </h2>

          <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-3 sm:mb-4 px-4">
            Set up your automation stack which will scale your business.
          </p>

          <p className="text-sm sm:text-base text-gray-500 mb-8 sm:mb-10 max-w-2xl mx-auto px-4">
            Join the businesses saving{" "}
            <span className="text-white font-medium">$78,000 - $153,000/year</span>{" "}
            with AI agents.
          </p>
        </div>

        {/* Single column on mobile, two columns on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start">
          {/* Calendly Embed */}
          <div id="booking" className="bg-[#111111] rounded-xl sm:rounded-2xl border border-white/10 overflow-hidden order-2 lg:order-1">
            <CalendlyEmbed />
          </div>

          {/* Benefits */}
          <div className="space-y-4 sm:space-y-6 order-1 lg:order-2">
            {/* What You'll Get */}
            <div className="bg-[#111111] rounded-xl sm:rounded-2xl border border-white/10 p-5 sm:p-6 md:p-8">
              <h3 className="text-lg sm:text-xl font-bold text-white mb-4 sm:mb-6">
                What You'll Get in This Call
              </h3>
              <ul className="space-y-3 sm:space-y-4">
                <TrustItem text="30-minute strategy session with our team" />
                <TrustItem text="Custom AI assessment for your business" />
                <TrustItem text="ROI projection and cost savings analysis" />
                <TrustItem text="Implementation timeline and next steps" />
                <TrustItem text="No commitment required" />
              </ul>
            </div>

            {/* Alternative contact - mobile friendly */}
            <div className="bg-[#111111] rounded-xl sm:rounded-2xl border border-white/10 p-5 sm:p-6 md:p-8">
              <h3 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">
                Prefer Email?
              </h3>
              <Button
                href="mailto:hello@openclawagency.ai"
                variant="outline"
                className="w-full min-h-[48px]"
                aria-label="Email OpenClaw Agency"
              >
                hello@openclawagency.ai
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustItem({ text }: { text: string }) {
  return (
    <li className="flex items-center gap-2 sm:gap-3">
      <svg
        className="w-4 h-4 sm:w-5 sm:h-5 text-[#ff3b30] flex-shrink-0"
        fill="currentColor"
        viewBox="0 0 20 20"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
          clipRule="evenodd"
        />
      </svg>
      <span className="text-gray-300 text-sm sm:text-base">{text}</span>
    </li>
  );
}
