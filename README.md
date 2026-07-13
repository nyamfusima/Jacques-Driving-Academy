# Jacques Driving Academy — Website Demo

A modern, mobile-first marketing website built as a **client-closing sales demo**
for a local driving school. Designed to build trust, showcase student success,
and drive **WhatsApp bookings**.

![Pages](https://img.shields.io/badge/pages-5-ef4444) ![Stack](https://img.shields.io/badge/React_19_+_Vite_+_Tailwind_v4-informational)

## ✨ Highlights

- **Conversion-first** — "Book on WhatsApp" primary CTA everywhere, "Call Now"
  secondary, plus a sticky floating WhatsApp button on every page.
- **5 full pages** — Home, Packages, Success Stories, About, Contact.
- **Premium feel** — smooth Framer Motion reveals, animated stat counters,
  hover states, generous whitespace, rounded cards and soft shadows.
- **Mobile-first** — optimised for traffic coming from WhatsApp & social, with
  an animated mobile nav drawer.
- **Robust imagery** — remote photos load as progressive enhancement and
  gracefully fall back to on-brand gradients, so the demo never shows a broken
  image.
- **Working contact form** — composes a pre-filled WhatsApp message from the
  visitor's details (no backend required).

## 🧱 Tech Stack

| Concern    | Choice                              |
| ---------- | ----------------------------------- |
| Framework  | React 19 + TypeScript               |
| Build tool | Vite                                |
| Styling    | Tailwind CSS v4 (CSS-first `@theme`) |
| Animation  | Framer Motion                       |
| Routing    | React Router                        |
| Icons      | Lucide React                        |

## 🚀 Getting Started

```bash
npm install      # install dependencies
npm run dev      # start the dev server (http://localhost:5173)
npm run build    # type-check + production build to /dist
npm run preview  # preview the production build
```

## 🎨 Editing content (all data-driven)

Almost everything is data-driven — no need to touch component markup:

- **`src/lib/site.ts`** — business name, tagline, phone, WhatsApp number, email,
  address, hours, service areas, Google rating, social links, nav.
- **`src/lib/data.ts`** — course pricing (Code 8 / 10 / 14), services,
  highlights, FAQs, process steps, values, company mission & vision.
- **`src/lib/images.ts`** — maps the real student photos in `public/images/`.
  Drop new photos into that folder and reference them here.
- **`src/index.css`** — brand colours live in the `@theme` block
  (`--color-brand-*`); change the reds and the whole site follows.

### Real content used

- **Business:** Jacques Driving Academy · 065 851 8981 · 4 Billie Rd, Mdantsane
  Unit 4 · rated 5.0 on Google.
- **Courses:** Code 8 (car), Code 10 (truck), Code 14 (truck & trailer), plus
  learner's-licence assistance. Full courses include free test-day vehicle hire.
- **Photos:** genuine student success photos supplied by the client
  (`public/images/`), shown with generic captions (no invented names).

> The site deliberately avoids invented statistics, reviews or instructor
> profiles — social proof is the real student photos plus the genuine 5.0
> Google rating.

## 📁 Structure

```
src/
  components/        layout + section building blocks
    ui/              reusable primitives (Button, Badge, Accordion, …)
  lib/               site config, content data, images, helpers
  pages/             Home, Packages, StudentSuccess, About, Contact, NotFound
  App.tsx            routes
  main.tsx           entry
```

---

> **Note:** Business details, pricing, photos and the Google rating are the
> client's real information. Prices are shown in South African Rand (R).
