import { Button } from "@/components/ui/Button";
import { CalendlyEmbed } from "@/components/sections/CalendlyEmbed";
import { ArrowRight, Mail } from "lucide-react";

export function FinalCTA() {
  return (
    <section
      id="contact"
      className="py-24 relative overflow-hidden"
      aria-labelledby="cta-heading"
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-[#ff3b30]/10 via-transparent to-transparent"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Badge */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#ff3b30]/10 border border-[#ff3b30]/20 mb-8">
            <span
              className="w-2 h-2 rounded-full bg-[#ff3b30] animate-pulse"
              aria-hidden="true"
            />
            <span className="text-sm font-medium text-[#ff3b30]">
              Limited Spots Available
            </span>
          </div>

          {/* Heading */}
          <h2
            id="cta-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6"
          >
            No More Hiring & Firing.
          </h2>

          <p className="text-xl text-gray-400 mb-4">
            Set up your OpenClaw automation stack which will scale your business.
          </p>

          <p className="text-lg text-gray-500 mb-10 max-w-2xl mx-auto">
            Join the businesses saving{" "}
            <span className="text-white font-medium">$78,000 - $153,000/year</span>{" "}
            with OpenClaw Agency's AI agents.
          </p>
        </div>

        {/* Two column layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Calendly Embed */}
          <div id="booking" className="bg-[#111111] rounded-2xl border border-white/10 overflow-hidden">
            <CalendlyEmbed />
          </div>

          {/* Right: Benefits + Contact */}
          <div className="space-y-8">
            {/* Trust indicators */}
            <div className="bg-[#111111] rounded-2xl border border-white/10 p-8">
              <h3 className="text-xl font-bold text-white mb-6">
                What You'll Get in This Call
              </h3>
              <ul className="space-y-4">
                <TrustItem text="30-minute strategy session with our team" />
                <TrustItem text="Custom AI assessment for your business" />
                <TrustItem text="ROI projection and cost savings analysis" />
                <TrustItem text="Implementation timeline and next steps" />
                <TrustItem text="No commitment required" />
              </ul>
            </div>

            {/* Alternative contact */}
            <div className="bg-[#111111] rounded-2xl border border-white/10 p-8">
              <h3 className="text-lg font-semibold text-white mb-4">
                Prefer Email?
              </h3>
              <Button
                href="mailto:hello@openclawagency.ai"
                variant="outline"
                className="w-full"
                aria-label="Email OpenClaw Agency"
              >
                <Mail className="w-5 h-5 mr-2" aria-hidden="true" />
                hello@openclawagency.ai
              </Button>
            </div>

            {/* Quick form */}
            <div className="bg-[#111111] rounded-2xl border border-white/10 p-8">
              <h3 className="text-lg font-semibold text-white mb-4">
                Get a Free Automation Audit
              </h3>
              <form
                className="space-y-4"
                action="https://formspree.io/f/your-form-id"
                method="POST"
              >
                <div>
                  <label htmlFor="email-input" className="sr-only">
                    Your email address
                  </label>
                  <input
                    id="email-input"
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#ff3b30] focus:border-transparent"
                  />
                </div>
                <Button type="submit" className="w-full">
                  Audit My Automation Opportunities
                  <ArrowRight className="w-5 h-5 ml-2" aria-hidden="true" />
                </Button>
              </form>
              <p className="text-xs text-gray-500 mt-3 text-center">
                No spam, ever. Unsubscribe anytime.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustItem({ text }: { text: string }) {
  return (
    <li className="flex items-center gap-3">
      <svg
        className="w-5 h-5 text-[#ff3b30] flex-shrink-0"
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
      <span className="text-gray-300">{text}</span>
    </li>
  );
}
