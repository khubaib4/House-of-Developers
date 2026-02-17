# House of Developers - Agency Website

## Overview
House of Developers is a UK-based digital product development agency. This project is a multi-page marketing website designed to showcase their services, attract clients, and facilitate contact. It aims to present a premium brand image and provide detailed information across a wide range of development offerings, including web, mobile, AI, and SEO services, as well as dedicated sections for hiring developers. The business vision is to be a leading agency for high-quality digital solutions.

## User Preferences
I want iterative development. Ask before making major changes. Do not make changes to the `server/` folder unless explicitly instructed. Do not make changes to the `shared/schema.ts` file.

## System Architecture
The website is built with a modern web stack focusing on performance, maintainability, and a premium user experience.

-   **Frontend**: React with Vite and TypeScript for a robust and efficient development environment.
-   **Styling**: Tailwind CSS for utility-first styling, complemented by shadcn/ui components for a polished aesthetic.
-   **Animations**: Framer Motion is integrated for fluid and engaging UI animations.
-   **Routing**: `wouter` is used for client-side routing, enabling multi-page navigation and anchor scrolling.
-   **Theming**: A custom `ThemeProvider` manages dark/light mode, persisting user preferences in `localStorage`.
-   **Form Management**: React Hook Form with Zod for comprehensive form handling and validation.
-   **UI/UX Design**: Emphasizes a premium aesthetic with gradient texts, interactive mockups, and a structured layout. The design extensively uses reusable components like `SplitFeatureShowcase` for luxury split-screen layouts and `shadcn/ui` based components for CTAs, value propositions, timelines, tech stacks, testimonials, pricing, and comparison tables. Interactive mockup components (e.g., Dashboard, Mobile App, Chatbot) are used to demonstrate capabilities.
-   **Page Structure**: The site features extensive content across numerous service pages (e.g., AI, Mobile, SEO, Web, CMS, Shopify, WordPress) and a detailed "Hire Developers" section, segmented by full-stack, frontend, backend, and specific technology stacks (MERN, MEAN, MEVN, LAMP). Each page is rich with content sections including feature showcases, process timelines, pricing, FAQs, and technology grids.
-   **Navigation**: A sticky header includes a mobile menu, a services dropdown, and a theme toggle. A comprehensive 4-column footer provides extensive navigation options.

## External Dependencies
-   **Styling**: Tailwind CSS, shadcn/ui
-   **Animations**: Framer Motion
-   **Form Validation**: Zod, React Hook Form
-   **Icons**: Lucide React
-   **External Services**:
    -   WhatsApp (for direct communication)
    -   Calendly (for appointment scheduling)

## Project Structure
```
client/src/
  pages/
    home.tsx               - Homepage with hero, services, process
    services.tsx           - Services overview page
    build-mvp.tsx          - Build MVP service page
    contact.tsx            - Contact page with form
    ai-services.tsx        - AI Integration page
    ai-chatbots.tsx        - AI Chatbot Development Services
    ai-agents.tsx          - AI Agent Development Services
    mobile-development.tsx - Mobile Development hub
    hybrid-development.tsx - Hybrid/Cross-Platform development
    ios-development.tsx    - Native iOS Development
    android-development.tsx- Native Android/Kotlin Development
    seo-services.tsx       - SEO & Growth Marketing page
    web-development.tsx    - Web Development page
    custom-development.tsx - Custom Development page
    web-apps.tsx           - Web Applications page
    cms-development.tsx    - CMS Overview hub
    wordpress-development.tsx - WordPress Development page
    shopify-development.tsx   - Shopify Development page
    wix-development.tsx       - Wix Development page
    woocommerce-development.tsx - WooCommerce Development page
    webflow-development.tsx   - Webflow Development page
    hire-developers.tsx    - Hire Developers hub
    hire-fullstack.tsx     - Hire Full-Stack Developers
    hire-frontend.tsx      - Hire Frontend Developers
    hire-backend.tsx       - Hire Backend Developers
    hire-mern.tsx          - Hire MERN Stack Developers
    hire-mean.tsx          - Hire MEAN Stack Developers
    hire-mevn.tsx          - Hire MEVN Stack Developers
    hire-lamp.tsx          - Hire LAMP Stack Developers
    component-demo.tsx     - Component showcase page
    not-found.tsx          - 404 page
  components/
    layout/
      Header.tsx           - Sticky header with mega menu
      Footer.tsx           - 4-column footer
      ThemeProvider.tsx     - Dark/light mode toggle
    shared/
      Breadcrumbs.tsx      - Breadcrumb navigation
      SplitFeatureShowcase.tsx - Split-screen feature layouts
    ui/
      CTASection.tsx        - Call-to-action (default/gradient/bordered/minimal)
      ValueProposition.tsx  - Grid of value cards
      ProcessTimeline.tsx   - Vertical/horizontal process timeline
      TechStackGrid.tsx     - Tech items grid with category grouping
      FeatureShowcaseCard.tsx - Split feature card with benefits list
      TestimonialSlider.tsx - Testimonial carousel with pause-on-hover
      BeforeAfterComparison.tsx - Before/after slider with metric cards
      PackageIncludes.tsx   - Package deliverables (accordion/tabs/grid layouts)
      PricingCard.tsx       - Pricing tier card with feature list
      ComparisonTable.tsx   - Feature comparison table
server/
  routes.ts            - POST /api/contact endpoint with Zod validation
shared/
  schema.ts            - contactFormSchema (Zod) for form validation
```

## Routes
- `/` - Homepage
- `/services` - Services overview (9 services, process section)
- `/services/build-mvp` - Build MVP dedicated page (timeline, pricing, FAQ)
- `/services/ai-services` - AI Integration & Automation page
- `/services/ai-services/ai-chatbots` - AI Chatbot Development Services (hero with chat widget mockup, 4-step process, 6 chatbot types, 3 conversation demos, ValueProposition 9 benefits, 12 features, TechStackGrid 18 integrations, GlowCosmetics case study, pricing, ProcessTimeline 4 phases, 12 FAQs, 3 CTAs)
- `/services/ai-services/ai-agents` - AI Agent Development Services (hero with Agent Control Center mockup, 6 agent types, 3 execution demos, ValueProposition 9 capabilities, multi-agent systems diagram, tabbed technologies, TaskFlow case study, pricing, ZigzagTimeline 4 phases, 12 FAQs, 3 CTAs)
- `/services/mobile-development` - Mobile Development hub
- `/services/mobile-development/hybrid` - Hybrid/Cross-Platform development
- `/services/mobile-development/ios` - Native iOS Development
- `/services/mobile-development/kotlin` - Native Android Development
- `/services/seo-services` - SEO & Growth Marketing page
- `/services/web-development` - Web Development page
- `/services/custom-development` - Custom Development page
- `/services/web-apps` - Web Applications page
- `/services/cms-development` - CMS Overview hub
- `/services/web-development/cms/wordpress` - WordPress Development page
- `/services/web-development/cms/shopify` - Shopify Development page
- `/services/hire-developers` - Hire Developers hub
- `/services/hire-developers/full-stack` - Hire Full-Stack Developers hub
- `/services/hire-developers/frontend` - Hire Frontend Developers hub
- `/services/hire-developers/backend` - Hire Backend Developers hub
- `/services/hire-developers/full-stack/mern` - Hire MERN Stack Developers
- `/services/hire-developers/full-stack/mean` - Hire MEAN Stack Developers
- `/services/hire-developers/full-stack/mevn` - Hire MEVN Stack Developers
- `/services/hire-developers/full-stack/lamp` - Hire LAMP Stack Developers
- `/contact` - Contact page with form, WhatsApp, Calendly, business hours
- `/demo` - Component showcase/demo page

## API Endpoints
- `POST /api/contact` - Contact form submission (Zod validated, logs to console)

## Running
- `npm run dev` starts both Express backend and Vite frontend on port 5000

## Recent Changes
- Redesigned Web Development hub page: Hero with 3 stacked browser mockups (SaaS, E-commerce, Corporate), gradient badge, feature pills, stats grid, 6 service cards with gradient icon circles and tech badges, 3 detailed project showcases (ProjectHub SaaS dashboard with sidebar/table/stats, LuxeWear fashion e-commerce with product grid, Hartley & Associates law firm with practice areas), ValueProposition 9 items, TechTabsSection 5 tabs (Frontend/Backend/CMS/Cloud/Design), Industries section 6 cards, ZigzagTimeline 4 phases, 3 mini case studies with results metrics, 10 FAQs, 3 CTAs. No pricing cards. Uses WEB_DEV_COLOR=#3B82F6.
- Created reusable TechTabsSection component (`client/src/components/ui/TechTabsSection.tsx`). Interface: `{ title, subtitle?, tabs: Array<{id, label, items: Array<{icon: LucideIcon, name, description}>}>, accentColor? }`. Each tab has 8 items with Lucide icons. Replaced TechStackGrid and inline tabbed implementations across 13 pages: 5 CMS (Shopify, WordPress, Wix, WooCommerce, Webflow), 3 Mobile (Hybrid, iOS, Android), 2 Hire (Frontend, Backend), 3 AI (Agents, Chatbots, Services). TechStackGrid now deprecated (only used in component-demo.tsx).
- Built AI Agents hub page: Hero with Agent Control Center mockup (3 active agents with progress bars, activity log), 6 agent type cards, 3 execution demos (Email/Analytics/Research with task timelines), ValueProposition 9 capabilities, multi-agent systems diagram, tabbed technologies (5 tabs), TaskFlow case study, pricing, ZigzagTimeline 4 phases, 12 FAQs, 3 CTAs. Uses AGENT_COLOR=#3B82F6.
- Created reusable ZigzagTimeline component (alternating left/right cards, central vertical line with icons, mobile-responsive). Replaced ProcessTimeline across 20+ pages: AI Services, AI Chatbots, 6 CMS pages, 4 Mobile pages, 8 Hire Developer pages. ProcessTimeline now deprecated (only used in component-demo.tsx).
- Built AI Chatbots hub page: Hero with live chat widget mockup, 4-step process, 6 chatbot type cards, 3 conversation demos, ValueProposition 9 benefits, 12 features grid, tabbed technologies section, GlowCosmetics case study, pricing, ZigzagTimeline 4 phases, 12 FAQs, 3 CTAs.
- Redesigned AI Services hub page with AI Dashboard mockup, 5 service cards, 3 case studies, 3 interactive mockups, tabbed technologies section, ZigzagTimeline 5 phases, pricing section, 12 FAQs, 3 CTAs.

## Design Conventions
- LAMP_COLOR: #8B5CF6 (purple), MEVN_COLOR: #42b883 (green), MEAN_COLOR: #DD0031 (red), MERN_COLOR: #00D8FF (cyan), FE_COLOR: #3B82F6 (blue), BE_COLOR: #10B981 (emerald), FS_COLOR: #6366F1 (indigo), CHATBOT_COLOR: #A855F7 (purple), AGENT_COLOR: #3B82F6 (blue), WEB_DEV_COLOR: #3B82F6 (blue)
- CTASection uses primaryCTA/secondaryCTA as {text, link} objects
- ValueProposition uses `values` prop (not `items`)
- PricingCard uses `packageName` (not `name`), `ctaText`/`ctaLink`
- No text-primary usage (use text-foreground, text-muted-foreground, or semantic colors)
- hover-elevate utility for card hover effects (no custom hover states on buttons/badges)
- CDN logos only for CMS pages; Lucide React icons everywhere else
