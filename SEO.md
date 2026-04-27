# SEO Improvements – Huke Times

> Audited: 27 April 2026

---

## Current State

### ✅ Already Done
- Per-page `metadata` exports on all 16 pages (title + description + canonical)
- Root layout `metadataBase`, `openGraph.siteName`, `twitter.card`
- `generateMetadata()` on `/product/[slug]` with dynamic title/description
- `robots.txt` with `Sitemap` pointer
- `sitemap.xml` covering all pages and products

---

## High-Priority Fixes

### 1. Domain mismatch in sitemap and robots.txt
`robots.txt` and `sitemap.xml` use `https://www.huketimes.in` but metadata canonicals use `https://www.huketimes.com`. Google will treat these as separate sites.

**Files:** `public/sitemap.xml`, `public/robots.txt`, `app/layout.tsx` (`metadataBase`)

**Fix:** Update all `sitemap.xml` `<loc>` values and the `robots.txt` Sitemap line to `https://www.huketimes.com`.

---

### 2. Missing `openGraph.title` and `openGraph.description` on every page
The root layout sets `openGraph.siteName` but no page sets `openGraph.title` or `openGraph.description`. WhatsApp, LinkedIn, and Facebook shares will show blank previews.

**Fix – add to each `app/*/page.tsx`:**
```ts
openGraph: {
  url: 'https://www.huketimes.com/about/',
  title: 'About Huke Times – Watch Manufacturer in Rajkot',
  description: 'ISO-quality wrist watch manufacturer since 2022. 500+ B2B clients, Pan India delivery.',
  images: [{ url: '/og-home.jpg', width: 1200, height: 630 }],
},
```

---

### 3. No OG image (`og:image`)
Without an OG image social shares and Google rich results show no visual. This is the single highest-impact visual change.

**Action:**
1. Create a `1200×630 px` banner: logo + tagline + watch photo. Save as `public/og-home.jpg`.
2. Optionally create a generic product image at `public/og-product.jpg`.
3. Add fallback to root layout:
```ts
// app/layout.tsx
openGraph: {
  siteName: 'Huke Times',
  type: 'website',
  images: [{ url: '/og-home.jpg', width: 1200, height: 630, alt: 'Huke Times Watch Manufacturer' }],
},
```

---

### 4. No JSON-LD structured data
Google uses structured data for rich results: business knowledge panel, product prices, FAQ snippets, breadcrumbs.

#### `app/layout.tsx` — Organization schema
```tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Huke Times LLP",
    "url": "https://www.huketimes.com",
    "logo": "https://www.huketimes.com/logo.svg",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-9574555399",
      "contactType": "sales",
      "areaServed": "IN"
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Patel Nagar, St No.7 80 Ft Road",
      "addressLocality": "Rajkot",
      "addressRegion": "Gujarat",
      "postalCode": "360002",
      "addressCountry": "IN"
    }
  })}}
/>
```

#### `app/product/[slug]/page.tsx` — Product schema
```tsx
<script
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "brand": { "@type": "Brand", "name": "Huke Times" },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "INR",
      "price": product.price.min,
      "availability": "https://schema.org/InStock",
      "seller": { "@type": "Organization", "name": "Huke Times LLP" }
    }
  })}}
/>
```

#### `app/faqs/page.tsx` — FAQPage schema
Wrap each Q&A pair in `FAQPage` + `Question` + `Answer` schema to get FAQ rich snippets directly in Google search results.

---

### 5. Sitemap URLs missing trailing slashes
The sitemap has `/product/mens-premium-chain-wrist-watch` but Next.js `trailingSlash: true` serves it at `/product/mens-premium-chain-wrist-watch/`. Google indexes the trailing-slash URL; mismatches create duplicate content signals.

**Fix in `public/sitemap.xml`:** append `/` to all URLs:
```xml
<loc>https://www.huketimes.com/product/mens-premium-chain-wrist-watch/</loc>
<loc>https://www.huketimes.com/about/</loc>
```

---

### 6. `favicon.svg` only — no `apple-touch-icon` or `favicon.ico`
iOS Safari and Android home-screen shortcuts require `apple-touch-icon.png` (180×180 px).

**Fix in `app/layout.tsx`:**
```ts
icons: {
  icon: '/favicon.svg',
  apple: '/apple-touch-icon.png',
  shortcut: '/favicon.ico',
},
```

---

## Medium-Priority Improvements

### 7. Page titles exceed 60-character SERP limit
Google truncates titles over ~60 characters. The ellipsis harms CTR.

| Page | Current (chars) | Suggested |
|------|----------------|-----------|
| Home | 76 | `Huke Times – Watch Manufacturer & Supplier, Rajkot` (51) |
| About | 63 | `About Huke Times – Watch Maker in Rajkot, Gujarat` (50) |
| Products | 55 | ✅ OK |
| Contact | 52 | ✅ OK |

---

### 8. Descriptions lack primary search keywords
Add terms users actually search. Target: "wholesale watch manufacturer India", "bulk wrist watch supplier Rajkot", "men's analog watch OEM India", "watch parts supplier Gujarat".

**Home — before:**
> "Huke Times LLP is a leading manufacturer and supplier of premium men's wrist watches and watch parts in Rajkot, Gujarat, India. Bulk orders welcome. MOQ from 2000 pcs."

**Home — after:**
> "Huke Times LLP – wholesale wrist watch manufacturer and OEM supplier in Rajkot, Gujarat. Premium men's analog watches, cases & parts. MOQ 2000 pcs, Pan India delivery."

---

### 9. Blog page is empty / thin content
`/blog` renders a placeholder. Google will crawl and index it as a low-value thin page, which can drag down the domain's quality score.

**Options:**
- Add 3–5 articles targeting long-tail queries: "how watches are manufactured in India", "OEM watch MOQ guide", "watch movement types explained"
- Or `noindex` the page until content is ready:
```ts
// app/blog/page.tsx
export const metadata = {
  title: 'Blog | Huke Times',
  robots: { index: false, follow: false },
};
```

---

### 10. No `hreflang` annotation
The site targets India but is in English. Adding `hreflang="en-IN"` signals the correct regional audience.

```ts
// app/layout.tsx
alternates: {
  languages: { 'en-IN': 'https://www.huketimes.com/' },
},
```

---

## Low-Priority / Long-Term

### 11. Image dimensions missing (CLS impact)
Product images from Unsplash don't have explicit `width`/`height` attributes. This causes Cumulative Layout Shift (CLS), a Core Web Vitals metric that affects rankings.

- Add `width` and `height` to all `<img>` tags in product cards and gallery components.
- Consider self-hosting product images — Unsplash URLs are not permanently stable and can be rate-limited.

### 12. No breadcrumb JSON-LD
Product detail pages (`/product/[slug]`) and policy pages have visual breadcrumbs but no `BreadcrumbList` schema. Adding it enables breadcrumb rich results in SERPs.

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.huketimes.com/" },
    { "@type": "ListItem", "position": 2, "name": "Products", "item": "https://www.huketimes.com/products/" },
    { "@type": "ListItem", "position": 3, "name": "Mens Premium Chain Wrist Watch" }
  ]
}
```

### 13. Google Search Console setup
- Submit sitemap at `https://search.google.com/search-console`.
- Add domain verification token:
```ts
// app/layout.tsx
verification: { google: 'YOUR_GOOGLE_VERIFICATION_CODE' },
```

### 14. No local business schema
As a Rajkot-based B2B manufacturer, a `LocalBusiness` schema in addition to `Organization` improves visibility in Google Maps and local search results.

---

## Priority Summary

| # | Impact | Effort | Action |
|---|--------|--------|--------|
| 1 | 🔴 High | Low | Fix domain mismatch (`huketimes.in` → `huketimes.com` in sitemap + robots.txt) |
| 2 | 🔴 High | Low | Add `openGraph.title/description` to all 16 pages |
| 3 | 🔴 High | Medium | Create OG image `public/og-home.jpg` (1200×630) |
| 4 | 🔴 High | Medium | Add JSON-LD: Organization + Product + FAQPage schemas |
| 5 | 🟠 Medium | Low | Add trailing slashes to all sitemap `<loc>` URLs |
| 6 | 🟠 Medium | Low | Add `apple-touch-icon.png` + `favicon.ico` |
| 7 | 🟡 Low | Low | Shorten page titles to ≤60 characters |
| 8 | 🟡 Low | Low | Rewrite descriptions with target search keywords |
| 9 | 🟡 Low | Low | Add `noindex` to empty blog page (or add content) |
| 10 | 🟡 Low | Low | Add `hreflang="en-IN"` annotation |
| 11 | 🟡 Low | Medium | Fix image `width`/`height` to reduce CLS |
| 12 | 🟡 Low | Low | Add BreadcrumbList JSON-LD on product pages |
| 13 | 🟡 Low | Low | Submit sitemap to Google Search Console |
| 14 | 🟡 Low | Medium | Add `LocalBusiness` schema for Google Maps visibility |
