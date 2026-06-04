"use client";

import Link from "next/link";
import { ExternalLink, Code2 as Github, ArrowRight } from 'lucide-react';
import { Project } from "@/lib/data";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <div
      className="group glass rounded-2xl overflow-hidden hover:border-indigo-500/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-glow flex flex-col"
      style={{ animationDelay: index * 100 + "ms" }}
    >
      {/* Image */}
      <div className="relative h-48 overflow-hidden bg-slate-800">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='200' viewBox='0 0 400 200'%3E%3Crect width='400' height='200' fill='%231e293b'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='%236366f1' font-size='14' font-family='sans-serif'%3EProject Preview%3C/text%3E%3C/svg%3E";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent" />
        {project.featured && (
          <div className="absolute top-3 left-3 px-2 py-1 bg-indigo-600/90 text-white text-xs font-semibold rounded-md backdrop-blur-sm">
            Featured
          </div>
        )}
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-indigo-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-start justify-between gap-2 mb-3">
          <h3 className="text-white font-bold text-lg leading-tight group-hover:text-indigo-300 transition-colors">
            {project.title}
          </h3>
          <div className="flex items-center gap-2 shrink-0">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-700 transition-all"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-700 transition-all"
              aria-label="Live Demo"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        <p className="text-slate-400 text-sm leading-relaxed mb-4 flex-1">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-medium rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* View details link */}
        <Link
          href={"/projects/" + project.slug}
          className="inline-flex items-center gap-1.5 text-indigo-400 hover:text-indigo-300 text-sm font-medium transition-colors group/link"
        >
          View Details
          <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
