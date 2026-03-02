import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section
      className="relative min-h-[90vh] sm:min-h-screen flex items-center justify-center pt-20 pb-16 sm:pt-24 overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-[#ff3b30]/10 via-transparent to-transparent"
        aria-hidden="true"
      />

      {/* Animated grid background */}
      <div
        className="absolute inset-0 bg-[linear-gradient(rgba(255,59,48,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,59,48,0.03)_1px,transparent_1px)] bg-[size:60px_60px] sm:bg-[size:100px_100px]"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[#ff3b30]/10 border border-[#ff3b30]/20 mb-6 sm:mb-8">
          <span
            className="w-2 h-2 rounded-full bg-[#ff3b30] animate-pulse"
            aria-hidden="true"
          />
          <span className="text-xs sm:text-sm font-medium text-[#ff3b30]">
            OpenClaw Agency
          </span>
        </div>

        {/* H1 - Primary headline matching live site exactly */}
        <h1
          id="hero-heading"
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 sm:mb-6 px-2"
        >
          We Build AI Agents To{" "}
          <span className="gradient-text">Replace Your Employees</span>
        </h1>

        {/* Subcopy - matches live site */}
        <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-8 sm:mb-10 px-2">
          <span className="text-white font-medium">24/7 Execution</span>,{" "}
          <span className="text-white font-medium">Higher Quality Work</span>,{" "}
          <span className="text-[#ff3b30] font-medium">Saving Costs</span>
        </p>

        {/* CTA - single prominent button for mobile */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-10 px-4"
          role="group"
          aria-label="Call to action buttons"
        >
          <Button
            href="#booking"
            size="lg"
            className="w-full sm:w-auto min-h-[52px] text-base"
            aria-label="Book a Strategy Call with OpenClaw Agency"
          >
            Book a Strategy Call
          </Button>
          <Button
            href="#services"
            variant="secondary"
            size="lg"
            className="w-full sm:w-auto min-h-[52px] text-base"
            aria-label="Learn How OpenClaw Agency Works"
          >
            How It Works
          </Button>
        </div>

        {/* Trust Badge */}
        <p className="text-xs sm:text-sm text-gray-500 px-4">
          Trusted by AI-first teams worldwide
        </p>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent"
        aria-hidden="true"
      />
    </section>
  );
}
