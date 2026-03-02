import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  type?: "button" | "submit";
  "aria-label"?: string;
  disabled?: boolean;
}

export function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "md",
  className = "",
  type = "button",
  "aria-label": ariaLabel,
  disabled = false,
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-black disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary:
      "bg-[#ff3b30] text-white hover:bg-[#ff5545] focus:ring-[#ff3b30] focus-visible:ring-[#ff3b30] glow-red-sm hover:glow-red",
    secondary:
      "bg-white/10 text-white hover:bg-white/20 focus:ring-white/30 focus-visible:ring-white/30 border border-white/20",
    outline:
      "bg-transparent text-white border-2 border-[#ff3b30] hover:bg-[#ff3b30]/10 focus:ring-[#ff3b30] focus-visible:ring-[#ff3b30]",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    // External link detection
    const isExternal = href.startsWith("http") || href.startsWith("mailto:");

    return (
      <Link
        href={href}
        className={classes}
        aria-label={ariaLabel}
        {...(isExternal && {
          target: "_blank",
          rel: "noopener noreferrer",
        })}
      >
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={classes}
      aria-label={ariaLabel}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
