# SEO Audit — Canonical Tags
**Site:** houseofdevelopers.co.uk  
**Date:** May 2026  

---

## SEO Component Canonical Implementation

```ts
// client/src/components/SEO.tsx (lines 33–34)
const cleanPath = canonical === "/" ? "" : (canonical || "").replace(/\/$/, "");
const canonicalUrl = canonical ? `${SITE_URL}${cleanPath}` : undefined;
```

```tsx
{canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
{canonicalUrl && <meta property="og:url" content={canonicalUrl} />}
```

**Base URL:** `https://houseofdevelopers.co.uk` (hardcoded constant — non-www ✅)

**Logic analysis:**
- If `canonical="/"` → emits `https://houseofdevelopers.co.uk` (no trailing slash ✅)
- If `canonical="/about"` → emits `https://houseofdevelopers.co.uk/about` ✅
- If `canonical` is omitted → **no canonical tag emitted at all** ⚠️
- Trailing slashes stripped via `.replace(/\/$/, "")` ✅
- Always uses non-www (`https://houseofdevelopers.co.uk`) ✅
- www redirect should be handled at Vercel/DNS level (not in code) — verify separately

---

## Full Canonical Tag Audit

| # | Page | Has Canonical Prop? | Canonical Emitted | Correct Domain? | Self-Referencing? | Issue |
|---|------|--------------------|--------------------|-----------------|-------------------|-------|
| 1 | Home | ✅ `"/"` | `https://houseofdevelopers.co.uk` | ✅ | ✅ | None |
| 2 | Services | ✅ `"/services"` | `https://houseofdevelopers.co.uk/services` | ✅ | ✅ | None |
| 3 | Build MVP | ✅ `"/services/build-mvp"` | `https://houseofdevelopers.co.uk/services/build-mvp` | ✅ | ✅ | None |
| 4 | AI Services | ✅ `"/services/ai-services"` | `https://houseofdevelopers.co.uk/services/ai-services` | ✅ | ✅ | None |
| 5 | AI Chatbots | ✅ `"/services/ai-services/ai-chatbots"` | `https://houseofdevelopers.co.uk/services/ai-services/ai-chatbots` | ✅ | ✅ | None |
| 6 | AI Agents | ✅ `"/services/ai-services/ai-agents"` | `https://houseofdevelopers.co.uk/services/ai-services/ai-agents` | ✅ | ✅ | None |
| 7 | Mobile Dev | ✅ `"/services/mobile-development"` | `https://houseofdevelopers.co.uk/services/mobile-development` | ✅ | ✅ | None |
| 8 | Hybrid Apps | ✅ `"/services/mobile-development/hybrid"` | `https://houseofdevelopers.co.uk/services/mobile-development/hybrid` | ✅ | ✅ | None |
| 9 | iOS Dev | ✅ `"/services/mobile-development/ios"` | `https://houseofdevelopers.co.uk/services/mobile-development/ios` | ✅ | ✅ | None |
| 10 | Android Dev | ✅ `"/services/mobile-development/kotlin"` | `https://houseofdevelopers.co.uk/services/mobile-development/kotlin` | ✅ | ✅ | ⚠️ Canonical path uses `/kotlin` but page is Android — see URL audit |
| 11 | SEO Services | ✅ `"/services/seo-services"` | `https://houseofdevelopers.co.uk/services/seo-services` | ✅ | ✅ | None |
| 12 | Web Dev | ✅ `"/services/web-development"` | `https://houseofdevelopers.co.uk/services/web-development` | ✅ | ✅ | None |
| 13 | Custom Dev | ✅ `"/services/custom-development"` | `https://houseofdevelopers.co.uk/services/custom-development` | ✅ | ✅ | None |
| 14 | Web Apps | ✅ `"/services/web-apps"` | `https://houseofdevelopers.co.uk/services/web-apps` | ✅ | ✅ | None |
| 15 | CMS Dev | ✅ `"/services/cms-development"` | `https://houseofdevelopers.co.uk/services/cms-development` | ✅ | ✅ | None |
| 16 | WordPress | ✅ `"/services/web-development/cms/wordpress"` | `https://houseofdevelopers.co.uk/services/web-development/cms/wordpress` | ✅ | ✅ | None |
| 17 | Shopify | ✅ `"/services/web-development/cms/shopify"` | `https://houseofdevelopers.co.uk/services/web-development/cms/shopify` | ✅ | ✅ | None |
| 18 | Wix | ✅ `"/services/web-development/cms/wix"` | `https://houseofdevelopers.co.uk/services/web-development/cms/wix` | ✅ | ✅ | None |
| 19 | WooCommerce | ✅ `"/services/web-development/cms/woocommerce"` | `https://houseofdevelopers.co.uk/services/web-development/cms/woocommerce` | ✅ | ✅ | None |
| 20 | Webflow | ✅ `"/services/web-development/cms/webflow"` | `https://houseofdevelopers.co.uk/services/web-development/cms/webflow` | ✅ | ✅ | None |
| 21 | Hire Devs | ✅ `"/services/hire-developers"` | `https://houseofdevelopers.co.uk/services/hire-developers` | ✅ | ✅ | None |
| 22 | Hire Full-Stack | ✅ `"/services/hire-developers/full-stack"` | `https://houseofdevelopers.co.uk/services/hire-developers/full-stack` | ✅ | ✅ | None |
| 23 | Hire Frontend | ✅ `"/services/hire-developers/frontend"` | `https://houseofdevelopers.co.uk/services/hire-developers/frontend` | ✅ | ✅ | None |
| 24 | Hire Backend | ✅ `"/services/hire-developers/backend"` | `https://houseofdevelopers.co.uk/services/hire-developers/backend` | ✅ | ✅ | None |
| 25 | Hire MERN | ✅ `"/services/hire-developers/full-stack/mern"` | `https://houseofdevelopers.co.uk/services/hire-developers/full-stack/mern` | ✅ | ✅ | None |
| 26 | Hire MEAN | ✅ `"/services/hire-developers/full-stack/mean"` | `https://houseofdevelopers.co.uk/services/hire-developers/full-stack/mean` | ✅ | ✅ | None |
| 27 | Hire MEVN | ✅ `"/services/hire-developers/full-stack/mevn"` | `https://houseofdevelopers.co.uk/services/hire-developers/full-stack/mevn` | ✅ | ✅ | None |
| 28 | Hire LAMP | ✅ `"/services/hire-developers/full-stack/lamp"` | `https://houseofdevelopers.co.uk/services/hire-developers/full-stack/lamp` | ✅ | ✅ | None |
| 29 | About | ✅ `"/about"` | `https://houseofdevelopers.co.uk/about` | ✅ | ✅ | None |
| 30 | Portfolio | ✅ `"/portfolio"` | `https://houseofdevelopers.co.uk/portfolio` | ✅ | ✅ | None |
| 31 | Blog | ✅ `"/blog"` | `https://houseofdevelopers.co.uk/blog` | ✅ | ✅ | None |
| 32 | Blog Post | ✅ dynamic `/blog/${post.slug}` | `https://houseofdevelopers.co.uk/blog/{slug}` | ✅ | ✅ | None |
| 33 | Contact | ✅ `"/contact"` | `https://houseofdevelopers.co.uk/contact` | ✅ | ✅ | None |
| 34 | Privacy | ✅ `"/privacy"` | `https://houseofdevelopers.co.uk/privacy` | ✅ | ✅ | None |
| 35 | Terms | ✅ `"/terms"` | `https://houseofdevelopers.co.uk/terms` | ✅ | ✅ | None |
| 36 | Cookies | ✅ `"/cookies"` | `https://houseofdevelopers.co.uk/cookies` | ✅ | ✅ | None |
| 37 | 404 | ❌ No SEO component | None emitted | — | — | 🔴 No canonical (acceptable for 404, but noindex is also missing) |
| 38 | Demo | ❌ No SEO component | None emitted | — | — | ⚠️ Should have `noindex` canonical |

---

## Summary

**Good news:** The canonical implementation is nearly perfect.

- ✅ Every indexable page has a canonical tag
- ✅ All canonicals use the correct non-www domain
- ✅ No trailing slashes in canonicals
- ✅ All canonicals are self-referencing (page URL = canonical)
- ✅ No www vs non-www inconsistencies in the component

**Issues found:**

### ⚠️ Minor: Android page canonical uses `/kotlin` slug

The Android development page emits:
```
<link rel="canonical" href="https://houseofdevelopers.co.uk/services/mobile-development/kotlin" />
```
While technically correct (it matches the route), `/kotlin` is not an intuitive URL for an Android page. This is a URL architecture issue rather than a canonical bug. Fixing the route (as recommended in `seo-audit-urls.md`) will automatically fix this canonical.

### ⚠️ Minor: Demo page has no `noindex`

`/demo` is correctly excluded from `robots.txt`, but the page component has no SEO component with `noindex: true`. Add:

```tsx
<SEO
  title="Component Demo"
  description="Internal component demo."
  noindex={true}
/>
```

### ⚠️ CSR-Specific: Canonical tags only visible after JS executes

Because this is a client-side rendered (CSR) React app, `<link rel="canonical">` is injected by `react-helmet-async` **after JavaScript runs**. When Googlebot fetches the page's raw HTML (before JS), it will see no canonical tag in the HTML source.

**How Google handles this:**
- Googlebot renders JavaScript (it uses a headless Chrome renderer), so it **will** eventually see the canonical tag
- However, there is a delay — crawls that don't fully render JS may miss it
- This is an inherent limitation of CSR and applies to all meta tags, not just canonicals

**Mitigation options (in priority order):**

1. **Inject critical meta tags in `index.html`** for the homepage only (most important):
   ```html
   <!-- client/index.html -->
   <link rel="canonical" href="https://houseofdevelopers.co.uk" />
   ```
   This gives Googlebot an immediate signal before JS runs.

2. **Vercel Edge Middleware** (more advanced): Inject canonical/title/description for each route at the CDN edge, before the SPA shell is served. This is the closest to SSR without changing the framework.

3. **Migrate to SSR/SSG**: Next.js, Astro, or Remix would solve this permanently but requires significant refactoring.

### ✅ Query Parameter Handling

No pages use query parameters in their canonical URL definitions. There are no UTM or filter parameters baked into route definitions. The SEO component properly strips trailing slashes. This is correct.

---

## Verified: Canonical Tag Code is Correct

The SEO component implementation is sound. The fix required is:

1. Add `noindex` to `/demo` page
2. Optionally add a static canonical to `index.html` for the homepage (immediate Googlebot signal)
3. Fix the Android route slug (URL audit issue, not canonical bug)
