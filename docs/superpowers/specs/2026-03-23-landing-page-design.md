# Magpie Career Landing Page - Design Specification

## Overview

A premium, high-converting landing page for Magpie Career, a career consulting company helping international students study and build careers in Australia. The design follows Apple/Tesla-inspired principles with a bright, optimistic theme that conveys "your future is bright."

## Business Context

**Company:** Magpie Career

**Target Audience:**
- International students (especially from Asia)
- Age 18-30
- Ambitious, career-focused
- Willing to pay for better outcomes

**Value Proposition:** "Don't just study in Australia. Build a successful career here."

**Primary Goal:** Convert visitors into booked consultation calls

**Secondary Goals:**
- Build trust
- Showcase outcomes (jobs, universities)
- Clearly explain services

## Design Principles

- **Bright & Optimistic:** Light backgrounds, hopeful color palette
- **Minimal & Clean:** Lots of whitespace, strong typography
- **Premium Feel:** Inspired by Apple.com and Tesla.com
- **High-Converting:** Clear CTAs, trust signals, social proof

## Color Palette

| Purpose | Color | Hex |
|---------|-------|-----|
| Primary | Blue | `#3b82f6` |
| Primary Dark | Blue Dark | `#2563eb` |
| Secondary | Purple | `#8b5cf6` |
| Accent | Green | `#10b981` |
| Text Primary | Slate 900 | `#0f172a` |
| Text Secondary | Slate 600 | `#64748b` |
| Background Light | Slate 50 | `#f8fafc` |
| Background White | White | `#ffffff` |
| Border | Slate 200 | `#e2e8f0` |

## Typography

- **Font Family:** Inter (Google Fonts)
- **Headings:** Bold (700), Slate 900
- **Body:** Regular (400), Slate 600
- **Sizes:**
  - H1: 42px (mobile: 32px)
  - H2: 32px (mobile: 24px)
  - H3: 18px
  - Body: 14-16px
  - Small: 13-14px

## Page Sections

### 1. Navigation Bar (Sticky)
- Logo on left
- Navigation links: About, Services, Contact
- CTA button on right: "Book a Free Consultation"
- Background: White with subtle shadow on scroll

### 2. Hero Section
- Full viewport height
- Background: Sky blue gradient (`#f0f9ff` → `#e0f2fe` → `#bae6fd`)
- Decorative radial gradients for depth
- Headline: "Study in Australia is easy. Building a career is not."
- Subheadline: "We help you go from student → hired by top companies."
- CTA: Blue gradient button with shadow
- Trust badges: "Ex-Google, Amazon, P&G mentors"

### 3. Social Proof Section
- White background
- Label: "Trusted by students placed at"
- Company logos (text): Google, Amazon, Microsoft, P&G, Deloitte
- Stats row (3 columns):
  - 500+ Students Placed
  - 95% Success Rate
  - 50+ Partner Companies
- Numbers in blue, labels in gray

### 4. Problem Section
- Light gray background (`#f8fafc`)
- Heading: "The challenge is real"
- 3-column grid with cards:
  1. "You got accepted... now what?"
  2. "No local experience"
  3. "Hard to get interviews"
- Each card: emoji, title, description

### 5. Solution Steps Section
- White background
- Heading: "Your path to success"
- Subheading: "Three steps to transform your Australian dream into reality"
- Horizontal 3-step layout with arrows:
  - Step 1: Blue accent — Get into the right university
  - Step 2: Purple accent — Settle in Australia
  - Step 3: Green accent — Land a high-paying job
- Each step: numbered circle, title, description

### 6. Services Section
- Light gray background
- Heading: "What we offer"
- 3-column card grid:
  1. University Application — 🏫
  2. Accommodation Support — 🏠
  3. Career Coaching — 🚀
- Each card: emoji, title, description, "Learn More →" link

### 7. Final CTA Section
- Vibrant gradient background (`#3b82f6` → `#8b5cf6` → `#a855f7`)
- Decorative radial gradient overlay
- Headline: "Don't just come to Australia."
- Subheadline: "Win here."
- CTA: White button with blue text

### 8. Footer
- Light background with top border
- Logo/name: "Magpie Career"
- Links: About, Services, Contact
- Copyright notice

## Technical Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** TailwindCSS
- **Animations:** Framer Motion
- **Icons:** Lucide React or emoji
- **Font:** Inter (Google Fonts via next/font)

## Animations

- **Scroll reveal:** Elements fade in and slide up on scroll
- **Hover effects:** Buttons scale slightly, cards lift with shadow
- **Sticky nav:** Background appears on scroll
- **Smooth scrolling:** Enabled on anchor links

## Responsive Breakpoints

- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px

Mobile adaptations:
- Single column layouts
- Reduced font sizes
- Stack elements vertically
- Maintain generous padding

## Accessibility

- Semantic HTML structure
- ARIA labels on interactive elements
- Sufficient color contrast
- Keyboard navigable
- Focus states visible

## File Structure

```
/app
  /page.tsx          # Main landing page
  /layout.tsx        # Root layout with fonts
  /globals.css       # Global styles
/components
  /Navigation.tsx
  /Hero.tsx
  /SocialProof.tsx
  /ProblemSection.tsx
  /SolutionSteps.tsx
  /Services.tsx
  /FinalCTA.tsx
  /Footer.tsx
  /ui
    /Button.tsx
    /Card.tsx
/lib
  /utils.ts          # Utility functions (cn, etc.)
```

## Out of Scope

- Authentication/login
- Dashboard
- Blog section
- Pricing page
- Multi-language support
- Dark mode
