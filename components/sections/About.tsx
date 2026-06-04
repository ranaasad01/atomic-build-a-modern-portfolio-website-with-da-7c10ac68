"use client";

import { useRef } from "react";
import { useInView } from "@/hooks/useInView";
import { Download, MapPin, Briefcase, GraduationCap, Coffee } from 'lucide-react';

const stats = [
  { label: "Years Experience", value: "5+" },
  { label: "Projects Completed", value: "40+" },
  { label: "Happy Clients", value: "25+" },
  { label: "Cups of Coffee", value: "∞" },
];

const timeline = [
  {
    year: "2023 – Present",
    role: "Senior Full Stack Developer",
    company: "TechVentures Inc.",
    description: "Leading development of a SaaS analytics platform serving 10k+ users.",
  },
  {
    year: "2021 – 2023",
    role: "Full Stack Developer",
    company: "Digital Agency Co.",
    description: "Built and shipped 15+ client projects using React, Next.js, and Node.js.",
  },
  {
    year: "2019 – 2021",
    role: "Frontend Developer",
    company: "StartupXYZ",
    description: "Developed responsive web applications and improved performance by 40%.",
  },
  {
    year: "2015 – 2019",
    role: "B.Sc. Computer Science",
    company: "State University",
    description: "Graduated with honors. Focused on software engineering and algorithms.",
  },
];

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { threshold: 0.1 });

  return (
    <section id="about" className="py-24 bg-slate-900 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div
          ref={ref}
          className={"text-center mb-16 transition-all duration-700 " + (isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8")}
        >
          <span className="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-3 block">
            About Me
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Passionate About{" "}
            <span className="gradient-text">Building Things</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A developer who loves turning ideas into reality through clean code and thoughtful design.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left: Photo + Bio */}
          <div
            className={"transition-all duration-700 delay-200 " + (isInView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8")}
          >
            {/* Profile image */}
            <div className="relative mb-8">
              <div className="relative w-64 h-64 mx-auto lg:mx-0">
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 blur-xl opacity-30 scale-110" />
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Alex_Morgan_May19.jpg/960px-Alex_Morgan_May19.jpg"
                  alt="Alex Morgan"
                  className="relative w-full h-full object-cover rounded-2xl border-2 border-indigo-500/30"
                />
                <div className="absolute -bottom-3 -right-3 bg-indigo-600 text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-lg">
                  Open to Work
                </div>
              </div>
            </div>

            {/* Bio */}
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>
                Hey! I&apos;m Alex, a Full Stack Developer with 5+ years of experience building
                scalable web applications. I specialize in the JavaScript ecosystem — React,
                Next.js, Node.js — and I&apos;m passionate about creating products that are both
                technically excellent and delightful to use.
              </p>
              <p>
                When I&apos;m not coding, you&apos;ll find me contributing to open source,
                writing technical articles, or exploring the latest in web performance and
                developer tooling. I believe great software is built at the intersection of
                engineering rigor and creative problem-solving.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <div className="flex items-center gap-2 text-slate-400 text-sm">
                  <MapPin className="w-4 h-4 text-indigo-400" />
                  San Francisco, CA
                </div>
                <div className="flex items-center gap-2 text-slate-400 text-sm">
                  <Briefcase className="w-4 h-4 text-indigo-400" />
                  Open to Remote
                </div>
                <div className="flex items-center gap-2 text-slate-400 text-sm">
                  <Coffee className="w-4 h-4 text-indigo-400" />
                  Coffee Addict
                </div>
              </div>
            </div>

            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-indigo-500/20 hover:-translate-y-0.5"
            >
              <Download className="w-4 h-4" />
              Download Resume
            </a>
          </div>

          {/* Right: Stats + Timeline */}
          <div
            className={"transition-all duration-700 delay-300 " + (isInView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8")}
          >
            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="glass rounded-xl p-5 text-center hover:border-indigo-500/30 transition-all duration-200"
                >
                  <div className="text-3xl font-extrabold gradient-text mb-1">{stat.value}</div>
                  <div className="text-slate-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Timeline */}
            <div className="space-y-4">
              <h3 className="text-white font-semibold text-lg mb-4 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-indigo-400" />
                Experience & Education
              </h3>
              {timeline.map((item, i) => (
                <div key={i} className="relative pl-6 border-l-2 border-slate-700 hover:border-indigo-500/50 transition-colors pb-4 last:pb-0">
                  <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-indigo-600 border-2 border-slate-900" />
                  <div className="text-indigo-400 text-xs font-semibold mb-1">{item.year}</div>
                  <div className="text-white font-semibold text-sm">{item.role}</div>
                  <div className="text-slate-400 text-xs mb-1">{item.company}</div>
                  <div className="text-slate-500 text-xs leading-relaxed">{item.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
