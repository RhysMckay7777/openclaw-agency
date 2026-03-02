import { Search, Code, Plug, TrendingUp } from "lucide-react";

const steps = [
  {
    number: "1",
    title: "Smart Analyzing",
    description:
      "We assess your needs and identify AI solutions to streamline workflows and improve efficiency.",
    icon: Search,
    checks: ["System check", "Process check", "Speed check", "Manual work", "Repetitive tasks"],
  },
  {
    number: "2",
    title: "AI Development",
    description:
      "We build and deploy custom AI systems directly into your operations.",
    icon: Code,
    code: true,
  },
  {
    number: "3",
    title: "Seamless Integration",
    description:
      "We smoothly integrate AI solutions into your existing infrastructure with minimal disruption.",
    icon: Plug,
    integration: true,
  },
  {
    number: "4",
    title: "Continuous Optimization",
    description:
      "We refine performance, analyze insights, and enhance automation for long-term growth.",
    icon: TrendingUp,
    stats: [
      { label: "Chatbot system", value: "+20% efficiency" },
      { label: "Workflow system", value: "Update available" },
      { label: "Sales system", value: "Up to date" },
    ],
  },
];

export function Process() {
  return (
    <section
      id="process"
      className="py-16 sm:py-24"
      aria-labelledby="process-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <header className="text-center mb-10 sm:mb-16">
          <h2
            id="process-heading"
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 px-2"
          >
            Our Simple, Smart, and Scalable Process
          </h2>
          <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto px-4">
            We design, develop, and implement automation tools that help you work smarter, not harder
          </p>
        </header>

        {/* Process steps - single column on mobile */}
        <ol
          className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto"
          role="list"
          aria-label="Process steps"
        >
          {steps.map((step, index) => (
            <ProcessStep key={index} {...step} />
          ))}
        </ol>
      </div>
    </section>
  );
}

function ProcessStep({
  number,
  title,
  description,
  icon: Icon,
  checks,
  code,
  integration,
  stats,
}: {
  number: string;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  checks?: string[];
  code?: boolean;
  integration?: boolean;
  stats?: { label: string; value: string }[];
}) {
  return (
    <li
      className="relative bg-[#111111] border border-white/10 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 overflow-hidden"
      role="listitem"
    >
      {/* Step number - large background */}
      <div
        className="absolute top-2 right-3 sm:top-4 sm:right-4 text-5xl sm:text-6xl font-bold text-white/5"
        aria-hidden="true"
      >
        {number}
      </div>

      {/* Icon */}
      <div
        className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl bg-[#ff3b30]/10 border border-[#ff3b30]/20 flex items-center justify-center mb-3 sm:mb-4"
        aria-hidden="true"
      >
        <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#ff3b30]" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <p className="text-xs sm:text-sm text-[#ff3b30] font-medium mb-1 sm:mb-2">
          Step {number}
        </p>
        <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-3">{title}</h3>
        <p className="text-gray-400 text-xs sm:text-sm mb-3 sm:mb-4">{description}</p>

        {/* Visual elements based on step type */}
        {checks && (
          <ul className="flex flex-wrap gap-1.5 sm:gap-2" role="list">
            {checks.map((check, i) => (
              <li
                key={i}
                className="px-2 py-0.5 sm:px-3 sm:py-1 bg-[#ff3b30]/10 border border-[#ff3b30]/20 rounded-full text-[10px] sm:text-xs text-[#ff3b30]"
              >
                {check}
              </li>
            ))}
          </ul>
        )}

        {code && (
          <div className="code-block text-[10px] sm:text-xs overflow-x-auto">
            <span className="text-[#ff79c6]">class</span>{" "}
            <span className="text-[#8be9fd]">AutomationTrigger</span>:
            <br />
            {"  "}<span className="text-[#ff79c6]">def</span>{" "}
            <span className="text-[#50fa7b]">__init__</span>(self):
            <br />
            {"    "}self.status = <span className="text-[#f1fa8c]">"active"</span>
          </div>
        )}

        {integration && (
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="flex-1 h-1.5 sm:h-2 bg-[#ff3b30]/20 rounded-full overflow-hidden">
              <div className="h-full w-3/4 bg-[#ff3b30] rounded-full" />
            </div>
            <span className="text-[10px] sm:text-xs text-gray-500 whitespace-nowrap">Integrating...</span>
          </div>
        )}

        {stats && (
          <ul className="space-y-1.5 sm:space-y-2" role="list">
            {stats.map((stat, i) => (
              <li
                key={i}
                className="flex items-center justify-between py-1.5 px-2 sm:py-2 sm:px-3 bg-white/5 rounded-md sm:rounded-lg"
              >
                <span className="text-[10px] sm:text-xs text-gray-400">{stat.label}</span>
                <span className="text-[10px] sm:text-xs text-[#ff3b30] font-medium">{stat.value}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </li>
  );
}
