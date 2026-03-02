import Link from "next/link";
import { Button } from "@/components/ui/Button";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#ff3b30] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">O</span>
            </div>
            <span className="font-bold text-lg text-white">
              OpenClaw<span className="text-[#ff3b30]">Agency</span>
            </span>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="#services"
              className="text-sm text-gray-300 hover:text-white transition-colors"
            >
              Services
            </Link>
            <Link
              href="#testimonials"
              className="text-sm text-gray-300 hover:text-white transition-colors"
            >
              Success Stories
            </Link>
            <Link
              href="#process"
              className="text-sm text-gray-300 hover:text-white transition-colors"
            >
              Process
            </Link>
            <Link
              href="#faq"
              className="text-sm text-gray-300 hover:text-white transition-colors"
            >
              FAQ
            </Link>
          </nav>

          {/* CTA */}
          <Button href="#contact" size="sm">
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
}
