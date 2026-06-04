export const dynamic = "force-dynamic";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Code2 as Github, CheckCircle, Calendar, Tag } from 'lucide-react';
import { projects } from "@/lib/data";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Project Not Found" };
  return {
    title: project.title + " — Alex Morgan",
    description: project.description,
  };
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const relatedProjects = projects
    .filter((p) => p.slug !== project.slug && p.category === project.category)
    .slice(0, 2);

  return (
    <main className="min-h-screen bg-slate-950 dark:bg-slate-950 pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back navigation */}
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 text-slate-400 hover:text-indigo-400 text-sm font-medium mb-10 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Projects
        </Link>

        {/* Hero image */}
        <div className="relative w-full h-64 sm:h-80 rounded-2xl overflow-hidden mb-8 bg-slate-800">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
          {project.featured && (
            <div className="absolute top-4 left-4 px-3 py-1.5 bg-indigo-600/90 text-white text-xs font-semibold rounded-lg backdrop-blur-sm">
              Featured Project
            </div>
          )}
        </div>

        {/* Title + links */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Tag className="w-4 h-4 text-indigo-400" />
              <span className="text-indigo-400 text-sm font-semibold capitalize">{project.category}</span>
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight">
              {project.title}
            </h1>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-slate-800 hover:bg-slate-700 border border-slate-700 hover:border-slate-600 text-white text-sm font-medium rounded-xl transition-all"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-medium rounded-xl transition-all shadow-lg shadow-indigo-500/20"
            >
              <ExternalLink className="w-4 h-4" />
              Live Demo
            </a>
          </div>
        </div>

        {/* Description */}
        <p className="text-slate-300 text-lg leading-relaxed mb-8 border-l-4 border-indigo-500/50 pl-5">
          {project.description}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {/* Long description */}
          <div className="md:col-span-2">
            <h2 className="text-white font-bold text-xl mb-4 flex items-center gap-2">
              <Calendar className="w-5 h-5 text-indigo-400" />
              Project Overview
            </h2>
            <p className="text-slate-400 leading-relaxed mb-6">
              {project.longDescription}
            </p>

            {/* Key highlights */}
            <h2 className="text-white font-bold text-xl mb-4 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-indigo-400" />
              Key Features
            </h2>
            <ul className="space-y-3">
              {project.highlights.map((highlight, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-300">
                  <div className="w-5 h-5 rounded-full bg-indigo-500/20 border border-indigo-500/30 flex items-center justify-center shrink-0 mt-0.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                  </div>
                  {highlight}
                </li>
              ))}
            </ul>
          </div>

          {/* Sidebar: tech stack + tags */}
          <div className="space-y-6">
            <div className="glass rounded-2xl p-5">
              <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
                Tech Stack
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-medium rounded-lg"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass rounded-2xl p-5">
              <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">
                Tags
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1.5 bg-slate-700/60 text-slate-300 text-xs font-medium rounded-lg"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="glass rounded-2xl p-5">
              <h3 className="text-white font-semibold mb-3 text-sm uppercase tracking-wider">
                Project Links
              </h3>
              <div className="space-y-2">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 text-sm transition-colors"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-indigo-400 hover:text-indigo-300 text-sm transition-colors"
                >
                  <Github className="w-4 h-4" />
                  Source Code
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Related projects */}
        {relatedProjects.length > 0 && (
          <div className="mt-12">
            <h2 className="text-white font-bold text-2xl mb-6">Related Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedProjects.map((related) => (
                <Link
                  key={related.slug}
                  href={`/projects/${related.slug}`}
                  className="glass rounded-2xl p-5 hover:border-indigo-500/30 transition-all duration-200 group"
                >
                  <div className="w-full h-32 rounded-xl overflow-hidden mb-4 bg-slate-800">
                    <img
                      src={related.image}
                      alt={related.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-white font-semibold mb-2 group-hover:text-indigo-400 transition-colors">
                    {related.title}
                  </h3>
                  <p className="text-slate-400 text-sm line-clamp-2">{related.description}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
