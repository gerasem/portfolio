import {
  Bot,
  Braces,
  Gauge,
  GitBranch,
  Layers,
  LayoutTemplate,
  Search,
  Sparkles,
  Wrench,
} from 'lucide-react';

interface TechIconProps {
  name: string;
  className?: string;
}

export function TechIcon({ name, className = 'h-4 w-4' }: TechIconProps) {
  const key = name.toLowerCase();

  // Vue (including Vue 2, Vue 3, Vuex)
  if (key.includes('vue') && !key.includes('nuxt')) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
        <path d="M2 4L12 21L22 4H18L12 14.5L6 4H2Z" fill="#41B883" />
        <path d="M6 4L12 14.5L18 4H14.5L12 8.3L9.5 4H6Z" fill="#34495E" />
      </svg>
    );
  }

  // Nuxt
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
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
        <path
          d="M12 6C8.8 6 6.8 7.6 6 10.8C7.2 9.2 8.6 8.6 10.2 9C11.1 9.2 11.8 9.9 12.5 10.6C13.7 11.8 15.1 13.2 18 13.2C21.2 13.2 23.2 11.6 24 8.4C22.8 10 21.4 10.6 19.8 10.2C18.9 10 18.2 9.3 17.5 8.6C16.3 7.4 14.9 6 12 6ZM6 13.2C2.8 13.2 0.8 14.8 0 18C1.2 16.4 2.6 15.8 4.2 16.2C5.1 16.4 5.8 17.1 6.5 17.8C7.7 19 9.1 20.4 12 20.4C15.2 20.4 17.2 18.8 18 15.6C16.8 17.2 15.4 17.8 13.8 17.4C12.9 17.2 12.2 16.5 11.5 15.8C10.3 14.6 8.9 13.2 6 13.2Z"
          fill="#06B6D4"
        />
      </svg>
    );
  }

  // WordPress
  if (key.includes('wordpress')) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
        <circle cx="12" cy="12" r="10" fill="#21759B" />
        <path
          d="M5.4 8.8H7.5L9.8 16L11.7 10.5L10.8 8.8H12.9L15.1 16L17.2 9.6C17.3 9.1 17 8.8 16.5 8.8H18.6L15.7 17.8H14.2L12.1 11.8L10 17.8H8.5L5.4 8.8Z"
          fill="white"
        />
      </svg>
    );
  }

  // CakePHP (check before PHP)
  if (key.includes('cakephp')) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
        <path d="M4 9C4 6.8 7.6 5 12 5C16.4 5 20 6.8 20 9V12C20 14.2 16.4 16 12 16V12L4 9Z" fill="#D33C43" />
        <path d="M4 13.5C4 15.7 7.6 17.5 12 17.5V20.5C7.6 20.5 4 18.7 4 16.5V13.5Z" fill="#B91C1C" />
        <path d="M20 13.5C20 15.7 16.4 17.5 12 17.5V20.5C16.4 20.5 20 18.7 20 16.5V13.5Z" fill="#EF4444" />
      </svg>
    );
  }

  // PHP
  if (key.includes('php')) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
        <ellipse cx="12" cy="12" rx="11" ry="6.8" fill="#777BB4" />
        <path
          d="M5.2 14.6L6.2 9.4H8.2C9.4 9.4 9.9 10 9.7 11.1C9.5 12.2 8.7 12.8 7.5 12.8H6.6L6.3 14.6H5.2ZM6.8 11.9H7.4C8.1 11.9 8.5 11.6 8.6 11.1C8.7 10.6 8.4 10.3 7.8 10.3H7.1L6.8 11.9ZM10.2 14.6L11.2 8.4H12.3L12 10.1H12.9C13.9 10.1 14.4 10.6 14.2 11.7L13.7 14.6H12.6L13.1 11.9C13.2 11.3 13 11 12.4 11H11.8L11.3 14.6H10.2ZM14.8 14.6L15.8 9.4H17.8C19 9.4 19.5 10 19.3 11.1C19.1 12.2 18.3 12.8 17.1 12.8H16.2L15.9 14.6H14.8ZM16.4 11.9H17C17.7 11.9 18.1 11.6 18.2 11.1C18.3 10.6 18 10.3 17.4 10.3H16.7L16.4 11.9Z"
          fill="white"
        />
      </svg>
    );
  }

  // Laravel
  if (key.includes('laravel')) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
        <path
          d="M3.5 6.5L7.5 4.2L11.5 6.5V11L7.5 13.3L3.5 11V6.5Z"
          stroke="#FF2D20"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path
          d="M11.5 11L15.5 8.7L19.5 11V15.5L15.5 17.8L11.5 15.5V11Z"
          stroke="#FF2D20"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path
          d="M7.5 13.3L11.5 15.5L15.5 13.2M7.5 8.8L11.5 11"
          stroke="#FF2D20"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  // HTML (including HTML / CSS / SCSS)
  if (key.includes('html')) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
        <path d="M4 3H20L18.5 19.2L12 21L5.5 19.2L4 3Z" fill="#E34F26" />
        <path d="M12 4.4V19.6L17.3 18.1L18.5 4.4H12Z" fill="#EF652A" />
        <path
          d="M7.6 7.4H16.4L16.2 9.4H9.8L10 11.4H16L15.5 16.5L12 17.5L8.5 16.5L8.3 14H10.3L10.4 15L12 15.4L13.6 15L13.8 13.3H8.1L7.6 7.4Z"
          fill="white"
        />
      </svg>
    );
  }

  // CSS
  if (key.includes('css')) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
        <path d="M4 3H20L18.5 19.2L12 21L5.5 19.2L4 3Z" fill="#1572B6" />
        <path d="M12 4.4V19.6L17.3 18.1L18.5 4.4H12Z" fill="#33A9DC" />
        <path
          d="M7.6 7.4H16.4L16.1 9.4H9.9L10.1 11.4H15.9L15.4 16.5L12 17.5L8.6 16.5L8.4 14.1H10.4L10.5 15L12 15.4L13.5 15L13.7 13.3H8.2L8 11.4H13.9L14.1 9.4H7.8L7.6 7.4Z"
          fill="white"
        />
      </svg>
    );
  }

  // Node.js
  if (key.includes('node')) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
        <path d="M12 2.5L20.5 7.3V16.7L12 21.5L3.5 16.7V7.3L12 2.5Z" fill="#339933" />
        <path
          d="M12 6.8L16.5 9.4V14.6L12 17.2L7.5 14.6V9.4L12 6.8Z"
          fill="white"
          fillOpacity="0.22"
        />
        <circle cx="12" cy="12" r="2.6" fill="white" />
      </svg>
    );
  }

  // Docker
  if (key.includes('docker')) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
        <rect x="6" y="7" width="2.5" height="2.3" rx="0.4" fill="#2496ED" />
        <rect x="9.2" y="7" width="2.5" height="2.3" rx="0.4" fill="#2496ED" />
        <rect x="12.4" y="7" width="2.5" height="2.3" rx="0.4" fill="#2496ED" />
        <rect x="9.2" y="4" width="2.5" height="2.3" rx="0.4" fill="#2496ED" />
        <rect x="12.4" y="4" width="2.5" height="2.3" rx="0.4" fill="#2496ED" />
        <path
          d="M2.5 11.5C2.5 16 5.5 19.5 11 19.5C16.8 19.5 20.3 16 21.5 11.8C20.5 11.4 19.2 11.5 18.4 12.1C18.5 11.1 18.2 10.1 17.5 9.4C16.7 10.2 16.4 11.2 16.6 12.2H3.5C2.9 12.2 2.5 11.9 2.5 11.5Z"
          fill="#2496ED"
        />
      </svg>
    );
  }

  // MySQL / SQL
  if (key.includes('mysql') || key.includes('sql')) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
        <ellipse cx="12" cy="6.5" rx="7.5" ry="3" fill="#00758F" />
        <path d="M4.5 6.5V11.8C4.5 13.5 7.9 14.8 12 14.8C16.1 14.8 19.5 13.5 19.5 11.8V6.5C19.5 8.2 16.1 9.5 12 9.5C7.9 9.5 4.5 8.2 4.5 6.5Z" fill="#0284C7" />
        <path d="M4.5 12.2V17.5C4.5 19.2 7.9 20.5 12 20.5C16.1 20.5 19.5 19.2 19.5 17.5V12.2C19.5 13.9 16.1 15.2 12 15.2C7.9 15.2 4.5 13.9 4.5 12.2Z" fill="#00758F" />
      </svg>
    );
  }

  // Vitest
  if (key.includes('vitest') || key.includes('test')) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
        <path d="M3 5.5L12 20.5L21 5.5H16.2L12 12.8L7.8 5.5H3Z" fill="#6E9F18" />
        <path d="M12.2 4.5L9.8 10.5H12.5L11.2 15.5L15.6 9H12.8L14.6 4.5H12.2Z" fill="#FCC72B" />
      </svg>
    );
  }

  // Vercel
  if (key.includes('vercel')) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
        <path d="M12 4L21.5 19.5H2.5L12 4Z" fill="#0F172A" />
      </svg>
    );
  }

  // Figma
  if (key.includes('figma') || key.includes('ux')) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
        <path d="M8.5 3H12V9H8.5C6.8 9 5.5 7.7 5.5 6C5.5 4.3 6.8 3 8.5 3Z" fill="#F24E1E" />
        <path d="M12 3H15.5C17.2 3 18.5 4.3 18.5 6C18.5 7.7 17.2 9 15.5 9H12V3Z" fill="#FF7262" />
        <path d="M8.5 9H12V15H8.5C6.8 15 5.5 13.7 5.5 12C5.5 10.3 6.8 9 8.5 9Z" fill="#A259FF" />
        <circle cx="15.2" cy="12" r="3" fill="#1ABCFE" />
        <path d="M8.5 15H12V18C12 19.7 10.7 21 9 21C7.1 21 5.5 19.7 5.5 18C5.5 16.3 6.8 15 8.5 15Z" fill="#0ACF83" />
      </svg>
    );
  }

  // Java & Spring Boot
  if (key.includes('spring')) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
        <circle cx="12" cy="12" r="9.5" fill="#6DB33F" />
        <path
          d="M16.5 7.5C13.2 8.2 9.4 10.6 8.3 14.5C9.8 14.9 11.7 14.8 13.4 13.6C15.2 12.3 16.1 10 16.5 7.5Z"
          fill="white"
        />
      </svg>
    );
  }
  if (key.includes('java')) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
        <path d="M7 11H16V14.5C16 16.7 14.2 18.5 11.5 18.5C8.8 18.5 7 16.7 7 14.5V11Z" fill="#5382A1" />
        <path d="M16 12H17.5C18.6 12 19.5 12.9 19.5 14C19.5 15.1 18.6 16 17.5 16H16" stroke="#5382A1" strokeWidth="1.6" />
        <path d="M9.5 8.5C9.5 7.2 11 6.8 10.8 5.2M13 8.5C13 7.2 14.5 6.8 14.3 5.2" stroke="#EA2D2E" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M6 20H17.5" stroke="#EA2D2E" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    );
  }

  // Ember.js Migration
  if (key.includes('ember')) {
    return (
      <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
        <circle cx="12" cy="12" r="9.5" fill="#E04E39" />
        <path
          d="M14.8 15.2C13.8 16.1 12.6 16.5 11.4 16.4C9.5 16.2 8.2 14.7 8.4 12.7C8.6 10.8 10.2 9.4 12.1 9.5C13.7 9.6 14.8 10.7 14.6 12C14.4 13.1 12.9 13.6 10.4 13.2"
          stroke="white"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  // Claude Code / Codex / AI
  if (key.includes('claude')) {
    return <Sparkles className={`${className} text-[#D97706]`} />;
  }
  if (key.includes('codex')) {
    return <Bot className={`${className} text-[#2563EB]`} />;
  }

  // Git / CI/CD
  if (key.includes('git') || key.includes('ci/cd')) {
    return <GitBranch className={`${className} text-[#EA580C]`} />;
  }

  // REST / GraphQL
  if (key.includes('rest') || key.includes('graphql')) {
    return <Braces className={`${className} text-[#7C3AED]`} />;
  }

  // SSG / CMS
  if (key.includes('ssg')) {
    return <Layers className={`${className} text-[#0F172A]`} />;
  }
  if (key.includes('cms')) {
    return <LayoutTemplate className={`${className} text-[#2563EB]`} />;
  }

  // SEO / WCAG
  if (key.includes('seo') || key.includes('wcag')) {
    return <Search className={`${className} text-[#2563EB]`} />;
  }

  // Code Standards / Refactoring / High-Traffic UI
  if (key.includes('high-traffic') || key.includes('performance')) {
    return <Gauge className={`${className} text-[#2563EB]`} />;
  }

  return <Wrench className={`${className} text-[#475569]`} />;
}
