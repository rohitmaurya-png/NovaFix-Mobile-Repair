# NovaFix – One-Page Marketing Site

## Overview

NovaFix is a fictional start-up offering on-site smartphone and laptop repairs within 60 minutes. This project is a **mobile-first, responsive, and accessible one-page site** built with **React + Next.js**, showcasing services, pricing, FAQs, and a booking modal.

- Live demo: https://nova-fix-mobile-repair-8srr32rd7.vercel.app/


---

## Features

### 1. Landing Page

- **Hero Section:** Tagline with CTA button.
- **Service Highlights:** Three main services – Screen Repair, Battery Replacement, Water Damage.
- **Pricing Table:** At least two devices with common issues and prices.
- **FAQ Accordion:** Four interactive FAQ items.
- **Book Repair Modal:** Button opens a modal form for lead capture.

### 2. Interaction / UX Flourish

- **Animated Counter:** Smooth count-up animation for “Devices Fixed” using Framer Motion.
- **Hover Effects:** Subtle glow and shadow on service and pricing cards.
- **Scroll Fade:** Sections animate in on scroll for a polished, modern feel.

### 3. Performance & Accessibility

- Optimized images in **WebP/AVIF**(Large) PNG/JPG(Icons) formats.
- Dark-mode friendly design.
- Semantic HTML and proper `alt` attributes for all images.
- Focus trapping implemented in modal for keyboard accessibility.
- Performance optimized to load < 8s on mobile 4G.

---

## Tech Stack

- **Next.js 14** – React framework with server-side rendering and performance optimizations.
- **React 18** – For interactive components and state management.
- **Tailwind CSS 3** – Utility-first styling for responsive and dark-mode design.
- **Framer Motion** – Animations for counters and scroll effects.
- **Eldora/UI** – Minimal usage for accessible modal implementation.
- **Vercel** – Hosting and continuous deployment.

---

## Project Structure
/components
├── PricingTab.tsx
├── ServiceCard.tsx
├── FAQAccordion.tsx
└── RepairFormModal.tsx
/pages
└── index.tsx
/public
└── assets/images
/styles
└── globals.css
.eslintrc.json
.gitignore
LICENSE
README.md
next-env.d.ts
next.config.mjs
package-lock.json
package.json
postcss.config.mjs
tailwind.config.ts
tsconfig.json
## Approach & Decisions

1. **Mobile-first design:** All layouts were designed for mobile first, using Tailwind responsive utilities.
2. **Performance:** Images optimized to WebP/AVIF. Framer Motion animations kept lightweight. Lazy loading used where applicable.
3. **Accessibility:** Semantic HTML, alt texts, keyboard focus on modals, and proper color contrast.
4. **Trade-offs:** Used minimal external libraries to avoid bloat. Modal and accordion implemented from scratch with some help from Shadcn/UI.
5. ## Future Improvements & UI Enhancements

- **Integrate serverless backend:** Handle real-time booking submissions securely.  
- **Localization (i18n):** Support multiple languages.  
- **Dynamic Pricing:** Fetch prices from a backend API.  
- **Progressive Web App (PWA):** Offline support and faster mobile experience.  

### UI & UX Enhancements
- Subtle animations on hero section and CTA buttons.  
- Card hover effects with gradient overlays and shadows.  
- Smooth scroll with section fade-ins.  
- Interactive FAQ accordion with animated expand/collapse.  
- Animated counters for metrics like “Devices Fixed”. 

---

## How AI Tools Were Used

- **ChatGPT:** Generated component structure ideas, Tailwind CSS class suggestions, and animation patterns.
- **Image Generators:** Created placeholder icons for services.
- **GitHub Copilot:** Assisted with repetitive code patterns like mapping features and generating FAQ items.

---

## Deployment

The site is deployed live at vercel

