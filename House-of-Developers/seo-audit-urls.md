# SEO Audit — URL Structure
**Site:** houseofdevelopers.co.uk  
**Framework:** Vite + React (CSR) + Wouter  
**Date:** May 2026  

---

## URL Standard (Adopted)

| Rule | Standard |
|------|----------|
| Trailing slashes | **NO** — never use trailing slashes |
| Case | **Lowercase only** |
| Word separator | **Hyphens** (`-`), never underscores |
| Query parameters in nav | **Never** — clean URLs only |
| Hash-based routing | **Not used** — path-based routing via Wouter |
| Protocol / domain | `https://houseofdevelopers.co.uk` (non-www) |

---

## Full Route Inventory

| # | Page | Current Route | Trailing Slash? | Hash? | Query Params? | SEO-Friendly? | Issues | Recommended URL |
|---|------|--------------|-----------------|-------|---------------|---------------|--------|-----------------|
| 1 | Home | `/` | N/A | No | No | ✅ | None | `/` |
| 2 | Services | `/services` | No | No | No | ✅ | None | `/services` |
| 3 | Build MVP | `/services/build-mvp` | No | No | No | ✅ | None | `/services/build-mvp` |
| 4 | AI Services | `/services/ai-services` | No | No | No | ✅ | None | `/services/ai-services` |
| 5 | AI Chatbots | `/services/ai-services/ai-chatbots` | No | No | No | ✅ | None | `/services/ai-services/ai-chatbots` |
| 6 | AI Agents | `/services/ai-services/ai-agents` | No | No | No | ✅ | None | `/services/ai-services/ai-agents` |
| 7 | Mobile Dev | `/services/mobile-development` | No | No | No | ✅ | None | `/services/mobile-development` |
| 8 | Hybrid Apps | `/services/mobile-development/hybrid` | No | No | No | ✅ | None | `/services/mobile-development/hybrid` |
| 9 | iOS Dev | `/services/mobile-development/ios` | No | No | No | ✅ | None | `/services/mobile-development/ios` |
| 10 | Android Dev | `/services/mobile-development/kotlin` | No | No | No | ⚠️ | **URL says `/kotlin`, page is Android** | `/services/mobile-development/android` |
| 11 | SEO Services | `/services/seo-services` | No | No | No | ✅ | None | `/services/seo-services` |
| 12 | Web Dev | `/services/web-development` | No | No | No | ✅ | None | `/services/web-development` |
| 13 | Custom Dev | `/services/custom-development` | No | No | No | ✅ | None | `/services/custom-development` |
| 14 | Web Apps | `/services/web-apps` | No | No | No | ✅ | None | `/services/web-apps` |
| 15 | CMS Dev | `/services/cms-development` | No | No | No | ✅ | None | `/services/cms-development` |
| 16 | WordPress | `/services/web-development/cms/wordpress` | No | No | No | ✅ | None | `/services/web-development/cms/wordpress` |
| 17 | Shopify | `/services/web-development/cms/shopify` | No | No | No | ✅ | None | `/services/web-development/cms/shopify` |
| 18 | Wix | `/services/web-development/cms/wix` | No | No | No | ✅ | None | `/services/web-development/cms/wix` |
| 19 | WooCommerce | `/services/web-development/cms/woocommerce` | No | No | No | ✅ | None | `/services/web-development/cms/woocommerce` |
| 20 | Webflow | `/services/web-development/cms/webflow` | No | No | No | ✅ | None | `/services/web-development/cms/webflow` |
| 21 | Hire Devs | `/services/hire-developers` | No | No | No | ✅ | None | `/services/hire-developers` |
| 22 | Hire Full-Stack | `/services/hire-developers/full-stack` | No | No | No | ✅ | None | `/services/hire-developers/full-stack` |
| 23 | Hire Frontend | `/services/hire-developers/frontend` | No | No | No | ✅ | None | `/services/hire-developers/frontend` |
| 24 | Hire Backend | `/services/hire-developers/backend` | No | No | No | ✅ | None | `/services/hire-developers/backend` |
| 25 | Hire MERN | `/services/hire-developers/full-stack/mern` | No | No | No | ✅ | None | `/services/hire-developers/full-stack/mern` |
| 26 | Hire MEAN | `/services/hire-developers/full-stack/mean` | No | No | No | ✅ | None | `/services/hire-developers/full-stack/mean` |
| 27 | Hire MEVN | `/services/hire-developers/full-stack/mevn` | No | No | No | ✅ | None | `/services/hire-developers/full-stack/mevn` |
| 28 | Hire LAMP | `/services/hire-developers/full-stack/lamp` | No | No | No | ✅ | None | `/services/hire-developers/full-stack/lamp` |
| 29 | About | `/about` | No | No | No | ✅ | None | `/about` |
| 30 | Portfolio | `/portfolio` | No | No | No | ✅ | None | `/portfolio` |
| 31 | Case Studies (redirect) | `/case-studies` | No | No | No | ✅ | **Redirects → /portfolio (correct)** | `/portfolio` |
| 32 | Blog | `/blog` | No | No | No | ✅ | None | `/blog` |
| 33 | Blog Post | `/blog/:slug` | No | No | No | ✅ | Dynamic — depends on slug | `/blog/:slug` |
| 34 | Demo | `/demo` | No | No | No | ✅ | **Disallowed in robots.txt (correct)** | `/demo` |
| 35 | Contact | `/contact` | No | No | No | ✅ | None | `/contact` |
| 36 | Privacy | `/privacy` | No | No | No | ✅ | None | `/privacy` |
| 37 | Terms | `/terms` | No | No | No | ✅ | None | `/terms` |
| 38 | Cookies | `/cookies` | No | No | No | ✅ | None | `/cookies` |
| — | 404 (catch-all) | `<any unmatched>` | — | — | — | ⚠️ | **Returns HTTP 200, not 404** | — |

---

## Issues Found

### 🔴 CRITICAL

None that affect URL structure directly, but see HTTP-level issue below.

### ⚠️ MODERATE

#### 1. Android route uses `/kotlin` instead of `/android`
- **Current:** `/services/mobile-development/kotlin`
- **Problem:** The page is titled "Android App Development" but the URL slug is `/kotlin` (the language, not the platform). Google and users expect `/android`.
- **Canonical tag impact:** The page canonical currently emits `https://houseofdevelopers.co.uk/services/mobile-development/kotlin`. This is valid but suboptimal for keyword targeting.
- **Recommendation:** Rename route to `/services/mobile-development/android`, redirect `/kotlin` → `/android`.
- **Effort:** Low (update App.tsx, SEO canonical prop, sitemap entry)

#### 2. CSR returns HTTP 200 for all URLs (including 404s)
- **Current vercel.json** uses a catch-all rewrite: `"/(.*)" → "/index.html"`
- **Effect:** Every URL — including non-existent ones — returns HTTP 200 with the SPA shell. React renders the 404 component client-side, but the HTTP status is 200.
- **SEO Impact:** Googlebot may index soft 404 pages; genuine 404s aren't signalled correctly.
- **Fix:** See `seo-audit-404.md`.

### ✅ Good Practices Observed

- All routes lowercase ✅
- All routes use hyphens ✅
- No trailing slashes ✅
- No hash-based routes ✅
- No query parameters in navigation ✅
- `/case-studies` properly redirects to `/portfolio` ✅
- `/demo` disallowed in `robots.txt` ✅
- Consistent URL depth (no arbitrarily deep nesting) ✅

---

## Sitemap Coverage Check

Routes in `App.tsx` vs entries in `client/public/sitemap.xml`:

| Route | In Sitemap? |
|-------|-------------|
| `/` | ✅ |
| `/about` | ✅ |
| `/contact` | ✅ |
| `/services` | ✅ |
| `/portfolio` | ✅ |
| `/blog` | ✅ |
| `/services/build-mvp` | ✅ |
| `/services/ai-services` | ✅ |
| `/services/ai-services/ai-chatbots` | ✅ |
| `/services/ai-services/ai-agents` | ✅ |
| `/services/mobile-development` | ✅ |
| `/services/mobile-development/hybrid` | ✅ |
| `/services/mobile-development/ios` | ✅ |
| `/services/mobile-development/kotlin` | ✅ (uses `/kotlin` slug) |
| `/services/seo-services` | ✅ |
| `/services/web-development` | ✅ |
| `/services/custom-development` | ✅ |
| `/services/web-apps` | ✅ |
| `/services/cms-development` | ✅ |
| `/services/web-development/cms/wordpress` | ✅ |
| `/services/web-development/cms/shopify` | ✅ |
| `/services/web-development/cms/wix` | ✅ |
| `/services/web-development/cms/woocommerce` | ✅ |
| `/services/web-development/cms/webflow` | ✅ |
| `/services/hire-developers` | ✅ |
| `/services/hire-developers/full-stack` | ✅ |
| `/services/hire-developers/frontend` | ✅ |
| `/services/hire-developers/backend` | ✅ |
| `/services/hire-developers/full-stack/mern` | ✅ |
| `/services/hire-developers/full-stack/mean` | ✅ |
| `/services/hire-developers/full-stack/mevn` | ✅ |
| `/services/hire-developers/full-stack/lamp` | ✅ |
| `/privacy` | ✅ |
| `/terms` | ✅ |
| `/cookies` | ✅ |
| `/demo` | ❌ Correct — excluded (robots.txt disallows) |
| `/blog/:slug` | ❌ Dynamic — individual posts not in sitemap |
| `/case-studies` | ❌ Removed (redirects to /portfolio — correct) |

**Sitemap verdict:** All indexable static routes are covered. ✅  
**Gap:** Individual blog post URLs are not in the sitemap. If the blog grows, a dynamic sitemap generator should be added.
