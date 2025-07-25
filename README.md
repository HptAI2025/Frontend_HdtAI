# Frontend_HdtAI

HDT AI Frontend - Clone of Devin.ai with Next.js, TypeScript, TailwindCSS

## Overview

This is a complete frontend clone of Devin.ai built with modern web technologies:

- **Next.js 15** with App Router
- **TypeScript** for type safety
- **TailwindCSS** for styling
- **next-intl** for internationalization (Vietnamese & English)
- **Framer Motion** for animations
- **Lucide React** for icons

## Features

✅ **Homepage** - Complete clone of Devin.ai homepage with dark theme
✅ **Enterprise Page** - VietinBank case study with metrics and testimonials
✅ **Pricing Page** - 3-tier pricing structure (Core, Team, Enterprise)
✅ **Customers Page** - Customer success stories with filtering
✅ **Internationalization** - Full Vietnamese and English support
✅ **Responsive Design** - Mobile-first approach
✅ **Dark Theme** - Matching Devin.ai's slate color scheme

## Getting Started

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
src/
├── app/[locale]/          # Internationalized pages
│   ├── page.tsx          # Homepage
│   ├── enterprise/       # Enterprise page
│   ├── pricing/          # Pricing page
│   └── customers/        # Customers page
├── components/           # Reusable components
│   ├── Header.tsx       # Navigation header
│   └── Footer.tsx       # Site footer
├── i18n/                # Internationalization
│   ├── messages/        # Translation files
│   ├── routing.ts       # Route configuration
│   └── request.ts       # Request configuration
└── middleware.ts        # Next.js middleware for i18n
```

## Brand Changes

All instances of "Devin" have been replaced with "HDT AI":
- Logo updated to HDT AI branding
- Company name changed throughout
- Case studies adapted for Vietnamese market (VietinBank, FPT, etc.)

## Deployment

The project is configured for deployment on Vercel or any Node.js hosting platform.

## License

This project is for educational and demonstration purposes.
