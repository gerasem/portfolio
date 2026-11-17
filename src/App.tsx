import { useEffect, useState } from 'react';
import { MotionConfig, motion } from 'motion/react';
import {
  ArrowUpRight,
  Check,
  Copy,
  Github,
  Linkedin,
  Mail,
  MessageSquare,
} from 'lucide-react';
import { DevProcessInstallation } from './components/DevProcessInstallation';
import { Header } from './components/Header';
import { ProjectModal } from './components/ProjectModal';
import { ProjectsSection } from './components/ProjectsSection';
import { ServicesContactSection } from './components/ServicesContactSection';
import { TimelineSection } from './components/TimelineSection';
import { type Locale, PROFILE, type ProjectItem, UI_COPY } from './data/portfolioData';

export default function App() {
  const [locale, setLocale] = useState<Locale>('de');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [copiedEmail, setCopiedEmail] = useState(false);

  const copy = UI_COPY[locale];

  useEffect(() => {
    document.documentElement.lang = locale;
  }, [locale]);

  const mailtoSubject = encodeURIComponent(
    locale === 'de'
      ? 'Bewerbung / Projektanfrage an Dmitri Laptev'
      : 'Application / Project Inquiry for Dmitri Laptev'
  );

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(PROFILE.email);
      setCopiedEmail(true);
      window.setTimeout(() => setCopiedEmail(false), 2000);
    } catch {
      // Clipboard write may be blocked in restricted contexts
    }
  };

  return (
    <MotionConfig reducedMotion="user">
      <div id="top" className="relative min-h-screen overflow-x-clip bg-[#F6F8FC] text-slate-800">
        {/* Soft atmospheric sky-mist wash at top moving gently left-to-right */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 top-0 z-0 flex justify-center overflow-hidden"
        >
          <motion.div
            animate={{
              x: [-220, 220, -220],
              background: [
                'radial-gradient(ellipse at 50% 35%, rgba(147, 197, 253, 0.56), rgba(191, 219, 254, 0.32) 45%, transparent 74%)',
                'radial-gradient(ellipse at 50% 35%, rgba(165, 180, 252, 0.54), rgba(199, 210, 254, 0.3) 45%, transparent 74%)',
                'radial-gradient(ellipse at 50% 35%, rgba(125, 211, 252, 0.56), rgba(186, 230, 253, 0.32) 45%, transparent 74%)',
                'radial-gradient(ellipse at 50% 35%, rgba(147, 197, 253, 0.56), rgba(191, 219, 254, 0.32) 45%, transparent 74%)',
              ],
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="h-[480px] w-[820px] rounded-full opacity-80 blur-3xl"
          />
        </div>

        <Header locale={locale} />

        <main className="relative z-10">
          {/* Hero Section */}
          <section className="pt-8 pb-10 sm:pt-12 sm:pb-12">
            <div className="mx-auto max-w-[1160px] px-6">
              {/* Compact Hero Utility Row: Language Switcher + Qualifications Metadata */}
              <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-medium text-slate-500">
                  <span>{PROFILE.workPermit[locale]}</span>
                  <span aria-hidden="true" className="text-slate-300">
                    ·
                  </span>
                  <span>{PROFILE.languages[locale]}</span>
                </div>

                <div
                  role="group"
                  aria-label="Language switcher"
                  className="inline-flex items-center gap-1 rounded-2xl border border-slate-200/75 bg-white/85 p-1 shadow-xs backdrop-blur-xs"
                >
                  <button
                    type="button"
                    onClick={() => setLocale('de')}
                    aria-pressed={locale === 'de'}
                    className={`rounded-xl px-3 py-1 text-xs font-semibold transition-all duration-150 focus-visible:outline-2 focus-visible:outline-blue-500 ${
                      locale === 'de'
                        ? 'bg-[#3B82F6] text-white shadow-xs shadow-blue-500/30'
                        : 'text-slate-500 hover:text-slate-800'
                    }`}
                  >
                    DE
                  </button>
                  <button
                    type="button"
                    onClick={() => setLocale('en')}
                    aria-pressed={locale === 'en'}
                    className={`rounded-xl px-3 py-1 text-xs font-semibold transition-all duration-150 focus-visible:outline-2 focus-visible:outline-blue-500 ${
                      locale === 'en'
                        ? 'bg-[#3B82F6] text-white shadow-xs shadow-blue-500/30'
                        : 'text-slate-500 hover:text-slate-800'
                    }`}
                  >
                    EN
                  </button>
                </div>
              </div>

              {/* 2-Column Split: Open Airy Left Intro | Elevated Soft Right Installation */}
              <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
                <motion.div
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="flex flex-col justify-center lg:col-span-5"
                >
                  <p className="text-xs font-semibold tracking-wide text-blue-600">
                    {copy.hero.kicker}
                  </p>

                  <h1
                    className="mt-3 font-display font-semibold tracking-tight text-slate-900"
                    style={{
                      fontSize: 'clamp(1.75rem, 2.75vw, 2.35rem)',
                      lineHeight: 1.18,
                      textWrap: 'balance',
                    }}
                  >
                    {copy.hero.headline}
                  </h1>

                  <p className="mt-4 text-[15px] leading-relaxed text-slate-600">
                    {copy.hero.lead}
                  </p>

                  {/* Tactile Softly Shadowed Contact Actions */}
                  <div className="mt-7 flex flex-wrap items-center gap-2.5">
                    <a
                      href={`mailto:${PROFILE.email}?subject=${mailtoSubject}`}
                      className="inline-flex items-center gap-2 rounded-2xl bg-[#3B82F6] px-5 py-2.5 text-xs font-semibold text-white shadow-[0_8px_20px_-4px_rgba(59,130,246,0.45)] transition-all duration-200 hover:bg-[#2563EB] hover:shadow-[0_10px_24px_-4px_rgba(59,130,246,0.55)] active:scale-[0.98] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
                    >
                      <Mail className="h-3.5 w-3.5" />
                      <span>{copy.hero.primaryAction}</span>
                    </a>

                    <a
                      href={PROFILE.whatsappHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-2xl border border-slate-200/80 bg-white/90 px-4 py-2.5 text-xs font-medium text-slate-700 shadow-[0_4px_12px_-2px_rgba(30,41,59,0.06)] transition-all duration-200 hover:border-slate-300 hover:bg-white hover:shadow-[0_6px_16px_-2px_rgba(30,41,59,0.1)] active:scale-[0.98] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-blue-500"
                    >
                      <MessageSquare className="h-3.5 w-3.5 text-emerald-500" />
                      <span>WhatsApp</span>
                    </a>

                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="inline-flex items-center gap-1.5 rounded-2xl border border-slate-200/80 bg-white/90 px-4 py-2.5 text-xs font-medium text-slate-700 shadow-[0_4px_12px_-2px_rgba(30,41,59,0.06)] transition-all duration-200 hover:border-slate-300 hover:bg-white hover:shadow-[0_6px_16px_-2px_rgba(30,41,59,0.1)] active:scale-[0.98] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-blue-500"
                    >
                      {copiedEmail ? (
                        <>
                          <Check className="h-3.5 w-3.5 text-blue-600" />
                          <span>{copy.hero.copiedEmail}</span>
                        </>
                      ) : (
                        <>
                          <Copy className="h-3.5 w-3.5 text-slate-400" />
                          <span>{PROFILE.email}</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Soft GitHub & LinkedIn Profile Links */}
                  <div className="mt-6 flex flex-wrap items-center gap-4 border-t border-slate-200/70 pt-5 text-xs">
                    <a
                      href={PROFILE.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-xl bg-white/80 px-3 py-1.5 font-medium text-slate-700 shadow-2xs ring-1 ring-slate-200/70 transition-all hover:bg-white hover:text-blue-600 hover:shadow-xs whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-blue-500"
                    >
                      <Github className="h-3.5 w-3.5 text-slate-600" />
                      <span>{PROFILE.githubHandle}</span>
                      <ArrowUpRight className="h-3 w-3 text-slate-400" />
                    </a>

                    <a
                      href={PROFILE.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-xl bg-white/80 px-3 py-1.5 font-medium text-slate-700 shadow-2xs ring-1 ring-slate-200/70 transition-all hover:bg-white hover:text-blue-600 hover:shadow-xs whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-blue-500"
                    >
                      <Linkedin className="h-3.5 w-3.5 text-[#0A66C2]" />
                      <span>{PROFILE.linkedinHandle}</span>
                      <ArrowUpRight className="h-3 w-3 text-slate-400" />
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="lg:col-span-7"
                >
                  <DevProcessInstallation locale={locale} />
                </motion.div>
              </div>

              {/* Full-Width 4-Column Capability Strip Below Hero Split */}
              <div className="mt-8 grid grid-cols-2 gap-3.5 lg:grid-cols-4">
                {copy.metricsStrip.map((metric, idx) => (
                  <motion.div
                    key={metric.value}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{
                      duration: 0.42,
                      delay: idx * 0.06,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="rounded-2xl border border-slate-200/60 bg-white/85 px-5 py-4 shadow-[0_6px_20px_-6px_rgba(30,41,59,0.06)] backdrop-blur-xs"
                  >
                    <div className="font-display text-sm font-semibold tabular-nums text-slate-800">
                      {metric.value}
                    </div>
                    <div className="mt-0.5 text-xs text-slate-500">{metric.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Filterable Projects from CV */}
          <ProjectsSection locale={locale} onSelectProject={setSelectedProject} />

          {/* Short Chronological Career Timeline */}
          <TimelineSection locale={locale} />

          {/* 3 Services (no prices) & Contact Action */}
          <ServicesContactSection locale={locale} />
        </main>

        {/* Clean Minimal Footer */}
        <footer className="relative z-10 border-t border-slate-200/60 bg-white/80 py-7 backdrop-blur-xs">
          <div className="mx-auto flex max-w-[1160px] flex-col items-start justify-between gap-4 px-6 text-xs text-slate-500 sm:flex-row sm:items-center">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-semibold text-slate-800">{PROFILE.name}</span>
              <span aria-hidden="true">·</span>
              <span>{copy.footer.note}</span>
            </div>

            <div className="flex flex-wrap items-center gap-5">
              <a
                href={PROFILE.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 transition-colors hover:text-slate-900"
              >
                <Github className="h-3.5 w-3.5" />
                <span>GitHub</span>
              </a>
              <a
                href={PROFILE.linkedinUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 transition-colors hover:text-slate-900"
              >
                <Linkedin className="h-3.5 w-3.5" />
                <span>LinkedIn</span>
              </a>
              <a
                href={`mailto:${PROFILE.email}`}
                className="inline-flex items-center gap-1.5 transition-colors hover:text-slate-900"
              >
                <Mail className="h-3.5 w-3.5" />
                <span>{PROFILE.email}</span>
              </a>
            </div>
          </div>
        </footer>

        <ProjectModal
          project={selectedProject}
          locale={locale}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </MotionConfig>
  );
}
