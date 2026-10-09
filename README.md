# NOVA — Premium Smartwatch Product Landing Page

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)

> **Web Development Minor Project (Week 02)**  
> **Course:** Computer Science & Engineering (2nd Year)  
> **Author:** Viresh Ijeri  

---

## 1. Project Title
**NOVA — Premium Smartwatch Product Landing Page (`NOVA Pulse X`)**

---

## 2. Project Overview
**NOVA Pulse X** is a modern, responsive, high-converting product landing page concept engineered for an ultra-premium smartwatch. The design features a near-black charcoal dark mode, graphite surface cards, crisp typography, warm amber/orange neon glow accents, and photorealistic product assets.

The website delivers an intuitive, accessible user journey spanning introduction, core hardware and software features, lifestyle benefits, an interactive watch-face showcase, sample user personas, transparent concept pricing, and interactive frequently asked questions (FAQs).

---

## 3. Objective of the Minor Project
The primary objective of this minor project is to demonstrate mastery over fundamental and modern frontend web engineering concepts:
1. Writing clean, semantic, accessible **HTML5** structure.
2. Mastering **CSS3** design systems, custom properties (CSS variables), glassmorphism, transitions, and hover/focus states.
3. Effective implementation of **CSS Flexbox** for navigation bars, alignment, and button groups.
4. Robust implementation of **CSS Grid** for responsive multi-card feature sections, showcase views, and testimonials.
5. Utilizing **Tailwind CSS** utility-first workflow with a local build process.
6. Building lightweight, dependency-free **Vanilla JavaScript** interactive UI components (accessible accordions, modal dialogs, and dynamic dial switchers).
7. Ensuring pixel-perfect **Mobile-First Responsive Design** across all device viewports (320px to 1440px+).

---

## 4. Key Features

* **Glassmorphism Navigation Bar:** Sticky top navigation with brand wordmark, smooth-scrolling section links, and accessible mobile drawer menu.
* **Hero Section:** High-impact two-column layout featuring the fictional ₹7,999 concept price, primary CTA, secondary feature anchor, and high-resolution smartwatch render.
* **Product Highlights Bar:** Horizontal 4-item highlight section highlighting activity, notifications, watch faces, and comfort.
* **4-Card Features Section (CSS Grid):** Modular cards detailing Fitness Insights, Stay Connected, Your Personal Style, and Made For Everyday with smooth hover micro-interactions.
* **Benefits & Media Alignment:** Visual storytelling section aligning product side-profile imagery with everyday convenience benefits.
* **Interactive Watch Dial Showcase:** Dynamic dial preview allowing users to click between *Amber Analog*, *Cyber HUD*, and *Obsidian Chrono* watch themes in real-time.
* **Simulated Testimonials & Personas:** Responsive 3-card grid featuring fictional student, designer, and athlete profiles with star ratings.
* **Pricing Card & Demo Checkout Modal:** Visually distinct pricing card with an accessible popup dialog explaining the educational nature of the project.
* **Interactive Accessible FAQ Accordion:** ARIA-compliant accordion controls supporting both touch and keyboard navigation (`aria-expanded`, `aria-controls`, `Escape` key).

---

## 5. Technology Stack

| Layer | Technology / Tool | Purpose |
|---|---|---|
| **Markup** | HTML5 | Semantic page layout, ARIA roles, SEO meta tags |
| **Styling** | Tailwind CSS v3 & Custom CSS3 | Utility-first styling, glassmorphism, glow effects, custom variables |
| **Layouts** | CSS Flexbox & CSS Grid | Directional alignment (Flexbox) and 2D grid matrix (CSS Grid) |
| **Interactivity** | Vanilla JavaScript (ES6+) | Modal handling, mobile drawer toggle, FAQ accordion, dial switcher |
| **Typography** | Inter (Google Fonts) | Clean, ultra-readable modern typography |
| **Build Tooling** | Node.js & Tailwind CSS CLI | Fast local CSS compilation and minification |
| **Version Control** | Git & GitHub | Source code tracking and project hosting |

---

## 6. CSS3 Implementation
The project leverages modern CSS3 capabilities in `src/input.css`:
* **CSS Custom Properties (`:root`):** Centralized theme variables for background colors (`#0B0D10`), surfaces (`#12161C`), borders (`#242C38`), and brand accents (`#FF6B00`).
* **Glassmorphism:** Back-drop filters (`backdrop-filter: blur(16px)`) with translucent alpha backgrounds.
* **Glow & Gradient Utilities:** Radial gradient orbs (`glow-spot-orange`) and text gradient clipping (`-webkit-background-clip: text`).
* **Micro-Animations & Transitions:** Smooth ease-in-out transforms on card hovers and dial changes.
* **Accessibility:** Full `@media (prefers-reduced-motion: reduce)` support to minimize movement for sensitive users.

---

## 7. Flexbox Implementation
CSS Flexbox is utilized for 1-dimensional layouts where alignment and distribution are critical:
* **Navigation Header:** `flex items-center justify-between` for distributing brand logo, links, and CTA button.
* **CTA Button Groups:** `flex flex-col sm:flex-row items-center gap-4` for seamless mobile-to-desktop responsiveness.
* **Icon & Metadata Rows:** Flex alignments for status badges, rating stars, and testimonial author avatars.
* **Footer Columns & Copyright Bar:** `flex flex-col sm:flex-row justify-between` for responsive alignment.

---

## 8. CSS Grid Implementation
CSS Grid is utilized for 2-dimensional layouts requiring structured rows and columns:
* **Product Highlights Bar:** `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6`
* **Features Section:** `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8`
* **Hero & Benefits Sections:** `grid grid-cols-1 lg:grid-cols-12 gap-8 items-center` for asymmetric content-to-image distribution.
* **Testimonials:** `grid grid-cols-1 md:grid-cols-3 gap-8`

---

## 9. Responsive Design Strategy
The landing page follows a **Mobile-First** responsive methodology tested across all standard viewport widths:
* **320px – 375px:** Ultra-compact mobile screens (single-column cards, full-width touch buttons, stacked typography).
* **390px – 430px:** Modern smartphones (optimized padding and touch targets).
* **768px (Tablet):** 2-column grid arrangements for features and side-by-side button groups.
* **1024px (Laptop):** Full horizontal navigation, multi-column desktop grid layouts.
* **1280px – 1440px+ (Desktop):** Centered max-width containers (`max-w-7xl`) preventing unwanted stretching on ultra-wide monitors.

---

## 10. Tailwind CSS Implementation
Tailwind CSS v3 is configured via `tailwind.config.js` to extend brand color tokens:
* Custom color palette under `theme.extend.colors.nova` (`bg`, `surface`, `elevated`, `border`, `accent`, `muted`).
* Custom box-shadow glows (`shadow-glow-accent`, `shadow-card-dark`).
* Compiled using the official Tailwind CLI to generate a lightweight, production-ready `dist/output.css`.

---

## 11. Project Folder Structure

```
nova-smartwatch-landing-page/
├── index.html              # Main semantic HTML5 landing page
├── package.json            # NPM scripts and development dependencies
├── tailwind.config.js      # Tailwind CSS configuration and theme tokens
├── .gitignore              # Excludes node_modules and temporary files
├── README.md               # Complete project documentation & guide
├── assets/
│   └── images/
│       ├── nova-hero.jpg       # Hero section high-resolution smartwatch render
│       ├── nova-showcase.jpg   # Showcase angled profile image
│       └── nova-faces.jpg      # Customizable dial interface asset
├── src/
│   ├── input.css           # Tailwind source CSS with custom CSS3 rules
│   └── main.js             # Vanilla JS interactivity (modal, menu, accordion)
└── dist/
    └── output.css          # Minified production CSS generated by Tailwind CLI
```

---

## 12. Installation Instructions

### Prerequisites
* [Node.js](https://nodejs.org/) (version 18+ or 20+ recommended)
* Git

### Step-by-Step Setup
1. Clone or open the project folder in your terminal:
   ```bash
   cd "Nova smart watch"
   ```
2. Install the necessary development dependencies:
   ```bash
   npm install
   ```

---

## 13. Development Commands

### Start Tailwind CSS in Watch Mode
To automatically recompile styles during development whenever HTML or JS files change:
```bash
npm run dev
```
*(or `npm run dev:css`)*

### Start Local Development Server
To launch a live local server on port 3000:
```bash
npm run serve
```

---

## 14. Production Build Instructions
To compile and minify the CSS for deployment:
```bash
npm run build
```
This reads `src/input.css`, purges unused classes, and writes the optimized production stylesheet to `dist/output.css`.

---

## 15. Browser Testing Instructions

1. Open `index.html` directly in any modern browser (Chrome, Edge, Firefox, Safari) or use the live development server (`http://localhost:3000`).
2. Open Developer Tools (`F12` or `Ctrl + Shift + I`).
3. Switch to **Device Toolbar** (`Ctrl + Shift + M`) and test responsiveness at:
   * 320px (Mobile S)
   * 375px (iPhone SE)
   * 390px (iPhone 12/13/14/15)
   * 768px (iPad / Tablet)
   * 1024px (Laptop)
   * 1440px (Desktop HD)
4. Verify interactive behaviors:
   * Click the **Hamburger Menu** on mobile.
   * Click **Buy Now** buttons to verify the educational demo modal opens and closes.
   * Click the **Dial Selector Buttons** in the showcase section to switch watch displays.
   * Expand/collapse each of the 4 **FAQ items**.
   * Navigate using the `Tab` key to confirm visible focus rings.

---

## 16. UI Preview & Screenshots
* **Hero Section:** Features headline `"TIME TO MOVE BEYOND ORDINARY."`, glowing biometric smartwatch render, and action buttons.
* **Interactive Showcase:** Dynamic dial previews with instant transition switching.
* **Pricing & Academic Modal:** Clear callouts explaining the fictional concept price of ₹7,999 and academic nature.

---

## 17. Known Limitations
* **Simulated Checkout:** As this is a pure frontend educational minor project, the "Buy Now" button triggers an informational dialog rather than a real payment gateway or order processing backend.
* **Concept Biometrics:** All heart rate, sleep metrics, and battery duration values are conceptual design assets rather than real sensor feeds.

---

## 18. Educational Project Disclaimer
> **Academic Notice:** NOVA is a fictional brand and NOVA Pulse X is a concept smartwatch landing page developed strictly for academic evaluation in the **Web Development Minor Project (Week 02)**. No real commercial transactions, customer reviews, or physical products exist.

---

## 19. GitHub Repository URL Placeholder
```
https://github.com/viresh-ijeri/nova-smartwatch-landing-page
```

---

## 20. Author Information
* **Author:** Viresh Ijeri
* **Program:** 2nd Year Computer Science & Engineering (CSE)
* **Project:** Web Development Week 02 Minor Project
* **Year:** 2026
