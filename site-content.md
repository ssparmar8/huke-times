Here are the comprehensive Markdown documentation files to build a site matching Sylvi Watches (sylvi.in):
📁 File Structure
sylvi-watches/
├── README.md
├── docs/
│   ├── 01-site-overview.md
│   ├── 02-design-system.md
│   ├── 03-navigation.md
│   ├── 04-homepage.md
│   ├── 05-product-pages.md
│   ├── 06-collection-pages.md
│   ├── 07-components.md
│   ├── 08-footer.md
│   └── 09-pages.md

README.md
markdown# Sylvi Watches – Site Documentation
> **Brand Tagline:** Race With Time  
> **Domain:** sylvi.in  
> **Platform:** Shopify (custom theme)  
> **Country:** India  
> **Currency:** INR (₹)
## About
Sylvi is an Indian watch brand by **SynergyX Trends Private Limited**. It sells premium men's and women's wristwatches, accessories (straps, tools), and operates via its own website as well as Myntra, Flipkart, Amazon, AJIO, and JioMart.
## Documentation Index
| File | Description |
|------|-------------|
| `01-site-overview.md` | High-level architecture and page map |
| `02-design-system.md` | Colors, typography, spacing, breakpoints |
| `03-navigation.md` | Header, nav menus, mega-menus |
| `04-homepage.md` | Full homepage section-by-section layout |
| `05-product-pages.md` | Product detail page structure |
| `06-collection-pages.md` | Collection/category page structure |
| `07-components.md` | Reusable UI components |
| `08-footer.md` | Footer columns, links, social, legal |
| `09-pages.md` | Static pages content and layout |

docs/01-site-overview.md
markdown# Site Overview
## Platform & Tech Stack
- **E-commerce Platform:** Shopify
- **Theme Base:** Custom Shopify theme (Dawn-based)
- **Sliders:** Flickity (hero slideshow), Slick.js (brand logos, trust badges, blog), Swiper.js (collection list)
- **EMI Integration:** Snap Finance widget (third-party)
- **Analytics:** Standard Shopify analytics
## Site URL Map
```
/ ...................... Homepage
/collections/ ......... All collections
/collections/[slug] ... Individual collection (e.g., /collections/vanguard-watches)
/products/[slug] ...... Product detail page
/pages/about-us ....... About Us
/pages/contact ........ Contact Us
/pages/sustainability . Sustainability
/pages/careers ........ Careers
/pages/blog-inquiry ... Business Inquiry
/pages/warranty ....... Warranty Registration
/pages/watch-care ..... Watch Care Guide
/pages/faqs ........... FAQs
/pages/prototype ...... Exclusive/Prototype page
/blogs/news ........... Blog / Brand News
/account .............. Customer login/account
/cart ................. Shopping cart
/policies/refunds ..... Return & Refund Policy
/policies/shipping .... Shipping Policy
/policies/privacy ..... Privacy Policy
/policies/terms ....... Terms of Service
```
## Key Collections / Categories
### Watches by Series
- Stardom, Ocean, Vanguard, Blade Dual Time, Hawk, Professional Edge
- Timegrapher, Majestic, Bolt, Urbanic, Blade, Opus
- Gazedoom, Specter, Velvetine, Bella, Elegare, Starboard
- Urbane, Iconic, Imperial, Rig One 'O One, WT Max
- Urbane Moon, Timeora, Riva, Serene, Dazzle, Ellore
### Watch Types
- Analog, Digital, Chronograph, Automatic
### Special Categories
- New Arrivals
- Certified Imperfect Watches (discounted with minor defects)
- Exclusive / Prototype
- Gifts
### Accessories
- Mesh Straps (10mm, 20mm)
- Silicone Straps (20mm)
- Nylon Straps (24mm)
- Strap Tool
## Retail Partners (sold externally on)
- Myntra
- Flipkart
- Amazon
- JioMart (Mart)
- AJIO

docs/02-design-system.md
markdown# Design System
## Brand Identity
| Element | Value |
|---------|-------|
| Brand Name | SYLVI |
| Tagline | Race With Time |
| Logo | Horse silhouette + wordmark (black on white / white on dark) |
| Brand Voice | Premium, bold, sporty, modern |
## Color Palette
| Name | Hex / Description | Usage |
|------|-------------------|-------|
| Primary Black | `#000000` | Text, navbar, logo |
| Off-White / Light Grey | `#f5f5f5` / `#f0f0f0` | Page backgrounds, hero overlays |
| White | `#ffffff` | Card backgrounds, nav background |
| Accent – Sale Red | `#cc0000` | Sale price text |
| Accent – Purple (EMI) | `#7000ff` | EMI "Know More" text (Snap widget) |
| Accent – Dark (CTA) | `#1a1a1a` | Primary CTA buttons |
| Rose Gold | Warm gold tones | Timeora, Bella, Elegare product images |
| Steel Silver | Cool metallic | Urbane, Specter, Blade product images |
| Announcement Bar BG | `#000000` | Top announcement strip |
| Footer BG | `#e8e8e8` (light grey) | Footer area |
## Typography
| Role | Font | Weight | Size |
|------|------|--------|------|
| Header / Brand | Serif or custom display font | Bold | 70–80px desktop, 35–40px mobile |
| Section Titles | Sans-serif | Bold / Semi-bold | ~28–36px |
| Body / Product Names | Sans-serif | Regular | 14–16px |
| Prices | Sans-serif | Bold | 16–18px |
| EMI Widget | Anton (Google Font) | 500 | 11px |
| Navigation Links | Sans-serif uppercase | Medium | 13–14px |
> **CSS Variables used in theme:**
> - `--typeHeaderSize` — base heading size
> - `--typeHeaderPrimary`, `--typeHeaderFallback`
> - `--typeHeaderWeight`
> - `--typeHeaderSpacing`
> - `--typeHeaderLineHeight`
## Spacing
| Context | Value |
|---------|-------|
| Section margin (desktop) | `50px auto` |
| Section margin (mobile) | `30px auto` |
| Gap between category cards | `10px` (desktop), `5px` (mobile) |
| Container max-width | `1300px` |
| Page horizontal padding | `20px` |
## Breakpoints
| Name | Width |
|------|-------|
| Mobile | `≤ 767px` |
| Tablet | `768px – 1023px` |
| Desktop | `≥ 1024px` |
| Large Desktop | `≥ 1300px` |
## Border Radius
- Product images: no border radius (square/rectangular)
- Strap item images: `5px`
- CTA Buttons: minimal radius (~2–4px)
## Shadows & Effects
- Minimal box shadows; flat design aesthetic
- Hover effect on product cards: subtle scale or button reveal
- Hero banner: text overlay with light background image

docs/03-navigation.md
markdown# Navigation
## Announcement Bar
- **Position:** Fixed at very top of page (above header)
- **Background:** Black (`#000`)
- **Text Color:** White
- **Content (example):** "A powerful fusion of sport, precision, and modern style."
- **Closeable:** Yes (✕ dismiss button on the right)
- **Behavior:** Rotates/cycles promotional messages
---
## Header / Navbar
### Structure (left → right)
```
[Hamburger Menu (mobile only)] | [Logo] | [Nav Links] | [Search Bar] | [Account Icon] | [Cart Icon]
```
### Logo
- Image: Horse silhouette + "SYLVI — RACE WITH TIME" wordmark
- Links to: `/`
- Size: ~120px wide
### Search Bar
- **Type:** Inline text input (not icon-only)
- **Placeholder:** Cycles through collection names (e.g., "Elegare Watches", "Iconic Watches", "Timegrapher Watches")
- **Width:** ~220px
- **Has magnifier icon on left**
### Account Icon
- Links to: `/account`
- Icon: Person silhouette (SVG)
### Cart Icon
- Links to: `/cart`
- Icon: Shopping bag / cart SVG
- Shows cart item count badge
---
## Main Navigation Links
All links are UPPERCASE with dropdown chevrons:
| Label | Href | Type |
|-------|------|------|
| WATCHES | `#` | Dropdown |
| COLLECTION | `#` | Dropdown |
| ACCESSORIES | `#` | Dropdown |
| EXCLUSIVE | `/pages/prototype` | Direct link |
| GIFTS | `#` | Dropdown |
| BRAND | `#` | Dropdown |
---
## Dropdown Menus (Mega Menu)
### WATCHES
Sub-links to individual watch series collections:
- Vanguard Watches
- Blade Dual Time
- Hawk Watches
- Timegrapher Watches
- Iconic Watches
- Majestic Watches
- Elegare Watches
- Starboard Watches
- Urbane Watches
- Ocean Watches
- Stardom Watches
- Imperial Watch
- Bolt Watches
- Specter Watches
- Velvetine Watches
- Bella Watches
- (+ more)
### COLLECTION
Sub-links:
- New Arrivals
- Best Sellers
- Men's Watches
- Women's Watches
- Analog
- Digital
- Chronograph
- Automatic
### ACCESSORIES
Sub-links:
- Mesh Straps
- Silicone Straps
- Nylon Straps
- Strap Tool
### GIFTS
Sub-links:
- Gift Sets
- Gift Cards
- Price-range gift guides
### BRAND
Sub-links:
- About Us
- Blog
- Sustainability
- Careers
- Business Inquiry
---
## Mobile Navigation
- Hamburger icon (top-left) opens a slide-in drawer
- Full vertical list of navigation items
- Collapsible accordion-style sub-menus

docs/04-homepage.md
markdown# Homepage Layout
URL: `/`
The homepage is composed of the following sections in order from top to bottom:
---
## 1. Announcement Bar
_(see Navigation docs)_
---
## 2. Header / Navigation
_(see Navigation docs)_
---
## 3. Hero Slideshow (Full-width Banner)
- **Type:** Auto-playing image slideshow (Flickity)
- **Aspect Ratio:** ~41.67% padding-bottom (2.4:1 ratio)
- **Slides:** 3–4 slides, auto-advances
- **Controls:** Pause/Play button | Previous/Next arrows | Dot indicators
### Slide Examples
#### Slide 1 — Vanguard Launch
- **Image:** `Vanguard_Slider_Banner_1_copy_1400x.webp`
- **Overlay Text:**
  - Logo (Sylvi wordmark)
  - Heading: **"SYLVI VANGUARD IS HERE"** (80px desktop / 40px mobile)
  - Subheading (script font): *"A next generation"*
  - Body: "sports watch crafted for those who push limits"
- **CTA Button:** "Explore Now" → `/collections/vanguard-watches`
#### Slide 2 — Vanguard Sports
- **Image:** `Vanguard_Slider_Banner_2_1400x.webp`
- **Alt:** "Sylvi Vanguard sports watch"
#### Slide 3 — Iconic / Luxury
- **Image:** `Iconic_1400x.webp`
- **Alt:** "Two luxury watches displayed"
- **Heading Size:** 70px desktop / 35px mobile
#### Slide 4 — Straps
- **Image:** `Straps_1400x.webp`
---
## 4. Category Split Banner (2 columns)
- **Layout:** Two equal-width columns side by side (`flex`, gap: `10px`)
- **Max-width:** 1300px centered
- **Desktop:** Two columns
- **Mobile:** Stacked vertically, padding `0 10px`
### Column 1 — Women's Watches (example)
- Image with warm pink/rose tone
- "Explore Now" button overlay
- Links to women's collection
### Column 2 — Men's Watches (example)
- Image with dark/tactical tone
- "Explore Now" button overlay
- Links to men's / sports collection
---
## 5. Best Watch Collections (Horizontal Scroll Slider)
- **Section Title:** "BEST WATCH COLLECTIONS"
- **Slider:** Swiper.js
  - Mobile: 2 slides per view
  - Tablet (≥768px): 3 slides per view
  - Desktop (≥1024px): 5 slides per view
  - Autoplay: 3000ms delay, continuous loop
  - Navigation: Previous/Next arrow buttons
### Collection Cards (each card has):
- Square product image (1:1 ratio, `position: absolute` inside padding-top: 100% wrapper)
- Collection name label below image
### Collections Listed (in order):
1. Stardom Watches
2. Ocean Watches
3. Vanguard Watches
4. Blade Dual Time
5. Hawk Watches
6. Professional Edge Watches
7. Timegrapher Watches
8. Majestic Watches
9. Bolt Watches
10. Urbanic Watches
11. Blade Watches
12. Opus Watches
13. Gazedoom Watches
14. Specter Watches
15. Velvetine Watches
16. Bella Watches
17. Elegare Watches
18. Starboard Watches
19. Urbane Watches
20. Iconic Watches
21. Imperial Watch
22. Rig One 'O One
23. WT Max
24. Urbane Moon Watches
25. Timeora Watches
26. Riva Watches
27. Serene Watches
28. Dazzle Watches
29. Ellore Watches
---
## 6. Featured In (Brand Logo Slider)
- **Section Title:** "FEATURED IN"
- **Slider:** Slick.js, continuous scroll (no pause), linear easing
  - Desktop: 6 logos
  - Tablet (≥991px): 3 logos
  - Mobile (≤767px): 2 logos
- **Logos shown:** ANI, Big News Network, Business Standard, Dailyhunt, Hindustan Times, The Print
---
## 7. Shop by Watch Type
- **Section Title:** "Shop by Watch Type"
- **Layout:** Horizontal flex row of type cards
### Watch Types:
| Type | Image | Link |
|------|-------|------|
| Analog | Analog watch product image | `/collections/analog` |
| Digital | Digital watch product image | `/collections/digital` |
| Chronograph | Chronograph watch product image | `/collections/chronograph` |
| Automatic | Automatic watch product image | `/collections/automatic` |
---
## 8. Strap / Accessory Grid
- **Layout:** `flex`, wraps, 5 columns on desktop, 2-column CSS grid on mobile
- **Item structure:** Image + linked text label
### Items:
- 20mm Mesh Strap
- 20mm Silicone Strap
- 10mm Silver Mesh Strap
- 24mm Nylon Strap
- Strap Tool
---
## 9. Trust Badges
- **Layout:** Slick.js slider (5 per row desktop, 4 tablet, 4 mobile with autoplay)
- **Each badge:** Icon (60×60px) + short text paragraph
### Badges:
| Icon | Label |
|------|-------|
| Quality icon | "Quality Products" |
| Shield icon | "1-Year* Warranty" |
| Truck icon | "Free Shipping" |
| India flag/map | "Made in India" |
---
## 10. New Arrivals: Latest Watch Styles
- **Section Title:** "NEW ARRIVALS: LATEST WATCH STYLES"
- **Layout:** 4-column product grid (horizontal scroll on mobile)
- **Product Cards:** Include "NEW" badge label, brand name, product name, original price (struck-through), sale price, EMI info, Add to Cart button
- **CTA:** "View all" button → all products listing
### Sample Products:
| Product | Original Price | Sale Price |
|---------|---------------|------------|
| Sylvi Vanguard All Black Silicone | Rs. 2,349 | Rs. 1,489 |
| Sylvi Blade Dual Time Black Silver Steel | Rs. 2,799 | Rs. 1,849 |
| Sylvi Timeora Coffee Blush Rosegold | Rs. 2,849 | Rs. 1,839 |
| Sylvi Specter Blue Silver Steel | Rs. 2,749 | Rs. 1,749 |
---
## 11. Shop by Price
- **Section Title:** "SHOP BY PRICE"
- **Layout:** 3-column flex row, max-width: 600px, centered
- **Each column:** Clickable image with price range label
### Price Ranges (example):
- Under ₹999
- ₹999 – ₹1,999
- ₹2,000+
---
## 12. Featured Product Spotlight (2-column banner)
- **Layout:** Left side: lifestyle image (watch + accessories flat-lay), Right side: black banner with product image + copy
- **Right Panel Content:**
  - Collection: "VANGUARD — Sports Edition"
  - Subheading: "Crafted for the Extreme. Powered by Features. Defined by Style."
  - Tag: "New Launch Alert..."
- **Below panel:** Watch detail card (image + type label + name + description + "Shop Now" CTA)
### Vanguard Detail Card:
- Label: "ANALOG - DIGITAL"
- Title: **VANGUARD**
- Description: "Introducing the all-new Vanguard, where Precision, Passion, and Power unite. Built for those who dare to race with time. ⚡"
- CTA: "Shop Now" button
---
## 13. Watch Accessories Section
- **Section Title:** "Watch Accessories"
- **Layout:** 5-column product grid (same as New Arrivals)
- **CTA:** "View all" → accessories collection (46 products)
### Sample Accessories:
| Product | Original | Sale |
|---------|----------|------|
| 20mm Mesh Strap | Rs. 899 | Rs. 449 |
| 20mm Silicone Strap | Rs. 899 | Rs. 499 |
| 10mm Silver Mesh Strap | Rs. 899 | Rs. 499 |
| Strap Tool | Rs. 899 | Rs. 499 |
| 24mm Sky Blue Nylon Strap | Rs. 799 | Rs. 499 |
---
## 14. Certified Imperfect Watches
- **Section Title:** "CERTIFIED IMPERFECT WATCHES"
- **Layout:** 3-column grid
- **Badge:** "CERTIFIED IMPERFECT" label on each card
### Sample Products:
| Product | Original | Sale |
|---------|----------|------|
| Certified Imperfect Rig One 'O One Rosegold Black | Rs. 2,499 | Rs. 1,399 |
| Certified Imperfect Iconic Brown | Rs. 1,999 | Rs. 1,099 |
| Certified Imperfect Timegrapher Black RG Silicone | Rs. 2,499 | Rs. 1,149 |
- **CTA:** "View all" button
---
## 15. Marketplace / Retail Partners Slider
- **Layout:** Horizontal auto-scrolling logo strip (Slick.js)
- **Logos:** Myntra, Flipkart, Amazon, JioMart (Mart), AJIO
---
## 16. Sustainability / #GreenerTomorrow Banner
- **Full-width dark banner** with:
  - Sustainability messaging
  - Hashtag: `#GreenerTomorrow`
  - CTA: "SEE MORE" (green button) → sustainability page
---
## 17. Latest Brand News (Blog Section)
- **Section Title:** "LATEST BRAND NEWS"
- **Layout:** 3-column slider (Slick.js) with left/right nav arrows
- **Each card:** Featured image + Title + Excerpt (partial text)
### Sample Blog Posts:
1. **Sylvi Vanguard Watch Launch 2026: Sporty Style for the Modern Men**
2. **Women's Day Gift Guide 2026: Why a Watch Is the Perfect Choice**
3. **Sylvi Holi Sale 2026 – Up to 16% OFF on Premium Watches**
---
## 18. Newsletter Signup
- **Section Title:** "GET THE LATEST NEWS"
- **Layout:** Dark/black background strip at bottom of content
- **Icon:** Email envelope icon
- **Input:** Email field + subscribe button
---
## 19. Sylvi's Workmanship (About Section)
- **Section Title:** "SYLVI'S WORKMANSHIP"
- **Layout:** 3-column text block
| Column | Content |
|--------|---------|
| Who We Are? | "At Sylvi, we are a team of passionate individuals driven by a shared vision and mission. We are dedicated to creating and delivering premium wristwatches that embody the perfect fusion of style, quality, and craftsmanship." |
| Vision | "Our commitment to sustainability, quality, and social responsibility will set new industry standards and inspire excellence worldwide by leveraging innovation & advanced technology." |
| Mission | "By 2040, Sylvi aims to establish itself as a globally recognized brand while proudly manufacturing in India. We strive to capture 10% of the Indian population as a loyal customer base." |
---
## 20. Footer
_(see Footer docs)_

docs/05-product-pages.md
markdown# Product Detail Page
URL: `/products/[product-slug]`
## Layout Structure
```
[Breadcrumb: Home > Collection > Product Name]
[Left Column — Images]     [Right Column — Details]
- Primary image
- Thumbnail gallery        - Brand: SYLVI
- Image zoom on hover      - Product Title
                           - Star Rating + Review count
                           - Original Price (struck through)
                           - Sale Price (bold)
                           - EMI option (Snap widget)
                           - [Variant selectors if any]
                           - [Add to Cart] button
                           - [Buy Now] button
                           - Trust icons (warranty, shipping)
                           - Product description
                           - Specifications accordion
```
## Product Card Fields
| Field | Example |
|-------|---------|
| Badge | "NEW" or "CERTIFIED IMPERFECT" |
| Brand | SYLVI |
| Name | Vanguard All Black Silicone |
| Rating | ★★★★★ (5) — or "No reviews" |
| Original Price | Rs. 2,349.00 (strikethrough) |
| Sale Price | **Rs. 1,489.00** |
| EMI | "or ₹496/Month • Buy on EMI >" |
| Add to Cart | Dark button |
## Pricing Pattern
- All products show a higher MRP crossed out
- Sale price is the actual selling price
- Discount shown visually (no explicit % badge observed, but can be calculated)
## EMI Widget (Snap Finance)
- Appears below price on product cards and detail pages
- Format: `or ₹[X]/Month • [Snap logo] Buy on EMI >`
- Purple link color (`#7000ff`)
- Opens a modal popup for EMI plan details
## Product Card Hover State
- "Add to Cart" button appears at bottom of image on hover
- Button positioned via `top: 69.2%` (adjusts responsively)
- Font-size responsive: 14px at ≤1300px, 10px at ≤991px, 14px at ≤589px
## Certified Imperfect Products
- Tagged with "CERTIFIED IMPERFECT" banner label (dark overlay on image)
- Separate collection: `/collections/certified-imperfect`
- Separate T&C page: `/pages/certified-imperfect-tc`

docs/06-collection-pages.md
markdown# Collection / Category Pages
URL: `/collections/[collection-slug]`
## Layout Structure
```
[Breadcrumb]
[Collection Title + Description]
[Filter/Sort Bar]
    [Filter by: Type / Price / Brand / etc.]   [Sort by: Featured / Price / New]
[Product Grid]
    [Product Card] [Product Card] [Product Card] ...
[Pagination or Load More]
```
## Product Grid
- Desktop: 4–5 columns
- Tablet: 3 columns
- Mobile: 2 columns
## Product Card (Collection View)
```
[Product Image]
   └── [Badge: NEW / CERTIFIED IMPERFECT]
   └── [Hover: Add to Cart button overlay]
[Brand: SYLVI]
[Product Name]
[Star Rating]
[Strikethrough Price]   [Sale Price]
[EMI line]
```
## Featured Collection Header
Some collections have a featured image header at the top before the grid, with optional text overlay or a sub-heading.
## View All Button
The homepage sections link to collections via a "View all" CTA:
- New Arrivals: "View all 181 products"
- Accessories: "View all 46 products"
## Collection Slugs
| Collection | Slug |
|------------|------|
| Vanguard | `/collections/vanguard-watches` |
| Iconic | `/collections/iconic-watches` |
| Accessories | `/collections/watch-accessories` |
| New Arrivals | `/collections/new-arrivals` |
| Certified Imperfect | `/collections/certified-imperfect` |
| Men's Watches | `/collections/mens-watches` |
| Women's Watches | `/collections/womens-watches` |
| Analog | `/collections/analog-watches` |
| Digital | `/collections/digital-watches` |
| Chronograph | `/collections/chronograph-watches` |
| Automatic | `/collections/automatic-watches` |

docs/07-components.md
markdown# Reusable UI Components
## 1. Announcement Bar
```html

  A powerful fusion of sport, precision, and modern style.
  ✕

```
## 2. Product Card
```
┌─────────────────────────┐
│  [BADGE]                │
│                         │
│    [Product Image]      │
│                         │
│ [Hover: Add to Cart]    │
└─────────────────────────┘
  SYLVI
  Product Name Here
  ★★★★★ (12)
  ~~Rs. 2,349~~ Rs. 1,489
  or ₹496/Month • Buy on EMI >
```
## 3. Section Title
```html

  SECTION HEADING

```
- Text-align: center
- Font: header font variable
- Margin-bottom: 30px
## 4. "View All" CTA Button
```html
View all
```
- Dark background, white text
- Centered below product grids
## 5. Trust Badge
```html

  
    
    Quality Products
  

```
## 6. Blog Card
```html

  
    
  
  [Article Title]
  [Excerpt — 1–2 sentences]...

```
## 7. Hero Slideshow Slide
```html

  
    
  
  
    [Slide Heading]
    [Subheading]
    Explore Now
  

```
## 8. Collection Slider Card
```html

  
    
      
        
      
    
    [Collection Name]
  

```
## 9. EMI Widget Line
```html

  
  or ₹496/Month
  Buy on EMI >

```
## 10. Price Display
```html

  Rs. 2,349.00
  Rs. 1,489.00

```
## 11. Split Banner (2-column)
```html

  
    
      
      
    
  
  
    
      
      
    
  

```
## 12. Shop by Price Column
```html

  
    
      
    
  
  

```

docs/08-footer.md
markdown# Footer
## Layout
4-column footer on desktop, stacked on mobile. Background: light grey (`#e8e8e8`).
```
[Discover Sylvi] | [Useful Links] | [Our Policy & Terms] | [Brand Logo + Social]
```
---
## Column 1: Discover Sylvi
**Heading:** DISCOVER SYLVI
Links:
- About Us → `/pages/about-us`
- Sustainability → `/pages/sustainability`
- Business Inquiry → `/pages/business-inquiry`
- Careers → `/pages/careers` _(badge: "We're hiring!")_
- Affiliate Products → `/pages/affiliate`
- Blog → `/blogs/news`
---
## Column 2: Useful Links
**Heading:** USEFUL LINKS
Links:
- Track Your Order → (order tracking page)
- Warranty Registration → `/pages/warranty-registration`
- Contact Us → `/pages/contact`
- Offers & Discounts → (offers page)
- Watch Care → `/pages/watch-care`
- FAQs → `/pages/faqs`
---
## Column 3: Our Policy & Terms
**Heading:** OUR POLICY & TERMS
Links:
- Warranty Instructions → `/pages/warranty`
- Return & Refund Policy → `/policies/refunds`
- Shipping Policy → `/policies/shipping`
- Certified Imperfect T&C → `/pages/certified-imperfect-tc`
- Privacy Policy → `/policies/privacy`
- Terms & Conditions → `/policies/terms`
- Terms of Service → `/policies/terms-of-service`
---
## Column 4: Brand & Social
**Logo:** Sylvi horse + wordmark (large, ~200px)
**Heading:** OFFICIAL CHANNEL
**Social Icons (linked):**
| Platform | Icon |
|----------|------|
| Instagram | Instagram logo |
| Facebook | Facebook logo |
| YouTube | YouTube logo |
| X (Twitter) | X logo |
| Pinterest | Pinterest logo |
| LinkedIn | LinkedIn logo |
---
## Most Searched on Sylvi (Accordion)
- Collapsed accordion at bottom of footer
- **Label:** "MOST SEARCHED ON SYLVI"
- Contains SEO keyword links to popular search terms / collections
---
## Copyright Bar
```
© 2026 Sylvi® · A brand by SynergyX Trends Private Limited®
```
---
## Payment Icons
Accepted payment methods shown as icons:
- Visa
- Mastercard
- Maestro
- American Express
- Diners Club
- Discover
- PayPal
- Google Pay

docs/09-pages.md
markdown# Static Pages
## About Us (`/pages/about-us`)
Three-column layout:
| Section | Content |
|---------|---------|
| Who We Are? | Team description — passionate individuals, premium wristwatches, fusion of style, quality, craftsmanship |
| Vision | Sustainability, quality, social responsibility, industry standards, innovation & advanced technology |
| Mission | By 2040 — globally recognized brand, manufacturing in India, 10% of Indian population as loyal customers |
---
## Contact Us (`/pages/contact`)
- Contact form: Name, Email, Phone, Message fields
- Support email / phone number
- Business hours
---
## FAQs (`/pages/faqs`)
Accordion-style Q&A covering:
- Order & shipping
- Returns & refunds
- Warranty
- Watch care
- Payment & EMI
---
## Watch Care (`/pages/watch-care`)
Guide on:
- Cleaning
- Storage
- Water resistance
- Battery care
- Servicing
---
## Warranty Registration (`/pages/warranty-registration`)
Form fields:
- Name
- Email
- Phone
- Product name / model
- Purchase date
- Purchase channel (website / Flipkart / Amazon / etc.)
---
## Warranty Instructions (`/pages/warranty`)
- 1-year warranty policy details
- What's covered / not covered
- How to claim
- Certified Imperfect warranty notes
---
## Sustainability (`/pages/sustainability`)
- Brand's green initiatives
- #GreenerTomorrow campaign
- Eco-friendly packaging details
- Manufacturing practices
---
## Careers (`/pages/careers`)
- "We're Hiring!" banner
- Open positions (if any)
- Culture description
- Application form / link
---
## Exclusive / Prototype (`/pages/prototype`)
- Special product launch / prototype showcase
- Limited edition watches or upcoming releases
---
## Blog (`/blogs/news`)
### Post Examples:
1. **Sylvi Vanguard Watch Launch 2026: Sporty Style for the Modern Men**
   - Category: Launch
   - Excerpt: "A wristwatch in the modern world is not a mere time-telling machine..."
2. **Women's Day Gift Guide 2026: Why a Watch Is the Perfect Choice**
   - Category: Gift Guide
   - Excerpt: "When the 8 March Women Day comes around every year..."
3. **Sylvi Holi Sale 2026 – Up to 16% OFF on Premium Watches**
   - Category: Sale / Promotion
   - Excerpt: "One of the most colourful festivals in India is Holi..."
### Blog Card Layout:
- Featured image (full width of card)
- Title (H3, linked)
- Short excerpt (~150 chars)
- "Read More" link
---
## Return & Refund Policy (`/policies/refunds`)
Standard Shopify refund policy page with Sylvi-specific terms.
---
## Shipping Policy (`/policies/shipping`)
- Free shipping (as stated in trust badge)
- Delivery timelines
- Pin code coverage
---
## Certified Imperfect T&C (`/pages/certified-imperfect-tc`)
- What "Certified Imperfect" means
- Types of imperfections (cosmetic only)
- No return/exchange policy for these products
- Discounted pricing rationale

Summary
Here's what's been documented across 9 Markdown files:
FileWhat it coversREADME.mdProject overview and index01-site-overview.mdTech stack, URL map, all collections02-design-system.mdColors, fonts, spacing, breakpoints03-navigation.mdHeader, mega-menus, mobile nav04-homepage.mdAll 20 homepage sections with content05-product-pages.mdPDP structure, pricing, badges, EMI06-collection-pages.mdGrid layout, filters, slugs07-components.md12 reusable HTML component blueprints08-footer.mdAll 4 footer columns, social, payments09-pages.mdAll static pages (About, FAQ, Blog, etc.)