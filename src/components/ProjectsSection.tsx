import { useMemo, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import {
  type Locale,
  PROJECTS,
  type ProjectItem,
  type RoleFilter,
  STACK_FILTERS,
  type StackFilter,
  UI_COPY,
} from '../data/portfolioData';
import { TechIcon } from './TechIcon';

interface ProjectsSectionProps {
  locale: Locale;
  onSelectProject: (project: ProjectItem) => void;
}

export function ProjectsSection({ locale, onSelectProject }: ProjectsSectionProps) {
  const [roleFilter, setRoleFilter] = useState<RoleFilter>('all');
  const [stackFilter, setStackFilter] = useState<StackFilter>('all');

  const copy = UI_COPY[locale].projects;

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((project) => {
      const matchesRole =
        roleFilter === 'all' || project.roleCategory === roleFilter;
      const matchesStack =
        stackFilter === 'all' || project.stackFilters.includes(stackFilter);
      return matchesRole && matchesStack;
    });
  }, [roleFilter, stackFilter]);

  const roleOptions: { id: RoleFilter; label: string }[] = [
    { id: 'all', label: copy.roleAll },
    { id: 'company', label: copy.roleCompany },
    { id: 'freelance', label: copy.roleFreelance },
  ];

  const resetFilters = () => {
    setRoleFilter('all');
    setStackFilter('all');
  };

  return (
    <section id="projects" className="scroll-mt-16 py-12">
      <div className="mx-auto max-w-[1160px] px-6">
        {/* Section Heading */}
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
          <div className="text-xs font-medium text-slate-500 tabular-nums whitespace-nowrap shrink-0">
            {filteredProjects.length} / {PROJECTS.length} {copy.countLabel}
          </div>
        </motion.div>

        {/* Soft Filter Toolbar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
          className="mt-6 flex flex-col gap-3 rounded-3xl border border-slate-200/70 bg-white/90 p-3.5 shadow-[0_8px_28px_-10px_rgba(30,41,59,0.06)] lg:flex-row lg:items-center lg:justify-between"
        >
          {/* Role Segmented Control */}
          <div
            role="group"
            aria-label={locale === 'de' ? 'Rolle filtern' : 'Filter by role'}
            className="flex flex-wrap items-center gap-1 rounded-2xl bg-slate-100/80 p-1"
          >
            {roleOptions.map((option) => {
              const active = roleFilter === option.id;
              return (
                <button
                  key={option.id}
                  type="button"
                  onClick={() => setRoleFilter(option.id)}
                  className={`rounded-xl px-3.5 py-1.5 text-xs font-medium transition-all duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-blue-500 ${
                    active
                      ? 'bg-white text-slate-900 shadow-xs'
                      : 'text-slate-500 hover:text-slate-900'
                  }`}
                >
                  {option.label}
                </button>
              );
            })}
          </div>

          {/* Tech Stack Filter Buttons with Technology Icons */}
          <div
            role="group"
            aria-label={locale === 'de' ? 'Technologie filtern' : 'Filter by stack'}
            className="flex flex-wrap items-center gap-1.5"
          >
            {STACK_FILTERS.map((stack) => {
              const active = stackFilter === stack;
              const label = stack === 'all' ? copy.stackAll : stack;
              return (
                <button
                  key={stack}
                  type="button"
                  onClick={() => setStackFilter(stack)}
                  className={`inline-flex items-center gap-1.5 rounded-2xl border px-3 py-1.5 text-xs font-medium transition-all duration-150 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-blue-500 ${
                    active
                      ? 'border-blue-500/30 bg-[#3B82F6] text-white shadow-[0_4px_12px_-2px_rgba(59,130,246,0.38)]'
                      : 'border-slate-200/75 bg-white text-slate-600 shadow-2xs hover:border-slate-300 hover:text-slate-900 hover:shadow-xs'
                  }`}
                >
                  {stack !== 'all' && (
                    <TechIcon
                      name={stack}
                      className={`h-3.5 w-3.5 shrink-0 ${active ? 'brightness-125' : ''}`}
                    />
                  )}
                  <span>{label}</span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Soft Elevated Project Cards Grid */}
        {filteredProjects.length === 0 ? (
          <div className="mt-5 flex flex-col items-center justify-center rounded-3xl border border-slate-200/70 bg-white px-6 py-10 text-center shadow-[0_8px_28px_-10px_rgba(30,41,59,0.06)]">
            <p className="text-sm text-slate-600">{copy.emptyState}</p>
            <button
              type="button"
              onClick={resetFilters}
              className="mt-3 rounded-2xl bg-[#3B82F6] px-4 py-2 text-xs font-semibold text-white shadow-sm shadow-blue-500/30 transition-all hover:bg-[#2563EB]"
            >
              {copy.resetFilters}
            </button>
          </div>
        ) : (
          <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2">
            {filteredProjects.map((project, idx) => (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{
                  duration: 0.45,
                  delay: Math.min(idx * 0.05, 0.25),
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group flex flex-col justify-between rounded-3xl border border-slate-200/65 bg-white/95 p-6 shadow-[0_8px_28px_-10px_rgba(30,41,59,0.06)] transition-all duration-200 hover:-translate-y-0.5 hover:border-slate-300/80 hover:shadow-[0_14px_32px_-10px_rgba(30,41,59,0.1)]"
              >
                <div>
                  {/* Unboxed Typographic Metadata Row */}
                  <div className="flex flex-wrap items-center gap-2 text-xs text-slate-500">
                    <span className="tabular-nums font-medium text-blue-600">
                      {project.period}
                    </span>
                    <span aria-hidden="true" className="text-slate-300">
                      ·
                    </span>
                    <span className="font-semibold text-slate-800">
                      {project.company}
                    </span>
                    <span aria-hidden="true" className="text-slate-300">
                      ·
                    </span>
                    <span>{project.roleTitle[locale]}</span>
                  </div>

                  <h3 className="mt-2.5 font-display text-base font-semibold leading-snug tracking-tight text-slate-900">
                    {project.title[locale]}
                  </h3>

                  <p className="mt-2 text-[13.5px] leading-relaxed text-slate-600">
                    {project.summary[locale]}
                  </p>
                </div>

                {/* Tech Icons Row + Soft Shadowed Action */}
                <div className="mt-5 flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 pt-4">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
                    {project.stack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500"
                      >
                        <TechIcon name={tech} className="h-3.5 w-3.5 shrink-0" />
                        <span>{tech}</span>
                      </span>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => onSelectProject(project)}
                    className="inline-flex items-center gap-1 rounded-2xl border border-slate-200/80 bg-white px-3.5 py-1.5 text-xs font-medium text-slate-700 shadow-xs transition-all duration-150 hover:border-blue-300 hover:bg-blue-50/50 hover:text-blue-600 hover:shadow-sm whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-blue-500"
                  >
                    <span>{copy.inspectBtn}</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </motion.article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
