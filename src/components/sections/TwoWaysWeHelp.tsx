import { Code2, GraduationCap } from "lucide-react";

export function TwoWaysWeHelp() {
  return (
    <section
      id="services"
      className="py-16 sm:py-24 relative"
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <header className="text-center mb-10 sm:mb-16">
          <h2
            id="services-heading"
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 px-2"
          >
            The Two Ways We Help Companies
          </h2>
          <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto px-4">
            Whether you need us to build your AI automation stack or teach your
            team to do it themselves, we've got you covered.
          </p>
        </header>

        {/* Two cards - stacked on mobile */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto"
          role="list"
        >
          {/* Card 1: Automation Development */}
          <article
            className="group relative bg-[#111111] border border-white/10 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 hover:border-[#ff3b30]/50 transition-all duration-300"
            role="listitem"
          >
            <div className="relative z-10">
              {/* Icon */}
              <div
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-[#ff3b30]/10 border border-[#ff3b30]/20 flex items-center justify-center mb-4 sm:mb-6"
                aria-hidden="true"
              >
                <Code2 className="w-6 h-6 sm:w-7 sm:h-7 text-[#ff3b30]" />
              </div>

              {/* Content */}
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                Automation Development
              </h3>
              <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6">
                We build secure, production-grade AI employees that plug
                directly into your business. Custom agents built for your needs,
                deployed in days.
              </p>

              {/* Features */}
              <ul className="space-y-2 sm:space-y-3" role="list">
                <FeatureItem text="Custom AI agents tailored to your workflows" />
                <FeatureItem text="Production-ready in days, not months" />
                <FeatureItem text="24/7 execution without human oversight" />
                <FeatureItem text="Seamless integration with your stack" />
              </ul>
            </div>
          </article>

          {/* Card 2: AI Consultancy */}
          <article
            className="group relative bg-[#111111] border border-white/10 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 hover:border-[#ff3b30]/50 transition-all duration-300"
            role="listitem"
          >
            <div className="relative z-10">
              {/* Icon */}
              <div
                className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-[#ff3b30]/10 border border-[#ff3b30]/20 flex items-center justify-center mb-4 sm:mb-6"
                aria-hidden="true"
              >
                <GraduationCap className="w-6 h-6 sm:w-7 sm:h-7 text-[#ff3b30]" />
              </div>

              {/* Content */}
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">
                AI Consultancy
              </h3>
              <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6">
                Hands-on training that teaches you or your team how to properly
                implement AI in ways that actually grow your business.
              </p>

              {/* Features */}
              <ul className="space-y-2 sm:space-y-3" role="list">
                <FeatureItem text="Hands-on workshops for your team" />
                <FeatureItem text="AI strategy & roadmap development" />
                <FeatureItem text="Best practices from real implementations" />
                <FeatureItem text="Ongoing support & optimization" />
              </ul>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}

function FeatureItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-2 sm:gap-3" role="listitem">
      <div
        className="w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#ff3b30]/10 flex items-center justify-center flex-shrink-0 mt-0.5"
        aria-hidden="true"
      >
        <svg
          className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-[#ff3b30]"
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
      <span className="text-gray-300 text-xs sm:text-sm">{text}</span>
    </li>
  );
}
