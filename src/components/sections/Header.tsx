"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10"
      role="banner"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 sm:h-16">
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
                priority
              />
            </div>
            <span className="font-bold text-base sm:text-lg text-white">
              OpenClaw<span className="text-[#ff3b30]">Agency</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className="hidden md:flex items-center gap-6 lg:gap-8"
            role="navigation"
            aria-label="Main navigation"
          >
            <NavLink href="#services">Services</NavLink>
            <NavLink href="#testimonials">Results</NavLink>
            <NavLink href="#process">Process</NavLink>
            <NavLink href="#faq">FAQ</NavLink>
          </nav>

          {/* Desktop CTA */}
          <div className="hidden sm:block">
            <Button
              href="#booking"
              size="sm"
              aria-label="Get Started with OpenClaw Agency"
            >
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="sm:hidden p-2 text-white hover:text-[#ff3b30] transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav
            className="sm:hidden py-4 border-t border-white/10"
            role="navigation"
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col gap-1">
              <MobileNavLink href="#services" onClick={() => setIsMenuOpen(false)}>Services</MobileNavLink>
              <MobileNavLink href="#testimonials" onClick={() => setIsMenuOpen(false)}>Results</MobileNavLink>
              <MobileNavLink href="#process" onClick={() => setIsMenuOpen(false)}>Process</MobileNavLink>
              <MobileNavLink href="#faq" onClick={() => setIsMenuOpen(false)}>FAQ</MobileNavLink>
              <div className="pt-3 mt-2 border-t border-white/10">
                <Button
                  href="#booking"
                  className="w-full"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Started
                </Button>
              </div>
            </div>
          </nav>
        )}
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

function MobileNavLink({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="block px-4 py-3 text-base text-gray-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
    >
      {children}
    </Link>
  );
}
