import { GraduationCap, ShieldCheck, Globe, Code2 } from 'lucide-react';

import { education, languages } from '@/data/skills';
import { Section, SectionHeading } from '@/components/section';
import { Reveal } from '@/components/motion/reveal';

const focusAreas = [
  'Frontend',
  'Backend',
  'Databases',
  'Mobile',
  'Cloud',
  'Automation',
];

export function About() {
  return (
    <Section id="about" className="border-t border-border/40 bg-card/15">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-7">
          <SectionHeading
            eyebrow="About"
            title="An engineer who understands the whole system."
          />
          <Reveal delay={0.05}>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground text-pretty">
              <p>
                I&apos;m a full-stack software engineer who enjoys understanding the
                entire system rather than working at a single layer. My experience
                spans frontend, backend, databases, mobile, cloud, and automation —
                taking products from concept through production.
              </p>
              <p>
                I care about architecture decisions, data modeling, and the
                tradeoffs that make software maintainable over time. Whether
                it&apos;s a React interface, a Node.js API, or a cloud deployment
                pipeline, I build with the full picture in mind.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-2">
              {focusAreas.map((area) => (
                <span
                  key={area}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border/50 bg-secondary/20 px-3 py-1 text-xs text-muted-foreground"
                >
                  <Code2 className="h-3 w-3 text-accent" />
                  {area}
                </span>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-5">
          <Reveal delay={0.1}>
            {/* Education */}
            <div className="rounded-xl border border-border/40 bg-card/40 p-6">
              <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-foreground">
                <GraduationCap className="h-4 w-4 text-accent" />
                Education
              </h3>
              <div className="mt-5 flex flex-col gap-5">
                {education.map((edu) => (
                  <div key={edu.institution} className="flex flex-col gap-1">
                    <div className="flex items-baseline justify-between gap-3">
                      <span className="text-sm font-semibold text-foreground">
                        {edu.institution}
                      </span>
                      <span className="font-mono text-xs text-muted-foreground">
                        {edu.period}
                      </span>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {edu.qualification}
                    </span>
                    <span className="mt-1 text-xs leading-relaxed text-muted-foreground/80 text-pretty">
                      {edu.detail}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Languages */}
            <div className="mt-5 rounded-xl border border-border/40 bg-card/40 p-6">
              <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-foreground">
                <Globe className="h-4 w-4 text-accent" />
                Languages
              </h3>
              <div className="mt-4 flex flex-col gap-3">
                {languages.map((lang) => (
                  <div
                    key={lang.name}
                    className="flex items-baseline justify-between gap-4"
                  >
                    <span className="text-sm text-foreground">{lang.name}</span>
                    <span className="text-xs text-muted-foreground">{lang.level}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
