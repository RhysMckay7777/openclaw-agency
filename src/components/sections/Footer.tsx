import Link from "next/link";
import Image from "next/image";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 sm:py-12 border-t border-white/10" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 sm:gap-8">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-1.5 sm:gap-2 focus:outline-none focus:ring-2 focus:ring-[#ff3b30] focus:ring-offset-2 focus:ring-offset-black rounded-lg"
            aria-label="OpenClaw Agency - Home"
          >
            <div className="relative w-8 h-8 sm:w-10 sm:h-10">
              <Image
                src="/openclaw-logo.png"
                alt="OpenClaw Agency logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="font-bold text-base sm:text-lg text-white">
              OpenClaw<span className="text-[#ff3b30]">Agency</span>
            </span>
          </Link>

          {/* Navigation */}
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm">
              <li>
                <Link
                  href="#services"
                  className="text-gray-400 hover:text-white transition-colors px-2 py-1"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#testimonials"
                  className="text-gray-400 hover:text-white transition-colors px-2 py-1"
                >
                  Results
                </Link>
              </li>
              <li>
                <Link
                  href="#process"
                  className="text-gray-400 hover:text-white transition-colors px-2 py-1"
                >
                  Process
                </Link>
              </li>
              <li>
                <Link
                  href="#faq"
                  className="text-gray-400 hover:text-white transition-colors px-2 py-1"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="mailto:hello@openclawagency.ai"
                  className="text-gray-400 hover:text-white transition-colors px-2 py-1"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>

          {/* Copyright */}
          <p className="text-xs sm:text-sm text-gray-500 text-center">
            © {currentYear} OpenClaw Agency. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
