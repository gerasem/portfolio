import {
  Bot,
  Boxes,
  Braces,
  CheckCircle2,
  Code2,
  Container,
  Cpu,
  Database,
  Figma,
  FileCode2,
  GitBranch,
  Globe,
  Layers,
  LayoutGrid,
  Search,
  Server,
  Sparkles,
  Wind,
} from 'lucide-react';

interface TechIconProps {
  name: string;
  className?: string;
}

export function TechIcon({ name, className = 'h-4 w-4' }: TechIconProps) {
  const key = name.toLowerCase();

  // Vue / Nuxt
  if (key.includes('vue') && !key.includes('nuxt')) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
        <path d="M2 4L12 21L22 4H18L12 14.5L6 4H2Z" fill="#41B883" />
        <path d="M6 4L12 14.5L18 4H14.5L12 8.3L9.5 4H6Z" fill="#34495E" />
      </svg>
    );
  }

  if (key.includes('nuxt')) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
        <path
          d="M10.2 5.2L3 18.2H17.4L10.2 5.2Z"
          stroke="#00DC82"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          d="M14.8 8.4L9.2 18.2H21L14.8 8.4Z"
          stroke="#00C16A"
          strokeWidth="2"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  // TypeScript
  if (key.includes('typescript')) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="4" fill="#3178C6" />
        <path
          d="M13 11.2H7.2V12.8H9.3V18.5H11.1V12.8H13V11.2ZM14.2 17.8C14.7 18.3 15.5 18.6 16.5 18.6C18.2 18.6 19.2 17.7 19.2 16.3C19.2 15.1 18.4 14.5 16.9 14.1C15.9 13.8 15.6 13.6 15.6 13.1C15.6 12.7 16 12.4 16.7 12.4C17.3 12.4 17.9 12.6 18.4 13L19.1 11.7C18.5 11.2 17.6 11 16.7 11C15 11 13.9 11.9 13.9 13.2C13.9 14.4 14.7 15 16.2 15.4C17.2 15.7 17.5 15.9 17.5 16.4C17.5 16.9 17.1 17.2 16.4 17.2C15.6 17.2 14.9 16.9 14.4 16.4L14.2 17.8Z"
          fill="white"
        />
      </svg>
    );
  }

  // JavaScript
  if (key.includes('javascript')) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="4" fill="#F7DF1E" />
        <path
          d="M11.6 16.5C11.6 17.8 10.8 18.5 9.6 18.5C8.9 18.5 8.3 18.2 7.9 17.7L9 16.8C9.2 17.1 9.5 17.2 9.7 17.2C10.1 17.2 10.3 17 10.3 16.4V11.5H11.6V16.5ZM13.3 17.5C13.9 18.2 14.8 18.5 15.9 18.5C17.6 18.5 18.6 17.6 18.6 16.3C18.6 15.1 17.9 14.5 16.3 14C15.4 13.7 15.1 13.5 15.1 13.1C15.1 12.7 15.5 12.4 16.1 12.4C16.7 12.4 17.2 12.7 17.6 13.1L18.4 12C17.9 11.4 17 11.1 16 11.1C14.5 11.1 13.5 12 13.5 13.2C13.5 14.4 14.2 15 15.7 15.4C16.6 15.7 17 15.9 17 16.4C17 16.9 16.6 17.2 15.9 17.2C15.1 17.2 14.5 16.9 14 16.3L13.3 17.5Z"
          fill="#18181B"
        />
      </svg>
    );
  }

  // React
  if (key.includes('react')) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
        <circle cx="12" cy="12" r="2.1" fill="#0EA5E9" />
        <ellipse cx="12" cy="12" rx="9.5" ry="3.8" stroke="#0EA5E9" strokeWidth="1.5" />
        <ellipse
          cx="12"
          cy="12"
          rx="9.5"
          ry="3.8"
          transform="rotate(60 12 12)"
          stroke="#0EA5E9"
          strokeWidth="1.5"
        />
        <ellipse
          cx="12"
          cy="12"
          rx="9.5"
          ry="3.8"
          transform="rotate(120 12 12)"
          stroke="#0EA5E9"
          strokeWidth="1.5"
        />
      </svg>
    );
  }

  // Payload CMS
  if (key.includes('payload')) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
        <path d="M12 2.5L20 7.2V16.8L12 21.5L4 16.8V7.2L12 2.5Z" fill="#0F172A" />
        <path d="M12 6.5L16.5 9.1V14.4L12 17L7.5 14.4V9.1L12 6.5Z" fill="white" />
        <path d="M12 9.5L14.2 10.8V13.4L12 14.7L9.8 13.4V10.8L12 9.5Z" fill="#2563EB" />
      </svg>
    );
  }

  // Astro
  if (key.includes('astro')) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
        <path
          d="M8.5 17.5L12 4L15.5 17.5C14.2 16.8 13.1 16.5 12 16.5C10.9 16.5 9.8 16.8 8.5 17.5Z"
          fill="#1E293B"
        />
        <path
          d="M9.5 18.2C10.1 19.6 11.1 20.5 12 20.5C12.9 20.5 13.9 19.6 14.5 18.2C13.6 17.6 12.8 17.4 12 17.4C11.2 17.4 10.4 17.6 9.5 18.2Z"
          fill="#FF5D01"
        />
      </svg>
    );
  }

  // Svelte
  if (key.includes('svelte')) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
        <path
          d="M17.8 5.2C16.2 3 13.1 2.4 10.8 3.9L6.8 6.4C5.2 7.4 4.4 9.2 4.8 11C5 11.8 5.4 12.4 6 12.9C5.5 13.7 5.4 14.8 5.7 15.8C6.3 17.9 8.4 19.3 10.6 19.1L14.6 18.5C16.7 18.1 18.2 16.2 18.1 14C18 13.1 17.6 12.3 17 11.7C17.6 10.8 17.9 9.7 17.7 8.6C17.6 7.4 18.4 6 17.8 5.2Z"
          fill="#FF3E00"
        />
        <path
          d="M10.4 14.5L14.3 12L12.7 10.8L8.9 13.3C8.3 13.7 8.2 14.4 8.6 14.9C9 15.4 9.8 15 10.4 14.5Z"
          fill="white"
        />
      </svg>
    );
  }

  // Tailwind CSS
  if (key.includes('tailwind')) {
    return <Wind className={`${className} text-[#06B6D4]`} />;
  }

  // Claude Code / Codex / AI
  if (key.includes('claude')) {
    return <Sparkles className={`${className} text-[#D97706]`} />;
  }
  if (key.includes('codex')) {
    return <Bot className={`${className} text-[#2563EB]`} />;
  }

  // Laravel / PHP / WordPress
  if (key.includes('laravel')) {
    return <Boxes className={`${className} text-[#EF4444]`} />;
  }
  if (key.includes('wordpress')) {
    return <Globe className={`${className} text-[#21759B]`} />;
  }
  if (key.includes('php') || key.includes('cakephp')) {
    return <FileCode2 className={`${className} text-[#6366F1]`} />;
  }

  // Node.js / Backend / DB
  if (key.includes('node')) {
    return <Server className={`${className} text-[#16A34A]`} />;
  }
  if (key.includes('mysql') || key.includes('sql')) {
    return <Database className={`${className} text-[#0284C7]`} />;
  }
  if (key.includes('rest') || key.includes('graphql')) {
    return <Braces className={`${className} text-[#7C3AED]`} />;
  }

  // Testing / DevOps / Design / SEO
  if (key.includes('vitest') || key.includes('test')) {
    return <CheckCircle2 className={`${className} text-[#16A34A]`} />;
  }
  if (key.includes('docker')) {
    return <Container className={`${className} text-[#0284C7]`} />;
  }
  if (key.includes('git') || key.includes('ci/cd')) {
    return <GitBranch className={`${className} text-[#EA580C]`} />;
  }
  if (key.includes('vercel') || key.includes('ssg')) {
    return <Layers className={`${className} text-[#0F172A]`} />;
  }
  if (key.includes('figma') || key.includes('ux')) {
    return <Figma className={`${className} text-[#EC4899]`} />;
  }
  if (key.includes('seo') || key.includes('wcag')) {
    return <Search className={`${className} text-[#2563EB]`} />;
  }
  if (key.includes('java') || key.includes('spring')) {
    return <Cpu className={`${className} text-[#DC2626]`} />;
  }
  if (key.includes('html') || key.includes('css')) {
    return <LayoutGrid className={`${className} text-[#2563EB]`} />;
  }

  return <Code2 className={`${className} text-[#475569]`} />;
}
