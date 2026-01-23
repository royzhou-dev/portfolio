# Portfolio Website - Project Documentation

## Overview
Personal portfolio website for Roy Zhou, a Data Scientist at BNY. Single-page application with sections for Home, Experience, Projects, and Contact.

## File Structure
```
portfolio-website/
├── index.html      # Main HTML file
├── styles.css      # All CSS styles
├── CNAME           # GitHub Pages custom domain (royzhou.dev)
├── resume.pdf      # Downloadable resume
└── images/         # Project images
    ├── favicon.png
    ├── options.jpg
    ├── household.jpg
    ├── pay.png
    ├── hands.png
    ├── movies.jpg
    └── school.webp
```

## Tech Stack
- Pure HTML/CSS (no JavaScript)
- Hosted on GitHub Pages
- Font: Inter (Google Fonts)
- Icons: Font Awesome 6.2.1 (CDN)
- Contact form: FormSubmit.co (server-side, no JS needed)

## Design System

### Direction
Confident, clean, professional. Dark theme with unified surface colors.

### Depth Strategy
Borders for structure, subtle border-color changes on hover. No shadows.

### Spacing
8px base unit. All spacing uses multiples: 8, 16, 24, 32, 48, 64, 80px.

### Colors (CSS Variables)
```css
--color-background: #0f172a;   /* Deep navy */
--color-surface: #1e293b;       /* Card backgrounds */
--color-border: #334155;        /* Borders */
--color-text: #e2e8f0;          /* Primary text */
--color-text-muted: #94a3b8;    /* Secondary text */
--color-home: #60a5fa;          /* Blue accent */
--color-experience: #4ade80;    /* Green accent */
--color-projects: #f472b6;      /* Pink accent */
--color-contact: #fbbf24;       /* Gold accent */
```

### Layout
- Max width: 1100px
- Section padding: 80px vertical, 24px horizontal
- Nav height: 64px (used for scroll offset)
- Border radius: 8px (via `--radius` variable)

### Typography
- Font family: Inter, system fonts fallback
- Base size: 16px
- Line height: 1.6
- Section headings: 1.75rem with -0.02em letter-spacing
- Home hero: 3rem with -0.03em letter-spacing
- Body text: 0.875rem - 1.125rem

### Transitions
All transitions use 150ms ease for snappy interactions.

## Key Components

### Navigation
- Fixed position with glass blur effect (`backdrop-filter: blur(12px)`)
- Each nav item has its own accent color via `--color` CSS variable
- Hover shows colored underline

### Experience Section (CSS-only Tabs)
- Uses hidden radio inputs for state management
- Labels act as tab buttons
- Indicator moves based on `:checked` state
- Each label/indicator height: 40px
- Positions: 0, 40px, 80px, 120px, 160px

### Project Cards
- 3-column grid (responsive: 2 col at 900px, 1 col at 600px)
- Dark surface background with border (matches experience section)
- Hover: border lightens, slight lift, image scales 1.02
- Contains: image, title, description, tech tags, source link

### Contact Form
- Submits to FormSubmit.co (no backend needed)
- Action URL contains hashed email for spam protection
- CAPTCHA disabled

### Footer
- Social links: Resume, LinkedIn, GitHub, Medium
- Icons in 44x44px touch targets with 8px border-radius

## Responsive Breakpoints
- 900px: Projects grid becomes 2 columns
- 768px: Experience tabs stack horizontally, nav centers, section padding reduces to 64px
- 600px: Projects grid becomes 1 column, smaller headings (1.5rem)

## Notes
- No JavaScript - all interactivity is CSS-only (tabs, hover effects)
- Smooth scrolling via `scroll-behavior: smooth`
- `scroll-margin-top` on sections accounts for fixed nav
- Resume button removed from Home section (now in footer only)
