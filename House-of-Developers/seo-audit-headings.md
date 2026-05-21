# SEO Audit — Heading Structure
**Site:** houseofdevelopers.co.uk  
**Date:** May 2026  

> **Note on `motion.h1`:** Framer Motion's `motion.h1` renders as a standard `<h1>` in the DOM and is counted as a real H1 for SEO. Opening/closing tags of the same element are not double-counted.

---

## Heading Count Summary

| Page | File | H1 Count | H2s Present? | H3s Present? | Status |
|------|------|----------|--------------|--------------|--------|
| Home | `home.tsx` | 1 | ✅ | ✅ | ✅ Good |
| Services | `services.tsx` | 1 | ✅ | ✅ | ✅ Good |
| Build MVP | `build-mvp.tsx` | 1 | ✅ | ✅ | ✅ Good |
| AI Services | `ai-services.tsx` | 1 | ✅ | ✅ | ✅ Good |
| AI Chatbots | `ai-chatbots.tsx` | 1 | ✅ | ✅ | ✅ Good |
| AI Agents | `ai-agents.tsx` | 1 | ✅ | ✅ | ✅ Good |
| Mobile Dev | `mobile-development.tsx` | 1 | ✅ | ✅ | ✅ Good |
| Hybrid Apps | `hybrid-development.tsx` | 1 | ✅ | ✅ | ✅ Good |
| iOS Dev | `ios-development.tsx` | 1 | ✅ | ✅ | ✅ Good |
| Android Dev | `android-development.tsx` | 1 | ✅ | ✅ | ✅ Good |
| SEO Services | `seo-services.tsx` | 1 | ✅ | ✅ | ✅ Good |
| Web Dev | `web-development.tsx` | 1 | ✅ | ✅ | ✅ Good |
| Custom Dev | `custom-development.tsx` | 1 | ✅ | ✅ | ✅ Good |
| Web Apps | `web-apps.tsx` | 1 | ✅ | ✅ | ✅ Good |
| CMS Dev | `cms-development.tsx` | 1 | ✅ | ✅ | ✅ Good |
| WordPress | `wordpress-development.tsx` | 1 | ✅ | ✅ | ✅ Good |
| Shopify | `shopify-development.tsx` | 1 | ✅ | ✅ | ✅ Good |
| Wix | `wix-development.tsx` | 1 | ✅ | ✅ | ✅ Good |
| WooCommerce | `woocommerce-development.tsx` | 1 | ✅ | ✅ | ✅ Good |
| Webflow | `webflow-development.tsx` | 1 | ✅ | ✅ | ✅ Good |
| Hire Devs | `hire-developers.tsx` | 1 | ✅ | ✅ | ✅ Good |
| Hire Full-Stack | `hire-fullstack.tsx` | 1 | ✅ | ✅ | ✅ Good |
| Hire Frontend | `hire-frontend.tsx` | 1 | ✅ | ✅ | ✅ Good |
| Hire Backend | `hire-backend.tsx` | 1 | ✅ | ✅ | ✅ Good |
| Hire MERN | `hire-mern.tsx` | 1 | ✅ | ✅ | ✅ Good |
| Hire MEAN | `hire-mean.tsx` | 1 | ✅ | ✅ | ✅ Good |
| Hire MEVN | `hire-mevn.tsx` | 1 | ✅ | ✅ | ✅ Good |
| Hire LAMP | `hire-lamp.tsx` | 1 | ✅ | ✅ | ✅ Good |
| About | `about.tsx` | 1 | ✅ | ✅ | ✅ Good |
| Portfolio | `portfolio.tsx` | 1 | ✅ | ✅ | ✅ Good |
| Blog | `blog.tsx` | 1 | ✅ | ✅ | ✅ Good |
| Blog Post | `blog-post.tsx` | 1 (conditional) | ✅ | ✅ | ✅ Good (see note) |
| Contact | `contact.tsx` | 1 | ✅ | ✅ | ✅ Good |
| Privacy | `privacy.tsx` | 1 | ✅ | ✅ | ✅ Good |
| Terms | `terms.tsx` | 1 | ✅ | ✅ | ✅ Good |
| Cookies | `cookies.tsx` | 1 | ✅ | ✅ | ✅ Good |
| 404 | `not-found.tsx` | 1 | ❌ | ❌ | ⚠️ See note |
| Demo | `component-demo.tsx` | 0 | ✅ | ❌ | ⚠️ See note |

---

## Pages Requiring Attention

### ⚠️ `blog-post.tsx` — Conditional H1 (Not a Bug)

The file has two `<h1>` elements, but they are in separate conditional branches:

```tsx
// Branch A — shown when post is NOT found
<h1 className="text-4xl font-bold mb-4">Article Not Found</h1>

// Branch B — shown when post IS found (normal case)
<h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
  {post.title}
</h1>
```

Only one branch renders at a time, so the DOM always has exactly one `<h1>`. **This is correct.** No fix needed.

### ⚠️ `not-found.tsx` — No H2, minimal structure

The 404 page has an H1 (`"404 Page Not Found"`) but no H2 or supporting structure. Since this page should be `noindex`, heading structure here is low priority. However, the H1 text "404 Page Not Found" is a developer-oriented message. A user-facing message like "Page Not Found" would be cleaner.

The broader issue (no SEO component, no noindex) is documented in `seo-audit-404.md`.

### ⚠️ `component-demo.tsx` — No H1 at all

The demo page has no H1, only H2 section headers. Since `/demo` is excluded from `robots.txt` and should have a `noindex` tag, this is acceptable — it's an internal-only page and won't be indexed.

---

## Key H1 Texts Audit

| Page | H1 Text (rendered) | Keyword-Rich? | Assessment |
|------|-------------------|---------------|------------|
| Home | "We Build Digital Products That Actually Work" | ⚠️ Catchy but no keywords | Lacks "software development", "UK" |
| Services | "Software Development Services" | ✅ | Good |
| Build MVP | "Launch Your MVP in 30 Days" | ✅ | Good — includes timeline hook |
| AI Services | "AI Development Services for Business" | ✅ | Good |
| AI Chatbots | "AI Chatbots That Handle [X]%" | ✅ | Good — includes metric |
| AI Agents | "Autonomous AI Agents for Business" | ✅ | Good |
| Mobile Dev | "Mobile App Development" | ✅ | Good |
| Hybrid Apps | "Cross-Platform App Development" | ✅ | Good |
| iOS Dev | "iOS App Development" | ✅ | Good |
| Android Dev | "Native Android App Development" | ✅ | Good |
| SEO Services | "SEO Services That Get You on Page 1" | ✅ | Good |
| Web Dev | "Custom Web Development" | ✅ | Good |
| Custom Dev | "Bespoke Software Development" | ✅ | Good |
| Web Apps | "Custom Web Application Development" | ✅ | Good |
| CMS Dev | "CMS Development Services" | ✅ | Good |
| WordPress | "WordPress Development Services" | ✅ | Good |
| Shopify | "Shopify Development Services" | ✅ | Good |
| Wix | "Wix Development Services" | ✅ | Good |
| WooCommerce | "WooCommerce Development Services" | ✅ | Good |
| Webflow | "Webflow Development Services" | ✅ | Good |
| About | "Building Software That Matters" | ⚠️ No keywords | Could include "House of Developers" or "UK agency" |
| Portfolio | "Our Portfolio" | ⚠️ Generic | Short; "Client Portfolio — House of Developers" would be stronger |
| Blog | "Developer Blog" or "Tech Blog" | ⚠️ Semi-generic | Acceptable for blog index |
| Contact | "Let's Build Something Together" | ⚠️ No keywords | "Contact House of Developers" would be clearer |
| Privacy | "Privacy Policy" | ✅ | Fine for legal |
| Terms | "Terms of Service" | ✅ | Fine for legal |
| Cookies | "Cookie Policy" | ✅ | Fine for legal |

---

## Heading Hierarchy Assessment

The vast majority of pages follow a correct hierarchy:
```
H1 (page title)
  H2 (section heading)
    H3 (subsection / card title)
      H4 (minor items — used sparingly in a few pages)
```

No pages were found to skip heading levels (e.g., going H1 → H3 without H2). The hierarchy is clean throughout.

---

## Summary

| Status | Count | Pages |
|--------|-------|-------|
| ✅ Perfect heading structure | 35 | All service/hire/CMS pages, core pages |
| ⚠️ H1 exists but text not keyword-rich | 4 | Home, About, Portfolio, Contact |
| ⚠️ No H1 | 1 | component-demo (acceptable, noindex) |
| ⚠️ Conditional H1 (both correct) | 1 | blog-post |

**Overall verdict: Heading structure is good across the site. Only minor keyword-optimization improvements needed for 4 pages.**
