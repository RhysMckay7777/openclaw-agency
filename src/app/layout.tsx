import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.openclawagency.ai"),
  title: "OpenClaw Agency – AI Automation & OpenClaw Agents for Growth",
  description:
    "OpenClaw Agency builds AI agents and OpenClaw automations that replace manual work, cut costs, and scale your business with 24/7 execution.",
  keywords: [
    "OpenClaw Agency",
    "OpenClaw automation agency",
    "AI agents for business automation",
    "OpenClaw AI agency",
    "AI automation consultancy",
  ],
  authors: [{ name: "OpenClaw Agency" }],
  creator: "OpenClaw Agency",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.openclawagency.ai",
    siteName: "OpenClaw Agency",
    title: "OpenClaw Agency – AI Automation & OpenClaw Agents for Growth",
    description:
      "OpenClaw Agency builds AI agents and OpenClaw automations that replace manual work, cut costs, and scale your business with 24/7 execution.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "OpenClaw Agency - AI Automation Experts",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "OpenClaw Agency – AI Automation & OpenClaw Agents for Growth",
    description:
      "OpenClaw Agency builds AI agents and OpenClaw automations that replace manual work, cut costs, and scale your business with 24/7 execution.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <OrganizationSchema />
        <FAQSchema />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}

function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "OpenClaw Agency",
    url: "https://www.openclawagency.ai",
    logo: "https://www.openclawagency.ai/logo.png",
    description:
      "OpenClaw Agency builds AI agents and OpenClaw automations that replace manual work, cut costs, and scale your business with 24/7 execution.",
    sameAs: ["https://www.linkedin.com/company/openclawai"],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      availableLanguage: "English",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

function FAQSchema() {
  const faqItems = [
    {
      question: "Do I need to know how to use AI?",
      answer:
        "No, you don't need any AI expertise. OpenClaw Agency handles everything from design to deployment. We build custom AI agents tailored to your business needs and provide full training on how to work with them.",
    },
    {
      question: "Will the AI perform worse than my employees?",
      answer:
        "Our AI agents are designed to outperform human employees on repetitive, data-driven tasks. They work 24/7 without breaks, don't make fatigue-related errors, and can process information much faster. Clients typically see 10x productivity improvements.",
    },
    {
      question: "What is the cost?",
      answer:
        "Costs vary based on the complexity of your automation needs. Most clients save between $78,000 to $153,000 per year in staff costs alone. We offer flexible pricing including one-time development fees and ongoing optimization retainers.",
    },
    {
      question: "Will this work for me?",
      answer:
        "If your business has repetitive tasks, data processing needs, customer service requirements, or operational workflows that consume staff time, AI automation can help. We work with marketing agencies, e-commerce brands, real estate companies, and more.",
    },
    {
      question: "What can AI do for my business?",
      answer:
        "AI agents can handle lead generation, client operations, fulfilment, customer support, data entry, reporting, scheduling, and much more. Our clients have replaced entire departments while achieving better results and happier customers.",
    },
  ];

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
