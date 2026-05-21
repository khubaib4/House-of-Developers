# SEO Audit — Redirects
**Site:** houseofdevelopers.co.uk  
**Date:** May 2026  

---

## Redirect Inventory

### Source 1: Code Scan — `<Redirect>` / `<Navigate>` / `window.location`

Grep results across `client/src/`:

| Pattern | Occurrences |
|---------|-------------|
| `<Redirect>` (Wouter) | 1 |
| `<Navigate>` (React Router) | 0 — not used |
| `window.location` | 0 |
| `router.push` | 0 |
| `history.push` | 0 |
| `useEffect` + location change | 0 (only `ScrollToTop` uses `useLocation`, not for redirect) |

**One redirect found:**

```tsx
// client/src/App.tsx, line 92
<Route path="/case-studies">{() => <Redirect to="/portfolio" />}</Route>
```

---

### Source 2: `vercel.json` — Server-Side Redirect Rules

```json
{
  "rewrites": [
    { "source": "/api/(.*)", "destination": "/api/$1" },
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

**No server-side redirects** are defined. Both entries are `rewrites` (transparent proxy, no HTTP 301/302), not `redirects`. The Vercel configuration has no redirect rules.

---

## Full Redirect Table

| Source URL | Destination URL | Type | HTTP Status | Chain? | Necessary? | Assessment |
|-----------|----------------|------|-------------|--------|------------|------------|
| `/case-studies` | `/portfolio` | Client-side (Wouter `<Redirect>`) | 200 (SPA rewrite) | No | ✅ Yes — legacy URL | ⚠️ Should be server-side 301 |

---

## Issue Analysis

### ⚠️ The `/case-studies` redirect is client-side, not server-side

**Current behavior:**
1. User/bot requests `https://houseofdevelopers.co.uk/case-studies`
2. Vercel's catch-all rewrite serves `index.html` with **HTTP 200**
3. React loads, Router matches `/case-studies`, renders `<Redirect to="/portfolio" />`
4. Wouter performs a client-side navigation to `/portfolio`
5. React renders the Portfolio page

**Why this is a problem for SEO:**
- Googlebot sees `/case-studies` as HTTP **200**, not 301
- There is no signal that `/case-studies` has permanently moved
- Google may treat both URLs as separate pages rather than one canonical destination
- Link equity from any external links pointing to `/case-studies` is **not** passed to `/portfolio`
- A proper HTTP 301 would tell Google: "this page has permanently moved, transfer all signals to `/portfolio`"

**Correct fix — add a server-side redirect in `vercel.json`:**

```json
{
  "buildCommand": "npm run build:vercel",
  "outputDirectory": "dist/public",
  "framework": null,
  "installCommand": "npm install",
  "redirects": [
    {
      "source": "/case-studies",
      "destination": "/portfolio",
      "permanent": true
    }
  ],
  "rewrites": [
    { "source": "/api/(.*)", "destination": "/api/$1" },
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

With `"permanent": true`, Vercel issues an HTTP **308** (permanent redirect) — equivalent to 301 for SEO purposes. The `<Redirect>` in App.tsx can remain as a fallback for local development, or be removed since the server handles it first.

---

## Redirect Chain Analysis

**No chains exist.** There is only one redirect in the entire codebase:

```
/case-studies → /portfolio (1 hop)
```

No multi-hop chains like `/case-studies → /old-portfolio → /portfolio`.

---

## Recommendations

| Action | Priority | Effort | Impact |
|--------|----------|--------|--------|
| Add server-side 301/308 for `/case-studies → /portfolio` in `vercel.json` | 🟠 Medium | Very Low | Medium — passes link equity |
| Keep client-side `<Redirect>` as fallback for dev | Optional | — | — |
| No other redirects needed currently | — | — | — |

---

## Redirect Best Practices Compliance

| Rule | Status |
|------|--------|
| No redirect chains (2+ hops) | ✅ |
| All redirects go to final destination | ✅ |
| No circular redirects | ✅ |
| Old URLs properly handled | ✅ (only one old URL: `/case-studies`) |
| Server-side 301 for permanent moves | ❌ Currently client-side only |
| No `window.location` hacks | ✅ |
| No JS-only redirects for crawlers | ❌ The `/case-studies` redirect is JS-only |
