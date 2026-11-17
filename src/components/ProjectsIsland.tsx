import { useState } from 'react';
import { MotionConfig } from 'motion/react';
import { type Locale, type ProjectItem } from '../data/portfolioData';
import { ProjectsSection } from './ProjectsSection';
import { ProjectModal } from './ProjectModal';

interface ProjectsIslandProps {
  locale: Locale;
}

export function ProjectsIsland({ locale }: ProjectsIslandProps) {
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  return (
    <MotionConfig reducedMotion="user">
      <ProjectsSection locale={locale} onSelectProject={setSelectedProject} />
      <ProjectModal
        project={selectedProject}
        locale={locale}
        onClose={() => setSelectedProject(null)}
      />
    </MotionConfig>
  );
}
