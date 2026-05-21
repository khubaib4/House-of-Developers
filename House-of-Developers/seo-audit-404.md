# SEO Audit — 404 Page
**Site:** houseofdevelopers.co.uk  
**Date:** May 2026  

---

## Current 404 Status

| Check | Status | Details |
|-------|--------|---------|
| 404 component exists? | ✅ Yes | `client/src/pages/not-found.tsx` |
| Catch-all route in App.tsx? | ✅ Yes | `<Route component={NotFound} />` (last route in Switch) |
| Returns HTTP 404 status? | ❌ **NO** | Returns HTTP 200 (Vercel SPA rewrite) |
| Has SEO `noindex` tag? | ❌ No | No SEO component at all |
| Has helpful navigation? | ❌ No | No links to homepage or services |
| Matches brand design? | ❌ No | Plain Card component, gray background, developer-facing message |
| Has search? | ❌ No | — |

---

## Current 404 Component Code

```tsx
// client/src/pages/not-found.tsx (current)
import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50">
      <Card className="w-full max-w-md mx-4">
        <CardContent className="pt-6">
          <div className="flex mb-4 gap-2">
            <AlertCircle className="h-8 w-8 text-red-500" />
            <h1 className="text-2xl font-bold text-gray-900">404 Page Not Found</h1>
          </div>
          <p className="mt-4 text-sm text-gray-600">
            Did you forget to add the page to the router?
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
```

**Problems with this component:**
- "Did you forget to add the page to the router?" — this is a developer debug message, not a user-facing message ❌
- No links anywhere — users are stranded ❌
- `bg-gray-50` ignores dark mode ❌
- No SEO component (no noindex, no title) ❌
- Doesn't use site Header/Footer layout (it renders its own full-screen div) ❌

---

## Current vercel.json

```json
{
  "buildCommand": "npm run build:vercel",
  "outputDirectory": "dist/public",
  "framework": null,
  "installCommand": "npm install",
  "rewrites": [
    { "source": "/api/(.*)", "destination": "/api/$1" },
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

**The core problem:** The catch-all rewrite `"/(.*)" → "/index.html"` tells Vercel to serve `index.html` for **every URL**, including ones that don't exist. Vercel responds with **HTTP 200** and the React SPA shell. React then renders the NotFound component client-side, but from the HTTP perspective it was a successful 200 response.

---

## Why This Matters for SEO

### Soft 404s are a known Google indexing problem

When Googlebot requests a non-existent URL and receives HTTP 200 with a "page not found" style page, this is called a **soft 404**. Google:

1. May still index the URL since it got a 200
2. Will eventually detect the content is thin/unhelpful and drop it
3. May report it in Google Search Console under "Crawled – currently not indexed" or "Soft 404"
4. Wastes crawl budget on fake pages

### The indexing symptom you're seeing

If Google Search Console shows pages as "Crawled – currently not indexed" or "Discovered – currently not indexed" — the CSR-returning-200-for-404s is a contributing factor. Google is crawling, getting 200 for everything, and then the JS-rendered page either:
- Takes too long to render (Googlebot sometimes skips JS rendering)
- Returns thin/template content before JS runs
- Shows no meaningful content in the initial HTML

---

## Fix Plan

### Fix 1: Return proper HTTP 404 status for unknown routes in Vercel

Replace the catch-all `rewrite` with a Vercel-native 404 configuration. Vercel supports this directly:

```json
{
  "buildCommand": "npm run build:vercel",
  "outputDirectory": "dist/public",
  "framework": null,
  "installCommand": "npm install",
  "rewrites": [
    { "source": "/api/(.*)", "destination": "/api/$1" }
  ],
  "routes": [
    { "src": "/api/(.*)", "dest": "/api/$1" },
    {
      "src": "/(.*\\.(js|css|svg|png|jpg|jpeg|gif|ico|webp|woff|woff2|ttf|eot|map))",
      "dest": "/$1"
    },
    { "src": "/(.*)", "dest": "/index.html", "status": 200 }
  ]
}
```

**Important:** The above still returns 200 for all routes (SPA routing requires this for valid app routes). To return true 404s, you need server-side awareness of valid routes — which CSR doesn't have.

**The practical solution for Vercel + CSR:**

Use Vercel's `cleanUrls` + a custom `404.html`:

```json
{
  "buildCommand": "npm run build:vercel",
  "outputDirectory": "dist/public",
  "framework": null,
  "installCommand": "npm install",
  "cleanUrls": true,
  "rewrites": [
    { "source": "/api/(.*)", "destination": "/api/$1" },
    { "source": "/((?!api).*)", "destination": "/index.html" }
  ]
}
```

And create `client/public/404.html` — a static HTML file served by Vercel with a true HTTP 404 status when no rewrite matches. Vercel automatically serves `404.html` with a 404 status code when present and no route matches.

**However**, because the rewrite `/(.*) → /index.html` catches everything first, Vercel never reaches `404.html`. The rewrite takes priority.

**The proper fix requires choosing one of these approaches:**

---

### Approach A: Static 404.html (Recommended for CSR — minimal changes)

1. Remove the catch-all rewrite from `vercel.json`
2. Add a static `404.html` that Vercel serves natively with HTTP 404
3. Keep the SPA routing working via explicit route rewrites for known paths

**Updated `vercel.json`:**

```json
{
  "buildCommand": "npm run build:vercel",
  "outputDirectory": "dist/public",
  "framework": null,
  "installCommand": "npm install",
  "cleanUrls": true,
  "rewrites": [
    { "source": "/api/(.*)", "destination": "/api/$1" },
    { "source": "/", "destination": "/index.html" },
    { "source": "/services", "destination": "/index.html" },
    { "source": "/services/:path*", "destination": "/index.html" },
    { "source": "/about", "destination": "/index.html" },
    { "source": "/contact", "destination": "/index.html" },
    { "source": "/portfolio", "destination": "/index.html" },
    { "source": "/blog", "destination": "/index.html" },
    { "source": "/blog/:slug", "destination": "/index.html" },
    { "source": "/privacy", "destination": "/index.html" },
    { "source": "/terms", "destination": "/index.html" },
    { "source": "/cookies", "destination": "/index.html" },
    { "source": "/demo", "destination": "/index.html" },
    { "source": "/case-studies", "destination": "/index.html" }
  ]
}
```

With this configuration:
- Known routes → served by SPA (index.html) with HTTP 200 ✅
- Unknown routes → Vercel serves `404.html` with HTTP 404 ✅

**Downside:** You must manually add every valid route to vercel.json. New pages require a vercel.json update.

---

### Approach B: Vercel Edge Middleware (Best for long-term, no route list needed)

Create `middleware.ts` in the project root:

```ts
// middleware.ts
import { NextResponse } from 'next/server'; // (use standard Request/Response for non-Next)
import type { NextRequest } from 'next/server';

const VALID_ROUTES = [
  '/',
  '/services',
  '/about',
  '/contact',
  '/portfolio',
  '/blog',
  '/privacy',
  '/terms',
  '/cookies',
  '/demo',
  // add all routes
];

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  
  // Allow static assets
  if (path.match(/\.(js|css|svg|png|jpg|ico|woff|woff2)$/)) {
    return NextResponse.next();
  }
  
  // Allow API routes
  if (path.startsWith('/api/')) {
    return NextResponse.next();
  }
  
  // Serve 404 for truly unknown routes
  if (!VALID_ROUTES.some(route => path === route || path.startsWith(route + '/'))) {
    return new NextResponse(null, { status: 404 });
  }
  
  return NextResponse.next();
}
```

**Note:** Vercel Edge Middleware uses Next.js conventions. This approach may not integrate cleanly with the current Express/Vite setup without adaptation.

---

### Approach C: Accept Soft 404s and focus on content quality (Pragmatic)

If approaches A/B are too high effort right now:

1. Keep current `vercel.json` (catch-all rewrite)
2. Improve the NotFound component so Google recognizes it as a "not found" page via content signals
3. Add `noindex` to prevent soft 404 pages from being indexed
4. Fix the actual indexing issue (CSR meta tags not in initial HTML) separately

The 404 HTTP status issue is less critical than the **missing content in initial HTML** for Googlebot.

---

## Fix 2: Improve the NotFound Component

Regardless of HTTP status, the 404 page should be user-friendly and noindexed.

**Recommended `not-found.tsx`:**

```tsx
import { Link } from "wouter";
import { SEO } from "@/components/SEO";
import { Home, ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <>
      <SEO
        title="404 — Page Not Found"
        description="The page you're looking for doesn't exist. Browse our services or return to the homepage."
        noindex={true}
      />
      <section className="py-24 md:py-32">
        <motion.div
          className="max-w-2xl mx-auto px-6 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-8xl font-bold text-primary mb-4">404</p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Page not found
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link href="/">
              <Button size="lg" className="h-12 px-6">
                <Home className="w-4 h-4 mr-2" />
                Back to Homepage
              </Button>
            </Link>
            <Link href="/services">
              <Button variant="outline" size="lg" className="h-12 px-6">
                View Our Services
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
          <div className="text-sm text-muted-foreground">
            <p>Need help? <a href="mailto:hello@houseofdevelopers.co.uk" className="text-primary hover:underline">hello@houseofdevelopers.co.uk</a></p>
          </div>
        </motion.div>
      </section>
    </>
  );
}
```

---

## Action Items Summary

| Priority | Action | Effort | Impact |
|----------|--------|--------|--------|
| 🔴 P1 | Replace not-found.tsx with user-friendly, branded, noindexed 404 page | Low | High |
| 🔴 P1 | Inject critical meta tags (title, description, canonical) in `index.html` for initial HTML | Medium | High — fixes Googlebot CSR rendering gap |
| 🟠 P2 | Update vercel.json to return true HTTP 404 for unknown routes (Approach A) | Medium | Medium |
| 🟡 P3 | Add `noindex` to `/demo` page component | Low | Low |

---

## Root Cause of Indexing Problems (Summary)

The reason pages aren't being indexed is almost certainly **not** the 404 issue. The more likely cause is:

1. **CSR renders content after JS executes** — Googlebot may see a blank `<body>` in the raw HTML before React hydrates. The `<title>`, `<meta description>`, and `<link rel="canonical">` are all injected by `react-helmet-async` at runtime, so Googlebot's initial parse sees none of them.

2. **No meaningful content in initial HTML** — The raw `index.html` is a shell with just `<div id="root"></div>`. Google's first-pass (pre-rendering) indexing sees an empty page.

3. **Titles are too long** — Even when Google does render JS, all 31 pages have titles over 60 characters due to the double-append issue documented in `seo-audit-meta-tags.md`.

**The fastest fix for indexing is to add static meta tags to `index.html`** for at least the homepage, and to request indexing manually via Google Search Console's URL Inspection tool after verifying pages render correctly.
