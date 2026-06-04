"use client";

import { useRef } from "react";
import { useInView } from "@/hooks/useInView";
import { skills, skillBadges } from "@/lib/data";

function SkillBar({ name, level, delay }: { name: string; level: number; delay: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { threshold: 0.3 });

  return (
    <div ref={ref} className="mb-4">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-slate-300 text-sm font-medium">{name}</span>
        <span className="text-indigo-400 text-xs font-semibold">{level}%</span>
      </div>
      <div className="h-2 bg-slate-700/60 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-indigo-600 to-violet-500 rounded-full transition-all duration-1000 ease-out"
          style={{
            width: isInView ? level + "%" : "0%",
            transitionDelay: delay + "ms",
          }}
        />
      </div>
    </div>
  );
}

const categoryConfig = [
  { key: "frontend" as const, label: "Frontend", icon: "🎨" },
  { key: "backend" as const, label: "Backend", icon: "⚙️" },
  { key: "tools" as const, label: "Tools & DevOps", icon: "🛠️" },
];

export function Skills() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { threshold: 0.1 });

  return (
    <section id="skills" className="py-24 bg-slate-950 dark:bg-slate-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          ref={ref}
          className={"text-center mb-16 transition-all duration-700 " + (isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8")}
        >
          <span className="text-indigo-400 text-sm font-semibold tracking-widest uppercase mb-3 block">
            Skills
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            My{" "}
            <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Technologies I work with daily to build modern, scalable web applications.
          </p>
        </div>

        {/* Skill bars grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {categoryConfig.map((cat, catIdx) => (
            <div
              key={cat.key}
              className={"glass rounded-2xl p-6 transition-all duration-700 " + (isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8")}
              style={{ transitionDelay: catIdx * 150 + "ms" }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl">{cat.icon}</span>
                <h3 className="text-white font-semibold text-lg">{cat.label}</h3>
              </div>
              {skills[cat.key].map((skill, i) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  delay={i * 100 + catIdx * 200}
                />
              ))}
            </div>
          ))}
        </div>

        {/* Tech badges */}
        <div
          className={"transition-all duration-700 delay-500 " + (isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8")}
        >
          <h3 className="text-center text-slate-400 text-sm font-semibold tracking-widest uppercase mb-6">
            Also Familiar With
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {skillBadges.map((badge) => (
              <span
                key={badge}
                className="px-4 py-2 rounded-full bg-slate-800/60 border border-slate-700/50 hover:border-indigo-500/50 hover:bg-slate-700/60 text-slate-300 hover:text-white text-sm font-medium transition-all duration-200 cursor-default"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
