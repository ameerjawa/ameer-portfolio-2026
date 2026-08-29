import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowUpRight, Github, ExternalLink, Layers } from 'lucide-react';
import type { Metadata } from 'next';

import { projects, getProject } from '@/data/projects';
import { siteConfig } from '@/data/site';
import { Section } from '@/components/section';
import { TechList } from '@/components/tech-tag';
import { ProjectThumb } from '@/components/projects/project-thumb';
import { Button } from '@/components/ui/button';
import { Reveal } from '@/components/motion/reveal';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: 'Project not found' };

  return {
    title: `${project.title} — Ameer Jawabra`,
    description: project.summary,
    openGraph: {
      title: `${project.title} — Ameer Jawabra`,
      description: project.summary,
      url: `${siteConfig.url}/projects/${project.slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: `${project.title} — Ameer Jawabra`,
      description: project.summary,
    },
  };
}

export default async function ProjectCaseStudyPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const cs = project.caseStudy;

  return (
    <main className="pt-28">
      {/* Header */}
      <Section containerClassName="max-w-4xl">
        <Reveal>
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to projects
          </Link>

          <div className="mt-6 flex items-center gap-3 text-xs text-muted-foreground">
            <span className="font-mono">{project.year}</span>
            <span className="h-1 w-1 rounded-full bg-border" />
            <span>Case Study</span>
          </div>

          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-foreground text-balance sm:text-4xl lg:text-5xl">
            {project.title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground text-pretty sm:text-lg">
            {project.summary}
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            <TechList technologies={project.technologies} />
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            {project.liveUrl && (
              <Button asChild variant="accent" size="lg">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="h-4 w-4" />
                  Live Application
                </a>
              </Button>
            )}
            {project.githubUrl && (
              <Button asChild variant="outline" size="lg">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-4 w-4" />
                  Source Code
                </a>
              </Button>
            )}
          </div>
        </Reveal>
      </Section>

      {/* Hero image */}
      <Section className="py-0" containerClassName="max-w-5xl">
        <Reveal>
          <ProjectThumb
            src={project.thumbnail}
            alt={project.title}
            label={project.title}
            className="aspect-[16/9] w-full"
          />
        </Reveal>
      </Section>

      {cs && (
        <Section containerClassName="max-w-4xl" className="pt-12">
          <div className="flex flex-col gap-14 lg:gap-20">
            {/* Overview */}
            <Block eyebrow="Overview" title="What was built">
              <p>{cs.overview}</p>
            </Block>

            {/* Problem */}
            <Block eyebrow="The Problem" title="What it solved">
              <p>{cs.problem}</p>
            </Block>

            {/* Role */}
            <Block eyebrow="My Role" title="What I built">
              <p>{cs.role}</p>
            </Block>

            {/* Engineering */}
            <Block eyebrow="Engineering" title="How it was built">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                {cs.engineering.frontend && (
                  <EngineeringItem label="Frontend" text={cs.engineering.frontend} />
                )}
                {cs.engineering.backend && (
                  <EngineeringItem label="Backend" text={cs.engineering.backend} />
                )}
                {cs.engineering.apis && (
                  <EngineeringItem label="APIs" text={cs.engineering.apis} />
                )}
                {cs.engineering.database && (
                  <EngineeringItem label="Database" text={cs.engineering.database} />
                )}
                {cs.engineering.authentication && (
                  <EngineeringItem
                    label="Authentication"
                    text={cs.engineering.authentication}
                  />
                )}
                {cs.engineering.stateManagement && (
                  <EngineeringItem
                    label="State Management"
                    text={cs.engineering.stateManagement}
                  />
                )}
                {cs.engineering.infrastructure && (
                  <EngineeringItem
                    label="Infrastructure"
                    text={cs.engineering.infrastructure}
                  />
                )}
                {cs.engineering.deployment && (
                  <EngineeringItem
                    label="Deployment"
                    text={cs.engineering.deployment}
                  />
                )}
              </div>
            </Block>

            {/* Architecture */}
            {cs.architecture && cs.architecture.length > 0 && (
              <Block eyebrow="Architecture" title="System structure">
                <div className="flex flex-col gap-0">
                  {cs.architecture.map((node, i) => (
                    <div key={node.label} className="flex flex-col items-center">
                      <div className="flex w-full max-w-md items-center gap-3 rounded-lg border border-border/50 bg-card/40 px-4 py-3">
                        <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md border border-accent/30 bg-accent/10 font-mono text-xs text-accent">
                          {i + 1}
                        </span>
                        <div className="flex flex-col">
                          <span className="text-sm font-medium text-foreground">
                            {node.label}
                          </span>
                          {node.detail && (
                            <span className="text-xs text-muted-foreground">
                              {node.detail}
                            </span>
                          )}
                        </div>
                      </div>
                      {i < cs.architecture!.length - 1 && (
                        <div className="my-1 h-6 w-px bg-border/60" aria-hidden />
                      )}
                    </div>
                  ))}
                </div>
              </Block>
            )}

            {/* Challenges */}
            <Block eyebrow="Engineering Challenges" title="What was hard">
              <div className="flex flex-col gap-5">
                {cs.challenges.map((c) => (
                  <div
                    key={c.title}
                    className="rounded-lg border border-border/50 bg-card/40 p-5"
                  >
                    <h4 className="text-sm font-semibold text-foreground">
                      {c.title}
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground text-pretty">
                      {c.description}
                    </p>
                  </div>
                ))}
              </div>
            </Block>

            {/* Decisions */}
            <Block eyebrow="Decisions & Tradeoffs" title="Why these choices">
              <div className="flex flex-col gap-5">
                {cs.decisions.map((d) => (
                  <div
                    key={d.title}
                    className="rounded-lg border border-border/50 bg-card/40 p-5"
                  >
                    <h4 className="text-sm font-semibold text-foreground">
                      {d.title}
                    </h4>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground text-pretty">
                      {d.description}
                    </p>
                  </div>
                ))}
              </div>
            </Block>

            {/* Results */}
            {cs.results && cs.results.length > 0 && (
              <Block eyebrow="Results" title="Impact">
                <ul className="flex flex-col gap-3">
                  {cs.results.map((r) => (
                    <li
                      key={r}
                      className="flex gap-3 text-sm leading-relaxed text-muted-foreground text-pretty"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      {r}
                    </li>
                  ))}
                </ul>
              </Block>
            )}

            {/* Gallery */}
            {cs.gallery && cs.gallery.length > 0 && (
              <Block eyebrow="Gallery" title="Screenshots">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {cs.gallery.map((g) => (
                    <figure key={g.src}>
                      <ProjectThumb
                        src={g.src}
                        alt={g.alt}
                        label={g.alt}
                        className="aspect-[4/3] w-full"
                      />
                      {g.caption && (
                        <figcaption className="mt-2 text-xs text-muted-foreground">
                          {g.caption}
                        </figcaption>
                      )}
                    </figure>
                  ))}
                </div>
              </Block>
            )}

            {/* Technology */}
            <Block eyebrow="Technology" title="The stack">
              <TechList technologies={project.technologies} />
            </Block>
          </div>

          {/* Actions */}
          <div className="mt-16 flex flex-wrap items-center gap-3 border-t border-border/40 pt-8">
            <Button asChild variant="outline" size="lg">
              <Link href="/projects">
                <ArrowLeft className="h-4 w-4" />
                Back to projects
              </Link>
            </Button>
            {project.liveUrl && (
              <Button asChild variant="accent" size="lg">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="h-4 w-4" />
                  Live Application
                </a>
              </Button>
            )}
            {project.githubUrl && (
              <Button asChild variant="outline" size="lg">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-4 w-4" />
                  Source Code
                </a>
              </Button>
            )}
          </div>
        </Section>
      )}
    </main>
  );
}

function Block({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Reveal>
      <section className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <span className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
            {eyebrow}
          </span>
          <h2 className="mt-2 text-xl font-semibold text-foreground sm:text-2xl">
            {title}
          </h2>
        </div>
        <div className="lg:col-span-8">
          <div className="text-sm leading-relaxed text-muted-foreground text-pretty sm:text-base [&_p]:leading-relaxed">
            {children}
          </div>
        </div>
      </section>
    </Reveal>
  );
}

function EngineeringItem({ label, text }: { label: string; text: string }) {
  return (
    <div className="rounded-lg border border-border/50 bg-card/40 p-5">
      <h4 className="text-xs font-semibold uppercase tracking-wider text-accent">
        {label}
      </h4>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground text-pretty">
        {text}
      </p>
    </div>
  );
}
