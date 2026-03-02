import { Button } from "@/components/ui/Button";
import { ArrowRight, Calendar, Mail } from "lucide-react";

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

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
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
          with OpenClaw Agency's AI agents. Get started with a free consultation.
        </p>

        {/* CTA Buttons */}
        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8"
          role="group"
          aria-label="Contact options"
        >
          <Button
            href="https://calendly.com/openclawagency"
            size="lg"
            className="group"
            aria-label="Book an OpenClaw Agency Strategy Call"
          >
            <Calendar className="w-5 h-5 mr-2" aria-hidden="true" />
            Book an OpenClaw Agency Strategy Call
            <ArrowRight
              className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform"
              aria-hidden="true"
            />
          </Button>
          <Button
            href="mailto:hello@openclawagency.ai"
            variant="outline"
            size="lg"
            aria-label="Email OpenClaw Agency"
          >
            <Mail className="w-5 h-5 mr-2" aria-hidden="true" />
            Contact Us
          </Button>
        </div>

        {/* Quick Lead Form */}
        <div className="max-w-md mx-auto mb-12">
          <form
            className="flex flex-col sm:flex-row gap-3"
            action="https://formspree.io/f/your-form-id"
            method="POST"
          >
            <label htmlFor="email-input" className="sr-only">
              Your email address
            </label>
            <input
              id="email-input"
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#ff3b30] focus:border-transparent"
              aria-describedby="email-help"
            />
            <Button type="submit" aria-label="Audit My Automation Opportunities">
              Audit My Opportunities
            </Button>
          </form>
          <p id="email-help" className="text-xs text-gray-500 mt-2">
            Get a free automation audit. No spam, ever.
          </p>
        </div>

        {/* Trust indicators */}
        <ul
          className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-500"
          role="list"
          aria-label="Trust indicators"
        >
          <li className="flex items-center gap-2" role="listitem">
            <svg
              className="w-5 h-5 text-[#ff3b30]"
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
            <span>No commitment required</span>
          </li>
          <li className="flex items-center gap-2" role="listitem">
            <svg
              className="w-5 h-5 text-[#ff3b30]"
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
            <span>30-minute strategy call</span>
          </li>
          <li className="flex items-center gap-2" role="listitem">
            <svg
              className="w-5 h-5 text-[#ff3b30]"
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
            <span>Custom AI assessment</span>
          </li>
        </ul>
      </div>
    </section>
  );
}
