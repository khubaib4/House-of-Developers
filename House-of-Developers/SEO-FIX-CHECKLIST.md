# SEO Fix Checklist — House of Developers
**Site:** https://houseofdevelopers.co.uk  
**Audit Completed:** May 2026  
**Audit Files:** See `seo-audit-*.md` for full detail on each section  

---

## Summary Statistics

| Metric | Count |
|--------|-------|
| Total indexable pages | 36 |
| Pages with complete SEO component | 35 |
| Pages missing SEO component | 1 (not-found.tsx) |
| Pages in sitemap | 36 |
| Pages with H1 tag | 35 (36 if you count 404) |
| Pages with multiple H1s | 0 (blog-post.tsx is conditional — only 1 renders at a time) |
| Pages with content in raw HTML (pre-JS) | 0 — **all pages are CSR** |
| Pages missing `og-image.jpg` | 36 (the file doesn't exist) |
| Pages with overly long titles | 31 (title + " | House of Developers" exceeds 60 chars) |
| Server-side redirects configured | 0 |
| Client-side redirects | 1 (`/case-studies → /portfolio`) |
| Sitemap entries with `<lastmod>` | 0 |
| Bundle size (gzipped) | 449 KB (target: < 170 KB) |
| Lazy-loaded routes | 0 |

---

## 1. CRITICAL ISSUES — Fix Immediately (this week)

These issues are actively preventing pages from being indexed by Google.

- [ ] **C1: Add static meta tags to `client/index.html`**  
  Every page returns an empty shell to Googlebot's first-pass crawl. Add the homepage's meta title, description, canonical, and OG tags directly to `index.html` so Googlebot sees real content before JavaScript runs.  
  **File:** `client/index.html`  
  **Detail:** `seo-audit-indexing-checklist.md` → Step 1  
  **Effort:** 30 minutes

- [ ] **C2: Create `og-image.jpg` (1200×630px)**  
  The file `/og-image.jpg` referenced in every page's Open Graph meta does not exist in `client/public/`. All 36 pages show a broken image when shared on social media (Twitter, LinkedIn, WhatsApp, Slack). This also means the default OG image falls back to nothing.  
  **File:** `client/public/og-image.jpg` (create)  
  **Detail:** `seo-audit-meta-tags.md`, `seo-audit-indexing-checklist.md` → Step 4  
  **Effort:** 30 minutes (design + upload)

- [ ] **C3: Submit all priority pages to Google Search Console for indexing**  
  Use GSC URL Inspection tool to manually request crawling for the 10 highest-priority pages. Without this, Googlebot may not re-visit new/updated pages for weeks or months.  
  **Pages:** `/`, `/services`, `/services/web-development`, `/services/ai-services`, `/services/mobile-development`, `/about`, `/portfolio`, `/contact`, `/services/hire-developers`, `/services/seo-services`  
  **Detail:** `seo-audit-indexing-checklist.md` → Step 2  
  **Effort:** 1 hour

- [ ] **C4: Add SEO component with `noindex` to `not-found.tsx`**  
  The 404 page has no SEO component. Google may crawl and attempt to index the 404 page (it returns HTTP 200 due to the CSR catch-all). A `noindex` tag prevents wasted crawl budget.  
  **File:** `client/src/pages/not-found.tsx`  
  **Detail:** `seo-audit-404.md`, `seo-audit-meta-tags.md`  
  **Effort:** 10 minutes

---

## 2. HIGH PRIORITY — Fix This Week

These issues significantly hurt SEO performance and user trust.

- [ ] **H1: Shorten all page title props to ≤42 characters**  
  All 31 non-legal page titles exceed 60 characters after the `| House of Developers` suffix is appended. Google truncates them in search results to `"[keyword] | [description] | H…"`. Worse, the `SEO.tsx` component double-appends the suffix if the title already contains "House of Developers".  
  **Files:** All 31 page `.tsx` files (see `seo-audit-meta-tags.md` for full table)  
  **Fix pattern:** Change `title="Custom Web Application Development Services"` (46 chars) to `title="Custom Web Application Development"` (40 chars)  
  **Detail:** `seo-audit-meta-tags.md`  
  **Effort:** 2–3 hours

- [ ] **H2: Add server-side 301 redirect for `/case-studies → /portfolio` in `vercel.json`**  
  The redirect from the old Case Studies URL to Portfolio is currently client-side only (Wouter `<Redirect>`). This means Google sees `/case-studies` as HTTP 200 with blank content, not as a permanent redirect. Any link equity from the old URL is not transferred to `/portfolio`.  
  **File:** `vercel.json`  
  **Fix:** Add `"redirects": [{ "source": "/case-studies", "destination": "/portfolio", "permanent": true }]`  
  **Detail:** `seo-audit-redirects.md`  
  **Effort:** 5 minutes

- [ ] **H3: Fix the double `| House of Developers` title append bug in `SEO.tsx`**  
  The `fullTitle` logic currently checks `title.includes(SITE_NAME)` before appending. If any title is ever written as `"Something | House of Developers"`, the check works — but this creates dependency on exact string matching. Standardise: all page title props should be short keywords only (no brand suffix), and `SEO.tsx` always appends `| House of Developers`.  
  **File:** `client/src/components/SEO.tsx`  
  **Detail:** `seo-audit-meta-tags.md`  
  **Effort:** 30 minutes (logic fix) + 2 hours (clean up all title props)

- [ ] **H4: Add `<lastmod>` dates to all sitemap entries**  
  None of the 36 sitemap entries have a `<lastmod>` date. Google uses this as a crawl prioritization signal. Pages without `<lastmod>` are treated as equal recrawl priority.  
  **File:** `client/public/sitemap.xml`  
  **Fix:** Add `<lastmod>2026-05-17</lastmod>` to each entry  
  **Detail:** `seo-audit-sitemap.md`  
  **Effort:** 30 minutes

- [ ] **H5: Update `/portfolio` priority in sitemap from 0.7 to 0.8**  
  Portfolio is a primary navigation destination. Its priority should match other core pages (About, Contact) at 0.8, not secondary service sub-pages at 0.7.  
  **File:** `client/public/sitemap.xml`  
  **Detail:** `seo-audit-sitemap.md`  
  **Effort:** 2 minutes

---

## 3. MEDIUM PRIORITY — Fix This Month

These issues impact ranking position and Core Web Vitals scores.

- [ ] **M1: Lazy load all route components in `App.tsx` (code splitting)**  
  All 38 page components are eagerly imported, creating a monolithic 1.74 MB JS bundle (449 KB gzipped). Googlebot must download and execute this entire bundle before seeing any page content. Converting all imports to `lazy()` + `Suspense` will reduce the initial chunk to ~300 KB and create 38 separate on-demand chunks.  
  **File:** `client/src/App.tsx`  
  **Detail:** `seo-audit-performance.md`  
  **Effort:** 2–4 hours  
  **Impact:** Estimated −1.5s LCP improvement

- [ ] **M2: Strengthen H1 text on 4 pages to include primary keywords**  
  Home, About, Portfolio, and Contact pages have H1s that are catchy but lack target keywords. Google relies heavily on H1 content for topic classification.  
  | Page | Current H1 | Suggested H1 |
  |------|-----------|--------------|
  | Home | "We Build Digital Products That Actually Work" | "Custom Software Development Agency UK" |
  | About | "Building Software That Matters" | "About House of Developers — UK Software Agency" |
  | Portfolio | "Our Portfolio" | "Client Portfolio — Software We've Built" |
  | Contact | "Let's Build Something Together" | "Contact Our Development Team" |  
  **Files:** `home.tsx`, `about.tsx`, `portfolio.tsx`, `contact.tsx`  
  **Detail:** `seo-audit-headings.md`  
  **Effort:** 1 hour

- [ ] **M3: Add `width` and `height` attributes to all `<img>` tags**  
  Images without explicit dimensions cause Cumulative Layout Shift (CLS) — the page "jumps" as images load, which hurts Core Web Vitals scores and Google ranking.  
  **Files:** All pages with `<img>` elements  
  **Detail:** `seo-audit-performance.md`  
  **Effort:** 2 hours

- [ ] **M4: Rename `/services/mobile-development/kotlin` route to `/android`**  
  The Android development page uses `/kotlin` as its URL slug, which is the language name, not the platform. Users and search engines searching for "Android app development" expect `/android` in the URL. This is also inconsistent with how iOS uses `/ios` (the OS, not Swift).  
  **Files:** `App.tsx`, `client/public/sitemap.xml`, all internal links to this route  
  **Detail:** `seo-audit-urls.md`, `seo-audit-sitemap.md`  
  **Effort:** 1 hour (code change + 301 redirect for `/kotlin → /android`)

- [ ] **M5: Audit and fix `react-icons` barrel imports**  
  Verify that all `react-icons` imports use specific sub-paths (e.g., `from 'react-icons/fi'`) and not barrel imports (`from 'react-icons'`), which could add ~200 KB of unused icon SVGs to the bundle.  
  **Files:** All page/component files using `react-icons`  
  **Detail:** `seo-audit-performance.md`  
  **Effort:** 1 hour

---

## 4. LOW PRIORITY — Nice to Have

These are improvements that will compound SEO gains over time.

- [ ] **L1: Verify server-side packages aren't leaking into the client bundle**  
  `package.json` mixes client and server dependencies. Packages like `drizzle-orm`, `express`, `passport`, and `pg` should never appear in the client-side JS bundle. Run a bundle analysis to confirm.  
  **Command:** `grep -c "drizzle\|express\|passport" dist/public/assets/index-*.js`  
  **Detail:** `seo-audit-performance.md`  
  **Effort:** 1–2 hours investigation

- [ ] **L2: Add `loading="lazy"` to all below-the-fold images**  
  Images that appear below the initial viewport should use lazy loading to improve initial page render times.  
  **Detail:** `seo-audit-performance.md`  
  **Effort:** 1 hour

- [ ] **L3: Add dynamic sitemap generation for blog posts**  
  As the blog grows, individual post URLs (`/blog/[slug]`) should be included in the sitemap. Currently no blog posts are listed. Consider a build-time sitemap generator or a dynamic `/sitemap.xml` endpoint.  
  **Detail:** `seo-audit-sitemap.md`  
  **Effort:** 2–4 hours

- [ ] **L4: Add `<noscript>` fallback content to `index.html`**  
  A `<noscript>` block with basic company information improves accessibility and gives Googlebot a signal during no-JS first-pass crawling.  
  **File:** `client/index.html`  
  **Detail:** `seo-audit-indexing-checklist.md`  
  **Effort:** 30 minutes

- [ ] **L5: Consider Server-Side Rendering (SSR) or Static Site Generation (SSG)**  
  The fundamental problem — empty HTML shell on first crawl — can only be fully solved by rendering page content on the server. Options:
  - **Vite SSR** (custom implementation, complex)
  - **Astro** (replace Vite, simpler migration)
  - **Next.js** (full migration, most features)
  - **react-snap / vite-plugin-prerender** (pre-render at build time, lowest effort)  
  **Effort:** 1–4 weeks depending on approach  
  **Impact:** Would solve the #1 indexing issue entirely

- [ ] **L6: Consider adding a `component-demo` noindex tag**  
  The `/demo` route is correctly excluded from `robots.txt` (`Disallow: /demo`), but it has no `<meta name="robots" content="noindex">` tag. Adding this is a belt-and-braces approach in case the robots.txt disallow is ever removed.  
  **File:** `client/src/pages/component-demo.tsx`  
  **Effort:** 5 minutes

---

## 6. Recommended Fix Order

**Do these in sequence for maximum indexing improvement:**

**Day 1 (2–3 hours):**
1. **C2** — Create and upload `og-image.jpg` to `client/public/` *(unblocks social sharing for all 36 pages simultaneously)*
2. **C1** — Add static meta tags to `client/index.html` *(gives Googlebot real content on first-pass for homepage)*
3. **C4** — Add noindex SEO component to `not-found.tsx` *(stops crawl budget waste)*
4. **H2** — Add server-side 301 redirect in `vercel.json` *(5-minute fix, big SEO signal)*

**Days 2–3 (4–5 hours):**
5. **H1 + H3** — Shorten all page title props to ≤42 chars and fix double-append logic in `SEO.tsx` *(fixes 31 pages at once)*
6. **C3** — Submit top 10 pages via Google Search Console URL Inspection *(manually queues Googlebot)*

**Week 1–2 (3–4 hours):**
7. **H4 + H5** — Add `<lastmod>` to sitemap and fix portfolio priority *(sitemap improvements)*
8. **M2** — Update H1 text on Home, About, Portfolio, Contact *(keyword optimization)*

**Week 2–4 (4–6 hours):**
9. **M1** — Implement lazy loading / code splitting in `App.tsx` *(biggest performance win)*
10. **M3** — Add `width`/`height` to all `<img>` tags *(CLS fix)*
11. **M4** — Rename `/kotlin` route to `/android` with 301 redirect

**Month 2+ (future investment):**
12. **L3** — Dynamic blog sitemap
13. **L5** — Evaluate SSR/SSG options for full crawlability

---

## Audit Files Reference

| File | Contents |
|------|----------|
| `seo-audit-urls.md` | URL structure, naming conventions, route table |
| `seo-audit-meta-tags.md` | All page titles, descriptions, OG tags, issues |
| `seo-audit-canonical.md` | Canonical tag implementation across all pages |
| `seo-audit-404.md` | 404 page, soft 404s, HTTP status, CSR implications |
| `seo-audit-sitemap.md` | Sitemap accuracy, missing pages, priority values |
| `seo-audit-redirects.md` | All redirects, chains, server vs client redirects |
| `seo-audit-headings.md` | H1–H4 structure for all 36 pages |
| `seo-audit-performance.md` | Bundle size, lazy loading, Core Web Vitals |
| `seo-audit-indexing-checklist.md` | Root cause of indexing failure, per-page diagnostics |
| **`SEO-FIX-CHECKLIST.md`** | **← This file. Master tracking checklist.** |
