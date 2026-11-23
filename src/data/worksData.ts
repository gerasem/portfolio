import type { LocalizedText } from './portfolioData';
import loftitemsStorefrontImg from '../assets/images/loftitems_storefront.jpg';
import loftitemsPayloadCmsImg from '../assets/images/loftitems_payload_cms.jpg';

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
    id: 'work-loftitems',
    index: '01',
    title: {
      de: 'loftitems.de — Online-Shop für Designer-Möbel im Loft-Stil',
      en: 'loftitems.de — Designer Loft-Style Furniture Online Store',
    },
    status: 'in-progress',
    description: {
      de: 'Eigenentwickelter Online-Shop für Designer-Möbel im Loft-Stil — komplett von Grund auf umgesetzt: vom UI-Design und der Bildbearbeitung über die Payment-Integration bis hin zur Einrichtung der Werbekampagnen. Aktuell befindet sich das Projekt in der Test- und Produktbefüllungsphase und geht in Kürze live.',
      en: 'End-to-end online store for designer loft-style furniture — built completely from scratch, covering UI design and product photo editing, payment system integration, and ad campaign setup. Currently in testing and catalog population, launching soon.',
    },
    technologies: ['Nuxt', 'Payload CMS'],
    link: 'https://loftitems.de',
    linkLabel: {
      de: 'loftitems.de öffnen',
      en: 'Visit loftitems.de',
    },
    images: [
      {
        src: resolveSrc(loftitemsStorefrontImg),
        alt: {
          de: 'loftitems.de Storefront mit Hero-Bereich und Designer-Möbel-Highlights',
          en: 'loftitems.de storefront featuring hero banner and designer furniture highlights',
        },
        caption: {
          de: 'Storefront & Produktübersicht',
          en: 'Storefront & Product Highlights',
        },
      },
      {
        src: resolveSrc(loftitemsPayloadCmsImg),
        alt: {
          de: 'Payload CMS Admin-Oberfläche mit Layout-Blöcken und E-Commerce-Verwaltung',
          en: 'Payload CMS admin interface with modular layout blocks and e-commerce management',
        },
        caption: {
          de: 'Payload CMS & Page Builder',
          en: 'Payload CMS & Page Builder',
        },
      },
    ],
  },
];
