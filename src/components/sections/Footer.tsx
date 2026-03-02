import Link from "next/link";

export function Footer() {
  return (
    <footer className="py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#ff3b30] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">O</span>
            </div>
            <span className="font-bold text-lg text-white">
              OpenClaw<span className="text-[#ff3b30]">Agency</span>
            </span>
          </Link>

          {/* Links */}
          <nav className="flex items-center gap-6 text-sm">
            <Link
              href="#services"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Services
            </Link>
            <Link
              href="#testimonials"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Success Stories
            </Link>
            <Link
              href="#process"
              className="text-gray-400 hover:text-white transition-colors"
            >
              Process
            </Link>
            <Link
              href="#faq"
              className="text-gray-400 hover:text-white transition-colors"
            >
              FAQ
            </Link>
            <Link
              href="https://www.linkedin.com/company/openclawai"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              LinkedIn
            </Link>
          </nav>

          {/* Copyright */}
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} OpenClaw Agency. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
