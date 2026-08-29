'use client';

import {
  Layout,
  Server,
  Database,
  Cloud,
  Smartphone,
  ShieldCheck,
  type LucideIcon,
} from 'lucide-react';

import { skills } from '@/data/skills';
import { Section, SectionHeading } from '@/components/section';
import { Stagger, StaggerItem } from '@/components/motion/reveal';

const iconMap: Record<string, LucideIcon> = {
  Layout,
  Server,
  Database,
  Cloud,
  Smartphone,
  ShieldCheck,
};

export function Stack() {
  return (
    <Section id="stack" className="border-t border-border/40">
      <SectionHeading
        eyebrow="Engineering Stack"
        title="Tools by discipline."
        description="The technologies I use to design, build, ship, and maintain production software — grouped by engineering layer."
      />

      <Stagger
        className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-5"
        stagger={0.06}
      >
        {skills.map((cat) => {
          const Icon = iconMap[cat.icon] ?? Layout;
          return (
            <StaggerItem key={cat.title}>
              <div className="group h-full rounded-xl border border-border/40 bg-card/30 p-5 transition-all duration-300 hover:border-accent/20 hover:bg-card/50">
                <div className="flex items-center gap-2.5">
                  <span className="flex h-8 w-8 items-center justify-center rounded-md border border-border/60 bg-secondary/30 text-accent transition-colors group-hover:border-accent/30">
                    <Icon className="h-4 w-4" />
                  </span>
                  <h3 className="text-sm font-semibold text-foreground">
                    {cat.title}
                  </h3>
                </div>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {cat.skills.map((s) => (
                    <span
                      key={s}
                      className="rounded-md border border-border/50 bg-secondary/20 px-2 py-0.5 font-mono text-xs text-muted-foreground transition-colors hover:border-accent/20 hover:text-foreground"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </StaggerItem>
          );
        })}
      </Stagger>
    </Section>
  );
}
