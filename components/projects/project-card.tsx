'use client';

import Link from 'next/link';
import { ArrowUpRight, ArrowRight, Check } from 'lucide-react';

import { cn } from '@/lib/utils';
import type { Project } from '@/data/projects';
import { TechTag } from '@/components/tech-tag';
import { ProjectThumb } from '@/components/projects/project-thumb';
import { BrowserFrame } from '@/components/projects/browser-frame';
import { Reveal } from '@/components/motion/reveal';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const reversed = index % 2 === 1;
  const number = String(index + 1).padStart(2, '0');

  return (
    <Reveal>
      <article className="group relative">
        <div
          className={cn(
            'grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12',
            reversed && 'lg:[&>div:first-child]:order-2'
          )}
        >
          {/* Visual */}
          <div className="lg:col-span-6">
            <Link
              href={`/projects/${project.slug}`}
              className="block"
              aria-label={`${project.title} — view case study`}
            >
              <div className="transition-transform duration-500 ease-out group-hover:translate-y-[-4px]">
                <BrowserFrame url={project.liveUrl ?? project.title}>
                  <ProjectThumb
                    src={project.thumbnail}
                    alt={project.title}
                    label={project.title}
                    className="aspect-[16/10] w-full"
                  />
                </BrowserFrame>
              </div>
            </Link>
          </div>

          {/* Content */}
          <div className="flex flex-col justify-center lg:col-span-6">
            <div className="flex items-center gap-3 text-xs text-muted-foreground">
              <span className="font-mono font-semibold text-accent">{number}</span>
              <span className="h-px w-6 bg-border" />
              <span className="font-mono uppercase tracking-wider">{project.category}</span>
              <span className="h-1 w-1 rounded-full bg-border" />
              <span className="font-mono">{project.year}</span>
            </div>

            <h3 className="mt-4 text-2xl font-semibold tracking-tight text-foreground text-balance sm:text-3xl">
              <Link
                href={`/projects/${project.slug}`}
                className="transition-colors hover:text-accent"
              >
                {project.title}
              </Link>
            </h3>

            <p className="mt-3 max-w-lg text-base leading-relaxed text-muted-foreground text-pretty">
              {project.summary}
            </p>

            {/* Engineering highlights */}
            <ul className="mt-5 flex flex-col gap-2">
              {project.engineeringHighlights.map((h) => (
                <li
                  key={h}
                  className="flex items-center gap-2.5 text-sm text-muted-foreground"
                >
                  <Check className="h-3.5 w-3.5 shrink-0 text-accent" />
                  {h}
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <TechTag key={tech} name={tech} />
              ))}
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-4">
              <Link
                href={`/projects/${project.slug}`}
                className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-accent"
              >
                View case study
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Live application
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  GitHub
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              )}
            </div>
          </div>
        </div>
      </article>
    </Reveal>
  );
}
