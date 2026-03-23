# Magpie Career Landing Page Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a premium, high-converting landing page for Magpie Career with a bright, optimistic design.

**Architecture:** Next.js 14 App Router with TailwindCSS for styling and Framer Motion for animations. Component-based structure with reusable UI primitives and section components.

**Tech Stack:** Next.js 14, TailwindCSS, Framer Motion, Inter font, Lucide React icons

---

## File Structure

```
/app
  page.tsx           # Main landing page - assembles all sections
  layout.tsx         # Root layout with Inter font
  globals.css        # Tailwind imports + custom utilities
/components
  Navigation.tsx     # Sticky nav with scroll effect
  Hero.tsx           # Full viewport hero with gradient
  SocialProof.tsx    # Company logos + stats
  ProblemSection.tsx # 3-column pain points
  SolutionSteps.tsx  # 3-step horizontal flow
  Services.tsx       # 3-column service cards
  FinalCTA.tsx       # Gradient CTA section
  Footer.tsx         # Minimal footer
  ui/
    Button.tsx       # Reusable button component
    Container.tsx    # Max-width container wrapper
/lib
  utils.ts           # cn() utility for class merging
```

---

## Task 1: Project Setup

**Files:**
- Create: `package.json`
- Create: `next.config.js`
- Create: `tailwind.config.ts`
- Create: `postcss.config.js`
- Create: `tsconfig.json`
- Create: `app/globals.css`
- Create: `app/layout.tsx`
- Create: `lib/utils.ts`

- [ ] **Step 1: Initialize Next.js project with dependencies**

```bash
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir=false --import-alias="@/*" --no-git
```

Select defaults when prompted. Then add Framer Motion:

```bash
npm install framer-motion lucide-react
```

- [ ] **Step 2: Configure Tailwind with custom colors**

Update `tailwind.config.ts`:

```typescript
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#3b82f6",
          dark: "#2563eb",
        },
        secondary: "#8b5cf6",
        accent: "#10b981",
        slate: {
          900: "#0f172a",
          600: "#64748b",
          50: "#f8fafc",
          200: "#e2e8f0",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
```

- [ ] **Step 3: Create utility function**

Create `lib/utils.ts`:

```typescript
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

Install clsx and tailwind-merge:

```bash
npm install clsx tailwind-merge
```

- [ ] **Step 4: Update globals.css**

Update `app/globals.css`:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

html {
  scroll-behavior: smooth;
}

body {
  font-feature-settings: "cv02", "cv03", "cv04", "cv11";
}
```

- [ ] **Step 5: Update layout with Inter font**

Update `app/layout.tsx`:

```typescript
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Magpie Career | Study & Build Your Career in Australia",
  description: "We help international students go from university admission to landing jobs at top companies in Australia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
```

- [ ] **Step 6: Verify setup works**

```bash
npm run dev
```

Open http://localhost:3000 — should see default Next.js page.

- [ ] **Step 7: Commit**

```bash
git add .
git commit -m "chore: initialize Next.js project with TailwindCSS and Framer Motion

Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>"
```

---

## Task 2: UI Components

**Files:**
- Create: `components/ui/Button.tsx`
- Create: `components/ui/Container.tsx`

- [ ] **Step 1: Create Button component**

Create `components/ui/Button.tsx`:

```typescript
"use client";

import { cn } from "@/lib/utils";
import { ReactNode, ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
}

export function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center font-semibold transition-all duration-200",
        "rounded-full",
        {
          "bg-gradient-to-r from-primary to-primary-dark text-white shadow-lg shadow-primary/40 hover:shadow-xl hover:shadow-primary/50":
            variant === "primary",
          "bg-white text-primary hover:bg-slate-50": variant === "secondary",
          "border-2 border-primary text-primary hover:bg-primary/5":
            variant === "outline",
        },
        {
          "px-4 py-2 text-sm": size === "sm",
          "px-6 py-3 text-base": size === "md",
          "px-8 py-4 text-lg": size === "lg",
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
```

- [ ] **Step 2: Create Container component**

Create `components/ui/Container.tsx`:

```typescript
import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
  className?: string;
}

export function Container({ children, className }: ContainerProps) {
  return (
    <div className={cn("mx-auto max-w-7xl px-4 sm:px-6 lg:px-8", className)}>
      {children}
    </div>
  );
}
```

- [ ] **Step 3: Commit**

```bash
git add components/
git commit -m "feat: add Button and Container UI components

Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>"
```

---

## Task 3: Navigation Component

**Files:**
- Create: `components/Navigation.tsx`

- [ ] **Step 1: Create Navigation component**

Create `components/Navigation.tsx`:

```typescript
"use client";

import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Button } from "./ui/Button";
import { Container } from "./ui/Container";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      )}
    >
      <Container>
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="text-xl font-bold text-slate-900">
            Magpie Career
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
              >
                {link.label}
              </a>
            ))}
            <Button size="sm">Book a Free Consultation</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-slate-600"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-slate-200 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block py-2 text-slate-600"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="mt-4">
              <Button size="sm" className="w-full">
                Book a Free Consultation
              </Button>
            </div>
          </div>
        )}
      </Container>
    </nav>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/Navigation.tsx
git commit -m "feat: add Navigation component with sticky scroll effect

Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>"
```

---

## Task 4: Hero Section

**Files:**
- Create: `components/Hero.tsx`

- [ ] **Step 1: Create Hero component**

Create `components/Hero.tsx`:

```typescript
"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/Button";
import { Container } from "./ui/Container";

export function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-sky-50 via-blue-100 to-blue-200 pt-16">
      {/* Decorative gradients */}
      <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-blue-400/10 blur-3xl" />
      <div className="absolute -bottom-48 -left-24 h-[500px] w-[500px] rounded-full bg-purple-400/10 blur-3xl" />

      <Container className="relative flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="max-w-4xl text-4xl font-bold leading-tight text-slate-900 sm:text-5xl md:text-6xl">
            Study in Australia is easy.
            <br />
            <span className="text-slate-700">Building a career is not.</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-6 max-w-2xl text-lg text-slate-600 sm:text-xl"
        >
          We help you go from student → hired by top companies.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-10"
        >
          <Button size="lg">Book a Free Consultation</Button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 text-sm text-slate-500"
        >
          Ex-Google, Amazon, P&G mentors
        </motion.p>
      </Container>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/Hero.tsx
git commit -m "feat: add Hero section with gradient background

Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>"
```

---

## Task 5: Social Proof Section

**Files:**
- Create: `components/SocialProof.tsx`

- [ ] **Step 1: Create SocialProof component**

Create `components/SocialProof.tsx`:

```typescript
"use client";

import { motion } from "framer-motion";
import { Container } from "./ui/Container";

const companies = ["Google", "Amazon", "Microsoft", "P&G", "Deloitte"];

const stats = [
  { value: "500+", label: "Students Placed" },
  { value: "95%", label: "Success Rate" },
  { value: "50+", label: "Partner Companies" },
];

export function SocialProof() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-sm font-medium uppercase tracking-wider text-slate-400">
            Trusted by students placed at
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-8 text-slate-400 sm:gap-12">
            {companies.map((company) => (
              <span
                key={company}
                className="text-lg font-semibold text-slate-500 transition-colors hover:text-slate-700"
              >
                {company}
              </span>
            ))}
          </div>

          <div className="mt-12 grid grid-cols-3 gap-8 sm:gap-16">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="text-3xl font-bold text-primary sm:text-4xl">
                  {stat.value}
                </div>
                <div className="mt-1 text-sm text-slate-500">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/SocialProof.tsx
git commit -m "feat: add SocialProof section with company logos and stats

Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>"
```

---

## Task 6: Problem Section

**Files:**
- Create: `components/ProblemSection.tsx`

- [ ] **Step 1: Create ProblemSection component**

Create `components/ProblemSection.tsx`:

```typescript
"use client";

import { motion } from "framer-motion";
import { Container } from "./ui/Container";

const problems = [
  {
    emoji: "🎓",
    title: "You got accepted... now what?",
    description: "Getting in is just the beginning.",
  },
  {
    emoji: "💼",
    title: "No local experience",
    description: "Catch-22 of needing experience to get experience.",
  },
  {
    emoji: "📬",
    title: "Hard to get interviews",
    description: "Applications disappear into the void.",
  },
];

export function ProblemSection() {
  return (
    <section id="about" className="bg-slate-50 py-20 sm:py-28">
      <Container>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-3xl font-bold text-slate-900 sm:text-4xl"
        >
          The challenge is real
        </motion.h2>

        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-2xl bg-white p-8 text-center shadow-sm"
            >
              <div className="text-4xl">{problem.emoji}</div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">
                {problem.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600">{problem.description}</p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/ProblemSection.tsx
git commit -m "feat: add ProblemSection with pain points

Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>"
```

---

## Task 7: Solution Steps Section

**Files:**
- Create: `components/SolutionSteps.tsx`

- [ ] **Step 1: Create SolutionSteps component**

Create `components/SolutionSteps.tsx`:

```typescript
"use client";

import { motion } from "framer-motion";
import { Container } from "./ui/Container";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    number: 1,
    title: "Get into the right university",
    description:
      "Strategic guidance on choosing the best program for your career goals.",
    color: "blue",
  },
  {
    number: 2,
    title: "Settle in Australia",
    description: "Housing, onboarding, and community from day one.",
    color: "purple",
  },
  {
    number: 3,
    title: "Land a high-paying job",
    description:
      "Career coaching and direct connections to top employers.",
    color: "green",
  },
];

const colorClasses = {
  blue: {
    bg: "bg-gradient-to-b from-blue-50 to-white",
    border: "border-blue-100",
    circle: "bg-gradient-to-br from-primary to-primary-dark shadow-primary/30",
  },
  purple: {
    bg: "bg-gradient-to-b from-purple-50 to-white",
    border: "border-purple-100",
    circle: "bg-gradient-to-br from-secondary to-purple-600 shadow-purple-500/30",
  },
  green: {
    bg: "bg-gradient-to-b from-emerald-50 to-white",
    border: "border-emerald-100",
    circle: "bg-gradient-to-br from-accent to-emerald-600 shadow-emerald-500/30",
  },
};

export function SolutionSteps() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
            Your path to success
          </h2>
          <p className="mt-4 text-slate-600">
            Three steps to transform your Australian dream into reality
          </p>
        </motion.div>

        <div className="mt-12 flex flex-col items-center gap-6 lg:flex-row lg:gap-4">
          {steps.map((step, index) => {
            const colors = colorClasses[step.color as keyof typeof colorClasses];
            return (
              <div key={step.number} className="flex items-center gap-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`flex-1 rounded-2xl border p-8 text-center ${colors.bg} ${colors.border}`}
                >
                  <div
                    className={`mx-auto flex h-12 w-12 items-center justify-center rounded-full text-lg font-semibold text-white shadow-lg ${colors.circle}`}
                  >
                    {step.number}
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-slate-900">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-600">{step.description}</p>
                </motion.div>
                {index < steps.length - 1 && (
                  <ArrowRight className="hidden shrink-0 text-slate-300 lg:block" />
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/SolutionSteps.tsx
git commit -m "feat: add SolutionSteps section with 3-step flow

Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>"
```

---

## Task 8: Services Section

**Files:**
- Create: `components/Services.tsx`

- [ ] **Step 1: Create Services component**

Create `components/Services.tsx`:

```typescript
"use client";

import { motion } from "framer-motion";
import { Container } from "./ui/Container";

const services = [
  {
    emoji: "🏫",
    title: "University Application",
    description: "End-to-end support from selection to enrollment.",
  },
  {
    emoji: "🏠",
    title: "Accommodation Support",
    description: "Find your home before you land.",
  },
  {
    emoji: "🚀",
    title: "Career Coaching",
    description: "Resume, interview prep, and job placement.",
  },
];

export function Services() {
  return (
    <section id="services" className="bg-slate-50 py-20 sm:py-28">
      <Container>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center text-3xl font-bold text-slate-900 sm:text-4xl"
        >
          What we offer
        </motion.h2>

        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group rounded-2xl bg-white p-8 shadow-sm transition-all hover:shadow-lg"
            >
              <div className="text-3xl">{service.emoji}</div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900">
                {service.title}
              </h3>
              <p className="mt-2 text-sm text-slate-600">{service.description}</p>
              <span className="mt-4 inline-block text-sm font-semibold text-primary group-hover:underline">
                Learn More →
              </span>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/Services.tsx
git commit -m "feat: add Services section with 3 service cards

Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>"
```

---

## Task 9: Final CTA Section

**Files:**
- Create: `components/FinalCTA.tsx`

- [ ] **Step 1: Create FinalCTA component**

Create `components/FinalCTA.tsx`:

```typescript
"use client";

import { motion } from "framer-motion";
import { Button } from "./ui/Button";
import { Container } from "./ui/Container";

export function FinalCTA() {
  return (
    <section id="contact" className="relative overflow-hidden bg-gradient-to-r from-primary via-secondary to-purple-500 py-24 sm:py-32">
      {/* Decorative gradient */}
      <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-3xl" />

      <Container className="relative text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-white sm:text-4xl"
        >
          Don&apos;t just come to Australia.
        </motion.h2>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-2 text-3xl font-normal text-white/95 sm:text-4xl"
        >
          Win here.
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-10"
        >
          <Button variant="secondary" size="lg">
            Book Your Free Call
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/FinalCTA.tsx
git commit -m "feat: add FinalCTA section with gradient background

Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>"
```

---

## Task 10: Footer Component

**Files:**
- Create: `components/Footer.tsx`

- [ ] **Step 1: Create Footer component**

Create `components/Footer.tsx`:

```typescript
import { Container } from "./ui/Container";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 py-12">
      <Container>
        <div className="text-center">
          <div className="text-xl font-bold text-slate-900">Magpie Career</div>

          <div className="mt-4 flex items-center justify-center gap-8 text-slate-600">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="transition-colors hover:text-slate-900"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="mt-6 text-sm text-slate-400">
            © {new Date().getFullYear()} Magpie Career. All rights reserved.
          </div>
        </div>
      </Container>
    </footer>
  );
}
```

- [ ] **Step 2: Commit**

```bash
git add components/Footer.tsx
git commit -m "feat: add Footer component

Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>"
```

---

## Task 11: Assemble Main Page

**Files:**
- Modify: `app/page.tsx`

- [ ] **Step 1: Update main page to assemble all sections**

Update `app/page.tsx`:

```typescript
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { SocialProof } from "@/components/SocialProof";
import { ProblemSection } from "@/components/ProblemSection";
import { SolutionSteps } from "@/components/SolutionSteps";
import { Services } from "@/components/Services";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <SocialProof />
      <ProblemSection />
      <SolutionSteps />
      <Services />
      <FinalCTA />
      <Footer />
    </main>
  );
}
```

- [ ] **Step 2: Verify the full page works**

```bash
npm run dev
```

Open http://localhost:3000 — verify all sections appear correctly.

- [ ] **Step 3: Commit**

```bash
git add app/page.tsx
git commit -m "feat: assemble landing page with all sections

Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>"
```

---

## Task 12: Final Verification & Build

- [ ] **Step 1: Run lint check**

```bash
npm run lint
```

Expected: No errors

- [ ] **Step 2: Run production build**

```bash
npm run build
```

Expected: Build succeeds without errors

- [ ] **Step 3: Test production build locally**

```bash
npm run start
```

Open http://localhost:3000 — verify everything works in production mode.

- [ ] **Step 4: Final commit (if any fixes needed)**

```bash
git add .
git commit -m "fix: resolve build and lint issues

Co-Authored-By: Claude Opus 4.6 <noreply@anthropic.com>"
```
