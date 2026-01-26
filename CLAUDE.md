# Portfolio Website - Project Documentation

## Overview
Personal portfolio website for Roy Zhou, a Data Scientist at BNY. Single-page application with sections for Home, Experience, Projects, and Contact. Design prioritizes a warm, approachable feel while maintaining a sleek, techy dark aesthetic.

## File Structure
```
portfolio-website/
├── index.html      # Main HTML file
├── styles.css      # All CSS styles
├── script.js       # Typing effect + hamburger menu
├── CNAME           # GitHub Pages custom domain (royzhou.dev)
├── resume.pdf      # Downloadable resume
└── images/         # Project images
    ├── favicon.png
    ├── headshot.jpg    # Hero section photo
    ├── marketlens.png
    ├── syllabal.png
    ├── options.jpg
    ├── household.jpg
    ├── pay.png
    └── hands.png
```

## Tech Stack
- HTML/CSS with minimal vanilla JavaScript
- Hosted on GitHub Pages
- Fonts: Space Grotesk (hero), Inter (body) via Google Fonts
- Icons: Font Awesome 6.2.1 (CDN)
- Contact form: FormSubmit.co (server-side, no backend needed)

## Design System

### Direction
Warm yet techy, approachable, professional. Dark theme with warmer slate tones. Goal: visitors should feel "I'd love to work with this person."

### Depth Strategy
- Borders for structure
- Subtle border-color changes on hover
- Colored glows on hover for project cards and buttons
- Photo has subtle blue glow

### Spacing
8px base unit. All spacing uses multiples: 8, 16, 24, 32, 48, 64, 80px.

### Colors (CSS Variables)
```css
--color-background: #111827;   /* Warm dark slate */
--color-surface: #1f2937;       /* Card backgrounds */
--color-border: #374151;        /* Borders */
--color-text: #f3f4f6;          /* Primary text (warmer white) */
--color-text-muted: #9ca3af;    /* Secondary text */
--color-primary: #3b82f6;       /* Blue - primary/signature color */
--color-home: #3b82f6;          /* Blue accent */
--color-experience: #34d399;    /* Green accent */
--color-projects: #f472b6;      /* Pink accent */
--color-contact: #fbbf24;       /* Gold accent */
```

### Layout
- Max width: 1100px
- Section padding: 80px vertical, 24px horizontal
- Nav height: 64px (used for scroll offset)
- Border radius: 8px (via `--radius` variable)

### Typography
- Display font: Space Grotesk (hero heading + typing effect only)
- Body font: Inter, system fonts fallback
- Base size: 16px
- Line height: 1.6
- Section headings: 1.75rem with -0.02em letter-spacing, colored accent bar before
- Home hero: 3rem with -0.03em letter-spacing
- Body text: 0.875rem - 1.125rem

### Transitions
All transitions use 150ms ease for snappy interactions.

## Key Components

### Navigation
- Fixed position with glass blur effect (`backdrop-filter: blur(12px)`)
- Each nav item has its own accent color via `--color` CSS variable (inline style)
- Hover shows colored underline
- Hamburger menu on mobile (JavaScript-powered)

### Hero Section
- Two-column grid layout: text left, photo right
- Headshot: 280px square, rounded corners, blue border with subtle glow
- Greeting: "Hey, I'm Roy." (friendly tone)
- Typing effect: "I'm a [Data Scientist | AI Engineer | ...]" with a/an article logic
- Intro paragraph: professional but warm, impact-focused
- Status bar: pill-shaped badges showing BNY, NYC, and "Open to collaboration" with pulse animation
- Mobile: stacks vertically, photo on top

### Section Headings
- Colored accent bar (24px wide, 3px tall) before each section title
- Color matches section accent color

### Experience Section (CSS-only Tabs)
- Uses hidden radio inputs for state management
- Labels act as tab buttons
- Indicator moves based on `:checked` state
- Each label/indicator height: 40px
- Green highlight with rgba background

### Project Cards
- 3-column grid (responsive: 2 col at 900px, 1 col at 600px)
- Dark surface background with border
- Hover: pink border, lift (-4px), pink glow shadow, image scales 1.02
- Contains: image, title, description, tech tags, action links

### Contact Form
- Section title: "Let's Connect"
- Form heading: "I'd love to hear from you."
- Submits to FormSubmit.co (no backend needed)
- Action URL contains hashed email for spam protection
- Submit button: gold background, lifts on hover with glow

### Footer
- Social links: Resume, LinkedIn, GitHub, Medium
- Icons in 44x44px touch targets with 8px border-radius
- Personal note: "Built with curiosity. NYC."

## Responsive Breakpoints
- 900px: Projects grid becomes 2 columns
- 768px:
  - Hero stacks vertically (photo on top, centered)
  - Experience tabs stack horizontally
  - Hamburger menu appears
  - Section padding reduces to 64px
- 600px:
  - Projects grid becomes 1 column
  - Smaller headings (1.5rem)
  - Hero photo shrinks to 160px
- 480px: Further font size reductions
- 360px: Minimal padding adjustments

## JavaScript Features

### Typing Effect (script.js)
- Cycles through titles: "Data Scientist", "AI Engineer", "Tech Enthusiast", "Problem Solver"
- Smart article logic: switches between "a" and "an" based on first letter
- Typing speed: 50ms, deleting speed: 30ms
- Pause after typing: 1500ms, pause after deleting: 250ms

### Hamburger Menu
- Toggles on click with animated lines (rotate + fade)
- Closes when nav link clicked or clicking outside
- Uses aria-expanded for accessibility

## Animations
- `fadeIn`: Elements fade in on page load with staggered delays
- `blink`: Cursor blinks in typing effect
- `pulse`: Green dot pulses on "Open to collaboration" indicator

## Notes
- Smooth scrolling via `scroll-behavior: smooth`
- `scroll-margin-top` on sections accounts for fixed nav
- Nav colors are set via inline `--color` CSS variable for each item
- Resume link only in footer (removed from home section)
