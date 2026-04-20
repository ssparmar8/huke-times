# Huke Times – Site Improvement Report

> Reviewed: 20 April 2026 · 23 issues Critical/High · 12 Medium · 8 Low

---

## 🔴 Critical — Broken Functionality

### 1. All forms submit to `console.log` only
**Files:** `src/pages/Contact.tsx`, `src/pages/Careers.tsx`, `src/pages/WarrantyRegistration.tsx`

Every form on the site silently drops user input — no email, no API, no backend.

**Fix:** Integrate a form service (Formspree, EmailJS, Web3Forms) or a serverless function to email enquiries to `huketimes@gmail.com`. Minimum viable fix for Contact:

```ts
await fetch('https://formspree.io/f/YOUR_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData),
});
```

---

### 2. Testimonials CTA buttons have no `onClick`
**File:** `src/pages/Testimonials.tsx` (~L133–136)

"View Products" and "Contact Us" buttons render with no handler — clicking them does nothing.

**Fix:** Add `onNavigate` prop to Testimonials and wire both buttons.

---

### 3. Blog "Read More" links are dead; Subscribe form does nothing
**File:** `src/pages/Blog.tsx`

The "Read More →" button has no `onClick`. The subscribe form button has no handler.

**Fix:** Either add `/blog/:slug` routes with full content pages, or link out to an external blog. For the subscribe form, wire to an email service.

---

### 4. "Women's Collection" card links to a non-existent category
**File:** `src/pages/Home.tsx` (~L85–107)

The hero split-card promotes a "Women's Collection" but there are zero women's watches in `products.ts`. Clicking it opens a products page with no women's items.

**Fix:** Either add women's watch products to the catalog, or replace this card with "Watch Parts" to match the actual catalog.

---

## 🟠 High — UX & Trust Damage

### 5. Testimonial has "Agro Product" as product name
**File:** `src/data/testimonials.ts`, ID `1`

```ts
product: 'Agro Product'  // ← copy-pasted from unrelated IndiaMart listing
```

**Fix:** Change to the correct watch product name (e.g. `'Mens Premium Chain Wrist Watch'`).

---

### 6. ProductDetail has no image gallery
**File:** `src/pages/ProductDetail.tsx`

Products have 3–4 images each in `products.ts` but only `product.images[0]` is rendered. The other images are never shown.

**Fix:** Add a thumbnail row below the main image — click to swap the main image.

---

### 7. ProductDetail "More Products" section is empty
**File:** `src/pages/ProductDetail.tsx`

The "More Products" section renders only a "View All Products" button — no product cards at all.

**Fix:** Filter `products.filter(p => p.id !== product.id).slice(0, 4)` and render cards matching the Home/Products grid style.

---

### 8. All breadcrumb "Home" links are non-interactive spans
**Files:** `src/pages/About.tsx`, `src/pages/Blog.tsx`, `src/pages/FAQs.tsx`, `src/pages/Contact.tsx`, `src/pages/WatchCare.tsx`, `src/pages/Warranty.tsx`, `src/pages/Testimonials.tsx`

Breadcrumbs show `<span>Home</span>` — clicking does nothing. Only `Products.tsx` correctly uses a `<button onClick={() => onNavigate('/')}>`.

**Fix:** Add `onNavigate` prop to all pages and convert the "Home" span to a button.

---

### 9. WatchCare bottom CTA strip has no button
**File:** `src/pages/WatchCare.tsx`

The "Need Help?" section is text-only with no link to Contact or WhatsApp.

**Fix:** Add a "Contact Us" button wired to `onNavigate('/contact')` and/or a WhatsApp CTA.

---

### 10. Warranty page registration mention is plain text, not a link
**File:** `src/pages/Warranty.tsx`

Mentions `huketimes.in/warranty-registration` as a plain text string — not clickable.

**Fix:** Replace with `<button onClick={() => onNavigate('/warranty-registration')}>`.

---

### 11. WhatsApp `encodeURIComponent` missing
**File:** `src/pages/ProductDetail.tsx`

```ts
// Current — breaks if product name has spaces or apostrophes
`https://wa.me/...?text=I'm interested in ${product.name}`

// Fix
`https://wa.me/...?text=${encodeURIComponent(`I'm interested in ${product.name}`)}`
```

---

## 🟡 Medium — SEO & Performance

### 12. Canonical URL never updates (all pages canonicalized to `/`)
**File:** `index.html`

The `<link rel="canonical">` tag is hardcoded to `https://www.huketimes.in/` and is never updated by `setPageMeta()`. Every page tells Google it is a duplicate of the homepage.

**Fix:** Add canonical updating to `setPageMeta()`:

```ts
let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
if (canonical) canonical.setAttribute('href', `https://www.huketimes.in${path}`);
```

---

### 13. No image lazy loading
**Files:** All pages with `<img>` tags

No `loading="lazy"` attribute on any image across the site. The Products page loads 12 images simultaneously above and below the fold.

**Fix:** Add `loading="lazy"` to all product/gallery images. Keep `loading="eager"` only for the hero/above-fold image.

---

### 14. Blog posts are not individually indexable
**File:** `src/pages/Blog.tsx`, `src/components/App.tsx`

Six blog articles exist only as excerpts — there are no `/blog/:slug` routes. Google cannot index individual articles.

**Fix:** Add a `BlogPost.tsx` page and `/blog/:slug` route in `App.tsx`. Content can start as expanded versions of the existing excerpts.

---

### 15. No structured data on Product or FAQ pages
**Files:** `src/pages/ProductDetail.tsx`, `src/pages/FAQs.tsx`

No `Product` schema on product detail pages means no rich results (price, availability, rating) in Google search. No `FAQPage` schema on the FAQs page means no FAQ rich results.

**Fix:** Inject JSON-LD dynamically in `setPageMeta()` for product pages, and add static JSON-LD to `FAQs.tsx`.

---

### 16. No code splitting — entire app bundled at once
**File:** `src/components/App.tsx`

All 18 page components are eagerly imported. `watchImages.ts` (67 entries) is loaded on every page.

**Fix:**
```ts
const Products = lazy(() => import('../pages/Products'));
// wrap renders in <Suspense fallback={<div>Loading...</div>}>
```

---

### 17. No `srcset` for responsive images
**Files:** All pages

All Unsplash images use a single fixed URL (`?w=800&q=80`). Mobile users download full desktop-sized images.

**Fix:** Use `srcset` or Unsplash's `w` parameter to serve smaller images on mobile:

```tsx
<img
  src="...?w=800&q=80"
  srcSet="...?w=400&q=70 400w, ...?w=800&q=80 800w"
  sizes="(max-width: 640px) 400px, 800px"
/>
```

---

### 18. Hard refresh on non-root routes will 404 in production
**File:** `vite.config.ts`

The Vite dev server handles SPA routing, but production deployments need a rewrite rule. If deployed to Netlify, Vercel, or Nginx without config, `/products` or `/about` returns a 404.

**Fix:**
- Netlify: add `public/_redirects` with `/* /index.html 200`
- Vercel: add `vercel.json` with rewrites
- Nginx: add `try_files $uri /index.html`

---

## 🔵 Low — Code Quality & Cleanup

### 19. `package.json` has boilerplate template values

```json
"name": "reactjs-vite-tailwindcss-boilerplate",
"author": "João Paulo Moraes",
"bugs": { "url": "https://github.com/joaopaulomoraes/..." }
```

**Fix:** Update to `"name": "huke-times"`, `"author": "Huke Times LLP"`, remove bugs URL.

---

### 20. Dead exports in `utils/index.ts` and `types/index.ts`

- `classNames()` in `utils/index.ts` — never imported or called anywhere
- `NavLink` interface in `types/index.ts` — never used (Header.tsx uses inline types)
- `ContactFormData` interface in `types/index.ts` — never used (Contact.tsx uses anonymous inline state)

**Fix:** Remove unused exports or wire them up correctly.

---

### 21. "Dialer Material" should be "Dial Material"
**File:** `src/data/products.ts` (multiple products)

"Dialer" is a phone term. The correct watch industry term is "Dial".

**Fix:** Global search-replace `'Dialer Material'` → `'Dial Material'`.

---

### 22. Inconsistent max-width across pages

Most pages use `max-w-[1300px]` but some sections use `max-w-7xl` (1280px):
- `src/pages/Home.tsx` — all sections
- `src/pages/ProductDetail.tsx`

**Fix:** Standardise on `max-w-[1300px]` throughout, or extract a layout wrapper component.

---

### 23. FAQs accordion has no ARIA attributes
**File:** `src/pages/FAQs.tsx`

Accordion toggle buttons have no `aria-expanded` or `aria-controls`, so screen readers can't convey open/closed state.

**Fix:**
```tsx
<button
  aria-expanded={openFaq === faq.id}
  aria-controls={`faq-answer-${faq.id}`}
  onClick={() => setOpenFaq(...)}
>
```

---

## Summary Table

| Priority | # | Area |
|----------|---|------|
| 🔴 Critical | 4 | Broken forms, dead nav, missing category |
| 🟠 High | 7 | Missing gallery, empty sections, broken links, UX trust |
| 🟡 Medium | 7 | SEO canonical, lazy loading, code splitting, blog routes |
| 🔵 Low | 5 | Cleanup, typos, accessibility, config |

---

*Generated 20 April 2026*
