export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export const skills = {
  frontend: [
    { name: "React / Next.js", level: 95 },
    { name: "TypeScript", level: 90 },
    { name: "Tailwind CSS", level: 92 },
    { name: "Framer Motion", level: 80 },
    { name: "HTML & CSS", level: 97 },
  ],
  backend: [
    { name: "Node.js", level: 88 },
    { name: "PostgreSQL", level: 82 },
    { name: "REST APIs", level: 90 },
    { name: "GraphQL", level: 75 },
    { name: "Prisma ORM", level: 80 },
  ],
  tools: [
    { name: "Git & GitHub", level: 93 },
    { name: "Docker", level: 72 },
    { name: "Figma", level: 78 },
    { name: "Vercel / AWS", level: 85 },
    { name: "Jest & Testing", level: 80 },
  ],
};

export const skillBadges = [
  "React", "Next.js", "TypeScript", "JavaScript", "Node.js",
  "Tailwind CSS", "PostgreSQL", "GraphQL", "Prisma", "Docker",
  "Git", "Figma", "Vercel", "AWS", "Jest",
];

export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  category: string;
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
  techStack: string[];
  highlights: string[];
}

export const projects: Project[] = [
  {
    slug: "saas-dashboard",
    title: "SaaS Analytics Dashboard",
    description: "A full-stack analytics platform with real-time data visualization, user management, and subscription billing.",
    longDescription: "This SaaS analytics dashboard was built to help businesses track their key performance indicators in real time. The platform features interactive charts powered by Recharts, a multi-tenant architecture, Stripe subscription billing, and a role-based access control system. The backend is built with Node.js and PostgreSQL, while the frontend leverages Next.js 14 with server components for optimal performance.",
    image: "https://www.geckoboard.com/uploads/SaaS-dashboard-example.png",
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Stripe"],
    category: "fullstack",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
    techStack: ["Next.js 14", "TypeScript", "PostgreSQL", "Prisma", "Stripe", "Tailwind CSS", "Recharts"],
    highlights: [
      "Real-time data updates via WebSockets",
      "Multi-tenant architecture with row-level security",
      "Stripe subscription billing with usage-based pricing",
      "Role-based access control (Admin, Editor, Viewer)",
      "Exportable reports in CSV and PDF formats",
    ],
  },
  {
    slug: "ai-writing-tool",
    title: "AI Writing Assistant",
    description: "An AI-powered writing tool that helps users draft, edit, and improve content using OpenAI's GPT-4 API.",
    longDescription: "The AI Writing Assistant is a productivity tool that integrates OpenAI's GPT-4 to help writers create better content faster. Users can draft blog posts, emails, and marketing copy with AI suggestions, grammar corrections, and tone adjustments. The app features a rich text editor built with Tiptap, real-time collaboration, and a personal content library.",
    image: "https://static-web.grammarly.com/1e6ajr2k4140/5dm0V3qvfWzmAOg2Pneg0m/b37a354e643a566757f61fb6d900dcce/Frame_31612499__14_.png?w=1248",
    tags: ["React", "OpenAI", "Node.js", "MongoDB"],
    category: "ai",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
    techStack: ["React", "Node.js", "OpenAI API", "MongoDB", "Tiptap", "Socket.io"],
    highlights: [
      "GPT-4 powered content generation and editing",
      "Real-time collaborative editing with Socket.io",
      "Rich text editor with custom formatting options",
      "Personal content library with tagging and search",
      "Tone and style adjustment controls",
    ],
  },
  {
    slug: "ecommerce-platform",
    title: "E-Commerce Platform",
    description: "A modern e-commerce storefront with product management, cart, checkout, and order tracking.",
    longDescription: "A fully-featured e-commerce platform built for a fashion brand. The storefront includes a product catalog with advanced filtering, a persistent shopping cart, Stripe Checkout integration, and a customer order tracking portal. The admin dashboard allows inventory management, order fulfillment, and sales analytics. Built with Next.js for SEO-optimized product pages.",
    image: "https://imgproxy.divecdn.com/m5IwSFyXQvx7qS0ZG-svPVTfkIAx3-MJJdLQXuGcg0s/g:nowe:0:0/c:3200:1807/rs:fill:1200:675:1/Z3M6Ly9kaXZlc2l0ZS1zdG9yYWdlL2RpdmVpbWFnZS9TYWtzX0ZpZnRoX0F2ZW51ZV9OZXdfWW9ya19GbGFnc2hpcF9XaW5kb3dzX0ltYWdlXzcuanBn.webp",
    tags: ["Next.js", "Stripe", "Prisma", "Tailwind CSS"],
    category: "fullstack",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
    techStack: ["Next.js 14", "TypeScript", "Prisma", "PostgreSQL", "Stripe", "Cloudinary"],
    highlights: [
      "SEO-optimized product pages with dynamic metadata",
      "Advanced product filtering and search",
      "Stripe Checkout with webhook order fulfillment",
      "Customer order tracking portal",
      "Admin dashboard with inventory management",
    ],
  },
  {
    slug: "devops-monitor",
    title: "DevOps Monitoring Tool",
    description: "A lightweight server monitoring dashboard that tracks uptime, CPU, memory, and deployment status.",
    longDescription: "A DevOps monitoring tool designed for small teams who need visibility into their infrastructure without the complexity of enterprise solutions. The dashboard tracks server uptime, CPU and memory usage, deployment history, and sends alerts via Slack and email when thresholds are exceeded. Built with a Node.js agent that reports metrics to a central Next.js dashboard.",
    image: "https://learn.microsoft.com/en-us/azure/devops/report/dashboards/media/dashboard-focus/my-work-focus.png?view=azure-devops",
    tags: ["Node.js", "Docker", "PostgreSQL", "WebSockets"],
    category: "devops",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false,
    techStack: ["Next.js", "Node.js", "Docker", "PostgreSQL", "WebSockets", "Slack API"],
    highlights: [
      "Real-time server metrics via WebSockets",
      "Slack and email alerting for threshold breaches",
      "Deployment history and rollback tracking",
      "Docker container health monitoring",
      "Historical data charts with configurable time ranges",
    ],
  },
  {
    slug: "social-app",
    title: "Social Networking App",
    description: "A community platform with posts, follows, real-time chat, and a personalized content feed.",
    longDescription: "A social networking application built for a niche community of developers. Features include user profiles, post creation with markdown support, a follow/follower system, real-time direct messaging, and an algorithmic content feed. The app uses Next.js with server-side rendering for fast initial loads and Supabase for the backend.",
    image: "https://www.worldwebtechnology.com/wp-content/uploads/2018/12/Social-Network-Development-Platforms.webp",
    tags: ["Next.js", "Supabase", "TypeScript", "Tailwind CSS"],
    category: "fullstack",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false,
    techStack: ["Next.js 14", "Supabase", "TypeScript", "Tailwind CSS", "Zustand"],
    highlights: [
      "Real-time direct messaging with Supabase Realtime",
      "Markdown-supported post creation",
      "Follow/follower system with activity feed",
      "User profiles with customizable avatars",
      "Algorithmic content feed based on interests",
    ],
  },
  {
    slug: "design-system",
    title: "Component Design System",
    description: "A comprehensive React component library with 40+ components, Storybook docs, and full TypeScript support.",
    longDescription: "A production-ready React component library built for design consistency across multiple projects. The library includes 40+ accessible components following WAI-ARIA guidelines, a theming system with CSS variables, Storybook documentation, and automated visual regression testing. Published to npm and used across 5 internal projects.",
    image: "https://miro.medium.com/v2/resize:fit:2000/0*uPoEwf1ACjDk0BDF.png",
    tags: ["React", "TypeScript", "Storybook", "Rollup"],
    category: "frontend",
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: false,
    techStack: ["React", "TypeScript", "Storybook", "Rollup", "CSS Variables", "Jest"],
    highlights: [
      "40+ accessible components following WAI-ARIA",
      "Theming system with CSS custom properties",
      "Storybook documentation with interactive examples",
      "Automated visual regression testing with Chromatic",
      "Published to npm with full TypeScript types",
    ],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);

export const categories = [
  { value: "all", label: "All Projects" },
  { value: "fullstack", label: "Full Stack" },
  { value: "frontend", label: "Frontend" },
  { value: "ai", label: "AI / ML" },
  { value: "devops", label: "DevOps" },
];

export const socialLinks = [
  { label: "GitHub", href: "https://github.com", icon: "Github" },
  { label: "LinkedIn", href: "https://linkedin.com", icon: "Linkedin" },
  { label: "Twitter", href: "https://twitter.com", icon: "Twitter" },
  { label: "Email", href: "mailto:alex@example.com", icon: "Mail" },
];
