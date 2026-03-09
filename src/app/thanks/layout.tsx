import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "You're Booked! | OpenClaw Agency",
  description: "Thank you for booking a call with OpenClaw Agency. We'll send you a calendar invite shortly.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ThanksLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
