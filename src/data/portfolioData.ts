export type Locale = 'de' | 'en';

export type RoleFilter = 'all' | 'company' | 'freelance';

export type StackFilter =
  | 'all'
  | 'Vue / Nuxt'
  | 'TypeScript'
  | 'Payload CMS'
  | 'React / Laravel'
  | 'Astro / Svelte'
  | 'WordPress / PHP';

export interface LocalizedText {
  de: string;
  en: string;
}

export interface PipelineStage {
  id: string;
  index: string;
  label: LocalizedText;
  subtitle: LocalizedText;
  tools: string[];
  aiHighlight?: string;
  engineeringNote: LocalizedText;
  outputArtifact: LocalizedText;
}

export interface ProjectItem {
  id: string;
  period: string;
  company: string;
  location: LocalizedText;
  roleCategory: 'company' | 'freelance';
  roleTitle: LocalizedText;
  title: LocalizedText;
  summary: LocalizedText;
  architectureNotes: {
    de: string[];
    en: string[];
  };
  stack: string[];
  stackFilters: Exclude<StackFilter, 'all'>[];
  highlightMetric: LocalizedText;
  link?: string;
  linkLabel?: LocalizedText;
}

export interface TimelineEntry {
  id: string;
  period: string;
  organization: string;
  location: LocalizedText;
  role: LocalizedText;
  category: 'experience' | 'education';
  highlights: {
    de: string[];
    en: string[];
  };
  stack?: string[];
}

export interface ServiceItem {
  id: string;
  index: string;
  title: LocalizedText;
  summary: LocalizedText;
  deliverables: {
    de: string[];
    en: string[];
  };
  typicalStack: string;
}

export const PROFILE = {
  name: 'Dmitri Laptev',
  email: '592050@gmx.de',
  phone: '+49 159 0707 3013',
  phoneHref: 'tel:+4915907073013',
  whatsappHref: 'https://wa.me/4915907073013',
  location: 'D-83395 Freilassing, Bayern, Deutschland',
  githubUrl: 'https://github.com/gerasem',
  githubHandle: 'github.com/gerasem',
  linkedinUrl: 'https://www.linkedin.com/in/dmitri-laptev',
  linkedinHandle: 'linkedin.com/in/dmitri-laptev',
  languages: {
    de: 'Deutsch (C1) · Englisch (B1) · Russisch (Muttersprache)',
    en: 'German (C1) · English (B1) · Russian (Native)',
  },
  workPermit: {
    de: 'Deutsche Staatsangehörigkeit · Uneingeschränkte Arbeitsberechtigung',
    en: 'German Citizenship · Unrestricted EU/DE Work Permit',
  },
};

export const UI_COPY = {
  de: {
    nav: {
      pipeline: 'Workflow',
      projects: 'Projekte',
      timeline: 'Erfahrung',
      services: 'Leistungen',
      works: 'Arbeiten',
      contactCta: 'Kontakt',
    },
    hero: {
      kicker: 'Frontend & Full-Stack Webentwickler · Freilassing',
      headline: 'Strukturierte Web-Architekturen, Headless-Systeme und performante Frontends.',
      lead: 'Über zehn Jahre Praxiserfahrung in der Entwicklung, Modernisierung und Skalierung produktiver Webanwendungen — von Vue/Nuxt und TypeScript über Payload CMS bis zu KI-gestützten Engineering-Workflows.',
      primaryAction: 'E-Mail schreiben',
      copyEmail: 'E-Mail kopieren',
      copiedEmail: 'Kopiert',
      quickLinksLabel: 'Profile & Direktkontakt',
    },
    metricsStrip: [
      { value: '10+ Jahre', label: 'Webentwicklung seit 2016' },
      { value: '7 Stationen', label: 'Produktteams & Freelance' },
      { value: 'Vue · TS · Payload', label: 'Headless & Frontend-Fokus' },
      { value: 'Claude Code · Codex', label: 'KI-gestützte Workflows' },
      { value: 'DE · EN · RU', label: 'Deutsch (C1) · Englisch (B1) · Russisch (Muttersprache)' },
    ],
    installation: {
      title: 'Entwicklungsprozess & Tech-Architektur',
      subtitle: 'Interaktive Übersicht von der Spezifikation bis zum Deployment',
      pause: 'Pausieren',
      play: 'Auto-Zyklus',
      stageHint: 'Phase wählen, um Werkzeuge und Fokus anzuzeigen',
      outputLabel: 'Ergebnis',
    },
    projects: {
      title: 'Ausgewählte Projekte & Mandate',
      subtitle: 'Praxisergebnisse aus Festanstellungen und selbstständigen Kundenprojekten — filterbar nach Rolle und Technologie.',
      roleAll: 'Alle Mandate',
      roleCompany: 'In Unternehmen',
      roleFreelance: 'Selbstständig',
      stackAll: 'Alle Technologien',
      countLabel: 'Einträge',
      resetFilters: 'Filter zurücksetzen',
      emptyState: 'Keine Projekte für diese Filterkombination gefunden.',
      inspectBtn: 'Details ansehen',
      modalClose: 'Schließen',
      modalArchTitle: 'Architektur & Umsetzung',
      modalStackTitle: 'Verwendeter Stack',
      modalOutcomeLabel: 'Schwerpunkt',
      modalContactPrompt: 'Fragen zu diesem Projekt?',
    },
    timeline: {
      title: 'Beruflicher Werdegang',
      subtitle: 'Kompakte Übersicht der beruflichen Stationen und Qualifikationen.',
      tabExperience: 'Berufserfahrung',
      tabEducation: 'Aus- & Weiterbildung',
    },
    services: {
      title: 'Leistungsspektrum',
      subtitle: 'Klare Umsetzung ohne Overhead — passend für Produktteams, Agenturen und Unternehmen.',
      deliverablesLabel: 'Typischer Umfang',
      ctaHeading: 'Bereit für das nächste Projekt oder ein Gespräch?',
      ctaSubtext: 'Direkter Kontakt per E-Mail, Messenger oder über meine Profile — unkompliziert und ohne Umwege.',
      contactButton: 'Kontakt',
      whatsappButton: 'WhatsApp',
      phoneButton: 'Anrufen',
    },
    works: {
      title: 'Meine Arbeiten',
      subtitle: 'Ausgewählte Produkt- und UI-Umsetzungen — mit aktuellem Status, Einblicken, eingesetzten Technologien und direktem Link.',
      filterAll: 'Alle',
      filterDone: 'Fertiggestellt',
      filterInProgress: 'In Arbeit',
      statusDone: 'Fertiggestellt',
      statusInProgress: 'In Arbeit',
      techLabel: 'Technologien',
      imagesCount: {
        one: '1 Ansicht',
        many: 'Ansichten',
      },
    },
    footer: {
      note: 'Begleitseite zum Lebenslauf · Stand 2026',
    },
  },
  en: {
    nav: {
      pipeline: 'Workflow',
      projects: 'Projects',
      timeline: 'Experience',
      services: 'Services',
      works: 'Works',
      contactCta: 'Contact me',
    },
    hero: {
      kicker: 'Frontend & Full-Stack Web Developer · Freilassing, Germany',
      headline: 'Structured web architectures, headless systems, and resilient production frontends.',
      lead: 'Over ten years of hands-on experience building, migrating, and scaling production web applications — spanning Vue/Nuxt, TypeScript, Payload CMS, and AI-assisted engineering workflows.',
      primaryAction: 'Send Email',
      copyEmail: 'Copy Email',
      copiedEmail: 'Copied',
      quickLinksLabel: 'Profiles & Direct Channels',
    },
    metricsStrip: [
      { value: '10+ Years', label: 'Web Engineering since 2016' },
      { value: '7 Engagements', label: 'Product Teams & Freelance' },
      { value: 'Vue · TS · Payload', label: 'Headless & Frontend Core' },
      { value: 'Claude Code · Codex', label: 'AI-Assisted Workflows' },
      { value: 'DE · EN · RU', label: 'German (C1) · English (B1) · Russian (Native)' },
    ],
    installation: {
      title: 'Development Process & Tech Architecture',
      subtitle: 'Interactive pipeline from system specification to production delivery',
      pause: 'Pause',
      play: 'Auto-cycle',
      stageHint: 'Select any stage to inspect tools and engineering focus',
      outputLabel: 'Deliverable',
    },
    projects: {
      title: 'Selected Projects & Engagements',
      subtitle: 'Production work delivered across company teams and independent client contracts — filterable by role and stack.',
      roleAll: 'All Roles',
      roleCompany: 'Company Teams',
      roleFreelance: 'Freelance',
      stackAll: 'All Stacks',
      countLabel: 'entries',
      resetFilters: 'Reset filters',
      emptyState: 'No projects match the current filter combination.',
      inspectBtn: 'Inspect details',
      modalClose: 'Close',
      modalArchTitle: 'Architecture & Implementation',
      modalStackTitle: 'Technology Stack',
      modalOutcomeLabel: 'Primary Focus',
      modalContactPrompt: 'Want to discuss this project?',
    },
    timeline: {
      title: 'Career Timeline',
      subtitle: 'Condensed chronological overview of roles, migrations, and formal training.',
      tabExperience: 'Work Experience',
      tabEducation: 'Education & Training',
    },
    services: {
      title: 'Services',
      subtitle: 'Focused execution without unnecessary overhead — available for full-time teams and selected client builds.',
      deliverablesLabel: 'Scope of Delivery',
      ctaHeading: 'Interested in collaborating or scheduling an interview?',
      ctaSubtext: 'Reach out directly via email, messenger, or connect on GitHub and LinkedIn.',
      contactButton: 'Contact me',
      whatsappButton: 'WhatsApp',
      phoneButton: 'Call',
    },
    works: {
      title: 'My Works',
      subtitle: 'Selected web builds and UI implementations — including current status, visual previews, stack, and direct links.',
      filterAll: 'All',
      filterDone: 'Completed',
      filterInProgress: 'In Progress',
      statusDone: 'Completed',
      statusInProgress: 'In Progress',
      techLabel: 'Technologies',
      imagesCount: {
        one: '1 preview',
        many: 'previews',
      },
    },
    footer: {
      note: 'CV Companion Presentation · Updated 2026',
    },
  },
} as const;

export const PIPELINE_STAGES: PipelineStage[] = [
  {
    id: 'spec',
    index: '01',
    label: {
      de: 'Architektur & KI-Workflow',
      en: 'Architecture & AI Spec',
    },
    subtitle: {
      de: 'Systemdesign, Refactoring-Planung & Prototyping',
      en: 'System modeling, refactoring strategy & rapid prototyping',
    },
    tools: ['TypeScript', 'Figma', 'Claude Code', 'Codex', 'UX/UI'],
    aiHighlight: 'Claude Code · Codex',
    engineeringNote: {
      de: 'Gezielter Einsatz von Claude Code und Codex für Legacy-Analyse, UI-Redesigns, Boilerplate-Reduktion und präzise Fehlerbehebung.',
      en: 'Targeted use of Claude Code and Codex for legacy codebase analysis, UI redesigns, structured refactoring, and rapid debugging.',
    },
    outputArtifact: {
      de: 'Typisierte Schnittstellen & Komponenten-Spezifikation',
      en: 'Typed domain contracts & modular component blueprint',
    },
  },
  {
    id: 'headless',
    index: '02',
    label: {
      de: 'Headless CMS & API-Layer',
      en: 'Headless CMS & API Layer',
    },
    subtitle: {
      de: 'Content-Modellierung, Page Builder & Datenanbindung',
      en: 'Content schemas, modular page builders & backend APIs',
    },
    tools: ['Payload CMS', 'Node.js', 'Laravel (API)', 'REST / GraphQL', 'MySQL'],
    engineeringNote: {
      de: 'Aufbau modularer Page-Builder-Systeme in Payload CMS (Node.js) sowie Anbindung von Laravel- und GraphQL-Schnittstellen.',
      en: 'Building modular Page Builder schemas in Payload CMS (Node.js) alongside custom Laravel REST and GraphQL integrations.',
    },
    outputArtifact: {
      de: 'Redaktionstaugliche Content-APIs & sichere Datenflüsse',
      en: 'Editor-ready headless APIs & validated data pipelines',
    },
  },
  {
    id: 'frontend',
    index: '03',
    label: {
      de: 'Reaktives Frontend & SSG',
      en: 'Reactive Frontend & SSG',
    },
    subtitle: {
      de: 'Komponenten-Systeme, Migrationen & Barrierefreiheit',
      en: 'Component systems, framework migrations & WCAG 2.1',
    },
    tools: ['Vue 3 / Nuxt', 'React', 'Astro', 'Svelte', 'Tailwind CSS'],
    engineeringNote: {
      de: 'Performante Single-Page-Apps, Static Site Generation (Astro) und sichere Migrationen von Ember.js oder Vue 2 auf Vue 3.',
      en: 'High-performance SPAs, static site generation (Astro), and production migrations from Ember.js or Vue 2 to Vue 3.',
    },
    outputArtifact: {
      de: 'Wartbare UI-Architektur für hohe Last & schwache Endgeräte',
      en: 'Resilient UI architecture tuned for high traffic & low-end devices',
    },
  },
  {
    id: 'delivery',
    index: '04',
    label: {
      de: 'Qualität, SEO & Betrieb',
      en: 'Quality, SEO & Delivery',
    },
    subtitle: {
      de: 'Automatisierte Tests, Performance & Deployment',
      en: 'Automated testing, Core Web Vitals & CI/CD shipping',
    },
    tools: ['Vitest', 'Docker', 'Git / CI/CD', 'SEO / WCAG 2.1', 'Vercel'],
    engineeringNote: {
      de: 'Absicherung kritischer Logik durch Vitest, saubere Git-Workflows, Docker-Umgebungen sowie kontinuierliches SEO- und Performance-Tuning.',
      en: 'Unit and integration coverage with Vitest, containerized Docker workflows, automated CI/CD, and strict SEO & WCAG 2.1 compliance.',
    },
    outputArtifact: {
      de: 'Getestetes Release mit maximaler Ladeperformance',
      en: 'Verified production release with fast Core Web Vitals',
    },
  },
];

export const STACK_FILTERS: StackFilter[] = [
  'all',
  'Vue / Nuxt',
  'TypeScript',
  'Payload CMS',
  'React / Laravel',
  'Astro / Svelte',
  'WordPress / PHP',
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'contabo-headless',
    period: '05.2026 – 10.2026',
    company: 'Contabo',
    location: {
      de: 'München (Home Office)',
      en: 'Munich (Remote)',
    },
    roleCategory: 'company',
    roleTitle: {
      de: 'Web Developer',
      en: 'Web Developer',
    },
    title: {
      de: 'Headless-Migration & Modularer Page Builder für Unternehmenswebsite',
      en: 'Corporate Website Headless Migration & Modular Page Builder',
    },
    summary: {
      de: 'Ablösung von Contentful durch eine moderne Headless-Architektur auf Basis von Payload CMS, Astro und Svelte inklusive Website-Redesign.',
      en: 'Migrated the corporate web platform from Contentful to a headless stack powered by Payload CMS, Astro, and Svelte alongside a full redesign.',
    },
    architectureNotes: {
      de: [
        'Migration der Unternehmenswebsite von Contentful auf eine selbst gehostete Headless-Architektur mit Payload CMS, Astro und Svelte.',
        'Weiterentwicklung eines modularen Komponenten-Systems (Page Builder) in Payload CMS für eigenständige Content-Redakteure.',
        'Umsetzung des Website-Redesigns und strukturierte Fehlerbehebung unter gezieltem Einsatz von Claude Code.',
      ],
      en: [
        'Executed corporate website migration from Contentful to a headless architecture built with Payload CMS, Astro, and Svelte.',
        'Extended a modular Page Builder component system inside Payload CMS empowering content editors to assemble pages independently.',
        'Implemented the visual redesign and resolved edge-case defects with targeted AI workflows using Claude Code.',
      ],
    },
    stack: ['Payload CMS', 'Astro', 'Svelte', 'TypeScript', 'Claude Code'],
    stackFilters: ['Payload CMS', 'Astro / Svelte', 'TypeScript'],
    highlightMetric: {
      de: 'Contentful -> Payload + Astro',
      en: 'Contentful -> Payload + Astro',
    },
  },
  {
    id: 'freelance-ecommerce',
    period: '02.2025 – 04.2026',
    company: 'Selbstständig / Freelance',
    location: {
      de: 'Freilassing (Remote)',
      en: 'Freilassing (Remote)',
    },
    roleCategory: 'freelance',
    roleTitle: {
      de: 'Full-Stack Entwickler',
      en: 'Full-Stack Developer',
    },
    title: {
      de: 'Headless E-Commerce-Plattform mit SSG & SEO-Fokus',
      en: 'Headless E-Commerce Platform with SSG & Technical SEO',
    },
    summary: {
      de: 'Eigenständige Konzeption und Umsetzung einer performanten Shop-Plattform mit Payload CMS, Vue 3, TypeScript und Vercel-Deployment.',
      en: 'End-to-end architecture and build of a fast headless e-commerce platform using Payload CMS, Vue 3, TypeScript, and Vercel SSG.',
    },
    architectureNotes: {
      de: [
        'Aufbau einer entkoppelten E-Commerce-Architektur mit Payload CMS (Node.js) als Produkt- und Bestell-Backend.',
        'Frontend-Implementierung mit Vue 3, TypeScript und Static Site Generation (SSG) für schnelle Ladezeiten.',
        'Technische SEO-Optimierung, strukturierte Metadaten und automatisiertes Deployment auf Vercel.',
      ],
      en: [
        'Engineered a decoupled e-commerce backend with Payload CMS (Node.js) managing catalog, variants, and editorial blocks.',
        'Built the storefront in Vue 3 and TypeScript using Static Site Generation (SSG) for sub-second initial paint.',
        'Delivered technical SEO optimization, clean semantic markup, and zero-config CI/CD deployment on Vercel.',
      ],
    },
    stack: ['Payload CMS', 'Vue 3', 'TypeScript', 'SSG', 'Vercel', 'SEO'],
    stackFilters: ['Payload CMS', 'Vue / Nuxt', 'TypeScript'],
    highlightMetric: {
      de: 'Headless Shop · SSG',
      en: 'Headless Storefront · SSG',
    },
    link: 'https://github.com/gerasem',
    linkLabel: {
      de: 'GitHub-Profil',
      en: 'GitHub Profile',
    },
  },
  {
    id: 'freelance-laravel-react',
    period: '02.2025 – 04.2026',
    company: 'Kundenprojekte (Freelance)',
    location: {
      de: 'DACH / Remote',
      en: 'DACH / Remote',
    },
    roleCategory: 'freelance',
    roleTitle: {
      de: 'Full-Stack Entwickler',
      en: 'Full-Stack Developer',
    },
    title: {
      de: 'Maßgeschneiderte Web-Anwendungen mit Laravel-API & React',
      en: 'Custom Client Web Applications with Laravel API & React',
    },
    summary: {
      de: 'Entwicklung individueller Kundenlösungen mit sauber getrennter REST-Architektur aus Laravel-Backend und typisiertem React-Frontend.',
      en: 'Delivered bespoke client web tools combining structured Laravel REST APIs with strongly typed React and TypeScript interfaces.',
    },
    architectureNotes: {
      de: [
        'Design und Implementierung sicherer REST-Schnittstellen in PHP / Laravel inklusive Datenbankmodellierung.',
        'Modulare Frontend-Entwicklung mit React und TypeScript für datenintensive Kundenprozesse.',
        'Enge Abstimmung mit Stakeholdern von der Anforderungsanalyse bis zum produktiven Rollout.',
      ],
      en: [
        'Designed and built clean REST API endpoints in PHP / Laravel paired with relational SQL schemas.',
        'Implemented responsive, strongly typed React and TypeScript interfaces for custom business workflows.',
        'Managed full delivery lifecycle from technical scoping to production launch.',
      ],
    },
    stack: ['React', 'TypeScript', 'Laravel (API)', 'PHP', 'MySQL'],
    stackFilters: ['React / Laravel', 'TypeScript', 'WordPress / PHP'],
    highlightMetric: {
      de: 'Laravel API + React TS',
      en: 'Laravel API + React TS',
    },
    link: 'https://github.com/gerasem',
    linkLabel: {
      de: 'GitHub-Profil',
      en: 'GitHub Profile',
    },
  },
  {
    id: 'wtt-lms',
    period: '05.2023 – 01.2025',
    company: 'WTT CampusOne',
    location: {
      de: 'Ludwigsburg (Home Office)',
      en: 'Ludwigsburg (Remote)',
    },
    roleCategory: 'company',
    roleTitle: {
      de: 'Frontend Developer',
      en: 'Frontend Developer',
    },
    title: {
      de: 'Neuentwicklung Learning Management System & Ember-Migration',
      en: 'Greenfield Learning Management System & Ember.js Migration',
    },
    summary: {
      de: 'Aufbau einer wiederverwendbaren, getesteten Frontend-Architektur für ein führendes E-Learning-System auf Basis von Vue 3, TypeScript und Vitest.',
      en: 'Architected a reusable, unit-tested E-Learning LMS frontend in Vue 3, TypeScript, and Vitest while migrating legacy Ember.js modules.',
    },
    architectureNotes: {
      de: [
        'Neuentwicklung eines Learning Management Systems (LMS) mit Vue 3, TypeScript und automatisierten Tests in Vitest.',
        'Schrittweise Migration von Ember.js auf Vue 3 sowie laufende Wartung der Admin-Panels (Vue 2, Vuex).',
        'Optimierung der Architektur für hohe Benutzerlast und leistungsschwache Endgeräte im Bildungsbereich.',
      ],
      en: [
        'Built a new Learning Management System from scratch using Vue 3, TypeScript, and Vitest test suites.',
        'Migrated legacy Ember.js modules to Vue 3 alongside ongoing maintenance of Vue 2 / Vuex admin panels.',
        'Engineered reusable UI patterns tuned for high concurrent load and resource-constrained devices.',
      ],
    },
    stack: ['Vue 3', 'TypeScript', 'Vitest', 'Vue 2 / Vuex', 'Ember.js Migration'],
    stackFilters: ['Vue / Nuxt', 'TypeScript'],
    highlightMetric: {
      de: 'Ember.js -> Vue 3 + Vitest',
      en: 'Ember.js -> Vue 3 + Vitest',
    },
  },
  {
    id: 'sidecaps-trading',
    period: '07.2022 – 03.2023',
    company: 'SideCaps',
    location: {
      de: 'Hamburg (Home Office)',
      en: 'Hamburg (Remote)',
    },
    roleCategory: 'company',
    roleTitle: {
      de: 'Frontend Developer',
      en: 'Frontend Developer',
    },
    title: {
      de: 'Trading-Portal Weiterentwicklung & Codebase-Konsolidierung',
      en: 'Trading Portal Evolution & Multi-System Code Consolidation',
    },
    summary: {
      de: 'Funktionale Erweiterung eines Trading-Portals mit Nuxt 2, Refactoring verteilter Altsysteme und Etablierung einheitlicher Code-Standards.',
      en: 'Extended a live trading portal with Nuxt 2, unified fragmented legacy codebases, and established company-wide frontend standards.',
    },
    architectureNotes: {
      de: [
        'Weiterentwicklung eines produktiven Trading-Portals mit Nuxt 2 und JavaScript.',
        'Strukturiertes Refactoring und Vereinheitlichung historisch gewachsener Codebasen aus mehreren Altsystemen.',
        'Einführung eines unternehmensweiten Code-Standards für nachhaltige Teamarbeit.',
      ],
      en: [
        'Delivered new frontend features for a production financial trading portal built with Nuxt 2 and JavaScript.',
        'Refactored and consolidated divergent legacy code from multiple predecessor systems into a unified structure.',
        'Authored and rolled out company-wide frontend coding conventions for future projects.',
      ],
    },
    stack: ['Nuxt 2', 'Vue 2', 'JavaScript', 'Refactoring', 'Code Standards'],
    stackFilters: ['Vue / Nuxt'],
    highlightMetric: {
      de: 'Multi-Legacy -> Nuxt 2',
      en: 'Multi-Legacy -> Nuxt 2',
    },
  },
  {
    id: 'mtms-seating',
    period: '09.2021 – 07.2022',
    company: 'mtms Solutions',
    location: {
      de: 'Eugendorf, Österreich',
      en: 'Eugendorf, Austria',
    },
    roleCategory: 'company',
    roleTitle: {
      de: 'Frontend Developer',
      en: 'Frontend Developer',
    },
    title: {
      de: 'Visueller Sitzplatzbuchungs-Editor für Großveranstaltungen',
      en: 'Visual Seat-Booking Editor for High-Traffic Events',
    },
    summary: {
      de: 'Interaktiver Saalplan- und Buchungseditor mit Vue 3 und Tailwind CSS inklusive Migration eines Event-Tools von Vue 2 auf Vue 3.',
      en: 'Built an interactive visual seat-map editor with Vue 3 and Tailwind CSS, scaling an existing event platform for large-scale live traffic.',
    },
    architectureNotes: {
      de: [
        'Entwicklung eines visuellen Editors für interaktive Sitzplatzbuchungen mit Vue 3 und Tailwind CSS.',
        'Migration eines bestehenden Event-Management-Tools von Vue 2 auf Vue 3.',
        'Performance-Skalierung der Anwendung für Großveranstaltungen und hohe gleichzeitige Zugriffszahlen.',
      ],
      en: [
        'Engineered an interactive visual editor for venue seat mapping and bookings with Vue 3 and Tailwind CSS.',
        'Migrated an established event management tool from Vue 2 to Vue 3.',
        'Scaled frontend rendering performance for major live events and concurrent traffic spikes.',
      ],
    },
    stack: ['Vue 3', 'Tailwind CSS', 'Vue 2 Migration', 'High-Traffic UI'],
    stackFilters: ['Vue / Nuxt'],
    highlightMetric: {
      de: 'Visueller Editor · Vue 3',
      en: 'Visual Canvas Editor · Vue 3',
    },
  },
  {
    id: 'makrohaus-cms',
    period: '09.2018 – 07.2021',
    company: 'makrohaus',
    location: {
      de: 'Bad Reichenhall, Deutschland',
      en: 'Bad Reichenhall, Germany',
    },
    roleCategory: 'company',
    roleTitle: {
      de: 'Full Stack Developer',
      en: 'Full Stack Developer',
    },
    title: {
      de: 'Kundenportale, WordPress-Plugins & CakePHP-Systeme',
      en: 'Client Websites, Custom WordPress Plugins & CakePHP Stack',
    },
    summary: {
      de: 'Entwicklung performanter Unternehmenswebsites, maßgeschneiderter WordPress-Plugins zur Altsystem-Ablösung und SEO-Modernisierung.',
      en: 'Delivered client web platforms using WordPress and an in-house CakePHP framework, building custom plugins to replace legacy tools.',
    },
    architectureNotes: {
      de: [
        'Entwicklung zahlreicher Kunden-Websites mit WordPress und eigenem CakePHP-Framework.',
        'Programmierung individueller WordPress-Plugins zur Ablösung veralteter Altsysteme.',
        'Einführung moderner Web-Standards zur messbaren Verbesserung von Ladezeit und SEO-Performance.',
      ],
      en: [
        'Built and maintained client websites on WordPress and a proprietary CakePHP framework.',
        'Developed custom WordPress plugins to phase out inflexible legacy software.',
        'Standardized modern HTML/CSS and technical SEO practices across agency deliveries.',
      ],
    },
    stack: ['WordPress', 'PHP', 'CakePHP', 'MySQL', 'HTML / CSS / SCSS', 'SEO'],
    stackFilters: ['WordPress / PHP'],
    highlightMetric: {
      de: 'WordPress + CakePHP',
      en: 'WordPress + CakePHP',
    },
  },
];

export const TIMELINE_ENTRIES: TimelineEntry[] = [
  {
    id: 'tl-contabo',
    period: '05.2026 – 10.2026',
    organization: 'Contabo',
    location: { de: 'München (Home Office)', en: 'Munich (Remote)' },
    role: { de: 'Web Developer', en: 'Web Developer' },
    category: 'experience',
    highlights: {
      de: [
        'Migration von Contentful auf Headless-Architektur (Payload CMS, Astro, Svelte)',
        'Ausbau des modularen Page Builders & Redesign-Umsetzung mit Claude Code',
      ],
      en: [
        'Migrated corporate site from Contentful to Payload CMS, Astro & Svelte',
        'Extended modular Page Builder and delivered redesign via Claude Code workflows',
      ],
    },
    stack: ['Payload CMS', 'Astro', 'Svelte', 'Claude Code'],
  },
  {
    id: 'tl-freelance-25',
    period: '02.2025 – 04.2026',
    organization: 'Freiberuflicher Full-Stack Entwickler',
    location: { de: 'Selbstständig', en: 'Self-Employed' },
    role: { de: 'Full-Stack Web Developer', en: 'Full-Stack Web Developer' },
    category: 'experience',
    highlights: {
      de: [
        'Headless E-Commerce-Plattform (Payload CMS, Vue 3, TypeScript, SSG auf Vercel)',
        'Kundenprojekte mit Laravel-API, React und TypeScript',
      ],
      en: [
        'Built Headless E-Commerce platform (Payload CMS, Vue 3, TypeScript, SSG on Vercel)',
        'Delivered client applications with Laravel API, React, and TypeScript',
      ],
    },
    stack: ['Payload CMS', 'Vue 3', 'React', 'Laravel', 'TypeScript'],
  },
  {
    id: 'tl-wtt',
    period: '05.2023 – 01.2025',
    organization: 'WTT CampusOne',
    location: { de: 'Ludwigsburg (Home Office)', en: 'Ludwigsburg (Remote)' },
    role: { de: 'Frontend Developer', en: 'Frontend Developer' },
    category: 'experience',
    highlights: {
      de: [
        'Neuentwicklung eines Learning Management Systems (Vue 3, TypeScript, Vitest)',
        'Migration von Ember.js auf Vue 3 sowie Wartung der Vue-2/Vuex-Admin-Panels',
      ],
      en: [
        'Greenfield Learning Management System development (Vue 3, TypeScript, Vitest)',
        'Ember.js to Vue 3 migration and Vue 2 / Vuex admin panel maintenance',
      ],
    },
    stack: ['Vue 3', 'TypeScript', 'Vitest', 'Vuex'],
  },
  {
    id: 'tl-sidecaps',
    period: '07.2022 – 03.2023',
    organization: 'SideCaps',
    location: { de: 'Hamburg (Home Office)', en: 'Hamburg (Remote)' },
    role: { de: 'Frontend Developer', en: 'Frontend Developer' },
    category: 'experience',
    highlights: {
      de: [
        'Weiterentwicklung eines Trading-Portals (Nuxt 2, JavaScript)',
        'Code-Konsolidierung aus Altsystemen & Einführung von Code-Standards',
      ],
      en: [
        'Trading portal feature development using Nuxt 2 and JavaScript',
        'Legacy codebase unification and company-wide frontend standards',
      ],
    },
    stack: ['Nuxt 2', 'JavaScript'],
  },
  {
    id: 'tl-mtms',
    period: '09.2021 – 07.2022',
    organization: 'mtms Solutions',
    location: { de: 'Eugendorf, Österreich', en: 'Eugendorf, Austria' },
    role: { de: 'Frontend Developer', en: 'Frontend Developer' },
    category: 'experience',
    highlights: {
      de: [
        'Visueller Editor für Sitzplatzbuchungen (Vue 3, Tailwind CSS)',
        'Migration Vue 2 -> Vue 3 und Skalierung für Großveranstaltungen',
      ],
      en: [
        'Visual seat-booking editor engineered with Vue 3 and Tailwind CSS',
        'Vue 2 -> Vue 3 migration and scaling for high-traffic events',
      ],
    },
    stack: ['Vue 3', 'Tailwind CSS'],
  },
  {
    id: 'tl-makrohaus',
    period: '09.2018 – 07.2021',
    organization: 'makrohaus',
    location: { de: 'Bad Reichenhall, DE', en: 'Bad Reichenhall, Germany' },
    role: { de: 'Full Stack Developer', en: 'Full Stack Developer' },
    category: 'experience',
    highlights: {
      de: [
        'Kunden-Websites mit WordPress und eigenem CakePHP-Framework',
        'Eigene WordPress-Plugins & SEO-Performance-Optimierung',
      ],
      en: [
        'Client web platforms in WordPress and custom CakePHP framework',
        'Custom WordPress plugin development and technical SEO upgrades',
      ],
    },
    stack: ['WordPress', 'CakePHP', 'PHP', 'MySQL'],
  },
  {
    id: 'tl-freelance-16',
    period: '07.2016 – 07.2018',
    organization: 'Freiberuflicher Webentwickler',
    location: { de: 'Selbstständig', en: 'Freelance' },
    role: { de: 'Webentwickler & Webdesigner', en: 'Web Developer & Designer' },
    category: 'experience',
    highlights: {
      de: [
        'Websites mit HTML, CSS, PHP und CMS-Systemen',
        'SEO-Optimierung, UI-Design und technische Shop-Administration',
      ],
      en: [
        'Websites built with HTML, CSS, PHP, and CMS platforms',
        'SEO optimization, UI design, and technical online-shop administration',
      ],
    },
    stack: ['HTML', 'CSS', 'PHP', 'CMS'],
  },
  // Education & Further Training
  {
    id: 'edu-ait',
    period: '07.2025 – 02.2026',
    organization: 'AIT School',
    location: { de: 'Remote, Deutschland', en: 'Remote, Germany' },
    role: { de: 'Weiterbildung Fullstack Developer', en: 'Further Training: Fullstack Developer' },
    category: 'education',
    highlights: {
      de: ['Vertiefung in React, Java, Spring Boot und Backend-Architektur'],
      en: ['Intensive training in React, Java, Spring Boot, and backend engineering'],
    },
    stack: ['React', 'Java', 'Spring Boot'],
  },
  {
    id: 'edu-bs1',
    period: '09.2018 – 07.2021',
    organization: 'Berufsschule 1 Traunstein',
    location: { de: 'Traunstein, Deutschland', en: 'Traunstein, Germany' },
    role: {
      de: 'Fachinformatiker für Anwendungsentwicklung',
      en: 'Certified Software Developer (Fachinformatiker Anwendungsentwicklung)',
    },
    category: 'education',
    highlights: {
      de: ['Staatlich anerkannte Berufsausbildung im Bereich Anwendungsentwicklung'],
      en: ['German dual vocational degree in application development'],
    },
  },
  {
    id: 'edu-kfu-bwl',
    period: '09.2010 – 08.2014',
    organization: 'Kazan Federal University',
    location: { de: 'Nabereschnyje Tschelny', en: 'Naberezhnye Chelny' },
    role: { de: 'Bachelor in Betriebswirtschaftslehre (BWL)', en: 'B.A. in Business Administration' },
    category: 'education',
    highlights: {
      de: ['Fundament in Prozessverständnis, Wirtschaftlichkeit und Produktdenken'],
      en: ['Foundation in business processes, economics, and product thinking'],
    },
  },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'landing-page',
    index: '01',
    title: {
      de: 'Landing Pages',
      en: 'Landing Pages',
    },
    summary: {
      de: 'Schnelle, barrierefreie Präsentations- und Kampagnenseiten mit sauberer Typografie, technischer SEO-Struktur und höchster Ladegeschwindigkeit.',
      en: 'Fast, accessible marketing and product presentation pages built with disciplined typography, technical SEO, and top Core Web Vitals.',
    },
    deliverables: {
      de: [
        'Static Site Generation (Astro / Nuxt / Next)',
        'WCAG-2.1-konformes, responsives UI-System',
        'Technisches SEO, Schema-Markup & Analytics-Integration',
      ],
      en: [
        'Static Site Generation (Astro / Nuxt / Next)',
        'WCAG 2.1 compliant responsive UI system',
        'Technical SEO, structured metadata & clean deployment',
      ],
    },
    typicalStack: 'Astro · Svelte · Tailwind CSS · Vercel',
  },
  {
    id: 'online-shop',
    index: '02',
    title: {
      de: 'Online Shops',
      en: 'Online Shops',
    },
    summary: {
      de: 'Entkoppelte Headless-Commerce-Lösungen mit flexibler Produktverwaltung, schnellen Produktseiten und wartbarem Redaktions-Backend.',
      en: 'Decoupled headless e-commerce storefronts with flexible catalog management, instant page transitions, and editor-friendly CMS workflows.',
    },
    deliverables: {
      de: [
        'Headless-Katalog & Page Builder (Payload CMS)',
        'Performantes Shop-Frontend mit Vue 3 / TypeScript',
        'Zahlungs-, Versand- & API-Integrationen',
      ],
      en: [
        'Headless catalog & Page Builder in Payload CMS',
        'High-speed storefront in Vue 3 / TypeScript',
        'Checkout, fulfillment & third-party API integrations',
      ],
    },
    typicalStack: 'Payload CMS · Vue 3 · TypeScript · Node.js',
  },
  {
    id: 'web-application',
    index: '03',
    title: {
      de: 'Web-Applikationen',
      en: 'Web Applications',
    },
    summary: {
      de: 'Komplexe Browser-Anwendungen, Dashboards, visuelle Editoren sowie schrittweise Modernisierung bestehender Legacy-Frontends.',
      en: 'Complex browser applications, interactive editors, portals, and structured migrations from legacy stacks to maintainable modern architectures.',
    },
    deliverables: {
      de: [
        'Architektur & Entwicklung in Vue 3, React oder TypeScript',
        'REST / GraphQL API-Anbindung (Node.js, Laravel)',
        'Unit-Testing (Vitest) & CI/CD-Stabilisierung',
      ],
      en: [
        'SPA & portal engineering in Vue 3, React, and TypeScript',
        'REST / GraphQL API integration (Node.js, Laravel)',
        'Automated testing with Vitest & CI/CD pipelines',
      ],
    },
    typicalStack: 'Vue 3 · React · TypeScript · Laravel · Vitest',
  },
];
