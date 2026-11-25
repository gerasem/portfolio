import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import {
  Compass,
  Database,
  Layout,
  Rocket,
  Sparkles,
} from 'lucide-react';
import { type Locale, PIPELINE_STAGES, UI_COPY } from '../data/portfolioData';
import { TechIcon } from './TechIcon';

interface DevProcessInstallationProps {
  locale: Locale;
}

const STAGE_ICONS = [Compass, Database, Layout, Rocket];

interface StackNode {
  name: string;
  stageIdx: number;
  isAi?: boolean;
}

const ALL_STACK_NODES: StackNode[] = [
  { name: 'Claude Code', stageIdx: 0, isAi: true },
  { name: 'Codex', stageIdx: 0, isAi: true },
  { name: 'TypeScript', stageIdx: 0 },
  { name: 'Figma', stageIdx: 0 },
  { name: 'Payload CMS', stageIdx: 1 },
  { name: 'Node.js', stageIdx: 1 },
  { name: 'Laravel (API)', stageIdx: 1 },
  { name: 'REST / GraphQL', stageIdx: 1 },
  { name: 'Vue 3 / Nuxt', stageIdx: 2 },
  { name: 'React', stageIdx: 2 },
  { name: 'Astro', stageIdx: 2 },
  { name: 'Svelte', stageIdx: 2 },
  { name: 'Tailwind CSS', stageIdx: 2 },
  { name: 'Vitest', stageIdx: 3 },
  { name: 'Docker', stageIdx: 3 },
  { name: 'Git / CI/CD', stageIdx: 3 },
];

export function DevProcessInstallation({ locale }: DevProcessInstallationProps) {
  const [activeStageIdx, setActiveStageIdx] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);

  const copy = UI_COPY[locale].installation;
  const activeStage = PIPELINE_STAGES[activeStageIdx];

  useEffect(() => {
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (!isAutoPlaying || isHovered || prefersReduced) {
      return;
    }

    const intervalId = window.setInterval(() => {
      setActiveStageIdx((prev) => (prev + 1) % PIPELINE_STAGES.length);
    }, 3800);

    return () => window.clearInterval(intervalId);
  }, [isAutoPlaying, isHovered]);

  const handleSelectStage = (index: number) => {
    setActiveStageIdx(index);
    setIsAutoPlaying(false);
  };

  return (
    <div
      id="pipeline"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/70 bg-white/95 p-5 shadow-[0_14px_40px_-14px_rgba(30,41,59,0.09)] backdrop-blur-sm"
    >
      {/* Gentle ambient glow in top-right corner */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-20 -right-20 h-56 w-56 rounded-full bg-blue-100/50 blur-3xl"
      />

      {/* Top Bar: Title */}
      <div className="relative flex items-start justify-between gap-4">
        <div>
          <h2 className="font-display text-sm font-semibold tracking-tight text-slate-800">
            {copy.title}
          </h2>
          <p className="mt-0.5 text-xs text-slate-500">{copy.subtitle}</p>
        </div>
      </div>

      {/* Flowing 4-Phase Stepper with Smooth Shared Active Indicator */}
      <div className="relative mt-3.5 rounded-2xl bg-slate-50/90 p-1.5">
        <div className="grid grid-cols-2 gap-1.5 sm:grid-cols-4">
          {PIPELINE_STAGES.map((stage, idx) => {
            const isActive = idx === activeStageIdx;
            const StageIcon = STAGE_ICONS[idx];

            return (
              <button
                key={stage.id}
                type="button"
                onClick={() => handleSelectStage(idx)}
                className="relative flex flex-col justify-between rounded-xl px-2.5 py-2 text-left transition-colors duration-150 focus-visible:outline-2 focus-visible:outline-blue-500"
              >
                {isActive && (
                  <motion.div
                    layoutId="activeStagePill"
                    transition={{ type: 'spring', stiffness: 360, damping: 32 }}
                    className="absolute inset-0 rounded-xl bg-white shadow-[0_4px_14px_-2px_rgba(30,41,59,0.08)] ring-1 ring-blue-500/20"
                  />
                )}

                <div className="relative z-10 flex items-center justify-between gap-1.5">
                  <span
                    className={`inline-flex h-5 w-5 items-center justify-center rounded-lg transition-colors ${
                      isActive
                        ? 'bg-blue-50 text-blue-600'
                        : 'bg-white/70 text-slate-400'
                    }`}
                  >
                    <StageIcon className="h-3 w-3" />
                  </span>
                  {stage.aiHighlight && (
                    <Sparkles
                      aria-hidden="true"
                      className={`h-3.5 w-3.5 ${
                        isActive ? 'text-amber-500' : 'text-slate-300'
                      }`}
                    />
                  )}
                </div>

                <div
                  className={`relative z-10 mt-1.5 text-xs leading-snug font-medium ${
                    isActive ? 'text-slate-900 font-semibold' : 'text-slate-600'
                  }`}
                >
                  {stage.label[locale]}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Gentle Flowing SVG Ribbon Connector */}
      <div className="relative my-1.5 px-2" aria-hidden="true">
        <svg viewBox="0 0 560 24" className="h-4 w-full overflow-visible">
          <defs>
            <linearGradient id="softStreamGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#93C5FD" />
              <stop offset="50%" stopColor="#3B82F6" />
              <stop offset="100%" stopColor="#60A5FA" />
            </linearGradient>
          </defs>
          <path
            d="M 10 12 Q 140 2, 280 12 T 550 12"
            fill="none"
            stroke="#E2E8F0"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M 10 12 Q 140 2, 280 12 T 550 12"
            fill="none"
            stroke="url(#softStreamGrad)"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeOpacity="0.65"
            className="animate-gentle-stream"
          />
        </svg>
      </div>

      {/* Full Stack & AI Constellation — All Key Tools Visible, Active Stage Illuminated */}
      <div className="relative">
        <div className="grid grid-cols-2 gap-1.5 sm:grid-cols-4">
          {ALL_STACK_NODES.map((node) => {
            const isActiveNode = node.stageIdx === activeStageIdx;

            return (
              <button
                key={node.name}
                type="button"
                onClick={() => handleSelectStage(node.stageIdx)}
                className={`group flex items-center gap-2 rounded-2xl border px-2.5 py-1.5 text-left transition-all duration-200 focus-visible:outline-2 focus-visible:outline-blue-500 ${
                  isActiveNode
                    ? node.isAi
                      ? 'border-blue-300/80 bg-blue-50/75 font-semibold text-slate-900 shadow-[0_6px_16px_-4px_rgba(59,130,246,0.2)]'
                      : 'border-slate-200 bg-white font-semibold text-slate-900 shadow-[0_6px_16px_-4px_rgba(30,41,59,0.08)]'
                    : 'border-slate-100 bg-slate-50/60 text-slate-600 hover:text-slate-900 hover:bg-white'
                }`}
              >
                <span
                  className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-lg transition-transform duration-200 ${
                    isActiveNode
                      ? 'bg-white shadow-2xs group-hover:scale-105'
                      : 'bg-white/75'
                  }`}
                >
                  <TechIcon name={node.name} className="h-3.5 w-3.5" />
                </span>
                <span className="truncate text-[0.71875rem] font-medium">
                  {node.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Phase Narrative & Outcome */}
      <motion.div
        key={activeStage.id}
        initial={{ opacity: 0, y: 4 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        className="relative mt-3.5 rounded-2xl bg-slate-50/80 px-4 py-2.5"
      >
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <span className="font-display text-xs font-semibold text-slate-800">
            {activeStage.index}. {activeStage.label[locale]}
          </span>
          <span className="text-[0.71875rem] font-medium text-blue-600">
            {activeStage.outputArtifact[locale]}
          </span>
        </div>
        <p className="mt-1 text-xs leading-relaxed text-slate-600">
          {activeStage.engineeringNote[locale]}
        </p>
      </motion.div>
    </div>
  );
}
