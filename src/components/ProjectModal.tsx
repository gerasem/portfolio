import { useEffect } from 'react';
import { ArrowUpRight, Mail, X } from 'lucide-react';
import { type Locale, type ProjectItem, UI_COPY } from '../data/portfolioData';
import { TechIcon } from './TechIcon';

interface ProjectModalProps {
  project: ProjectItem | null;
  locale: Locale;
  onClose: () => void;
}

export function ProjectModal({ project, locale, onClose }: ProjectModalProps) {
  useEffect(() => {
    if (!project) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  const copy = UI_COPY[locale].projects;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/35 p-4 backdrop-blur-xs"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-[0_24px_60px_-15px_rgba(30,41,59,0.22)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-start justify-between gap-4 border-b border-slate-100 px-6 py-5">
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
              <span className="tabular-nums font-medium text-blue-600">
                {project.period}
              </span>
              <span aria-hidden="true" className="text-slate-300">
                ·
              </span>
              <span className="font-semibold text-slate-800">{project.company}</span>
              <span aria-hidden="true" className="text-slate-300">
                ·
              </span>
              <span>{project.roleTitle[locale]}</span>
              <span aria-hidden="true" className="text-slate-300">
                ·
              </span>
              <span>{project.location[locale]}</span>
            </div>
            <h3
              id="project-modal-title"
              className="mt-1.5 font-display text-lg font-semibold tracking-tight text-slate-900"
            >
              {project.title[locale]}
            </h3>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label={copy.modalClose}
            className="inline-flex h-8 w-8 items-center justify-center rounded-2xl border border-slate-200/80 bg-white text-slate-500 shadow-xs transition-all hover:border-slate-300 hover:text-slate-900 hover:shadow-sm shrink-0 focus-visible:outline-2 focus-visible:outline-blue-500"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="space-y-5 px-6 py-5">
          <p className="text-sm leading-relaxed text-slate-600">
            {project.summary[locale]}
          </p>

          <div className="border-t border-slate-100 pt-4">
            <h4 className="text-xs font-semibold text-slate-500">
              {copy.modalArchTitle}
            </h4>
            <ul className="mt-3 space-y-2.5">
              {project.architectureNotes[locale].map((note) => (
                <li
                  key={note}
                  className="flex items-start gap-2.5 text-sm leading-relaxed text-slate-700"
                >
                  <span
                    aria-hidden="true"
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-400"
                  />
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid gap-4 border-t border-slate-100 pt-4 sm:grid-cols-2">
            <div>
              <span className="text-xs font-medium text-slate-500">
                {copy.modalOutcomeLabel}
              </span>
              <p className="mt-1 text-sm font-semibold text-slate-800">
                {project.highlightMetric[locale]}
              </p>
            </div>
            <div>
              <span className="text-xs font-medium text-slate-500">
                {copy.modalStackTitle}
              </span>
              <div className="mt-1.5 flex flex-wrap items-center gap-x-3 gap-y-1.5">
                {project.stack.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-700"
                  >
                    <TechIcon name={tech} className="h-3.5 w-3.5 shrink-0" />
                    <span>{tech}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 bg-slate-50/70 px-6 py-4">
          <span className="text-xs text-slate-500">{copy.modalContactPrompt}</span>

          <div className="flex items-center gap-2.5">
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 rounded-2xl border border-slate-200/80 bg-white px-3.5 py-2 text-xs font-medium text-slate-700 shadow-xs transition-all hover:border-slate-300 hover:shadow-sm whitespace-nowrap shrink-0"
              >
                <span>{project.linkLabel?.[locale] ?? 'GitHub'}</span>
                <ArrowUpRight className="h-3.5 w-3.5 text-slate-400" />
              </a>
            )}
            <button
              type="button"
              onClick={() => {
                onClose();
                window.dispatchEvent(new CustomEvent('open-contact-modal'));
              }}
              className="inline-flex items-center gap-1.5 rounded-2xl bg-[#3B82F6] px-4 py-2 text-xs font-semibold text-white shadow-[0_6px_16px_-4px_rgba(59,130,246,0.4)] transition-all hover:bg-[#2563EB] hover:shadow-[0_8px_20px_-4px_rgba(59,130,246,0.5)] whitespace-nowrap shrink-0"
            >
              <Mail className="h-3.5 w-3.5" />
              <span>{UI_COPY[locale].services.contactButton}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
