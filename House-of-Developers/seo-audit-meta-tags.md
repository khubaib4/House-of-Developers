# SEO Audit — Meta Tags
**Site:** houseofdevelopers.co.uk  
**Date:** May 2026  

---

## SEO Component Capabilities

The shared `SEO` component (`client/src/components/SEO.tsx`) provides:
- ✅ `<title>` tag (auto-appends `| House of Developers` if not included)
- ✅ `<meta name="description">`
- ✅ `<link rel="canonical">`
- ✅ `og:title`, `og:description`, `og:type`, `og:url`, `og:image`, `og:site_name`
- ✅ `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`
- ✅ `noindex` support via prop
- ✅ JSON-LD structured data via `jsonLd` prop
- ⚠️ **OG image defaults to `/og-image.jpg`** — this file must exist at build output root, or all social shares show a broken image
- ⚠️ **`canonical` prop is optional** — pages that omit it emit no canonical tag at all

---

## Length Thresholds Used

| Tag | Minimum | Optimal | Maximum |
|-----|---------|---------|---------|
| Title | 50 chars | 55–60 | 60 chars |
| Description | 120 chars | 150–155 | 160 chars |

---

## Full Page Audit

> **Title lengths** are measured **after** the component appends `| House of Developers` (18 chars + separator).  
> Titles that already contain the site name are left unchanged by the component.

| # | Page | File | Has SEO? | Title (raw prop) | Title (rendered) | Title Length | Desc Length | Missing OG? | Status |
|---|------|------|----------|-----------------|-----------------|-------------|-------------|-------------|--------|
| 1 | Home | `home.tsx` | ✅ | "Custom Software Development Agency UK \| Web, Mobile & AI" | Same (contains site name—wait, it doesn't contain "House of Developers", so component appends) → "Custom Software Development Agency UK \| Web, Mobile & AI \| House of Developers" | **83 chars ❌ TOO LONG** | 155 chars ✅ | No | ⚠️ Title too long |
| 2 | Services | `services.tsx` | ✅ | "Our Services \| Web, Mobile & AI Development UK" | "Our Services \| Web, Mobile & AI Development UK \| House of Developers" | **71 chars ❌ TOO LONG** | 155 chars ✅ | No | ⚠️ Title too long |
| 3 | Build MVP | `build-mvp.tsx` | ✅ | "Build Your MVP in 30 Days \| Startup MVP Development" | "Build Your MVP in 30 Days \| Startup MVP Development \| House of Developers" | **75 chars ❌ TOO LONG** | 153 chars ✅ | No | ⚠️ Title too long |
| 4 | AI Services | `ai-services.tsx` | ✅ | "AI Development Services \| Chatbots & AI Agents UK" | "AI Development Services \| Chatbots & AI Agents UK \| House of Developers" | **73 chars ❌ TOO LONG** | 152 chars ✅ | No | ⚠️ Title too long |
| 5 | AI Chatbots | `ai-chatbots.tsx` | ✅ | "AI Chatbot Development \| Custom GPT Chatbots UK" | "AI Chatbot Development \| Custom GPT Chatbots UK \| House of Developers" | **71 chars ❌ TOO LONG** | 151 chars ✅ | No | ⚠️ Title too long |
| 6 | AI Agents | `ai-agents.tsx` | ✅ | "AI Agent Development \| Autonomous AI Agents UK" | "AI Agent Development \| Autonomous AI Agents UK \| House of Developers" | **70 chars ❌ TOO LONG** | 145 chars ✅ | No | ⚠️ Title too long |
| 7 | Mobile Dev | `mobile-development.tsx` | ✅ | "Mobile App Development UK \| iOS, Android & Hybrid" | "Mobile App Development UK \| iOS, Android & Hybrid \| House of Developers" | **73 chars ❌ TOO LONG** | 148 chars ✅ | No | ⚠️ Title too long |
| 8 | Hybrid Apps | `hybrid-development.tsx` | ✅ | "Hybrid App Development \| React Native & Flutter UK" | "Hybrid App Development \| React Native & Flutter UK \| House of Developers" | **74 chars ❌ TOO LONG** | 148 chars ✅ | No | ⚠️ Title too long |
| 9 | iOS Dev | `ios-development.tsx` | ✅ | "iOS App Development UK \| Swift & SwiftUI" | "iOS App Development UK \| Swift & SwiftUI \| House of Developers" | **64 chars ❌ TOO LONG** | 146 chars ✅ | No | ⚠️ Title too long |
| 10 | Android Dev | `android-development.tsx` | ✅ | "Android App Development UK \| Kotlin & Jetpack" | "Android App Development UK \| Kotlin & Jetpack \| House of Developers" | **70 chars ❌ TOO LONG** | 143 chars ✅ | No | ⚠️ Title too long |
| 11 | SEO Services | `seo-services.tsx` | ✅ | "SEO Services UK \| Technical SEO & Content Strategy" | "SEO Services UK \| Technical SEO & Content Strategy \| House of Developers" | **74 chars ❌ TOO LONG** | 152 chars ✅ | No | ⚠️ Title too long |
| 12 | Web Dev | `web-development.tsx` | ✅ | "Web Development Services UK \| Custom Websites" | "Web Development Services UK \| Custom Websites \| House of Developers" | **69 chars ❌ TOO LONG** | 150 chars ✅ | No | ⚠️ Title too long |
| 13 | Custom Dev | `custom-development.tsx` | ✅ | "Custom Software Development UK \| Bespoke Solutions" | "Custom Software Development UK \| Bespoke Solutions \| House of Developers" | **74 chars ❌ TOO LONG** | 145 chars ✅ | No | ⚠️ Title too long |
| 14 | Web Apps | `web-apps.tsx` | ✅ | "Web Application Development UK \| SaaS & Portals" | "Web Application Development UK \| SaaS & Portals \| House of Developers" | **71 chars ❌ TOO LONG** | 146 chars ✅ | No | ⚠️ Title too long |
| 15 | CMS Dev | `cms-development.tsx` | ✅ | "CMS Development UK \| WordPress, Shopify & More" | "CMS Development UK \| WordPress, Shopify & More \| House of Developers" | **70 chars ❌ TOO LONG** | 147 chars ✅ | No | ⚠️ Title too long |
| 16 | WordPress | `wordpress-development.tsx` | ✅ | "WordPress Development UK \| Custom Themes & Plugins" | "WordPress Development UK \| Custom Themes & Plugins \| House of Developers" | **74 chars ❌ TOO LONG** | 148 chars ✅ | No | ⚠️ Title too long |
| 17 | Shopify | `shopify-development.tsx` | ✅ | "Shopify Development UK \| Custom Stores & Themes" | "Shopify Development UK \| Custom Stores & Themes \| House of Developers" | **71 chars ❌ TOO LONG** | 143 chars ✅ | No | ⚠️ Title too long |
| 18 | Wix | `wix-development.tsx` | ✅ | "Wix Development UK \| Custom Wix Websites" | "Wix Development UK \| Custom Wix Websites \| House of Developers" | **64 chars ❌ TOO LONG** | 147 chars ✅ | No | ⚠️ Title too long |
| 19 | WooCommerce | `woocommerce-development.tsx` | ✅ | "WooCommerce Development UK \| Custom Online Stores" | "WooCommerce Development UK \| Custom Online Stores \| House of Developers" | **73 chars ❌ TOO LONG** | 143 chars ✅ | No | ⚠️ Title too long |
| 20 | Webflow | `webflow-development.tsx` | ✅ | "Webflow Development UK \| Custom Webflow Sites" | "Webflow Development UK \| Custom Webflow Sites \| House of Developers" | **69 chars ❌ TOO LONG** | 143 chars ✅ | No | ⚠️ Title too long |
| 21 | Hire Devs | `hire-developers.tsx` | ✅ | "Hire Dedicated Developers UK \| Remote Dev Teams" | "Hire Dedicated Developers UK \| Remote Dev Teams \| House of Developers" | **71 chars ❌ TOO LONG** | 148 chars ✅ | No | ⚠️ Title too long |
| 22 | Hire Full-Stack | `hire-fullstack.tsx` | ✅ | "Hire Full-Stack Developers \| MERN, MEAN & More" | "Hire Full-Stack Developers \| MERN, MEAN & More \| House of Developers" | **70 chars ❌ TOO LONG** | 148 chars ✅ | No | ⚠️ Title too long |
| 23 | Hire Frontend | `hire-frontend.tsx` | ✅ | "Hire Frontend Developers \| React & Next.js UK" | "Hire Frontend Developers \| React & Next.js UK \| House of Developers" | **69 chars ❌ TOO LONG** | 147 chars ✅ | No | ⚠️ Title too long |
| 24 | Hire Backend | `hire-backend.tsx` | ✅ | "Hire Backend Developers \| Node.js & Python UK" | "Hire Backend Developers \| Node.js & Python UK \| House of Developers" | **69 chars ❌ TOO LONG** | 147 chars ✅ | No | ⚠️ Title too long |
| 25 | Hire MERN | `hire-mern.tsx` | ✅ | "Hire MERN Stack Developers \| MongoDB, React, Node" | "Hire MERN Stack Developers \| MongoDB, React, Node \| House of Developers" | **73 chars ❌ TOO LONG** | 148 chars ✅ | No | ⚠️ Title too long |
| 26 | Hire MEAN | `hire-mean.tsx` | ✅ | "Hire MEAN Stack Developers \| Angular & Node.js UK" | "Hire MEAN Stack Developers \| Angular & Node.js UK \| House of Developers" | **73 chars ❌ TOO LONG** | 147 chars ✅ | No | ⚠️ Title too long |
| 27 | Hire MEVN | `hire-mevn.tsx` | ✅ | "Hire MEVN Stack Developers \| Vue.js & Node.js UK" | "Hire MEVN Stack Developers \| Vue.js & Node.js UK \| House of Developers" | **72 chars ❌ TOO LONG** | 147 chars ✅ | No | ⚠️ Title too long |
| 28 | Hire LAMP | `hire-lamp.tsx` | ✅ | "Hire LAMP Stack Developers \| PHP & MySQL UK" | "Hire LAMP Stack Developers \| PHP & MySQL UK \| House of Developers" | **67 chars ❌ TOO LONG** | 144 chars ✅ | No | ⚠️ Title too long |
| 29 | About | `about.tsx` | ✅ | "About Us \| UK Digital Product Agency" | "About Us \| UK Digital Product Agency \| House of Developers" | **60 chars ✅ (borderline)** | 145 chars ✅ | No | ✅ |
| 30 | Portfolio | `portfolio.tsx` | ✅ | "Our Portfolio \| Projects We've Built" | "Our Portfolio \| Projects We've Built \| House of Developers" | **60 chars ✅ (borderline)** | 150 chars ✅ | No | ✅ |
| 31 | Blog | `blog.tsx` | ✅ | "Tech Blog \| Web Development Guides & Tutorials" | "Tech Blog \| Web Development Guides & Tutorials \| House of Developers" | **70 chars ❌ TOO LONG** | 148 chars ✅ | No | ⚠️ Title too long |
| 32 | Blog Post | `blog-post.tsx` | ✅ | Dynamic (post.title) | Varies | Varies | Varies | No | ✅ (dynamic) |
| 33 | Contact | `contact.tsx` | ✅ | "Contact Us \| Free Project Consultation" | "Contact Us \| Free Project Consultation \| House of Developers" | **61 chars ❌ marginal** | 155 chars ✅ | No | ⚠️ Marginally long |
| 34 | Privacy | `privacy.tsx` | ✅ | "Privacy Policy" | "Privacy Policy \| House of Developers" | **37 chars ⚠️ SHORT** | 146 chars ✅ | No | ⚠️ Title too short |
| 35 | Terms | `terms.tsx` | ✅ | "Terms of Service" | "Terms of Service \| House of Developers" | **39 chars ⚠️ SHORT** | 143 chars ✅ | No | ⚠️ Title too short |
| 36 | Cookies | `cookies.tsx` | ✅ | "Cookie Policy" | "Cookie Policy \| House of Developers" | **36 chars ⚠️ SHORT** | 144 chars ✅ | No | ⚠️ Title too short |
| 37 | 404 | `not-found.tsx` | ❌ | — | — | — | — | — | 🔴 NO SEO COMPONENT |
| 38 | Demo | `component-demo.tsx` | ❌ | — | — | — | — | — | ✅ Acceptable — noindex anyway |

---

## Root Cause: The Title Double-Pipe Problem

**This is the #1 SEO issue on the site.**

The SEO component in `SEO.tsx` appends `| House of Developers` to the title:

```ts
const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`;
```

Every page already has a `title` prop formatted as:

```
"Service Name | Qualifier UK"
```

So the rendered `<title>` becomes:

```
"Service Name | Qualifier UK | House of Developers"
```

This makes **all titles 18–22 characters too long**. Google truncates titles at ~60 characters in search results.

**Example:**

| | Text |
|-|------|
| Prop passed | `"AI Development Services | Chatbots & AI Agents UK"` (51 chars) |
| Rendered | `"AI Development Services | Chatbots & AI Agents UK | House of Developers"` (73 chars) |
| Google shows | `"AI Development Services | Chatbots & AI Agents UK | H…"` (truncated) |

**Fix options (pick one):**

**Option A — Strip brand from all `title` props (recommended)**  
Change every page's title prop to just the keyword/description portion. Let the component append the brand. Example:

```tsx
// Before:
title="AI Development Services | Chatbots & AI Agents UK"

// After:
title="AI Chatbots & Agent Development UK"
// Renders as: "AI Chatbots & Agent Development UK | House of Developers" (57 chars ✅)
```

**Option B — Remove the auto-append from SEO.tsx**  
Change the component to never append the brand name. Include the brand manually only where desired (homepage, about):

```ts
const fullTitle = title; // No auto-append
```

Option A is recommended because it centralizes brand identity in one place and prevents future pages from making this mistake.

---

## Missing OG Image (`/og-image.jpg`)

The SEO component defaults `og:image` to `https://houseofdevelopers.co.uk/og-image.jpg`.  
**This file does not appear to exist in `client/public/`.** If it is missing:
- All social shares (LinkedIn, Twitter/X, WhatsApp, Slack) will show a broken image
- Google may use a random image from the page instead

**Action required:** Create a 1200×630px branded OG image and place it at `client/public/og-image.jpg`.

---

## 404 Page Missing SEO Component

`not-found.tsx` has no `<SEO>` component. It should have at minimum:

```tsx
<SEO
  title="Page Not Found"
  description="The page you're looking for doesn't exist. Browse our services or return to the homepage."
  noindex={true}
/>
```

---

## Priority Fix List

| Priority | Issue | Pages Affected | Effort |
|----------|-------|----------------|--------|
| 🔴 P1 | All titles too long (auto-append creates double-pipe) | 31 of 36 pages | Medium — update all title props |
| 🔴 P1 | `og-image.jpg` missing | All 36 pages | Low — create one 1200×630px image |
| 🟠 P2 | 404 page has no SEO component | 1 page | Low |
| 🟡 P3 | Legal page titles too short (Privacy, Terms, Cookies) | 3 pages | Low |
| 🟡 P3 | Android route named `/kotlin` (mismatch with content) | 1 page | Medium |

---

## Suggested Fixed Titles (Option A)

Replace the title prop on each page so the rendered output is ≤60 characters:

| Page | Current Prop (too long when rendered) | Suggested New Prop | Rendered Output | Chars |
|------|--------------------------------------|-------------------|-----------------|-------|
| Home | Custom Software Development Agency UK \| Web, Mobile & AI | Custom Software Development UK | Custom Software Development UK \| House of Developers | 54 |
| Services | Our Services \| Web, Mobile & AI Development UK | Software Development Services UK | Software Development Services UK \| House of Developers | 56 |
| Build MVP | Build Your MVP in 30 Days \| Startup MVP Development | Build Your MVP in 30 Days | Build Your MVP in 30 Days \| House of Developers | 48 |
| AI Services | AI Development Services \| Chatbots & AI Agents UK | AI Chatbots & Agents Development UK | AI Chatbots & Agents Development UK \| House of Developers | 59 |
| AI Chatbots | AI Chatbot Development \| Custom GPT Chatbots UK | AI Chatbot Development UK | AI Chatbot Development UK \| House of Developers | 49 |
| AI Agents | AI Agent Development \| Autonomous AI Agents UK | AI Agent Development UK | AI Agent Development UK \| House of Developers | 47 |
| Mobile Dev | Mobile App Development UK \| iOS, Android & Hybrid | Mobile App Development UK | Mobile App Development UK \| House of Developers | 49 |
| Hybrid Apps | Hybrid App Development \| React Native & Flutter UK | Hybrid App Development UK | Hybrid App Development UK \| House of Developers | 49 |
| iOS Dev | iOS App Development UK \| Swift & SwiftUI | iOS App Development UK | iOS App Development UK \| House of Developers | 46 |
| Android Dev | Android App Development UK \| Kotlin & Jetpack | Android App Development UK | Android App Development UK \| House of Developers | 50 |
| SEO Services | SEO Services UK \| Technical SEO & Content Strategy | SEO Services UK | SEO Services UK \| House of Developers | 38 ⚠️ short |
| Web Dev | Web Development Services UK \| Custom Websites | Web Development Services UK | Web Development Services UK \| House of Developers | 51 |
| Custom Dev | Custom Software Development UK \| Bespoke Solutions | Custom Software Development UK | Custom Software Development UK \| House of Developers | 54 |
| Web Apps | Web Application Development UK \| SaaS & Portals | Web Application Development UK | Web Application Development UK \| House of Developers | 54 |
| CMS Dev | CMS Development UK \| WordPress, Shopify & More | CMS Development UK | CMS Development UK \| House of Developers | 42 ⚠️ short |
| WordPress | WordPress Development UK \| Custom Themes & Plugins | WordPress Development UK | WordPress Development UK \| House of Developers | 48 |
| Shopify | Shopify Development UK \| Custom Stores & Themes | Shopify Development UK | Shopify Development UK \| House of Developers | 46 |
| Wix | Wix Development UK \| Custom Wix Websites | Wix Website Development UK | Wix Website Development UK \| House of Developers | 49 |
| WooCommerce | WooCommerce Development UK \| Custom Online Stores | WooCommerce Development UK | WooCommerce Development UK \| House of Developers | 50 |
| Webflow | Webflow Development UK \| Custom Webflow Sites | Webflow Development UK | Webflow Development UK \| House of Developers | 46 |
| Hire Devs | Hire Dedicated Developers UK \| Remote Dev Teams | Hire Dedicated Developers UK | Hire Dedicated Developers UK \| House of Developers | 52 |
| Hire Full-Stack | Hire Full-Stack Developers \| MERN, MEAN & More | Hire Full-Stack Developers UK | Hire Full-Stack Developers UK \| House of Developers | 53 |
| Hire Frontend | Hire Frontend Developers \| React & Next.js UK | Hire Frontend Developers UK | Hire Frontend Developers UK \| House of Developers | 51 |
| Hire Backend | Hire Backend Developers \| Node.js & Python UK | Hire Backend Developers UK | Hire Backend Developers UK \| House of Developers | 50 |
| Hire MERN | Hire MERN Stack Developers \| MongoDB, React, Node | Hire MERN Stack Developers UK | Hire MERN Stack Developers UK \| House of Developers | 53 |
| Hire MEAN | Hire MEAN Stack Developers \| Angular & Node.js UK | Hire MEAN Stack Developers UK | Hire MEAN Stack Developers UK \| House of Developers | 53 |
| Hire MEVN | Hire MEVN Stack Developers \| Vue.js & Node.js UK | Hire MEVN Stack Developers UK | Hire MEVN Stack Developers UK \| House of Developers | 53 |
| Hire LAMP | Hire LAMP Stack Developers \| PHP & MySQL UK | Hire LAMP Stack Developers UK | Hire LAMP Stack Developers UK \| House of Developers | 53 |
| About | About Us \| UK Digital Product Agency | About House of Developers | About House of Developers \| House of Developers | 49 (or just "About Us \| House of Developers" = 33) |
| Portfolio | Our Portfolio \| Projects We've Built | Our Client Portfolio & Projects | Our Client Portfolio & Projects \| House of Developers | 55 |
| Blog | Tech Blog \| Web Development Guides & Tutorials | Web Development Blog & Tutorials | Web Development Blog & Tutorials \| House of Developers | 56 |
| Contact | Contact Us \| Free Project Consultation | Contact Us — Free Consultation | Contact Us — Free Consultation \| House of Developers | 54 |
| Privacy | Privacy Policy | Privacy Policy — House of Developers | Privacy Policy — House of Developers | 37 ⚠️ acceptable for legal |
| Terms | Terms of Service | Terms of Service — House of Developers | Terms of Service — House of Developers | 39 ⚠️ acceptable for legal |
| Cookies | Cookie Policy | Cookie Policy — House of Developers | Cookie Policy — House of Developers | 36 ⚠️ acceptable for legal |
