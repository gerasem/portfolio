import { useState } from 'react';
import { motion } from 'motion/react';
import { Locale, TIMELINE_ENTRIES, UI_COPY } from '../data/portfolioData';
import { TechIcon } from './TechIcon';

interface TimelineSectionProps {
  locale: Locale;
}

export function TimelineSection({ locale }: TimelineSectionProps) {
  const [activeTab, setActiveTab] = useState<'experience' | 'education'>('experience');
  const copy = UI_COPY[locale].timeline;

  const entries = TIMELINE_ENTRIES.filter((entry) => entry.category === activeTab);

  return (
    <section id="timeline" className="scroll-mt-16 py-12">
      <div className="mx-auto max-w-[1160px] px-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end"
        >
          <div className="max-w-2xl">
            <h2 className="font-display text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
              {copy.title}
            </h2>
            <p className="mt-1.5 text-sm leading-relaxed text-slate-500">
              {copy.subtitle}
            </p>
          </div>

          <div
            role="tablist"
            aria-label={copy.title}
            className="inline-flex items-center gap-1 rounded-2xl bg-slate-200/55 p-1 self-start sm:self-auto"
          >
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'experience'}
              onClick={() => setActiveTab('experience')}
              className={`rounded-xl px-3.5 py-1.5 text-xs font-medium transition-all duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-blue-500 ${
                activeTab === 'experience'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {copy.tabExperience}
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeTab === 'education'}
              onClick={() => setActiveTab('education')}
              className={`rounded-xl px-3.5 py-1.5 text-xs font-medium transition-all duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-blue-500 ${
                activeTab === 'education'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {copy.tabEducation}
            </button>
          </div>
        </motion.div>

        {/* Soft Rounded Timeline Container */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.12 }}
          transition={{ duration: 0.48, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 rounded-3xl border border-slate-200/65 bg-white/95 px-6 py-2 shadow-[0_8px_28px_-10px_rgba(30,41,59,0.06)]"
        >
          {entries.map((entry, idx) => (
            <div
              key={entry.id}
              className={`grid grid-cols-1 gap-3 py-5 md:grid-cols-12 md:gap-6 ${
                idx < entries.length - 1 ? 'border-b border-slate-100' : ''
              }`}
            >
              {/* Date Column */}
              <div className="md:col-span-3">
                <div className="text-xs font-semibold tabular-nums text-blue-600">
                  {entry.period}
                </div>
                <div className="mt-0.5 text-xs text-slate-500">
                  {entry.location[locale]}
                </div>
              </div>

              {/* Organization & Role + Stack Icons */}
              <div className="md:col-span-4">
                <div className="font-display text-sm font-semibold text-slate-800">
                  {entry.organization}
                </div>
                <div className="mt-0.5 text-xs font-medium text-slate-500">
                  {entry.role[locale]}
                </div>
                {entry.stack && entry.stack.length > 0 && (
                  <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1">
                    {entry.stack.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center gap-1 text-[11.5px] font-medium text-slate-500"
                      >
                        <TechIcon name={tech} className="h-3.5 w-3.5 shrink-0" />
                        <span>{tech}</span>
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Concise Achievements */}
              <div className="md:col-span-5">
                <ul className="space-y-1.5">
                  {entry.highlights[locale].map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-2.5 text-[13.5px] leading-relaxed text-slate-600"
                    >
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-300"
                      />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
