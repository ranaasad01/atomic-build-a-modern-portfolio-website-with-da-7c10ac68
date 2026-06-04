"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Search } from 'lucide-react';
import { projects, categories } from "@/lib/data";
import { ProjectCard } from "@/components/ui/ProjectCard";

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = projects.filter((p) => {
    const matchesCategory = activeCategory === "all" || p.category === activeCategory;
    const matchesSearch =
      searchQuery === "" ||
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <main className="min-h-screen bg-slate-950 dark:bg-slate-950 pt-24 pb-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-indigo-400 text-sm font-medium mb-10 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </Link>

        {/* Header */}
        <div className="mb-12">
          <span className="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-3 block">
            Portfolio
          </span>
          <h1 className="text-5xl sm:text-6xl font-extrabold text-white mb-4">
            All{" "}
            <span className="gradient-text">Projects</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl">
            Every project I&apos;ve built — from full-stack SaaS platforms to open-source
            libraries and AI-powered tools. {projects.length} projects and counting.
          </p>
        </div>

        {/* Search + Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-10">
          {/* Search */}
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search projects..."
              className="w-full pl-10 pr-4 py-2.5 bg-slate-800/60 border border-slate-700/50 focus:border-indigo-500/50 rounded-xl text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/30 transition-all"
            />
          </div>

          {/* Category filters */}
          <div className="flex flex-wrap gap-2">
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
        </div>

        {/* Results count */}
        <div className="text-slate-500 text-sm mb-6">
          Showing{" "}
          <span className="text-indigo-400 font-semibold">{filtered.length}</span>{" "}
          {filtered.length === 1 ? "project" : "projects"}
          {activeCategory !== "all" && (
            <span>
              {" "}in{" "}
              <span className="text-white">
                {categories.find((c) => c.value === activeCategory)?.label}
              </span>
            </span>
          )}
          {searchQuery && (
            <span>
              {" "}matching{" "}
              <span className="text-white">&quot;{searchQuery}&quot;</span>
            </span>
          )}
        </div>

        {/* Projects grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-white font-semibold text-xl mb-2">No projects found</h3>
            <p className="text-slate-400 text-sm">
              Try adjusting your search or filter criteria.
            </p>
            <button
              onClick={() => { setSearchQuery(""); setActiveCategory("all"); }}
              className="mt-4 px-4 py-2 text-indigo-400 hover:text-indigo-300 text-sm font-medium transition-colors"
            >
              Clear filters
            </button>
          </div>
        )}

        {/* CTA */}
        <div className="mt-20 text-center p-10 glass rounded-2xl border border-indigo-500/20">
          <h2 className="text-2xl font-bold text-white mb-3">
            Have a project in mind?
          </h2>
          <p className="text-slate-400 mb-6 max-w-md mx-auto">
            I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg shadow-indigo-500/20 hover:-translate-y-0.5"
          >
            Let&apos;s Talk
          </Link>
        </div>
      </div>
    </main>
  );
}
