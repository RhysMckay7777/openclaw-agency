import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "We replaced our fulfilment & client operations team. Saving $153k per year. AI Agents are 10x more productive & clients are happier.",
    company: "Marketing Agency",
    name: "LuminaWeb3",
    role: "COO",
  },
  {
    quote:
      "We removed $78,000 worth of annual staff costs & business 2x within 3 months of our AI Agents executing lead-gen tasks.",
    company: "Sales Info-Product",
    name: "ClosePro.co",
    role: "Founder",
  },
  {
    quote:
      "We didn't just save staff costs, we got better results. The AI agents actually understand our business & execute.",
    company: "$3.7M MRR E-Commerce Brand",
    name: "",
    role: "Founder",
  },
  {
    quote:
      "My agents used to dread paperwork. Now they show up and sell. The AI handles everything else. We've never had a quarter like this.",
    company: "Real Estate Agency",
    name: "",
    role: "Operations Director",
  },
];

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-16 sm:py-24 bg-[#0d0d0d]"
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <header className="text-center mb-10 sm:mb-16">
          <h2
            id="testimonials-heading"
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-3 sm:mb-4 px-2"
          >
            Recent Client Success Stories
          </h2>
          <p className="text-sm sm:text-base text-gray-400 max-w-2xl mx-auto px-4">
            See how OpenClaw Agency has helped businesses replace manual work
            with AI agents that deliver real results.
          </p>
        </header>

        {/* Testimonials grid - single column on mobile */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-5xl mx-auto"
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
}: {
  quote: string;
  company: string;
  name: string;
  role: string;
}) {
  return (
    <article
      className="relative bg-[#111111] border border-white/10 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8"
      role="listitem"
    >
      {/* Quote icon */}
      <div className="mb-3 sm:mb-4" aria-hidden="true">
        <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-[#ff3b30]/30" />
      </div>

      {/* Quote text */}
      <blockquote className="text-gray-300 text-sm sm:text-base md:text-lg leading-relaxed mb-4 sm:mb-6">
        "{quote}"
      </blockquote>

      {/* Attribution */}
      <footer className="flex items-center gap-3 sm:gap-4">
        {/* Avatar */}
        <div
          className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-br from-[#ff3b30] to-[#ff6b5b] flex items-center justify-center flex-shrink-0"
          aria-hidden="true"
        >
          <span className="text-white font-bold text-xs sm:text-sm">
            {name ? name[0] : company[0]}
          </span>
        </div>
        <div className="min-w-0">
          <cite className="block font-semibold text-white not-italic text-sm sm:text-base truncate">
            {company}
          </cite>
          <div className="text-xs sm:text-sm text-gray-500 truncate">
            {name && `${name} • `}{role}
          </div>
        </div>
      </footer>
    </article>
  );
}
