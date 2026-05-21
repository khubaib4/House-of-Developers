# SEO Audit — Performance & Core Web Vitals
**Site:** houseofdevelopers.co.uk  
**Date:** May 2026  

---

## Bundle Analysis

### Current Build Output

```
dist/public/assets/index-DOVK__GL.js   1,743 KB (minified) │ gzip: 449 KB
dist/public/assets/index-LoWeiuZc.css    172 KB (minified) │ gzip: 24 KB
```

**1.74 MB JS bundle (449 KB gzipped) is extremely large.** Industry recommendations:
- Initial JS budget: < 170 KB (gzipped) for good LCP
- This bundle is **2.6× over budget**
- On a 4G mobile connection (~8 Mbps), loading 449 KB of JS takes ~0.4 seconds — plus parse/execute time adds another 2–3 seconds on mid-range phones

**There is a single monolithic JS chunk.** Every page component, every library, every icon is loaded on every page, even if a user only visits the homepage. This is the primary cause of slow initial load times.

---

## Heavy Dependencies (Estimated Bundle Contribution)

| Package | Purpose | Est. Gzipped Size | Used Everywhere? | Notes |
|---------|---------|-------------------|-----------------|-------|
| `framer-motion` | Animations | ~40 KB | Yes — all pages | Necessary but could reduce API surface used |
| `@tanstack/react-query` | Data fetching | ~13 KB | Only for contact form | Could use `fetch` directly on non-data pages |
| All `@radix-ui/*` (17 packages) | UI primitives | ~60 KB total | Varies per page | Many Radix packages may be unused on most pages |
| `recharts` | Charts | ~75 KB | Only component-demo | Not used on any public-facing page |
| `embla-carousel-react` | Carousel | ~8 KB | Few pages | OK |
| `react-icons` | Icon library | ~200 KB unpruned | Scattered use | **Critical** — if imported as `import { X } from 'react-icons/fi'`, it tree-shakes OK; if `import * from 'react-icons'` it bloats the bundle |
| `lucide-react` | Icons | ~40 KB with tree-shaking | All pages | OK if individual imports used |
| `date-fns` | Date utilities | ~15 KB | blog-post, few others | OK |
| `drizzle-orm` | Database ORM | ~30 KB | Server only | **Should not be in client bundle** |
| `express`, `express-session` | Server framework | ~80 KB | Server only | **Should not be in client bundle** |
| `passport`, `passport-local` | Auth | ~20 KB | Server only | **Should not be in client bundle** |
| `pg` | PostgreSQL client | ~50 KB | Server only | **Should not be in client bundle** |
| `ws` | WebSockets | ~15 KB | Server only | **Should not be in client bundle** |
| `connect-pg-simple` | Session store | ~5 KB | Server only | **Should not be in client bundle** |
| `memorystore` | Session store | ~5 KB | Server only | **Should not be in client bundle** |

---

## Critical Issue: Server Packages in Client Bundle

The `package.json` mixes client and server dependencies in a single `dependencies` block. Vite's tree-shaker should exclude packages not imported by client code — but any client-side import that transitively requires a server package will pull it in.

**Verify by checking `dist/public/assets/index-DOVK__GL.js` for:**
```bash
grep -c "drizzle\|express\|passport\|pg-pool" dist/public/assets/index-*.js
```

If server packages are leaking into the client bundle, the fix is to ensure no client file imports from `server/` or `shared/schema.ts` in a way that pulls in server dependencies.

---

## No Lazy Loading Implemented

**All 38 page components are eagerly imported** in `App.tsx`:

```tsx
import Home from "@/pages/home";
import ServicesPage from "@/pages/services";
import AIServicesPage from "@/pages/ai-services";
// ... 35 more imports
```

Every user pays the download cost for all 38 pages even if they only visit one. Implementing React's `lazy()` and `Suspense` would split each page into its own chunk and load them on demand.

**Impact:** Code splitting alone could reduce the initial bundle from ~1.74 MB to ~300–400 KB, with each route chunk being ~30–60 KB.

**Fix — Lazy load all routes in `App.tsx`:**

```tsx
import { lazy, Suspense } from "react";

const Home = lazy(() => import("@/pages/home"));
const ServicesPage = lazy(() => import("@/pages/services"));
const AIServicesPage = lazy(() => import("@/pages/ai-services"));
// ... all other pages

function Router() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin" /></div>}>
      <Switch>
        <Route path="/" component={Home} />
        {/* ... */}
      </Switch>
    </Suspense>
  );
}
```

---

## Optimization Opportunities

### 1. Recharts — Loaded on all pages, only used in `component-demo`

`recharts` (~75 KB gzipped) is in `dependencies` and imported somewhere in the component tree. Since `/demo` is an internal page not visited by users, this ~75 KB is wasted on every public page.

**Fix:** Remove `recharts` from `dependencies` or ensure it's only imported within the demo page (already lazy-loaded after the fix above).

### 2. `react-icons` — Potential tree-shaking issue

`react-icons` has multiple icon sets (fa, fi, md, etc.). If any file does `import * as Icons from 'react-icons'` or imports from a barrel file, it can pull in 200+ KB of icon SVGs.

**Verify:** Check for `from 'react-icons'` (without a sub-path). All imports should be `from 'react-icons/lu'` or equivalent specific sub-package.

### 3. Largest page files (by line count) are service detail pages

| File | Lines | Optimization |
|------|-------|-------------|
| `ai-agents.tsx` | 1,396 | Lazy load + split mockup components |
| `custom-development.tsx` | 1,355 | Lazy load |
| `web-development.tsx` | 1,347 | Lazy load |
| `ai-services.tsx` | 1,310 | Lazy load |
| `ai-chatbots.tsx` | 1,246 | Lazy load |
| `shopify-development.tsx` | 1,230 | Lazy load |

These are content-heavy pages that most users won't land on directly. With lazy loading, they won't be downloaded until the user navigates to them.

### 4. No image optimization

`client/public/` contains only `favicon.svg`, `favicon.png`, `robots.txt`, and `sitemap.xml`. There is no `og-image.jpg` (critical missing file). Any images embedded in JSX use standard `<img>` tags without:
- Explicit `width` and `height` attributes (causes CLS — layout shift)
- `loading="lazy"` for below-fold images
- `srcset` for responsive sizes
- WebP format

**Quick wins:**
- Add `width` and `height` to all `<img>` tags
- Add `loading="lazy"` to images that appear below the fold
- Create and deploy `/og-image.jpg` (1200×630px) immediately

### 5. No console statements found

✅ Grep across `client/src/pages/` and `client/src/components/` found no `console.log`, `console.error`, or `console.warn` statements in production page/component code.

---

## Core Web Vitals Impact Analysis

| Metric | Current Estimate | Target | Primary Cause | Fix |
|--------|-----------------|--------|---------------|-----|
| LCP (Largest Contentful Paint) | ~3–5s (estimated) | < 2.5s | 1.74 MB monolithic JS bundle | Code splitting + lazy loading |
| FID/INP (Interaction to Next Paint) | ~300ms (estimated) | < 200ms | Large JS parse/execute time | Code splitting |
| CLS (Cumulative Layout Shift) | Unknown | < 0.1 | Images without width/height | Add dimensions to `<img>` tags |
| TTFB (Time to First Byte) | ~50–100ms (Vercel) | < 800ms | ✅ Vercel edge CDN is fast | Already good |
| FCP (First Contentful Paint) | ~2–4s (estimated) | < 1.8s | JS must execute before content shows | Code splitting + consider prerender |

---

## Priority Fixes

| Priority | Fix | File | Est. Effort | Est. LCP Improvement |
|----------|-----|------|-------------|---------------------|
| 🔴 P1 | Lazy load all page routes | `App.tsx` | 2 hours | −1.5s LCP |
| 🔴 P1 | Create `og-image.jpg` | `client/public/` | 30 min | Fixes social sharing |
| 🟠 P2 | Verify server packages aren't in client bundle | `package.json` / imports | 1 hour | −100–300 KB |
| 🟠 P2 | Add `width`/`height` to all `<img>` tags | All pages | 2 hours | Fixes CLS |
| 🟡 P3 | Remove `recharts` from client imports (or ensure it only loads in /demo) | `package.json` + demo page | 30 min | −75 KB |
| 🟡 P3 | Audit `react-icons` imports for barrel imports | All pages | 1 hour | Potentially −50 KB |
| 🟢 P4 | Add `loading="lazy"` to below-fold images | All pages | 1 hour | Minor |
