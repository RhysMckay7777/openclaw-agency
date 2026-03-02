import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";

export function Header() {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10"
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
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
                priority
              />
            </div>
            <span className="font-bold text-lg text-white">
              OpenClaw<span className="text-[#ff3b30]">Agency</span>
            </span>
          </Link>

          {/* Navigation */}
          <nav
            className="hidden md:flex items-center gap-8"
            role="navigation"
            aria-label="Main navigation"
          >
            <NavLink href="#services">Services</NavLink>
            <NavLink href="#testimonials">Success Stories</NavLink>
            <NavLink href="#process">Process</NavLink>
            <NavLink href="#faq">FAQ</NavLink>
          </nav>

          {/* CTA */}
          <Button
            href="https://calendly.com/openclawagency"
            size="sm"
            aria-label="Get Started with OpenClaw Agency"
          >
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
}

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="text-sm text-gray-300 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-[#ff3b30] focus:ring-offset-2 focus:ring-offset-black rounded px-2 py-1"
    >
      {children}
    </Link>
  );
}
