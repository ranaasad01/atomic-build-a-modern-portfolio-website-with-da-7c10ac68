import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";

/**
 * Home page — full single-page portfolio with five sections:
 *  1. Hero      — animated intro, typewriter role, CTA + CV download
 *  2. About     — bio, profile photo, stats, experience timeline
 *  3. Skills    — animated skill bars (frontend / backend / tools) + badge cloud
 *  4. Projects  — filterable glassmorphism project cards grid
 *  5. Contact   — validated contact form + social links + availability status
 */
export default function HomePage() {
  return (
    <main className="bg-slate-950 text-white">
      {/* ─── 1. HERO ─────────────────────────────────────────────────────────── */}
      {/*
        Full-screen section with animated typewriter role titles, gradient
        background blobs, "View My Work" + "Download CV" CTAs, and social links.
      */}
      <Hero />

      {/* ─── 2. ABOUT ────────────────────────────────────────────────────────── */}
      {/*
        Two-column layout: profile photo + bio on the left; stats grid
        (5+ years, 40+ projects, 25+ clients) and experience/education
        timeline on the right. Scroll-triggered fade-in animation.
      */}
      <About />

      {/* ─── 3. SKILLS ───────────────────────────────────────────────────────── */}
      {/*
        Three glassmorphism cards — Frontend, Backend, Tools & DevOps —
        each containing animated progress bars that fill on scroll.
        Below the cards: a badge cloud of additional technologies.
      */}
      <Skills />

      {/* ─── 4. PROJECTS ─────────────────────────────────────────────────────── */}
      {/*
        Category filter tabs (All / Full Stack / Frontend / AI / DevOps)
        above a responsive 3-column grid of project cards. Each card shows
        a cover image, title, description, tech tags, GitHub + live links,
        and a "View Details" link to /projects/[slug].
      */}
      <Projects />

      {/* ─── 5. CONTACT ──────────────────────────────────────────────────────── */}
      {/*
        Split layout: contact info (email, location, availability) + social
        icons on the left; validated form (name, email, subject, message)
        wired to /api/contact on the right. Success / error feedback inline.
      */}
      <Contact />
    </main>
  );
}
