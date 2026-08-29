'use client';

import { useRef } from 'react';
import { motion, useScroll, useReducedMotion } from 'framer-motion';

import { processSteps } from '@/data/skills';
import { Section, SectionHeading } from '@/components/section';
import { Reveal } from '@/components/motion/reveal';

export function Process() {
  const prefersReduced = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start center', 'end center'],
  });

  return (
    <Section id="process" className="border-t border-border/40 bg-card/15">
      <SectionHeading
        eyebrow="How I Engineer"
        title="From product idea to production."
        description="A repeatable engineering process that moves from discovery to deployment without losing sight of the product."
      />

      <div ref={containerRef} className="relative mt-12 lg:mt-16">
        {/* Track */}
        <div className="absolute left-[19px] top-0 h-full w-px bg-border/40 sm:left-[23px]" aria-hidden />
        {!prefersReduced && (
          <motion.div
            className="absolute left-[19px] top-0 w-px bg-gradient-to-b from-accent to-accent/30 sm:left-[23px]"
            style={{ scaleY: scrollYProgress, transformOrigin: 'top' }}
            aria-hidden
          />
        )}

        <div className="flex flex-col gap-6 lg:gap-8">
          {processSteps.map((step, i) => (
            <Reveal key={step.step} delay={i * 0.04} className="relative pl-12 sm:pl-16">
              <span className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg border border-border/60 bg-card font-mono text-sm font-semibold text-accent sm:h-12 sm:w-12">
                {step.step}
              </span>
              <div className="pt-1">
                <h3 className="text-base font-semibold text-foreground sm:text-lg">
                  {step.title}
                </h3>
                <p className="mt-2 max-w-xl text-sm leading-relaxed text-muted-foreground text-pretty sm:text-base">
                  {step.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
