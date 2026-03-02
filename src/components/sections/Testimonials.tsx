"use client";

import { Quote } from "lucide-react";
import { YouTubeEmbed } from "@/components/ui/YouTubeEmbed";
import Image from "next/image";
import { useState } from "react";

const testimonials = [
  {
    quote:
      "We replaced our fulfilment & client operations team. Saving $153k per year. AI Agents are 10x more productive & clients are happier.",
    company: "Marketing Agency",
    name: "LuminaWeb3",
    role: "COO",
    image: "/testimonials/luminaweb3.jpg",
  },
  {
    quote:
      "We removed $78,000 worth of annual staff costs & business 2x within 3 months of our AI Agents executing lead-gen tasks.",
    company: "Sales Info-Product",
    name: "ClosePro.co",
    role: "Founder",
    image: "/testimonials/closepro.jpg",
  },
  {
    quote:
      "We didn't just save staff costs, we got better results. The AI agents actually understand our business & execute.",
    company: "$3.7M MRR E-Commerce Brand",
    name: "",
    role: "Founder",
    image: "/testimonials/ecommerce.jpg",
  },
  {
    quote:
      "My agents used to dread paperwork. Now they show up and sell. The AI handles everything else. We've never had a quarter like this.",
    company: "Real Estate Agency",
    name: "",
    role: "Operations Director",
    image: "/testimonials/realestate.jpg",
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
        </header>

        {/* Video Testimonial - First */}
        <div className="max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="relative">
            <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-[#ff3b30]/10 to-[#ff3b30]/10 rounded-2xl sm:rounded-3xl blur-xl" aria-hidden="true" />
            <YouTubeEmbed
              videoId="C67xIe0K46M"
              title="OpenClaw Agency Client Success Stories"
              className="relative z-10 border border-white/10"
            />
          </div>
        </div>

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
  image,
}: {
  quote: string;
  company: string;
  name: string;
  role: string;
  image: string;
}) {
  const [imageError, setImageError] = useState(false);
  
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
        &ldquo;{quote}&rdquo;
      </blockquote>

      {/* Attribution with image */}
      <footer className="flex items-center gap-3 sm:gap-4">
        {/* Photo/Avatar */}
        <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden bg-gradient-to-br from-[#ff3b30] to-[#ff6b5b] flex-shrink-0">
          {image && !imageError ? (
            <Image
              src={image}
              alt={`${name || company} testimonial`}
              fill
              className="object-cover"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white font-bold text-sm sm:text-base">
                {name ? name[0] : company[0]}
              </span>
            </div>
          )}
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
