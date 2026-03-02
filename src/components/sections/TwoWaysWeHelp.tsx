import { Code2, GraduationCap } from "lucide-react";

export function TwoWaysWeHelp() {
  return (
    <section id="services" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            The Two Ways{" "}
            <span className="gradient-text">OpenClaw Agency</span> Helps
            Companies
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Whether you need us to build your AI automation stack or teach your
            team to do it themselves, we've got you covered.
          </p>
        </div>

        {/* Two cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Card 1: Automation Development */}
          <div className="group relative bg-[#111111] border border-white/10 rounded-2xl p-8 hover:border-[#ff3b30]/50 transition-all duration-300">
            {/* Glow effect on hover */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#ff3b30]/0 to-[#ff3b30]/0 group-hover:from-[#ff3b30]/5 group-hover:to-transparent transition-all duration-300" />

            <div className="relative z-10">
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-[#ff3b30]/10 border border-[#ff3b30]/20 flex items-center justify-center mb-6">
                <Code2 className="w-7 h-7 text-[#ff3b30]" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-white mb-4">
                OpenClaw Automation Development
              </h3>
              <p className="text-gray-400 mb-6">
                We build secure, production-grade AI employees that plug
                directly into your business. Custom OpenClaw agents built for
                your needs, deployed in days — not months.
              </p>

              {/* Features */}
              <ul className="space-y-3">
                <FeatureItem text="Custom AI agents tailored to your workflows" />
                <FeatureItem text="Production-ready in days, not months" />
                <FeatureItem text="24/7 execution without human oversight" />
                <FeatureItem text="Seamless integration with your stack" />
              </ul>
            </div>
          </div>

          {/* Card 2: AI Consultancy */}
          <div className="group relative bg-[#111111] border border-white/10 rounded-2xl p-8 hover:border-[#ff3b30]/50 transition-all duration-300">
            {/* Glow effect on hover */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#ff3b30]/0 to-[#ff3b30]/0 group-hover:from-[#ff3b30]/5 group-hover:to-transparent transition-all duration-300" />

            <div className="relative z-10">
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-[#ff3b30]/10 border border-[#ff3b30]/20 flex items-center justify-center mb-6">
                <GraduationCap className="w-7 h-7 text-[#ff3b30]" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-white mb-4">
                AI Automation Consultancy
              </h3>
              <p className="text-gray-400 mb-6">
                Hands-on training that teaches you or your team how to properly
                implement AI in ways that actually grow your business. Learn the
                OpenClaw methodology.
              </p>

              {/* Features */}
              <ul className="space-y-3">
                <FeatureItem text="Hands-on workshops for your team" />
                <FeatureItem text="AI strategy & roadmap development" />
                <FeatureItem text="Best practices from real implementations" />
                <FeatureItem text="Ongoing support & optimization" />
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-3">
      <div className="w-5 h-5 rounded-full bg-[#ff3b30]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
        <svg
          className="w-3 h-3 text-[#ff3b30]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>
      <span className="text-gray-300 text-sm">{text}</span>
    </li>
  );
}
