# OpenClaw Agency Website

Production-grade Next.js website for OpenClaw Agency - AI Automation & OpenClaw Agents for Growth.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Icons**: Lucide React
- **Linting**: ESLint
- **Formatting**: Prettier

## Project Structure

```
src/
├── app/
│   ├── layout.tsx      # Root layout with metadata & JSON-LD schemas
│   ├── page.tsx        # Home page
│   ├── globals.css     # Global styles
│   └── sitemap.ts      # Dynamic sitemap generation
├── components/
│   ├── sections/       # Page sections (Hero, FAQ, etc.)
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── PartnerStrip.tsx
│   │   ├── TwoWaysWeHelp.tsx
│   │   ├── Testimonials.tsx
│   │   ├── Process.tsx
│   │   ├── FAQ.tsx
│   │   ├── FinalCTA.tsx
│   │   └── Footer.tsx
│   └── ui/             # Reusable UI components
│       └── Button.tsx
├── lib/                # Utilities and helpers
└── data/               # Static data and constants
```

## SEO Implementation

### Primary Keyword: "OpenClaw Agency"

- **Meta Title**: "OpenClaw Agency – AI Automation & OpenClaw Agents for Growth"
- **Meta Description**: "OpenClaw Agency builds AI agents and OpenClaw automations that replace manual work, cut costs, and scale your business with 24/7 execution."

### Secondary Keywords
- OpenClaw automation agency
- AI agents for business automation
- OpenClaw AI agency
- AI automation consultancy

### On-Page SEO
- ✅ Single H1 with primary keyword
- ✅ H2/H3 hierarchy with keyword variations
- ✅ OpenGraph & Twitter meta tags
- ✅ FAQPage JSON-LD schema
- ✅ Organization JSON-LD schema
- ✅ robots.txt
- ✅ Dynamic sitemap

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Deployment

Recommended: Deploy to Vercel for optimal Next.js performance.

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

## Environment Variables

No environment variables required for basic operation.

Optional:
- `NEXT_PUBLIC_GA_ID` - Google Analytics ID
- `NEXT_PUBLIC_CALENDLY_URL` - Calendly booking URL

## License

Proprietary - OpenClaw Agency
