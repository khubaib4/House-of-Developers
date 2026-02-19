# SEO Meta Tags Audit Report
Generated: 19 February 2026

## Summary
- **Total Pages Scanned:** 34
- **Pages with Title Tag:** 8 (via `document.title` in `useEffect`)
- **Pages with Meta Description:** 0
- **Pages with Open Graph Tags:** 0 (page-level)
- **Pages Missing ALL SEO Meta:** 26
- **Pages Needing Improvement:** 34

### Current Situation
The project uses a single `index.html` file with one set of meta tags that applies to **every page**. No per-page SEO library (like React Helmet) is installed. Only 8 pages set `document.title` via `useEffect`, and **none** set meta descriptions or Open Graph tags per page.

### Default Meta (from `index.html`):
- **Title:** "House of Developers - Premium Digital Product Development Agency | UK" (70 chars)
- **Description:** "House of Developers is a premium UK-based digital product development agency. We build launch-ready MVPs, web apps, mobile apps, and AI solutions for startups." (160 chars)
- **OG Title:** "House of Developers - We Build Launch-Ready Digital Products"
- **OG Description:** "From MVP to scale. We're the technical partner for startups who need to move fast and build right."
- **OG Type:** website

---

## Pages With Partial SEO (Title Only, No Description)

### AI Agent Development (/services/ai-services/ai-agents)
- Title: "AI Agent Development | Autonomous AI Agents | House of Developers" (66 chars)
- Description: Missing (uses default)
- Open Graph: Missing
- **Status: NEEDS DESCRIPTION + OG TAGS**

### AI Chatbots (/services/ai-services/ai-chatbots)
- Title: "AI Chatbot Development | Custom AI Chatbots | House of Developers" (65 chars)
- Description: Missing (uses default)
- Open Graph: Missing
- **Status: NEEDS DESCRIPTION + OG TAGS**

### AI Services (/services/ai-services)
- Title: "AI Development Services | Machine Learning & AI Solutions | House of Developers" (79 chars - TOO LONG)
- Description: Missing (uses default)
- Open Graph: Missing
- **Status: NEEDS DESCRIPTION + OG TAGS, TITLE TOO LONG**

### iOS Development (/services/mobile-development/ios)
- Title: "iOS App Development | Swift & SwiftUI | House of Developers" (59 chars)
- Description: Missing (uses default)
- Open Graph: Missing
- **Status: NEEDS DESCRIPTION + OG TAGS**

### Hire MERN Developers (/services/hire-developers/full-stack/mern)
- Title: "Hire MERN Full-Stack Developers | MongoDB, Express, React, Node.js | House of Developers" (89 chars - TOO LONG)
- Description: Missing (uses default)
- Open Graph: Missing
- **Status: NEEDS DESCRIPTION + OG TAGS, TITLE TOO LONG**

### Hire MEAN Developers (/services/hire-developers/full-stack/mean)
- Title: "Hire MEAN Stack Developers | MongoDB, Express, Angular, Node.js | House of Developers" (85 chars - TOO LONG)
- Description: Missing (uses default)
- Open Graph: Missing
- **Status: NEEDS DESCRIPTION + OG TAGS, TITLE TOO LONG**

### Hire MEVN Developers (/services/hire-developers/full-stack/mevn)
- Title: "Hire MEVN Stack Developers | MongoDB, Express, Vue.js, Node.js | House of Developers" (84 chars - TOO LONG)
- Description: Missing (uses default)
- Open Graph: Missing
- **Status: NEEDS DESCRIPTION + OG TAGS, TITLE TOO LONG**

### Hire LAMP Developers (/services/hire-developers/full-stack/lamp)
- Title: "Hire LAMP Stack Developers | Linux, Apache, MySQL, PHP | House of Developers" (77 chars - TOO LONG)
- Description: Missing (uses default)
- Open Graph: Missing
- **Status: NEEDS DESCRIPTION + OG TAGS, TITLE TOO LONG**

---

## Pages Missing ALL SEO Meta Tags

These pages use only the default `index.html` meta tags. Every search result shows "House of Developers - Premium Digital Product Development Agency | UK" regardless of page content.

| # | Page | Route | Title | Description | OG Tags | Status |
|---|------|-------|-------|-------------|---------|--------|
| 1 | Homepage | `/` | Default | Default | Default | NEEDS ALL |
| 2 | Services | `/services` | Default | Default | Default | NEEDS ALL |
| 3 | Build MVP | `/services/build-mvp` | Default | Default | Default | NEEDS ALL |
| 4 | Mobile Development | `/services/mobile-development` | Default | Default | Default | NEEDS ALL |
| 5 | Hybrid Development | `/services/mobile-development/hybrid` | Default | Default | Default | NEEDS ALL |
| 6 | Android Development | `/services/mobile-development/kotlin` | Default | Default | Default | NEEDS ALL |
| 7 | SEO Services | `/services/seo-services` | Default | Default | Default | NEEDS ALL |
| 8 | Web Development | `/services/web-development` | Default | Default | Default | NEEDS ALL |
| 9 | Custom Development | `/services/custom-development` | Default | Default | Default | NEEDS ALL |
| 10 | Web Applications | `/services/web-apps` | Default | Default | Default | NEEDS ALL |
| 11 | CMS Development | `/services/cms-development` | Default | Default | Default | NEEDS ALL |
| 12 | WordPress Development | `/services/web-development/cms/wordpress` | Default | Default | Default | NEEDS ALL |
| 13 | Shopify Development | `/services/web-development/cms/shopify` | Default | Default | Default | NEEDS ALL |
| 14 | Wix Development | `/services/web-development/cms/wix` | Default | Default | Default | NEEDS ALL |
| 15 | WooCommerce Development | `/services/web-development/cms/woocommerce` | Default | Default | Default | NEEDS ALL |
| 16 | Webflow Development | `/services/web-development/cms/webflow` | Default | Default | Default | NEEDS ALL |
| 17 | Hire Developers | `/services/hire-developers` | Default | Default | Default | NEEDS ALL |
| 18 | Hire Full-Stack | `/services/hire-developers/full-stack` | Default | Default | Default | NEEDS ALL |
| 19 | Hire Frontend | `/services/hire-developers/frontend` | Default | Default | Default | NEEDS ALL |
| 20 | Hire Backend | `/services/hire-developers/backend` | Default | Default | Default | NEEDS ALL |
| 21 | About | `/about` | Default | Default | Default | NEEDS ALL |
| 22 | Case Studies | `/case-studies` | Default | Default | Default | NEEDS ALL |
| 23 | Blog | `/blog` | Default | Default | Default | NEEDS ALL |
| 24 | Blog Post | `/blog/:slug` | Default | Default | Default | NEEDS ALL |
| 25 | Contact | `/contact` | Default | Default | Default | NEEDS ALL |
| 26 | Not Found | `*` | Default | Default | Default | NEEDS ALL |

---

## Complete Page Inventory

| Page | Route | Title | Title Length | Description | Status |
|------|-------|-------|-------------|-------------|--------|
| Homepage | `/` | Default only | - | Default only | NEEDS ALL |
| Services | `/services` | Default only | - | Default only | NEEDS ALL |
| Build MVP | `/services/build-mvp` | Default only | - | Default only | NEEDS ALL |
| AI Services | `/services/ai-services` | Set | 79 (TOO LONG) | Missing | NEEDS DESC + FIX TITLE |
| AI Chatbots | `/services/ai-services/ai-chatbots` | Set | 65 (LONG) | Missing | NEEDS DESC |
| AI Agents | `/services/ai-services/ai-agents` | Set | 66 (LONG) | Missing | NEEDS DESC |
| Mobile Dev | `/services/mobile-development` | Default only | - | Default only | NEEDS ALL |
| Hybrid Dev | `/services/mobile-development/hybrid` | Default only | - | Default only | NEEDS ALL |
| iOS Dev | `/services/mobile-development/ios` | Set | 59 | Missing | NEEDS DESC |
| Android Dev | `/services/mobile-development/kotlin` | Default only | - | Default only | NEEDS ALL |
| SEO Services | `/services/seo-services` | Default only | - | Default only | NEEDS ALL |
| Web Dev | `/services/web-development` | Default only | - | Default only | NEEDS ALL |
| Custom Dev | `/services/custom-development` | Default only | - | Default only | NEEDS ALL |
| Web Apps | `/services/web-apps` | Default only | - | Default only | NEEDS ALL |
| CMS Dev | `/services/cms-development` | Default only | - | Default only | NEEDS ALL |
| WordPress | `/services/web-development/cms/wordpress` | Default only | - | Default only | NEEDS ALL |
| Shopify | `/services/web-development/cms/shopify` | Default only | - | Default only | NEEDS ALL |
| Wix | `/services/web-development/cms/wix` | Default only | - | Default only | NEEDS ALL |
| WooCommerce | `/services/web-development/cms/woocommerce` | Default only | - | Default only | NEEDS ALL |
| Webflow | `/services/web-development/cms/webflow` | Default only | - | Default only | NEEDS ALL |
| Hire Devs | `/services/hire-developers` | Default only | - | Default only | NEEDS ALL |
| Hire Full-Stack | `/services/hire-developers/full-stack` | Default only | - | Default only | NEEDS ALL |
| Hire Frontend | `/services/hire-developers/frontend` | Default only | - | Default only | NEEDS ALL |
| Hire Backend | `/services/hire-developers/backend` | Default only | - | Default only | NEEDS ALL |
| Hire MERN | `/services/hire-developers/full-stack/mern` | Set | 89 (TOO LONG) | Missing | NEEDS DESC + FIX TITLE |
| Hire MEAN | `/services/hire-developers/full-stack/mean` | Set | 85 (TOO LONG) | Missing | NEEDS DESC + FIX TITLE |
| Hire MEVN | `/services/hire-developers/full-stack/mevn` | Set | 84 (TOO LONG) | Missing | NEEDS DESC + FIX TITLE |
| Hire LAMP | `/services/hire-developers/full-stack/lamp` | Set | 77 (TOO LONG) | Missing | NEEDS DESC + FIX TITLE |
| About | `/about` | Default only | - | Default only | NEEDS ALL |
| Case Studies | `/case-studies` | Default only | - | Default only | NEEDS ALL |
| Blog | `/blog` | Default only | - | Default only | NEEDS ALL |
| Blog Post | `/blog/:slug` | Default only | - | Default only | NEEDS ALL |
| Contact | `/contact` | Default only | - | Default only | NEEDS ALL |
| Not Found | `*` | Default only | - | Default only | LOW PRIORITY |

---

## Additional SEO Checks

| Check | Status | Notes |
|-------|--------|-------|
| Canonical URLs | Missing | No `rel="canonical"` on any page |
| Schema.org/JSON-LD | Missing | No structured data on any page |
| Robots meta | Missing | No per-page robots directives |
| Viewport meta | Present | Set in `index.html` |
| Language attribute | Present | `lang="en"` on `<html>` |
| Favicon | Present | SVG favicon linked |
| Sitemap.xml | Missing | No XML sitemap generated |
| robots.txt | Missing | No robots.txt file |

---

## Recommended Actions

### CRITICAL - Infrastructure (Do First)
1. [ ] Install `react-helmet-async` package for per-page meta tag management
2. [ ] Create a reusable `SEOHead` component that sets title, description, OG tags, and canonical URL
3. [ ] Wrap the app with `HelmetProvider`
4. [ ] Create `robots.txt` file
5. [ ] Generate `sitemap.xml` (or create a dynamic one)

### HIGH PRIORITY - Top Traffic Pages (26 pages missing everything)
1. [ ] Homepage `/`
2. [ ] Services `/services`
3. [ ] Build MVP `/services/build-mvp`
4. [ ] Web Development `/services/web-development`
5. [ ] WordPress Development `/services/web-development/cms/wordpress`
6. [ ] Shopify Development `/services/web-development/cms/shopify`
7. [ ] Mobile Development `/services/mobile-development`
8. [ ] AI Services `/services/ai-services`
9. [ ] SEO Services `/services/seo-services`
10. [ ] Hire Developers `/services/hire-developers`
11. [ ] About `/about`
12. [ ] Contact `/contact`
13. [ ] Blog `/blog`
14. [ ] Blog Post `/blog/:slug` (dynamic - pull from WordPress data)
15. [ ] Case Studies `/case-studies`

### MEDIUM PRIORITY - Sub-pages (11 pages)
1. [ ] CMS Development, Wix, WooCommerce, Webflow
2. [ ] Hybrid, iOS, Android development
3. [ ] Hire Full-Stack, Frontend, Backend

### LOW PRIORITY - Fix Existing (8 pages with partial SEO)
1. [ ] Fix overly long titles on AI Services, MERN, MEAN, MEVN, LAMP pages
2. [ ] Add meta descriptions to all 8 pages that only have titles
3. [ ] Add Open Graph tags to all 8 pages

---

## Recommended SEO Meta Tags Per Page

### Homepage (/)
- **Title:** "Custom Software Development Agency UK | House of Developers" (59 chars)
- **Description:** "UK-based digital product agency. We build MVPs, web apps, mobile apps, and AI solutions for startups. Expert React, Node.js, and Python development." (150 chars)

### Services (/services)
- **Title:** "Our Services | Web, Mobile, AI Development | House of Developers" (64 chars)
- **Description:** "Full-stack development services including web apps, mobile apps, AI solutions, CMS development, SEO, and dedicated developer hiring. Get a free quote." (152 chars)

### Build MVP (/services/build-mvp)
- **Title:** "Build Your MVP in 30 Days | Startup MVP Development | House of Developers" (73 chars)
- **Description:** "Launch your startup MVP in 30 days. Expert product development with React, Node.js, and modern tech. From idea to launch-ready product. Free consultation." (156 chars)

### Web Development (/services/web-development)
- **Title:** "Web Development Services UK | React, Next.js, Node.js | House of Developers" (75 chars)
- **Description:** "Professional web development services. Custom websites, web applications, and e-commerce solutions built with React, Next.js, and Node.js. Free quote." (152 chars)

### WordPress (/services/web-development/cms/wordpress)
- **Title:** "WordPress Development UK | Custom Themes & Plugins | House of Developers" (72 chars)
- **Description:** "Expert WordPress development services. Custom themes, plugin development, WooCommerce, performance optimization. 40+ WordPress sites delivered." (145 chars)

### Shopify (/services/web-development/cms/shopify)
- **Title:** "Shopify Development UK | Custom Stores & Themes | House of Developers" (69 chars)
- **Description:** "Professional Shopify development services. Custom themes, Shopify Plus, checkout optimization, and headless commerce solutions. Free consultation." (148 chars)

### Mobile Development (/services/mobile-development)
- **Title:** "Mobile App Development UK | iOS, Android, Hybrid | House of Developers" (70 chars)
- **Description:** "Expert mobile app development services. Native iOS, Android, and cross-platform apps with React Native and Flutter. From concept to App Store." (144 chars)

### AI Services (/services/ai-services)
- **Title:** "AI Development Services | Chatbots & AI Agents | House of Developers" (68 chars)
- **Description:** "Custom AI solutions including chatbots, AI agents, machine learning, and GPT integrations. Transform your business with intelligent automation." (145 chars)

### SEO Services (/services/seo-services)
- **Title:** "SEO Services UK | Technical SEO & Content Strategy | House of Developers" (72 chars)
- **Description:** "Expert SEO services for higher rankings. Technical SEO audits, content strategy, Core Web Vitals optimization, and link building. Proven results." (147 chars)

### Hire Developers (/services/hire-developers)
- **Title:** "Hire Dedicated Developers UK | Full-Stack, Frontend, Backend | House of Developers" (82 chars)
- **Description:** "Hire skilled developers for your project. Full-stack, frontend, and backend specialists in React, Node.js, Python, and more. Flexible engagement." (148 chars)

### About (/about)
- **Title:** "About House of Developers | UK Digital Product Agency" (53 chars)
- **Description:** "Learn about House of Developers, a UK-based digital product development agency. Our team builds launch-ready software for startups and businesses." (148 chars)

### Contact (/contact)
- **Title:** "Contact Us | Get a Free Quote | House of Developers" (51 chars)
- **Description:** "Get in touch with House of Developers. Free project consultation, quotes, and expert advice for your software development needs. Reply within 24 hours." (153 chars)

### Blog (/blog)
- **Title:** "Tech Blog | Web Development Guides & Tutorials | House of Developers" (68 chars)
- **Description:** "Expert web development tutorials, coding guides, and tech insights. Learn React, Node.js, AI, WordPress, and modern development best practices." (146 chars)

### Blog Post (/blog/:slug) - Dynamic
- **Title:** `"{Post Title} | House of Developers Blog"` (pulled from WordPress)
- **Description:** `"{Post Excerpt}"` (pulled from WordPress, first 160 chars)

### Case Studies (/case-studies)
- **Title:** "Case Studies | Our Work & Results | House of Developers" (55 chars)
- **Description:** "See our portfolio of successful projects. Web apps, mobile apps, AI solutions, and e-commerce platforms built for startups and businesses worldwide." (150 chars)

---

## SEO Best Practices Reminder

### Title Tags:
- Length: 50-60 characters (up to 70 max)
- Include primary keyword near the beginning
- Include brand name at the end
- Format: "Primary Keyword | Secondary | House of Developers"

### Meta Descriptions:
- Length: 150-160 characters
- Include primary and secondary keywords
- Include call-to-action
- Make it compelling and click-worthy

### Open Graph Tags:
- `og:title` - Same as or similar to page title
- `og:description` - Same as or similar to meta description
- `og:image` - 1200x630px recommended
- `og:type` - "website" for pages, "article" for blog posts
- `og:url` - Canonical page URL

### Canonical URLs:
- Every page should have `<link rel="canonical" href="https://houseofdevelopers.co.uk/page-path" />`
- Prevents duplicate content issues
- Critical for SEO

### Structured Data (JSON-LD):
- Organization schema on homepage
- BreadcrumbList on all pages
- Article schema on blog posts
- LocalBusiness schema for contact page
- FAQPage schema on service pages with FAQs
