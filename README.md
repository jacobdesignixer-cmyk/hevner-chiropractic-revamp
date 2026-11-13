# Hevner Chiropractic Center | Expert Chiropractic Care

A modern, high-converting homepage revamp for **Hevner Chiropractic Center** located in Lititz, PA, led by Dr. Edward Hevner. The redesign translates the modern healthcare aesthetic (Flexra layout) into an authentic chiropractic clinical experience, utilizing **strictly authentic copy and photography from the clinic** with **zero stock images**.

---

## Practice Details

- **Doctor**: Dr. Edward Hevner, DC
- **Practice**: Hevner Chiropractic Center
- **Address**: 79 East Main Street, Suite 101, Lititz, PA 17543
- **Phone**: [(717) 628-6900](tel:7176286900)
- **Website**: [hevnerchiropracticcenter.com](https://hevnerchiropracticcenter.com/)

---

## Design System & Brand Palette

- **Primary Color**: `#BFE4E7` (Soft Aqua Blue) — Hero gradients, active pill badges, icon containers, and accent highlights.
- **Secondary Color**: `#ECCCCD` (Warm Peach Beige) — Mission/Vision cards, benefits badge accents, and warm clinical borders.
- **Deep Slate Teal**: `#123E42` / `#0B272A` — Primary typography, prominent buttons, and high-contrast WCAG AAA readability.
- **Typography**: Paired modern geometric sans-serif (*Plus Jakarta Sans*) with editorial serif accents (*Fraunces* italic) for clinical warmth.
- **Glassmorphism**: Subtle frosted glass styling (`backdrop-filter: blur(16px)`, translucent white backgrounds, and delicate pastel borders) across headers, metrics strips, service cards, and review panels.
- **Container Width**: Expanded to `1380px` (`max-width: 1380px; padding: 0 32px;`) for a broader, high-end editorial feel without stretching edge-to-edge.

---

## Key Features

1. **Top Announcement Bar**: Lititz office location, accommodating hours, emergency same-day care notice, and quick click-to-call link.
2. **Single-Line Desktop Navigation**: All 7 menu items, phone badge, and "Book Appointment" CTA button maintain a single horizontal row across desktop and laptop resolutions down to 1081px.
3. **Hero Section**: Eyebrow badge, dual-font typography, clinical hands-on adjustment visual with floating glass badges.
4. **Key Metrics Strip**: 20+ years of practice, 3,000+ local patients, 50% relief milestone, 5.0 Google rating.
5. **About Dr. Edward Hevner**: Doctor photo with spine model, practice philosophy, and Mission & Vision frosted cards.
6. **4 Clinical Values**: Gonstead manual adjustments, zero upfront lock-in contracts, measurable relief goals, and holistic medical/PT coordination.
7. **Featured Therapeutic Treatments**: 6 clinical service cards with authentic imagery (Spinal Manipulation, Decompression & Disc Care, Sciatica & Nerve Pain, Headaches & Neck, Pediatric Care, and Pregnancy Care).
8. **Movement & Healing Benefits**: Authentic spine alignment visual paired with 4 clinical guarantees.
9. **Treatment Programs**: 4 condition-specific care programs (Back & Shoulder Mobility, Posture & Spine Alignment, Joint Rehabilitation, Accident & Pain Recovery).
10. **Verified Patient Reviews**: Real quotes from local Lititz and Lancaster County patients with Google 5-star ratings.
11. **Interactive Consultation Booking**: Complete appointment request form and accessible modal dialog with keyboard accessibility (`Esc` dismiss).
12. **Full Responsive Mobile Experience**: Touch-friendly mobile drawer navigation with zero horizontal viewport overflow.

---

## Project Structure

```
hevner-chiropractic-revamp/
├── index.html              # Semantic HTML5 revamp structure
├── styles.css              # Custom CSS with brand tokens, glassmorphism & responsive layout
├── script.js               # Header scroll effects, mobile drawer, accessible modal & forms
├── server.ps1              # Lightweight local PowerShell static server
├── .gitignore              # Git ignore rules
└── assets/
    └── images/             # 12 authentic clinic photography assets & official logo
        ├── logo.webp
        ├── dr-hevner-spine.webp
        ├── dr-hevner-desk.webp
        ├── hero-adjustment.webp
        ├── adjustment-table.webp
        ├── posture-spine.webp
        ├── cervical-neck.webp
        ├── pediatric-care.webp
        ├── prenatal-care.webp
        ├── joint-rehab.webp
        ├── shoulder-relief.webp
        └── back-exam.webp
```

---

## Getting Started

### Option 1: Open Directly
Double-click `index.html` or open it directly in any modern browser.

### Option 2: Run Local Server (PowerShell)
```powershell
powershell -ExecutionPolicy Bypass -File .\server.ps1 -Port 8085
```
Then navigate to `http://localhost:8085/`.
