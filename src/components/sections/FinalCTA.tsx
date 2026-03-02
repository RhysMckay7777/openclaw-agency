import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export function FinalCTA() {
  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#ff3b30]/10 via-transparent to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#ff3b30]/10 border border-[#ff3b30]/20 mb-8">
          <span className="w-2 h-2 rounded-full bg-[#ff3b30] animate-pulse" />
          <span className="text-sm font-medium text-[#ff3b30]">
            Limited Spots Available
          </span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6">
          No More Hiring & Firing.
        </h2>

        <p className="text-xl text-gray-400 mb-4">
          Set up your automation stack which will scale your business.
        </p>

        <p className="text-lg text-gray-500 mb-10 max-w-2xl mx-auto">
          Join the businesses saving{" "}
          <span className="text-white font-medium">$78,000 - $153,000/year</span>{" "}
          with OpenClaw Agency's AI agents. Get started with a free consultation.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button href="https://calendly.com" size="lg" className="group">
            Book Free Consultation
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button href="mailto:hello@openclawagency.ai" variant="outline" size="lg">
            Contact Us
          </Button>
        </div>

        {/* Trust indicators */}
        <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-gray-500">
          <div className="flex items-center gap-2">
            <svg
              className="w-5 h-5 text-[#ff3b30]"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span>No commitment required</span>
          </div>
          <div className="flex items-center gap-2">
            <svg
              className="w-5 h-5 text-[#ff3b30]"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span>30-minute strategy call</span>
          </div>
          <div className="flex items-center gap-2">
            <svg
              className="w-5 h-5 text-[#ff3b30]"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span>Custom AI assessment</span>
          </div>
        </div>
      </div>
    </section>
  );
}
