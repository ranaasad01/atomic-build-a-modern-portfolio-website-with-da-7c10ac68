"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { useInView } from "@/hooks/useInView";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { projects, categories } from "@/lib/data";
import { ArrowRight } from 'lucide-react';

export function Projects() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { threshold: 0.05 });
  const [activeCategory, setActiveCategory] = useState("all");

  const filtered =
    activeCategory === "all"
      ? projects.slice(0, 6)
      : projects.filter((p) => p.category === activeCategory).slice(0, 6);

  return (
    <section id="projects" className="py-24 bg-slate-900 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          ref={ref}
          className={"text-center mb-12 transition-all duration-700 " + (isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8")}
        >
          <span className="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-3 block">
            Portfolio
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Featured{" "}
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            A selection of projects I&apos;ve built — from SaaS platforms to AI tools and
            open-source libraries.
          </p>
        </div>

        {/* Filter tabs */}
        <div
          className={"flex flex-wrap justify-center gap-2 mb-10 transition-all duration-700 delay-100 " + (isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8")}
        >
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={
                "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 " +
                (activeCategory === cat.value
                  ? "bg-indigo-600 text-white shadow-lg shadow-indigo-500/20"
                  : "bg-slate-800/60 text-slate-400 hover:text-white hover:bg-slate-700/60 border border-slate-700/50")
              }
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects grid */}
        <div
          className={"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 transition-all duration-700 delay-200 " + (isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8")}
        >
          {filtered.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>

        {/* View all link */}
        <div className="text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-xl border border-slate-700 hover:border-indigo-500/50 transition-all duration-200 hover:-translate-y-0.5"
          >
            View All Projects
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
