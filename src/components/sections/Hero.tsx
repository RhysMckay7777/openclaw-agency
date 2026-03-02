import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { YouTubeEmbed } from "@/components/ui/YouTubeEmbed";

export function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Background gradient */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-[#ff3b30]/10 via-transparent to-transparent"
        aria-hidden="true"
      />

      {/* Animated grid background */}
      <div
        className="absolute inset-0 bg-[linear-gradient(rgba(255,59,48,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,59,48,0.03)_1px,transparent_1px)] bg-[size:100px_100px]"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text */}
          <div className="text-center lg:text-left">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#ff3b30]/10 border border-[#ff3b30]/20 mb-8">
              <span
                className="w-2 h-2 rounded-full bg-[#ff3b30] animate-pulse"
                aria-hidden="true"
              />
              <span className="text-sm font-medium text-[#ff3b30]">
                OpenClaw Agency – AI Automation Experts
              </span>
            </div>

            {/* H1 - Primary keyword placement */}
            <h1
              id="hero-heading"
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            >
              We Are <span className="gradient-text">OpenClaw Agency</span>
              <br />
              <span className="text-3xl sm:text-4xl lg:text-5xl">
                We Build AI Agents To Replace Your Employees
              </span>
            </h1>

            {/* Subcopy */}
            <p className="text-lg sm:text-xl text-gray-400 max-w-xl mb-10">
              OpenClaw-powered AI agents that execute{" "}
              <span className="text-white font-medium">24/7</span>, deliver{" "}
              <span className="text-white font-medium">higher quality work</span>,
              and save you{" "}
              <span className="text-[#ff3b30] font-medium">
                $78,000 - $153,000 per year
              </span>{" "}
              in staff costs.
            </p>

            {/* CTAs */}
            <div
              className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 mb-10"
              role="group"
              aria-label="Call to action buttons"
            >
              <Button
                href="#booking"
                size="lg"
                aria-label="Book an OpenClaw Agency Strategy Call"
              >
                Book an OpenClaw Agency Strategy Call
              </Button>
              <Button
                href="#services"
                variant="secondary"
                size="lg"
                aria-label="Audit My Automation Opportunities"
              >
                Audit My Opportunities
              </Button>
            </div>

            {/* Trust Badge */}
            <p className="text-sm text-gray-500">
              Trusted by AI-first teams • Built on OpenClaw and modern AI stacks
            </p>
          </div>

          {/* Right side - Video */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#ff3b30]/20 to-transparent rounded-3xl blur-2xl" aria-hidden="true" />
            <YouTubeEmbed
              videoId="JpIKD1OPQvQ"
              title="OpenClaw Agency Introduction"
              className="relative z-10 border border-white/10 shadow-2xl"
            />
          </div>
        </div>

        {/* Stats */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mt-20"
          role="list"
          aria-label="Key statistics"
        >
          <StatCard value="$153K" label="Saved Per Year" />
          <StatCard value="10x" label="More Productive" />
          <StatCard value="24/7" label="Execution" />
          <StatCard value="2x" label="Business Growth" />
        </div>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent"
        aria-hidden="true"
      />
    </section>
  );
}

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center" role="listitem">
      <div className="text-3xl sm:text-4xl font-bold text-white mb-1">
        {value}
      </div>
      <div className="text-sm text-gray-500">{label}</div>
    </div>
  );
}
