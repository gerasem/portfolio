import { useState } from 'react';
import { motion } from 'motion/react';
import {
  AppWindow,
  ArrowUpRight,
  Check,
  Copy,
  LayoutTemplate,
  Mail,
  MessageSquare,
  Phone,
  ShoppingBag,
} from 'lucide-react';
import { Locale, PROFILE, SERVICES, UI_COPY } from '../data/portfolioData';
import { TechIcon } from './TechIcon';

interface ServicesContactSectionProps {
  locale: Locale;
}

const SERVICE_ICONS = [LayoutTemplate, ShoppingBag, AppWindow];

export function ServicesContactSection({ locale }: ServicesContactSectionProps) {
  const [copied, setCopied] = useState(false);
  const copy = UI_COPY[locale].services;

  const mailtoSubject = encodeURIComponent(
    locale === 'de'
      ? 'Projektanfrage / Kennenlerngespräch'
      : 'Project Inquiry / Interview Request'
  );

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback ignored if clipboard permissions are restricted
    }
  };

  return (
    <section id="services" className="scroll-mt-16 py-12 pb-16">
      <div className="mx-auto max-w-[1160px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl"
        >
          <h2 className="font-display text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
            {copy.title}
          </h2>
          <p className="mt-1.5 text-sm leading-relaxed text-slate-500">
            {copy.subtitle}
          </p>
        </motion.div>

        {/* 3 Gentle Rounded Service Cards (No prices) */}
        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
          {SERVICES.map((service, idx) => {
            const Icon = SERVICE_ICONS[idx] ?? LayoutTemplate;
            const stackItems = service.typicalStack.split(' · ');

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.45,
                  delay: idx * 0.08,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="flex flex-col justify-between rounded-3xl border border-slate-200/65 bg-white/95 p-6 shadow-[0_8px_28px_-10px_rgba(30,41,59,0.06)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_32px_-10px_rgba(30,41,59,0.1)]"
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-50/90 text-blue-600 shadow-2xs">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="text-xs font-semibold tabular-nums text-slate-300">
                      {service.index}
                    </span>
                  </div>

                  <h3 className="mt-4 font-display text-base font-semibold tracking-tight text-slate-900">
                    {service.title[locale]}
                  </h3>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-slate-600">
                    {service.summary[locale]}
                  </p>

                  <div className="mt-4 border-t border-slate-100 pt-3.5">
                    <div className="text-xs font-medium text-slate-400">
                      {copy.deliverablesLabel}
                    </div>
                    <ul className="mt-2 space-y-2">
                      {service.deliverables[locale].map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-xs leading-relaxed text-slate-600"
                        >
                          <span
                            aria-hidden="true"
                            className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400"
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-1.5 border-t border-slate-100 pt-3.5">
                  {stackItems.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500"
                    >
                      <TechIcon name={tech} className="h-3.5 w-3.5 shrink-0" />
                      <span>{tech}</span>
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Gentle Elevated Contact Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.45, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 flex flex-col justify-between gap-5 rounded-3xl border border-slate-200/70 bg-gradient-to-br from-white via-white to-blue-50/40 p-7 shadow-[0_10px_32px_-12px_rgba(30,41,59,0.08)] lg:flex-row lg:items-center"
        >
          <div className="max-w-xl">
            <h3 className="font-display text-base font-semibold tracking-tight text-slate-900 sm:text-lg">
              {copy.ctaHeading}
            </h3>
            <p className="mt-1 text-sm text-slate-600">{copy.ctaSubtext}</p>
            <div className="mt-2.5 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-medium text-slate-500">
              <span className="text-slate-700">{PROFILE.email}</span>
              <span aria-hidden="true" className="text-slate-300">
                ·
              </span>
              <span className="tabular-nums">{PROFILE.phone}</span>
              <span aria-hidden="true" className="text-slate-300">
                ·
              </span>
              <span>{PROFILE.location}</span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2.5 shrink-0">
            <a
              href={`mailto:${PROFILE.email}?subject=${mailtoSubject}`}
              className="inline-flex items-center gap-2 rounded-2xl bg-[#3B82F6] px-5 py-2.5 text-xs font-semibold text-white shadow-[0_8px_20px_-4px_rgba(59,130,246,0.45)] transition-all duration-200 hover:bg-[#2563EB] hover:shadow-[0_10px_24px_-4px_rgba(59,130,246,0.55)] active:scale-[0.98] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
            >
              <Mail className="h-3.5 w-3.5" />
              <span>{copy.contactButton}</span>
            </a>

            <a
              href={PROFILE.whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-2xl border border-slate-200/80 bg-white px-4 py-2.5 text-xs font-medium text-slate-700 shadow-[0_4px_12px_-2px_rgba(30,41,59,0.06)] transition-all duration-200 hover:border-slate-300 hover:shadow-[0_6px_16px_-2px_rgba(30,41,59,0.1)] active:scale-[0.98] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-blue-500"
            >
              <MessageSquare className="h-3.5 w-3.5 text-emerald-500" />
              <span>{copy.whatsappButton}</span>
              <ArrowUpRight className="h-3 w-3 text-slate-400" />
            </a>

            <a
              href={PROFILE.phoneHref}
              className="inline-flex items-center gap-1.5 rounded-2xl border border-slate-200/80 bg-white px-4 py-2.5 text-xs font-medium text-slate-700 shadow-[0_4px_12px_-2px_rgba(30,41,59,0.06)] transition-all duration-200 hover:border-slate-300 hover:shadow-[0_6px_16px_-2px_rgba(30,41,59,0.1)] active:scale-[0.98] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-blue-500"
            >
              <Phone className="h-3.5 w-3.5 text-slate-400" />
              <span>{copy.phoneButton}</span>
            </a>

            <button
              type="button"
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-1.5 rounded-2xl border border-slate-200/80 bg-white px-4 py-2.5 text-xs font-medium text-slate-700 shadow-[0_4px_12px_-2px_rgba(30,41,59,0.06)] transition-all duration-200 hover:border-slate-300 hover:shadow-[0_6px_16px_-2px_rgba(30,41,59,0.1)] active:scale-[0.98] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-blue-500"
            >
              {copied ? (
                <>
                  <Check className="h-3.5 w-3.5 text-blue-600" />
                  <span>{UI_COPY[locale].hero.copiedEmail}</span>
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5 text-slate-400" />
                  <span>{UI_COPY[locale].hero.copyEmail}</span>
                </>
              )}
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
