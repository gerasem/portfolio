import { useEffect, useState } from 'react';
import { MotionConfig, motion } from 'motion/react';
import {
  ArrowUpRight,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Clock,
  Expand,
  Image as ImageIcon,
  X,
} from 'lucide-react';
import { type Locale, UI_COPY } from '../data/portfolioData';
import {
  MY_WORKS,
  type WorkImage,
  type WorkShowcaseItem,
  type WorkStatus,
} from '../data/worksData';
import { TechIcon } from './TechIcon';

interface WorksSectionProps {
  locale: Locale;
}

type StatusFilter = 'all' | WorkStatus;

interface LightboxState {
  workTitle: string;
  images: WorkImage[];
  index: number;
}

function PreviewImage({
  image,
  locale,
  onClick,
  className = '',
}: {
  image: WorkImage;
  locale: Locale;
  onClick: () => void;
  className?: string;
}) {
  const [failed, setFailed] = useState(false);

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={`${image.caption[locale]} — ${locale === 'de' ? 'Vergrößern' : 'Enlarge'}`}
      className={`group relative block w-full overflow-hidden rounded-2xl border border-slate-200/75 bg-slate-100/80 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 ${className}`}
    >
      {failed ? (
        <div className="flex h-full min-h-[160px] w-full flex-col items-center justify-center gap-2 bg-gradient-to-br from-slate-100 to-blue-50/70 p-4 text-center">
          <ImageIcon className="h-6 w-6 text-blue-400" />
          <span className="text-xs font-medium text-slate-600">
            {image.caption[locale]}
          </span>
        </div>
      ) : (
        <img
          src={image.src}
          alt={image.alt[locale]}
          referrerPolicy="no-referrer"
          loading="lazy"
          onError={() => setFailed(true)}
          className="h-full w-full object-cover object-top transition-transform duration-300 ease-out group-hover:scale-[1.025]"
        />
      )}

      {/* Subtle hover caption scrim */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 flex items-center justify-between gap-2 bg-gradient-to-t from-slate-900/75 via-slate-900/35 to-transparent px-3.5 py-2.5 opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100">
        <span className="truncate text-[0.6875rem] font-medium text-white">
          {image.caption[locale]}
        </span>
        <Expand className="h-3.5 w-3.5 shrink-0 text-white/90" />
      </div>
    </button>
  );
}

function WorkGallery({
  work,
  locale,
  onOpenLightbox,
}: {
  work: WorkShowcaseItem;
  locale: Locale;
  onOpenLightbox: (index: number) => void;
}) {
  const count = work.images.length;

  if (count === 1) {
    return (
      <div className="h-full">
        <PreviewImage
          image={work.images[0]}
          locale={locale}
          onClick={() => onOpenLightbox(0)}
          className="aspect-[16/10] h-full min-h-[230px]"
        />
      </div>
    );
  }

  if (count === 2) {
    return (
      <div className="grid h-full grid-cols-1 gap-3 sm:grid-cols-2">
        {work.images.map((img, idx) => (
          <PreviewImage
            key={img.src}
            image={img}
            locale={locale}
            onClick={() => onOpenLightbox(idx)}
            className="aspect-[4/3] h-full min-h-[190px]"
          />
        ))}
      </div>
    );
  }

  // 3 images: Editorial Bento Trio (1 primary showcase + 2 stacked views)
  return (
    <div className="grid h-full grid-cols-1 gap-3 sm:grid-cols-12">
      <div className="sm:col-span-7">
        <PreviewImage
          image={work.images[0]}
          locale={locale}
          onClick={() => onOpenLightbox(0)}
          className="aspect-[4/3] h-full min-h-[210px] sm:aspect-auto"
        />
      </div>
      <div className="grid grid-cols-2 gap-3 sm:col-span-5 sm:grid-cols-1 sm:grid-rows-2">
        <PreviewImage
          image={work.images[1]}
          locale={locale}
          onClick={() => onOpenLightbox(1)}
          className="aspect-[4/3] h-full min-h-[110px]"
        />
        <PreviewImage
          image={work.images[2]}
          locale={locale}
          onClick={() => onOpenLightbox(2)}
          className="aspect-[4/3] h-full min-h-[110px]"
        />
      </div>
    </div>
  );
}

export function WorksSection({ locale }: WorksSectionProps) {
  const [statusFilter, setStatusFilter] = useState<StatusFilter>('all');
  const [lightbox, setLightbox] = useState<LightboxState | null>(null);
  const copy = UI_COPY[locale].works;

  const filteredWorks =
    statusFilter === 'all'
      ? MY_WORKS
      : MY_WORKS.filter((item) => item.status === statusFilter);

  useEffect(() => {
    if (!lightbox) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setLightbox(null);
      } else if (event.key === 'ArrowRight' && lightbox.images.length > 1) {
        setLightbox((prev) =>
          prev
            ? { ...prev, index: (prev.index + 1) % prev.images.length }
            : null
        );
      } else if (event.key === 'ArrowLeft' && lightbox.images.length > 1) {
        setLightbox((prev) =>
          prev
            ? {
                ...prev,
                index:
                  (prev.index - 1 + prev.images.length) % prev.images.length,
              }
            : null
        );
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightbox]);

  return (
    <MotionConfig reducedMotion="user">
      <section id="works" className="scroll-mt-16 py-12">
        <div className="mx-auto max-w-[1450px] px-6">
          {/* Section Header + Status Filter Controls */}
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
              role="group"
              aria-label={locale === 'de' ? 'Nach Status filtern' : 'Filter by status'}
              className="inline-flex w-fit items-center gap-1 rounded-2xl border border-slate-200/75 bg-white/85 p-1 shadow-xs"
            >
              {(
                [
                  { value: 'all', label: copy.filterAll },
                  { value: 'done', label: copy.filterDone },
                  { value: 'in-progress', label: copy.filterInProgress },
                ] as const
              ).map((option) => {
                const active = statusFilter === option.value;
                return (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => setStatusFilter(option.value)}
                    aria-pressed={active}
                    className={`rounded-xl px-3 py-1.5 text-xs font-medium whitespace-nowrap shrink-0 transition-all duration-150 focus-visible:outline-2 focus-visible:outline-blue-500 ${
                      active
                        ? 'bg-[#3B82F6] text-white shadow-xs shadow-blue-500/25'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {option.label}
                  </button>
                );
              })}
            </div>
          </motion.div>

          {/* Works Showcase List */}
          <div className="mt-6 space-y-5">
            {filteredWorks.map((work, idx) => {
              const isDone = work.status === 'done';
              const statusText = isDone
                ? copy.statusDone
                : copy.statusInProgress;
              const imageCountLabel =
                work.images.length === 1
                  ? copy.imagesCount.one
                  : `${work.images.length} ${copy.imagesCount.many}`;

              return (
                <motion.article
                  key={work.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.12 }}
                  transition={{
                    duration: 0.45,
                    delay: idx * 0.06,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="grid grid-cols-1 items-stretch gap-6 rounded-3xl border border-slate-200/70 bg-white/95 p-5 shadow-[0_8px_28px_-10px_rgba(30,41,59,0.06)] transition-shadow duration-200 hover:shadow-[0_14px_34px_-10px_rgba(30,41,59,0.1)] sm:p-6 lg:grid-cols-12"
                >
                  {/* Left Details Column */}
                  <div className="flex flex-col justify-between gap-5 lg:col-span-5">
                    <div>
                      <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 text-xs font-medium">
                        <span className="tabular-nums text-slate-400">
                          {work.index}
                        </span>
                        <span aria-hidden="true" className="text-slate-300">
                          ·
                        </span>
                        <span
                          className={`inline-flex items-center gap-1.5 font-semibold ${
                            isDone ? 'text-emerald-700' : 'text-blue-600'
                          }`}
                        >
                          {isDone ? (
                            <CheckCircle2 className="h-3.5 w-3.5 shrink-0" />
                          ) : (
                            <Clock className="h-3.5 w-3.5 shrink-0" />
                          )}
                          <span>{statusText}</span>
                        </span>
                        <span aria-hidden="true" className="text-slate-300">
                          ·
                        </span>
                        <span className="tabular-nums text-slate-400">
                          {imageCountLabel}
                        </span>
                      </div>

                      <h3 className="mt-3 font-display text-base font-semibold tracking-tight text-slate-900 sm:text-lg">
                        {work.title[locale]}
                      </h3>

                      <p className="mt-2 text-sm leading-relaxed text-slate-600">
                        {work.description[locale]}
                      </p>
                    </div>

                    <div className="space-y-4">
                      {/* Technologies */}
                      <div className="border-t border-slate-100 pt-3.5">
                        <div className="text-xs font-medium text-slate-400">
                          {copy.techLabel}
                        </div>
                        <div className="mt-2 flex flex-wrap items-center gap-x-3.5 gap-y-2">
                          {work.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-600"
                            >
                              <TechIcon
                                name={tech}
                                className="h-3.5 w-3.5 shrink-0"
                              />
                              <span>{tech}</span>
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Direct Link */}
                      <div>
                        <a
                          href={work.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-2xl border border-slate-200/85 bg-white px-4 py-2 text-xs font-semibold text-slate-700 shadow-[0_4px_12px_-2px_rgba(30,41,59,0.05)] transition-all duration-150 hover:border-blue-200 hover:bg-blue-50/40 hover:text-[#2563EB] active:scale-[0.98] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
                        >
                          <span>{work.linkLabel[locale]}</span>
                          <ArrowUpRight className="h-3.5 w-3.5 text-slate-400" />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Right Adaptive 1 / 2 / 3 Image Gallery */}
                  <div className="lg:col-span-7">
                    <WorkGallery
                      work={work}
                      locale={locale}
                      onOpenLightbox={(imageIndex) =>
                        setLightbox({
                          workTitle: work.title[locale],
                          images: work.images,
                          index: imageIndex,
                        })
                      }
                    />
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>

        {/* Clean Fullscreen Lightbox for Inspecting Work Screenshots */}
        {lightbox && (
          <div
            role="dialog"
            aria-modal="true"
            aria-label={lightbox.workTitle}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/80 p-4 backdrop-blur-sm sm:p-6"
          >
            <div
              onClick={(event) => event.stopPropagation()}
              className="relative flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-3xl border border-slate-200/20 bg-white shadow-2xl"
            >
              <div className="flex items-center justify-between gap-4 border-b border-slate-100 px-5 py-3.5">
                <div className="min-w-0">
                  <div className="truncate font-display text-sm font-semibold text-slate-900">
                    {lightbox.workTitle}
                  </div>
                  <div className="mt-0.5 flex items-center gap-2 text-xs text-slate-500">
                    <span className="truncate">
                      {lightbox.images[lightbox.index].caption[locale]}
                    </span>
                    {lightbox.images.length > 1 && (
                      <>
                        <span aria-hidden="true">·</span>
                        <span className="tabular-nums">
                          {lightbox.index + 1} / {lightbox.images.length}
                        </span>
                      </>
                    )}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setLightbox(null)}
                  aria-label={locale === 'de' ? 'Schließen' : 'Close'}
                  className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 transition-colors hover:bg-slate-50 hover:text-slate-900 focus-visible:outline-2 focus-visible:outline-blue-500"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="relative flex flex-1 items-center justify-center bg-slate-50 p-3 sm:p-5">
                <img
                  src={lightbox.images[lightbox.index].src}
                  alt={lightbox.images[lightbox.index].alt[locale]}
                  referrerPolicy="no-referrer"
                  className="max-h-[70vh] w-auto rounded-2xl object-contain shadow-md"
                />

                {lightbox.images.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={() =>
                        setLightbox((prev) =>
                          prev
                            ? {
                                ...prev,
                                index:
                                  (prev.index - 1 + prev.images.length) %
                                  prev.images.length,
                              }
                            : null
                        )
                      }
                      aria-label={locale === 'de' ? 'Vorheriges Bild' : 'Previous image'}
                      className="absolute left-3 inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200/90 bg-white/95 text-slate-700 shadow-md transition-colors hover:bg-white hover:text-[#2563EB] focus-visible:outline-2 focus-visible:outline-blue-500 sm:left-5"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        setLightbox((prev) =>
                          prev
                            ? {
                                ...prev,
                                index: (prev.index + 1) % prev.images.length,
                              }
                            : null
                        )
                      }
                      aria-label={locale === 'de' ? 'Nächstes Bild' : 'Next image'}
                      className="absolute right-3 inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-200/90 bg-white/95 text-slate-700 shadow-md transition-colors hover:bg-white hover:text-[#2563EB] focus-visible:outline-2 focus-visible:outline-blue-500 sm:right-5"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </section>
    </MotionConfig>
  );
}
