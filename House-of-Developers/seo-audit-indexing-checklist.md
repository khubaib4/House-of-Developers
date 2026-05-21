# SEO Audit — Indexing Diagnostic Checklist
**Site:** houseofdevelopers.co.uk  
**Date:** May 2026  

---

## Why Pages Aren't Being Indexed — Root Cause Diagnosis

This is a **Client-Side Rendered (CSR)** React app. When Googlebot fetches any URL, the raw HTTP response is:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + React + TS</title>  <!-- ← DEFAULT VITE TITLE, NOT YOUR SEO TITLE -->
  </head>
  <body>
    <div id="root"></div>  <!-- ← COMPLETELY EMPTY BODY -->
    <script type="module" src="/assets/index-DOVK__GL.js"></script>
  </body>
</html>
```

Googlebot has two modes:
1. **First-pass crawl (HTML only):** Sees an empty page with title "Vite + React + TS". No content. No SEO meta. No canonical. No headings.
2. **Second-pass render (JavaScript):** Google queues the page for JS rendering. After executing the 1.74 MB bundle, it sees your actual content.

The second pass can happen **days to weeks later** and is not guaranteed for every page. Google's rendering queue is overwhelmed and prioritizes known, trusted sites. For a new site, most pages may never get second-pass rendering.

**This is the #1 reason pages aren't indexed.**

---

## Master Diagnostic Checklist

### Per-Page Checklist (apply to each unindexed URL)

```
□ 1. Page exists in sitemap.xml
□ 2. Page has unique meta title (rendered after JS, ≤60 chars)
□ 3. Page has unique meta description (rendered after JS, 150–160 chars)
□ 4. Page has canonical tag (rendered after JS)
□ 5. Page returns HTTP 200 (NOT 404 or 500)
□ 6. Page is NOT blocked by robots.txt
□ 7. Page has substantial content after JS renders (>300 words)
□ 8. Page has proper H1 tag
□ 9. Page has internal links pointing to it from other pages
□ 10. Page loads without JavaScript (raw HTML has meaningful content)  ← FAILING
□ 11. Page URL is clean (no query parameters, no hash)
□ 12. Page has been submitted via Google Search Console URL Inspection
□ 13. No duplicate content (title/description unique across all pages)
□ 14. Page is mobile-friendly (responsive design)
□ 15. Page is not marked noindex in any meta robots tag
□ 16. Title tag is present in raw HTML (index.html) — not just JS-injected
□ 17. og-image.jpg exists and is accessible
```

---

## Top 10 Priority Pages — Full Diagnostic

| # | Page | URL | Sitemap? | Unique Meta? | Canonical? | HTTP 200? | robots.txt ok? | Content in raw HTML? | H1? | Submitted to GSC? | Status |
|---|------|-----|----------|--------------|------------|-----------|----------------|---------------------|-----|-------------------|--------|
| 1 | Home | `/` | ✅ | ✅ (after JS) | ✅ (after JS) | ✅ | ✅ | ❌ Empty shell | ✅ (after JS) | ❓ | ⚠️ Need GSC verify |
| 2 | Web Dev | `/services/web-development` | ✅ | ✅ (after JS) | ✅ (after JS) | ✅ | ✅ | ❌ Empty shell | ✅ (after JS) | ❓ | ⚠️ Need GSC verify |
| 3 | AI Services | `/services/ai-services` | ✅ | ✅ (after JS) | ✅ (after JS) | ✅ | ✅ | ❌ Empty shell | ✅ (after JS) | ❓ | ⚠️ Need GSC verify |
| 4 | Mobile Dev | `/services/mobile-development` | ✅ | ✅ (after JS) | ✅ (after JS) | ✅ | ✅ | ❌ Empty shell | ✅ (after JS) | ❓ | ⚠️ Need GSC verify |
| 5 | About | `/about` | ✅ | ✅ (after JS) | ✅ (after JS) | ✅ | ✅ | ❌ Empty shell | ✅ (after JS) | ❓ | ⚠️ Need GSC verify |
| 6 | Portfolio | `/portfolio` | ✅ | ✅ (after JS) | ✅ (after JS) | ✅ | ✅ | ❌ Empty shell | ✅ (after JS) | ❓ | ⚠️ Need GSC verify |
| 7 | Contact | `/contact` | ✅ | ✅ (after JS) | ✅ (after JS) | ✅ | ✅ | ❌ Empty shell | ✅ (after JS) | ❓ | ⚠️ Need GSC verify |
| 8 | Hire Devs | `/services/hire-developers` | ✅ | ✅ (after JS) | ✅ (after JS) | ✅ | ✅ | ❌ Empty shell | ✅ (after JS) | ❓ | ⚠️ Need GSC verify |
| 9 | SEO Services | `/services/seo-services` | ✅ | ✅ (after JS) | ✅ (after JS) | ✅ | ✅ | ❌ Empty shell | ✅ (after JS) | ❓ | ⚠️ Need GSC verify |
| 10 | WordPress | `/services/web-development/cms/wordpress` | ✅ | ✅ (after JS) | ✅ (after JS) | ✅ | ✅ | ❌ Empty shell | ✅ (after JS) | ❓ | ⚠️ Need GSC verify |

**Pattern:** Every page fails check #10 (content in raw HTML) because this is CSR. Everything else is correctly implemented — but it only exists after JavaScript runs.

---

## Failing Checks — Detail

### ❌ Check #10: Content in raw HTML

**Impact: CRITICAL — this is why pages aren't indexed**

When Googlebot visits any URL on this site, the initial HTML response contains:
- No title (just "Vite + React + TS")
- No meta description
- No canonical tag
- No headings
- No body text
- No structured data

All of these are injected by React (`react-helmet-async`, JSX rendering) after the 1.74 MB JS bundle downloads, parses, and executes. On Googlebot's first pass, it sees nothing.

### ❌ Check #17: `og-image.jpg` missing

`client/public/` contains only: `favicon.png`, `favicon.svg`, `robots.txt`, `sitemap.xml`.

The file `/og-image.jpg` does not exist. Every social share across all 36 pages points to a broken image URL.

### ⚠️ Check #13: Duplicate title suffixes

Due to the double-append issue (see `seo-audit-meta-tags.md`), all 31 non-legal pages have the format `"[Keyword] | [Description] | House of Developers"`. While the full titles are unique, Google truncates them at ~60 characters, leaving only `"[Keyword] | [Description] | H…"` visible — and many of these truncated versions look similar.

---

## Immediate Action Plan to Get Pages Indexed

### Step 1: Add meaningful content to `index.html` (TODAY)

Add static meta tags and content to `client/index.html` for the homepage. This gives Googlebot real content on first-pass without JS:

```html
<!-- client/index.html -->
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/png" href="/favicon.png" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    
    <!-- Static SEO for homepage (overridden by React for other routes) -->
    <title>Custom Software Development Agency UK | House of Developers</title>
    <meta name="description" content="Custom software development agency UK. We build web applications, mobile apps, and AI solutions. 150+ projects delivered, 98% satisfaction. Free consultation." />
    <link rel="canonical" href="https://houseofdevelopers.co.uk" />
    
    <!-- Open Graph -->
    <meta property="og:title" content="Custom Software Development Agency UK | House of Developers" />
    <meta property="og:description" content="Custom software development agency UK. We build web applications, mobile apps, and AI solutions. Free consultation." />
    <meta property="og:url" content="https://houseofdevelopers.co.uk" />
    <meta property="og:image" content="https://houseofdevelopers.co.uk/og-image.jpg" />
    <meta property="og:type" content="website" />
    
    <!-- Twitter -->
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="Custom Software Development Agency UK | House of Developers" />
    <meta name="twitter:description" content="Custom software development agency UK. 150+ projects. Free consultation." />
  </head>
  <body>
    <!-- Minimal static content for Googlebot first-pass -->
    <noscript>
      <h1>House of Developers — Custom Software Development UK</h1>
      <p>We build web applications, mobile apps, and AI solutions for businesses. 150+ projects delivered. Based in Weybridge, UK.</p>
      <a href="mailto:hello@houseofdevelopers.co.uk">hello@houseofdevelopers.co.uk</a>
    </noscript>
    <div id="root"></div>
    <script type="module" src="/assets/index-DOVK__GL.js"></script>
  </body>
</html>
```

### Step 2: Request indexing for top pages via Google Search Console

For each of the 10 priority pages above:
1. Open Google Search Console
2. Enter the URL in the top search bar
3. Click "Request Indexing"
4. Wait 24–72 hours

This manually queues Google to re-crawl and render these specific URLs.

### Step 3: Fix the title length issue (THIS WEEK)

Update all 31 page title props to be ≤42 characters so the rendered `"[title] | House of Developers"` is ≤60 characters total. See `seo-audit-meta-tags.md` for the full list.

### Step 4: Create `og-image.jpg` (THIS WEEK)

A 1200×630px branded image with:
- House of Developers logo
- Tagline: "Custom Software Development UK"
- Green (#10B981) background or accent
- Place at `client/public/og-image.jpg`

### Step 5: Add server-side 301 for `/case-studies` (THIS WEEK)

Update `vercel.json` (see `seo-audit-redirects.md`). Takes 5 minutes.

### Step 6: Code split all routes with lazy loading (THIS MONTH)

Convert all eager imports in `App.tsx` to `lazy()` + `Suspense`. This reduces initial bundle from 1.74 MB to ~300 KB, dramatically improving LCP and Googlebot's ability to render pages.

---

## Estimated Timeline to Indexing

| Action | Time to Complete | Expected Indexing Improvement |
|--------|-----------------|-------------------------------|
| Add static meta to `index.html` | 30 min | Homepage indexed within 1–2 weeks |
| Submit all pages via GSC URL Inspection | 1 hour | Individual pages indexed in 1–7 days |
| Fix title lengths | 2 hours | Better CTR and ranking signals |
| Create og-image.jpg | 30 min | Social traffic improvement |
| Code split routes | 2–4 hours | 40–60% faster load; better Core Web Vitals score |
| Total estimated effort | ~8–12 hours | Most pages indexed within 4–6 weeks |
