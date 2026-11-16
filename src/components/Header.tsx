import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Locale, PROFILE, UI_COPY } from '../data/portfolioData';

interface HeaderProps {
  locale: Locale;
}

export function Header({ locale }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const copy = UI_COPY[locale].nav;

  const mailtoSubject = encodeURIComponent(
    locale === 'de'
      ? 'Anfrage über Ihre Website / Bewerbung'
      : 'Inquiry via your portfolio website'
  );

  const navItems = [
    { href: '#pipeline', label: copy.pipeline },
    { href: '#projects', label: copy.projects },
    { href: '#timeline', label: copy.timeline },
    { href: '#services', label: copy.services },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/60 bg-[#F6F8FC]/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1160px] items-center justify-between gap-8 px-6 py-3.5">
        {/* Zone 1: Single-line Brand Wordmark */}
        <a
          href="#top"
          className="font-display text-base font-semibold tracking-tight text-slate-800 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500"
        >
          {PROFILE.name}
        </a>

        {/* Zone 2: 4 concise single-line text links */}
        <nav
          aria-label={locale === 'de' ? 'Hauptnavigation' : 'Main navigation'}
          className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-500"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="whitespace-nowrap shrink-0 py-1 transition-colors duration-150 hover:text-slate-800 hover:underline hover:underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-500"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: 1 gentle shadowed CTA */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={`mailto:${PROFILE.email}?subject=${mailtoSubject}`}
            className="inline-flex items-center justify-center rounded-2xl bg-[#3B82F6] px-4 py-2 text-xs font-semibold text-white shadow-[0_6px_16px_-4px_rgba(59,130,246,0.4)] transition-all duration-200 hover:bg-[#2563EB] hover:shadow-[0_8px_20px_-4px_rgba(59,130,246,0.5)] active:scale-[0.98] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
          >
            {copy.contactCta}
          </a>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label={locale === 'de' ? 'Menü öffnen' : 'Toggle navigation menu'}
            className="inline-flex h-9 w-9 items-center justify-center rounded-2xl border border-slate-200/80 bg-white text-slate-700 shadow-xs md:hidden focus-visible:outline-2 focus-visible:outline-blue-500"
          >
            {mobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <nav
          aria-label={locale === 'de' ? 'Mobile Navigation' : 'Mobile navigation'}
          className="border-t border-slate-200/60 bg-white/95 px-6 py-3 md:hidden"
        >
          <div className="flex flex-col gap-1.5">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-xl px-3 py-2 text-sm font-medium text-slate-700 hover:bg-blue-50/60 hover:text-blue-600"
              >
                {item.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
