# SEO Audit — Sitemap
**Site:** houseofdevelopers.co.uk  
**Sitemap:** `client/public/sitemap.xml` → deployed at `https://houseofdevelopers.co.uk/sitemap.xml`  
**Date:** May 2026  

---

## Sitemap Accessibility

| Check | Status | Notes |
|-------|--------|-------|
| File exists | ✅ | `client/public/sitemap.xml` (5,730 bytes) |
| Deployed URL | ✅ | `/sitemap.xml` (Vite copies `public/` to build output) |
| robots.txt references sitemap | ✅ | `Sitemap: https://houseofdevelopers.co.uk/sitemap.xml` |
| Protocol | ✅ | All URLs use `https://` |
| Domain | ✅ | All URLs use `houseofdevelopers.co.uk` (non-www) |
| Query parameters | ✅ | None present |
| `<lastmod>` dates | ❌ | **No `<lastmod>` on any entry** |

---

## Route vs Sitemap Comparison

| # | Route in App.tsx | In Sitemap? | Sitemap URL | Priority | Issues |
|---|------------------|-------------|-------------|----------|--------|
| 1 | `/` | ✅ | `https://houseofdevelopers.co.uk` | 1.0 | None |
| 2 | `/services` | ✅ | `https://houseofdevelopers.co.uk/services` | 0.9 | None |
| 3 | `/services/build-mvp` | ✅ | `https://houseofdevelopers.co.uk/services/build-mvp` | 0.8 | None |
| 4 | `/services/ai-services` | ✅ | `https://houseofdevelopers.co.uk/services/ai-services` | 0.8 | None |
| 5 | `/services/ai-services/ai-chatbots` | ✅ | `https://houseofdevelopers.co.uk/services/ai-services/ai-chatbots` | 0.7 | None |
| 6 | `/services/ai-services/ai-agents` | ✅ | `https://houseofdevelopers.co.uk/services/ai-services/ai-agents` | 0.7 | None |
| 7 | `/services/mobile-development` | ✅ | `https://houseofdevelopers.co.uk/services/mobile-development` | 0.8 | None |
| 8 | `/services/mobile-development/hybrid` | ✅ | `https://houseofdevelopers.co.uk/services/mobile-development/hybrid` | 0.7 | None |
| 9 | `/services/mobile-development/ios` | ✅ | `https://houseofdevelopers.co.uk/services/mobile-development/ios` | 0.7 | None |
| 10 | `/services/mobile-development/kotlin` | ✅ | `https://houseofdevelopers.co.uk/services/mobile-development/kotlin` | 0.7 | ⚠️ Slug should be `/android` |
| 11 | `/services/seo-services` | ✅ | `https://houseofdevelopers.co.uk/services/seo-services` | 0.7 | None |
| 12 | `/services/web-development` | ✅ | `https://houseofdevelopers.co.uk/services/web-development` | 0.8 | None |
| 13 | `/services/custom-development` | ✅ | `https://houseofdevelopers.co.uk/services/custom-development` | 0.7 | None |
| 14 | `/services/web-apps` | ✅ | `https://houseofdevelopers.co.uk/services/web-apps` | 0.7 | None |
| 15 | `/services/cms-development` | ✅ | `https://houseofdevelopers.co.uk/services/cms-development` | 0.7 | None |
| 16 | `/services/web-development/cms/wordpress` | ✅ | `https://houseofdevelopers.co.uk/services/web-development/cms/wordpress` | 0.7 | None |
| 17 | `/services/web-development/cms/shopify` | ✅ | `https://houseofdevelopers.co.uk/services/web-development/cms/shopify` | 0.7 | None |
| 18 | `/services/web-development/cms/wix` | ✅ | `https://houseofdevelopers.co.uk/services/web-development/cms/wix` | 0.6 | None |
| 19 | `/services/web-development/cms/woocommerce` | ✅ | `https://houseofdevelopers.co.uk/services/web-development/cms/woocommerce` | 0.7 | None |
| 20 | `/services/web-development/cms/webflow` | ✅ | `https://houseofdevelopers.co.uk/services/web-development/cms/webflow` | 0.6 | None |
| 21 | `/services/hire-developers` | ✅ | `https://houseofdevelopers.co.uk/services/hire-developers` | 0.8 | None |
| 22 | `/services/hire-developers/full-stack` | ✅ | `https://houseofdevelopers.co.uk/services/hire-developers/full-stack` | 0.7 | None |
| 23 | `/services/hire-developers/frontend` | ✅ | `https://houseofdevelopers.co.uk/services/hire-developers/frontend` | 0.7 | None |
| 24 | `/services/hire-developers/backend` | ✅ | `https://houseofdevelopers.co.uk/services/hire-developers/backend` | 0.7 | None |
| 25 | `/services/hire-developers/full-stack/mern` | ✅ | `https://houseofdevelopers.co.uk/services/hire-developers/full-stack/mern` | 0.6 | None |
| 26 | `/services/hire-developers/full-stack/mean` | ✅ | `https://houseofdevelopers.co.uk/services/hire-developers/full-stack/mean` | 0.6 | None |
| 27 | `/services/hire-developers/full-stack/mevn` | ✅ | `https://houseofdevelopers.co.uk/services/hire-developers/full-stack/mevn` | 0.6 | None |
| 28 | `/services/hire-developers/full-stack/lamp` | ✅ | `https://houseofdevelopers.co.uk/services/hire-developers/full-stack/lamp` | 0.6 | None |
| 29 | `/about` | ✅ | `https://houseofdevelopers.co.uk/about` | 0.8 | None |
| 30 | `/portfolio` | ✅ | `https://houseofdevelopers.co.uk/portfolio` | 0.7 | ⚠️ Priority should be 0.8 (key page) |
| 31 | `/case-studies` (redirect) | — | Not in sitemap | — | ✅ Correct — it's a redirect |
| 32 | `/blog` | ✅ | `https://houseofdevelopers.co.uk/blog` | 0.8 | None |
| 33 | `/blog/:slug` | ❌ | **Missing** | — | ⚠️ Individual posts not listed |
| 34 | `/demo` | ❌ | **Not in sitemap** | — | ✅ Correct — disallowed in robots.txt |
| 35 | `/contact` | ✅ | `https://houseofdevelopers.co.uk/contact` | 0.8 | None |
| 36 | `/privacy` | ✅ | `https://houseofdevelopers.co.uk/privacy` | 0.3 | None |
| 37 | `/terms` | ✅ | `https://houseofdevelopers.co.uk/terms` | 0.3 | None |
| 38 | `/cookies` | ✅ | `https://houseofdevelopers.co.uk/cookies` | 0.3 | None |

**Result: 35/38 URLs correct. 3 items need attention.**

---

## Issues Found

### ⚠️ Issue 1: No `<lastmod>` dates on any entry

None of the 38 sitemap entries have a `<lastmod>` element. While not strictly required by the sitemap spec, Google uses `<lastmod>` as a crawl prioritization signal. Without it, Google treats all pages as equal recrawl priority.

**Fix:** Add `<lastmod>` to each URL. Static pages can use the last code deploy date. The homepage and blog should be updated most frequently.

### ⚠️ Issue 2: Android page uses `/kotlin` slug

`https://houseofdevelopers.co.uk/services/mobile-development/kotlin` — the page is "Android App Development" but the URL slug is `/kotlin`. If the route is ever renamed to `/android` (recommended), the sitemap entry must be updated simultaneously.

### ⚠️ Issue 3: `/portfolio` priority is 0.7 (should be 0.8)

The portfolio page is a primary navigation destination and high-value conversion page. It should have the same priority as `/about` and `/contact` (0.8), not 0.7 like a secondary service sub-page.

### ✅ No outdated URLs found

The old `/case-studies` URL was correctly removed from the sitemap (it now redirects to `/portfolio`). No ghost URLs pointing to non-existent routes.

### ✅ Blog posts not in sitemap (currently acceptable)

Individual blog post URLs (`/blog/:slug`) are not listed. This is acceptable while the blog is new and posts are few. As content grows, a dynamic sitemap generator should be added.

---

## Recommended Updated Sitemap Entries

Only the items that need changing:

```xml
<!-- Change 1: Add lastmod to all entries (example for homepage) -->
<url>
  <loc>https://houseofdevelopers.co.uk</loc>
  <lastmod>2026-05-17</lastmod>
  <changefreq>weekly</changefreq>
  <priority>1.0</priority>
</url>

<!-- Change 2: Rename /kotlin to /android (if route is renamed) -->
<url>
  <loc>https://houseofdevelopers.co.uk/services/mobile-development/android</loc>
  <lastmod>2026-05-17</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.7</priority>
</url>

<!-- Change 3: Raise portfolio priority to 0.8 -->
<url>
  <loc>https://houseofdevelopers.co.uk/portfolio</loc>
  <lastmod>2026-05-17</lastmod>
  <changefreq>monthly</changefreq>
  <priority>0.8</priority>
</url>
```

---

## Priority Scale in Use

| Priority | Pages |
|----------|-------|
| 1.0 | Homepage only |
| 0.9 | `/services` (main hub) |
| 0.8 | Core pages: `/about`, `/contact`, `/blog`, `/portfolio`, major service parents |
| 0.7 | Service sub-pages |
| 0.6 | Deep sub-pages (specific stacks, CMS variants) |
| 0.3 | Legal pages |

This scale is logical and consistent. ✅

---

## Overall Sitemap Verdict

**Status: Good — 3 minor improvements needed**

The sitemap is structurally sound, correctly deployed, referenced in robots.txt, and covers all indexable static pages. The main gaps are missing `<lastmod>` dates and the `/kotlin` slug inconsistency.
