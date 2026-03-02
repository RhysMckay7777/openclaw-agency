"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Do I need to know how to use AI?",
    answer:
      "No, you don't need any AI expertise. OpenClaw Agency handles everything from design to deployment. We build custom AI agents tailored to your business needs and provide full training on how to work with them.",
  },
  {
    question: "Will the AI perform worse than my employees?",
    answer:
      "Our AI agents are designed to outperform human employees on repetitive, data-driven tasks. They work 24/7 without breaks, don't make fatigue-related errors, and can process information much faster. Clients typically see 10x productivity improvements.",
  },
  {
    question: "What is the cost?",
    answer:
      "Costs vary based on the complexity of your automation needs. Most clients save between $78,000 to $153,000 per year in staff costs alone. We offer flexible pricing including one-time development fees and ongoing optimization retainers.",
  },
  {
    question: "Will this work for me?",
    answer:
      "If your business has repetitive tasks, data processing needs, customer service requirements, or operational workflows that consume staff time, AI automation can help. We work with marketing agencies, e-commerce brands, real estate companies, sales teams, and more.",
  },
  {
    question: "What can AI do for my business?",
    answer:
      "AI agents can handle lead generation, client operations, fulfilment, customer support, data entry, reporting, scheduling, and much more. Our clients have replaced entire departments while achieving better results and happier customers.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      id="faq"
      className="py-24 bg-[#0d0d0d]"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <header className="text-center mb-16">
          <h2
            id="faq-heading"
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
          >
            We've Got the Answers You're Looking For
          </h2>
          <p className="text-gray-400">
            Quick answers to your AI automation questions from OpenClaw Agency.
          </p>
        </header>

        {/* FAQ items */}
        <div className="space-y-4" role="region" aria-label="Frequently Asked Questions">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
              id={`faq-${index}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
  id,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
  id: string;
}) {
  return (
    <div className="border border-white/10 rounded-xl overflow-hidden">
      <h3>
        <button
          onClick={onToggle}
          className="w-full flex items-center justify-between p-5 text-left bg-[#111111] hover:bg-[#1a1a1a] transition-colors focus:outline-none focus:ring-2 focus:ring-inset focus:ring-[#ff3b30]"
          aria-expanded={isOpen}
          aria-controls={`${id}-content`}
          id={`${id}-button`}
        >
          <span className="font-medium text-white pr-4">{question}</span>
          <ChevronDown
            className={`w-5 h-5 text-[#ff3b30] flex-shrink-0 transition-transform duration-200 ${
              isOpen ? "rotate-180" : ""
            }`}
            aria-hidden="true"
          />
        </button>
      </h3>
      <div
        id={`${id}-content`}
        role="region"
        aria-labelledby={`${id}-button`}
        className={`overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96" : "max-h-0"
        }`}
        hidden={!isOpen}
      >
        <div className="p-5 pt-0 bg-[#111111]">
          <p className="text-gray-400 leading-relaxed">{answer}</p>
        </div>
      </div>
    </div>
  );
}
