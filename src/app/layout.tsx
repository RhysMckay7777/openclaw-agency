import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap", // Optimizes CLS
  preload: true,
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
  alternates: {
    canonical: "https://www.openclawagency.ai",
  },
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
        // TODO: Replace with actual OG image
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
        {/* Preload critical font */}
        <link
          rel="preload"
          href="https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hiJ-Ek-_EeA.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        {/* Meta Pixel Base Code - using dangerouslySetInnerHTML for immediate load */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '890084107238342');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none' }}
            src="https://www.facebook.com/tr?id=890084107238342&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        <OrganizationSchema />
        <ServiceSchema />
        <FAQSchema />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#ff3b30] focus:text-white focus:rounded-lg"
        >
          Skip to main content
        </a>
        {children}
        
        {/* Calendly Booking Tracker - fires Meta Lead event on booking */}
        <Script id="calendly-tracking" strategy="afterInteractive">
          {`
            window.addEventListener('message', function(e) {
              if (e.origin === 'https://calendly.com' && e.data && e.data.event === 'calendly.event_scheduled') {
                if (typeof fbq !== 'undefined') {
                  fbq('track', 'Lead', {
                    content_name: 'Strategy Call Booked',
                    content_category: 'OpenClaw Agency'
                  });
                  console.log('OpenClaw Calendly booking tracked - Lead event fired');
                } else {
                  console.log('OpenClaw Calendly booking detected but fbq not found');
                }
              }
            });
          `}
        </Script>
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
    // TODO: Replace with actual logo URL
    logo: "https://www.openclawagency.ai/openclaw-logo.svg",
    description:
      "OpenClaw Agency builds AI agents and OpenClaw automations that replace manual work, cut costs, and scale your business with 24/7 execution.",
    sameAs: ["https://www.linkedin.com/company/openclawai"],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: "hello@openclawagency.ai",
      availableLanguage: "English",
    },
    foundingDate: "2024",
    knowsAbout: [
      "AI Automation",
      "Business Process Automation",
      "AI Agents",
      "OpenClaw",
      "Data Workflows",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

function ServiceSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "AI Automation Development",
    provider: {
      "@type": "Organization",
      name: "OpenClaw Agency",
      url: "https://www.openclawagency.ai",
    },
    name: "AI Agent Development & Automation",
    description:
      "Custom AI agents that replace manual work, automate business processes, and scale operations 24/7.",
    areaServed: "Worldwide",
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "AI Automation Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Automation Development",
            description:
              "Custom AI agents tailored to your workflows, production-ready in days.",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI Consultancy",
            description:
              "Hands-on training and strategy for implementing AI in your business.",
          },
        },
      ],
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
