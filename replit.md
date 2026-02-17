# House of Developers - Agency Website

## Overview
House of Developers is a multi-page marketing website for a UK-based digital product development agency. The site showcases services including web development, mobile development, AI services, CMS development, SEO, MVP building, and developer hiring. It's a content-heavy, conversion-focused site with dozens of service pages, each featuring hero sections, feature grids, mockups, FAQs, and CTAs. The project uses a full-stack architecture with a React frontend served by an Express backend, though the backend is minimal — primarily serving the SPA and handling a contact form submission.

## User Preferences
Preferred communication style: Simple, everyday language.

- Use iterative development. Ask before making major changes.
- Do **not** make changes to the `server/` folder unless explicitly instructed.
- Do **not** make changes to the `shared/schema.ts` file.
- Focus changes on the `client/src/` directory (pages, components, styles).

## System Architecture

### Frontend
- **Framework**: React 18 with TypeScript, bundled by Vite
- **Routing**: `wouter` for lightweight client-side routing with a `ScrollToTop` component that scrolls to top on navigation
- **Styling**: Tailwind CSS with CSS variables for theming (light/dark mode). Custom theme defined in `tailwind.config.ts` with HSL-based color tokens in `client/src/index.css`
- **UI Components**: shadcn/ui (new-york style) installed via `components.json`. Components live under `client/src/components/ui/`
- **Animations**: Framer Motion used extensively for page transitions, hover effects, staggered lists, and scroll-triggered animations
- **Forms**: React Hook Form with Zod validation (schema shared between client and server via `@shared/schema`)
- **Theming**: Custom `ThemeProvider` component manages dark/light mode with `localStorage` persistence
- **State Management**: TanStack React Query for server state; no complex client state management needed since it's mostly a marketing site
- **Path Aliases**: `@/` maps to `client/src/`, `@shared/` maps to `shared/`, `@assets/` maps to `attached_assets/`

### Page Structure
The site has 30+ pages organized by service category:
- **Home** (`/`) — Hero, services grid, projects showcase, tech stack, CTA
- **Services** (`/services`) — Overview of all service offerings
- **Build MVP** (`/services/build-mvp`) — 30-day MVP program
- **Web Development** (`/services/web-development`) — Hub page with sub-pages for CMS platforms
- **CMS Pages** — WordPress, Shopify, Wix, WooCommerce, Webflow (under `/services/web-development/cms/`)
- **Mobile Development** — Hub with Hybrid, iOS, Android sub-pages
- **AI Services** — Hub with AI Chatbots, AI Agents sub-pages
- **Hire Developers** — Hub with Full-Stack, Frontend, Backend categories, and individual stack pages (MERN, MEAN, MEVN, LAMP under `/services/hire-developers/full-stack/`)
- **SEO Services**, **Custom Development**, **Web Apps**, **Contact**

### Reusable Components
Located in `client/src/components/`:
- **Layout**: `Header` (sticky with mega menu, mobile menu, theme toggle), `Footer` (4-column), `ThemeProvider`
- **Shared**: `Breadcrumbs`, `PageCTA`, `SplitFeatureShowcase` (split-screen layout with mockup + feature list)
- **UI (custom)**: `CTASection`, `ValueProposition`, `PricingCard`, `ComparisonTable`, `ProcessTimeline`, `TechStackGrid`, `FeatureShowcaseCard`, `TestimonialSlider`, `BeforeAfterComparison`, `PackageIncludes`, `ZigzagTimeline`, `TechTabsSection`
- **Mockups**: `DashboardMockup`, `MVPTimelineMockup`, `WebAppMockup` — decorative browser/phone frame mockups used in hero sections
- **Home-specific**: `Hero`, `ServicesGrid`, `WhyChoose`, `ProjectsShowcase`, `TechStack`, `CTASection`

### Backend
- **Runtime**: Node.js with Express 5, TypeScript compiled via `tsx`
- **API**: Minimal — single `POST /api/contact` endpoint that validates form data with Zod
- **Storage**: In-memory storage (`MemStorage` class) for users; no database actively used despite Drizzle being configured
- **Dev Server**: Vite dev server middleware proxied through Express in development
- **Production**: Vite builds static assets to `dist/public`, Express serves them with SPA fallback
- **Build**: Custom build script (`script/build.ts`) using esbuild for server + Vite for client

### Database (configured but not actively used)
- **ORM**: Drizzle ORM with PostgreSQL dialect
- **Schema**: `shared/schema.ts` defines a `users` table and `contactFormSchema` Zod validator
- **Migrations**: Drizzle Kit configured to output to `./migrations`
- **Connection**: Expects `DATABASE_URL` environment variable
- **Note**: The contact form currently just logs submissions; it doesn't persist to the database

### Build & Deploy
- `npm run dev` — Development with HMR via Vite
- `npm run build` — Builds client (Vite) and server (esbuild) to `dist/`
- `npm run start` — Runs production build
- `npm run db:push` — Pushes Drizzle schema to PostgreSQL

## External Dependencies

### Core Libraries
- **React** + **React DOM** — UI framework
- **Vite** — Build tool and dev server
- **Express 5** — Backend HTTP server
- **TypeScript** — Type safety throughout

### UI & Styling
- **Tailwind CSS** — Utility-first CSS framework
- **shadcn/ui** — Pre-built accessible component library (Radix UI primitives)
- **Framer Motion** — Animation library
- **Lucide React** — Icon library
- **class-variance-authority** + **clsx** + **tailwind-merge** — CSS utility helpers
- **cmdk** — Command menu component
- **embla-carousel-react** — Carousel component

### Forms & Validation
- **React Hook Form** — Form state management
- **@hookform/resolvers** — Zod resolver for React Hook Form
- **Zod** — Schema validation (shared between client and server)

### Data & State
- **TanStack React Query** — Server state management and data fetching
- **Drizzle ORM** + **drizzle-zod** — Database ORM (PostgreSQL, configured but minimally used)
- **connect-pg-simple** — PostgreSQL session store (available but not actively used)

### Routing
- **wouter** — Lightweight client-side router

### Fonts
- **Google Fonts** — Inter, DM Sans, Geist Mono, Fira Code, Architects Daughter (loaded via CDN in `index.html`)

### External Services
- **WhatsApp** — Direct communication links (phone number integration)
- **Calendly** — Appointment scheduling (linked from CTAs)
- **Simple Icons CDN** — Brand logos for technology icons (WordPress, Shopify, Stripe, etc.)

### Dev Tools (Replit-specific)
- **@replit/vite-plugin-runtime-error-modal** — Error overlay in development
- **@replit/vite-plugin-cartographer** — Replit code mapping
- **@replit/vite-plugin-dev-banner** — Development banner