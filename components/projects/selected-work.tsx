import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

import { getFeaturedProjects } from '@/data/projects';
import { Section, SectionHeading } from '@/components/section';
import { ProjectCard } from '@/components/projects/project-card';
import { Button } from '@/components/ui/button';

export function SelectedWork() {
  const featured = getFeaturedProjects();

  return (
    <Section id="work">
      <SectionHeading
        eyebrow="Selected Work"
        title="Engineering evidence across the stack."
        description="Flagship projects spanning SaaS platforms, real-time systems, and mobile applications — each with architecture, challenges, and decisions."
      />

      <div className="mt-14 flex flex-col gap-16 lg:mt-20 lg:gap-24">
        {featured.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </div>

      <div className="mt-16 flex justify-center">
        <Button asChild variant="outline" size="lg">
          <Link href="/projects">
            View all projects
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>
    </Section>
  );
}
