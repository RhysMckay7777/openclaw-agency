import { Search, Code, Plug, TrendingUp } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Smart Analyzing",
    description:
      "We assess your needs and identify AI solutions to streamline workflows and improve efficiency.",
    icon: Search,
    checks: [
      "System check",
      "Process check",
      "Speed check",
      "Manual work",
      "Repetitive tasks",
    ],
  },
  {
    number: "02",
    title: "AI Development",
    description:
      "We build and deploy custom OpenClaw AI systems directly into your operations.",
    icon: Code,
    code: true,
  },
  {
    number: "03",
    title: "Seamless Integration",
    description:
      "We smoothly integrate AI solutions into your existing infrastructure with minimal disruption.",
    icon: Plug,
    integration: true,
  },
  {
    number: "04",
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
      className="py-24"
      aria-labelledby="process-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <header className="text-center mb-16">
          <h2
            id="process-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Our Simple, Smart, and Scalable Process
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            OpenClaw Agency designs, develops, and implements automation tools
            that help you work smarter, not harder.
          </p>
        </header>

        {/* Process steps */}
        <ol
          className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto"
          role="list"
          aria-label="OpenClaw Agency process steps"
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
      className="relative bg-[#111111] border border-white/10 rounded-2xl p-6 sm:p-8 overflow-hidden"
      role="listitem"
    >
      {/* Step number */}
      <div
        className="absolute top-4 right-4 text-6xl font-bold text-white/5"
        aria-hidden="true"
      >
        {number}
      </div>

      {/* Icon */}
      <div
        className="w-12 h-12 rounded-xl bg-[#ff3b30]/10 border border-[#ff3b30]/20 flex items-center justify-center mb-4"
        aria-hidden="true"
      >
        <Icon className="w-6 h-6 text-[#ff3b30]" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <p className="text-sm text-[#ff3b30] font-medium mb-2" aria-hidden="true">
          Step {number}
        </p>
        <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
        <p className="text-gray-400 text-sm mb-4">{description}</p>

        {/* Visual elements based on step type */}
        {checks && (
          <ul className="flex flex-wrap gap-2" role="list" aria-label="Analysis checks">
            {checks.map((check, i) => (
              <li
                key={i}
                className="px-3 py-1 bg-[#ff3b30]/10 border border-[#ff3b30]/20 rounded-full text-xs text-[#ff3b30]"
              >
                {check}
              </li>
            ))}
          </ul>
        )}

        {code && (
          <div className="code-block text-xs" aria-label="Example automation code">
            <span className="text-[#ff79c6]">class</span>{" "}
            <span className="text-[#8be9fd]">AutomationTrigger</span>:
            <br />
            {"  "}
            <span className="text-[#ff79c6]">def</span>{" "}
            <span className="text-[#50fa7b]">__init__</span>(self, threshold):
            <br />
            {"    "}self.threshold = threshold
            <br />
            {"    "}self.status ={" "}
            <span className="text-[#f1fa8c]">"active"</span>
          </div>
        )}

        {integration && (
          <div
            className="flex items-center gap-4"
            role="progressbar"
            aria-valuenow={75}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label="Integration progress"
          >
            <div className="flex-1 h-2 bg-[#ff3b30]/20 rounded-full overflow-hidden">
              <div className="h-full w-3/4 bg-[#ff3b30] rounded-full" />
            </div>
            <span className="text-xs text-gray-500">Integrating...</span>
          </div>
        )}

        {stats && (
          <ul className="space-y-2" role="list" aria-label="System status">
            {stats.map((stat, i) => (
              <li
                key={i}
                className="flex items-center justify-between py-2 px-3 bg-white/5 rounded-lg"
              >
                <span className="text-xs text-gray-400">{stat.label}</span>
                <span className="text-xs text-[#ff3b30] font-medium">
                  {stat.value}
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </li>
  );
}
