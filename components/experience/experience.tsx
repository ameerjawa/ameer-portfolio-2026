import { experience } from '@/data/experience';
import { Section, SectionHeading } from '@/components/section';
import { Reveal, Stagger, StaggerItem } from '@/components/motion/reveal';
import { TechTag } from '@/components/tech-tag';

export function Experience() {
  return (
    <Section id="experience" className="border-t border-border/40">
      <SectionHeading
        eyebrow="Experience"
        title="Engineering across roles and stacks."
        description="A track record of delivering full-stack systems for product companies, agencies, and clients — from SaaS platforms to mobile apps."
      />

      <div className="mt-12 lg:mt-16">
        <Stagger className="relative flex flex-col gap-8" stagger={0.1}>
          {/* Timeline line */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border/50 sm:left-[11px]" aria-hidden />

          {experience.map((item) => (
            <StaggerItem key={item.company} className="relative pl-8 sm:pl-12">
              {/* Node */}
              <span
                className="absolute left-0 top-1.5 flex h-4 w-4 items-center justify-center rounded-full border border-accent/40 bg-background sm:h-6 sm:w-6"
                aria-hidden
              >
                <span className="h-1.5 w-1.5 rounded-full bg-accent sm:h-2 sm:w-2" />
              </span>

              <div className="rounded-xl border border-border/40 bg-card/30 p-5 transition-colors hover:border-border/60 sm:p-6">
                <div className="flex flex-col gap-1">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                    <h3 className="text-lg font-semibold text-foreground sm:text-xl">
                      {item.role}
                      <span className="text-muted-foreground"> · {item.company}</span>
                    </h3>
                    <span className="font-mono text-xs text-muted-foreground">
                      {item.period}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground text-pretty">
                    {item.summary}
                  </p>
                </div>

                <ul className="mt-4 flex flex-col gap-2">
                  {item.highlights.map((h) => (
                    <li
                      key={h}
                      className="flex gap-3 text-sm leading-relaxed text-muted-foreground text-pretty"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent/70" />
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="mt-4 flex flex-wrap gap-2">
                  {item.stack.map((s) => (
                    <TechTag key={s} name={s} />
                  ))}
                </div>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </Section>
  );
}
