import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "You're Booked! | OpenClaw Agency",
  description: "Thank you for booking a call with OpenClaw Agency. We'll send you a calendar invite shortly.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThanksPage() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center px-4">
      {/* Logo */}
      <Link
        href="/"
        className="flex items-center gap-2 mb-12 focus:outline-none focus:ring-2 focus:ring-[#ff3b30] focus:ring-offset-2 focus:ring-offset-black rounded-lg"
        aria-label="OpenClaw Agency - Home"
      >
        <div className="relative w-12 h-12">
          <Image
            src="/openclaw-logo.png"
            alt="OpenClaw Agency logo"
            fill
            className="object-contain"
            priority
          />
        </div>
        <span className="font-bold text-2xl text-white">
          OpenClaw<span className="text-[#ff3b30]">Agency</span>
        </span>
      </Link>

      {/* Content */}
      <div className="text-center max-w-md">
        {/* Checkmark icon */}
        <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-[#ff3b30]/10 flex items-center justify-center">
          <svg
            className="w-10 h-10 text-[#ff3b30]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
          You're booked!
        </h1>
        
        <p className="text-lg text-gray-400 mb-10">
          We'll send you a calendar invite shortly. Looking forward to speaking with you.
        </p>

        <Link
          href="/"
          className="inline-flex items-center justify-center px-8 py-4 bg-[#ff3b30] hover:bg-[#ff5545] text-white font-semibold rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#ff3b30] focus:ring-offset-2 focus:ring-offset-black"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
