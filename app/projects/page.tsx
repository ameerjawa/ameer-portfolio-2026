import { ArrowRight, ArrowUpRight } from 'lucide-react';

import { projects } from '@/data/projects';
import { Section, SectionHeading } from '@/components/section';
import { ProjectCard } from '@/components/projects/project-card';
import { Button } from '@/components/ui/button';

export const metadata = {
  title: 'Projects — Ameer Jawabra',
  description:
    'Full-stack software projects by Ameer Jawabra — React, Next.js, Node.js, mobile, and cloud systems.',
};

export default function ProjectsPage() {
  return (
    <main className="pt-28">
      <Section>
        <SectionHeading
          eyebrow="Projects"
          title="Engineering work across the stack."
          description="A collection of full-stack projects spanning web, mobile, backend, data, and cloud — each with architecture, challenges, and decisions."
        />
        <div className="mt-12 flex flex-col gap-6 lg:mt-16 lg:gap-8">
          {projects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
      </Section>
    </main>
  );
}
