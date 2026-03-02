import Link from "next/link";
import Image from "next/image";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-white/10" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-[#ff3b30] focus:ring-offset-2 focus:ring-offset-black rounded-lg"
            aria-label="OpenClaw Agency - Home"
          >
            {/* TODO: Replace with actual logo SVG */}
            <div className="relative w-8 h-8">
              <Image
                src="/openclaw-logo.svg"
                alt="OpenClaw Agency logo"
                fill
                className="object-contain"
              />
            </div>
            <span className="font-bold text-lg text-white">
              OpenClaw<span className="text-[#ff3b30]">Agency</span>
            </span>
          </Link>

          {/* Navigation */}
          <nav aria-label="Footer navigation">
            <ul className="flex items-center gap-6 text-sm">
              <li>
                <Link
                  href="#services"
                  className="text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#ff3b30] focus:ring-offset-2 focus:ring-offset-black rounded px-2 py-1"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="#testimonials"
                  className="text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#ff3b30] focus:ring-offset-2 focus:ring-offset-black rounded px-2 py-1"
                >
                  Success Stories
                </Link>
              </li>
              <li>
                <Link
                  href="#process"
                  className="text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#ff3b30] focus:ring-offset-2 focus:ring-offset-black rounded px-2 py-1"
                >
                  Process
                </Link>
              </li>
              <li>
                <Link
                  href="#faq"
                  className="text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#ff3b30] focus:ring-offset-2 focus:ring-offset-black rounded px-2 py-1"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.linkedin.com/company/openclawai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#ff3b30] focus:ring-offset-2 focus:ring-offset-black rounded px-2 py-1"
                  aria-label="OpenClaw Agency on LinkedIn (opens in new tab)"
                >
                  LinkedIn
                </Link>
              </li>
            </ul>
          </nav>

          {/* Copyright */}
          <p className="text-sm text-gray-500">
            © {currentYear} OpenClaw Agency. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
