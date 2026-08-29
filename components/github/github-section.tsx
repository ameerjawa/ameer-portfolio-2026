import { Github, ArrowUpRight, Star } from 'lucide-react';

import { featuredRepos } from '@/data/skills';
import { siteConfig } from '@/data/site';
import { Section, SectionHeading } from '@/components/section';
import { Reveal } from '@/components/motion/reveal';
import { Button } from '@/components/ui/button';

export function GitHubSection() {
  return (
    <Section id="github" className="border-t border-border/40">
      <SectionHeading
        eyebrow="Open Source"
        title="Code on GitHub."
        description="Selected repositories and code. Structured for live GitHub API integration."
      />

      <div className="mt-12 grid grid-cols-1 gap-5 lg:mt-16 md:grid-cols-2 lg:gap-6">
        {featuredRepos.map((repo) => (
          <Reveal key={repo.name}>
            <a
              href={repo.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex h-full flex-col rounded-xl border border-border/40 bg-card/30 p-6 transition-all duration-300 hover:border-accent/20 hover:bg-card/50"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-2.5">
                  <Github className="h-5 w-5 text-accent" />
                  <h3 className="font-mono text-base font-semibold text-foreground">
                    {repo.name}
                  </h3>
                </div>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-all group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground text-pretty">
                {repo.description}
              </p>
              <div className="mt-5 flex items-center gap-4 text-xs text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-accent" />
                  {repo.language}
                </span>
                {repo.stars != null && (
                  <span className="inline-flex items-center gap-1.5">
                    <Star className="h-3 w-3" />
                    {repo.stars}
                  </span>
                )}
              </div>
            </a>
          </Reveal>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <Button asChild variant="outline" size="lg">
          <a
            href={siteConfig.social.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="h-4 w-4" />
            Explore GitHub
          </a>
        </Button>
      </div>
    </Section>
  );
}
