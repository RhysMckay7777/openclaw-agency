import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "We replaced our fulfilment & client operations team. Saving $153k per year. AI Agents are 10x more productive & clients are happier.",
    company: "Marketing Agency",
    name: "LuminaWeb3",
    role: "COO",
    highlight: "$153k",
  },
  {
    quote:
      "We removed $78,000 worth of annual staff costs & business 2x within 3 months of our AI Agents executing lead-gen tasks.",
    company: "Sales Info-Product",
    name: "ClosePro.co",
    role: "Founder",
    highlight: "$78,000",
  },
  {
    quote:
      "We didn't just save staff costs, we got better results. The AI agents actually understand our business & execute.",
    company: "$3.7M MRR E-Commerce Brand",
    name: "",
    role: "Founder",
    highlight: "$3.7M MRR",
  },
  {
    quote:
      "My agents used to dread paperwork. Now they show up and sell. The AI handles everything else. We've never had a quarter like this.",
    company: "Real Estate Agency",
    name: "",
    role: "Operations Director",
    highlight: "Best Quarter",
  },
];

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-24 bg-[#0d0d0d]"
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <header className="text-center mb-16">
          <h2
            id="testimonials-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Recent Client Success Stories
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            See how OpenClaw Agency has helped businesses replace manual work
            with AI agents that deliver real results.
          </p>
        </header>

        {/* Testimonials grid */}
        <div
          className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto"
          role="list"
          aria-label="Client testimonials"
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({
  quote,
  company,
  name,
  role,
  highlight,
}: {
  quote: string;
  company: string;
  name: string;
  role: string;
  highlight: string;
}) {
  return (
    <article
      className="relative bg-[#111111] border border-white/10 rounded-2xl p-6 sm:p-8"
      role="listitem"
    >
      {/* Highlight badge */}
      <div
        className="absolute -top-3 right-6 px-3 py-1 bg-[#ff3b30] rounded-full"
        aria-label={`Key result: ${highlight}`}
      >
        <span className="text-xs font-bold text-white">{highlight}</span>
      </div>

      {/* Quote icon */}
      <div className="mb-4" aria-hidden="true">
        <Quote className="w-8 h-8 text-[#ff3b30]/30" />
      </div>

      {/* Quote text */}
      <blockquote className="text-gray-300 text-lg leading-relaxed mb-6">
        "{quote}"
      </blockquote>

      {/* Attribution */}
      <footer className="flex items-center gap-4">
        {/* Avatar placeholder */}
        <div
          className="w-12 h-12 rounded-full bg-gradient-to-br from-[#ff3b30] to-[#ff6b5b] flex items-center justify-center"
          aria-hidden="true"
        >
          <span className="text-white font-bold text-sm">
            {name ? name[0] : company[0]}
          </span>
        </div>
        <div>
          <cite className="font-semibold text-white not-italic">
            {name || "Anonymous"}
          </cite>
          <div className="text-sm text-gray-500">
            {role} • {company}
          </div>
        </div>
      </footer>
    </article>
  );
}
