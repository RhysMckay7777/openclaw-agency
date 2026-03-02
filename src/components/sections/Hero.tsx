import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#ff3b30]/10 via-transparent to-transparent" />
      
      {/* Animated grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,59,48,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,59,48,0.03)_1px,transparent_1px)] bg-[size:100px_100px]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        {/* Eyebrow */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#ff3b30]/10 border border-[#ff3b30]/20 mb-8">
          <span className="w-2 h-2 rounded-full bg-[#ff3b30] animate-pulse" />
          <span className="text-sm font-medium text-[#ff3b30]">
            OpenClaw Agency – AI Automation Experts
          </span>
        </div>

        {/* H1 - Primary keyword placement */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
          We Are{" "}
          <span className="gradient-text">OpenClaw Agency</span>
          <br />
          <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            We Build AI Agents To Replace Your Employees
          </span>
        </h1>

        {/* Subcopy */}
        <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto mb-10">
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
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Button href="#contact" size="lg">
            Build My AI Agents
          </Button>
          <Button href="#process" variant="secondary" size="lg">
            See How It Works
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <StatCard value="$153K" label="Saved Per Year" />
          <StatCard value="10x" label="More Productive" />
          <StatCard value="24/7" label="Execution" />
          <StatCard value="2x" label="Business Growth" />
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
    </section>
  );
}

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <div className="text-3xl sm:text-4xl font-bold text-white mb-1">
        {value}
      </div>
      <div className="text-sm text-gray-500">{label}</div>
    </div>
  );
}
