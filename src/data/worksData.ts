import type { LocalizedText } from './portfolioData';
import shopStorefrontImg from '../assets/images/work_shop_storefront_1795120992158.jpg';
import shopProductImg from '../assets/images/work_shop_product_1795120991887.jpg';
import shopCmsImg from '../assets/images/work_shop_cms_1795120991276.jpg';
import seatEditorImg from '../assets/images/work_seat_editor_1795120992857.jpg';
import seatBookingImg from '../assets/images/work_seat_booking_1795120991215.jpg';
import editorialPortalImg from '../assets/images/work_editorial_portal_1795120990552.jpg';

const resolveSrc = (asset: string | { src: string }): string =>
  typeof asset === 'string' ? asset : asset.src;

export type WorkStatus = 'done' | 'in-progress';

export interface WorkImage {
  src: string;
  alt: LocalizedText;
  caption: LocalizedText;
}

export interface WorkShowcaseItem {
  id: string;
  index: string;
  title: LocalizedText;
  status: WorkStatus;
  description: LocalizedText;
  technologies: string[];
  link: string;
  linkLabel: LocalizedText;
  images: WorkImage[];
}

export const MY_WORKS: WorkShowcaseItem[] = [
  {
    id: 'work-headless-shop',
    index: '01',
    title: {
      de: 'Nordic Lights — Headless E-Commerce & Page Builder',
      en: 'Nordic Lights — Headless E-Commerce & Page Builder',
    },
    status: 'done',
    description: {
      de: 'Entkoppelter Online-Shop mit statischer Auslieferung (SSG), Varianten-Warenkorb und modularem Page Builder in Payload CMS für flexible redaktionelle Pflege.',
      en: 'Decoupled online storefront featuring static site generation (SSG), slide-over variant cart, and a modular Payload CMS page builder for autonomous content management.',
    },
    technologies: ['Payload CMS', 'Vue 3', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    link: 'https://github.com/gerasem',
    linkLabel: {
      de: 'Auf GitHub ansehen',
      en: 'View on GitHub',
    },
    images: [
      {
        src: resolveSrc(shopStorefrontImg),
        alt: {
          de: 'Nordic Lights Startseite und Produktübersicht',
          en: 'Nordic Lights storefront homepage and catalog view',
        },
        caption: {
          de: 'Storefront & Kollektionsübersicht',
          en: 'Storefront & Collection Overview',
        },
      },
      {
        src: resolveSrc(shopProductImg),
        alt: {
          de: 'Produktdetailseite mit Variantenauswahl und Warenkorb',
          en: 'Product detail page with variant selectors and slide-over cart',
        },
        caption: {
          de: 'Produktdetail & Warenkorb-Drawer',
          en: 'Product Detail & Cart Drawer',
        },
      },
      {
        src: resolveSrc(shopCmsImg),
        alt: {
          de: 'Modularer Page Builder im Headless CMS',
          en: 'Modular Page Builder interface inside the headless CMS',
        },
        caption: {
          de: 'Payload CMS Page Builder',
          en: 'Payload CMS Page Builder',
        },
      },
    ],
  },
  {
    id: 'work-seat-studio',
    index: '02',
    title: {
      de: 'StageSeat — Visueller Saalplan- & Buchungseditor',
      en: 'StageSeat — Visual Seat-Map & Booking Studio',
    },
    status: 'done',
    description: {
      de: 'Interaktiver Sitzplatz-Editor für Konzerthallen und Großveranstaltungen mit Zonen- und Preiskategorien, Live-Selektion und übersichtlichem Checkout.',
      en: 'Interactive seating chart editor for concert halls and live events with zone pricing controls, real-time seat selection, and a structured booking summary.',
    },
    technologies: ['Vue 3', 'TypeScript', 'Tailwind CSS', 'Vitest'],
    link: 'https://github.com/gerasem',
    linkLabel: {
      de: 'Projekt-Link öffnen',
      en: 'Open project link',
    },
    images: [
      {
        src: resolveSrc(seatEditorImg),
        alt: {
          de: 'Visueller Sitzplatz-Editor für Konzerthallen',
          en: 'Visual concert hall seat-map editor interface',
        },
        caption: {
          de: 'Interaktiver Saalplan-Editor',
          en: 'Interactive Seat-Map Editor',
        },
      },
      {
        src: resolveSrc(seatBookingImg),
        alt: {
          de: 'Ticketauswahl und Buchungsübersicht nach Zonen',
          en: 'Ticket zone selection and reservation checkout summary',
        },
        caption: {
          de: 'Zonenwahl & Buchungsübersicht',
          en: 'Zone Selection & Checkout Summary',
        },
      },
    ],
  },
  {
    id: 'work-content-hub',
    index: '03',
    title: {
      de: 'ContentHub — Headless Editorial & Analytics Workspace',
      en: 'ContentHub — Headless Editorial & Analytics Workspace',
    },
    status: 'in-progress',
    description: {
      de: 'Redaktionelles Publishing-Portal mit Live-Vorschau, SEO-Checkliste und Performance-Auswertung — aktuell im aktiven Ausbau mit Astro, Svelte und KI-gestütztem Workflow.',
      en: 'Editorial publishing workspace combining live article previews, SEO checklists, and traffic analytics — currently in active development with Astro, Svelte, and AI-assisted workflows.',
    },
    technologies: ['Astro', 'Svelte', 'Payload CMS', 'TypeScript', 'Claude Code'],
    link: 'https://github.com/gerasem',
    linkLabel: {
      de: 'Entwicklungsstand ansehen',
      en: 'View progress on GitHub',
    },
    images: [
      {
        src: resolveSrc(editorialPortalImg),
        alt: {
          de: 'ContentHub Redaktions-Dashboard mit Analytics und Artikel-Editor',
          en: 'ContentHub editorial dashboard with analytics chart and article editor',
        },
        caption: {
          de: 'Editorial Workspace & Performance-Übersicht',
          en: 'Editorial Workspace & Performance Overview',
        },
      },
    ],
  },
];
