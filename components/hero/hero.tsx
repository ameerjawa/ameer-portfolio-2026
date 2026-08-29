'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, FileDown, Github, Linkedin } from 'lucide-react';

import { siteConfig } from '@/data/site';
import { Button } from '@/components/ui/button';
import { StackDiagram } from '@/components/hero/stack-diagram';

export function Hero() {
  const prefersReduced = useReducedMotion();

  const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] as const },
    }),
  };

  return (
    <section className="relative overflow-hidden pt-32 pb-12 sm:pt-36 lg:pt-40">
      {/* Background layers */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-grid mask-fade-b opacity-[0.3]" />
        <div className="absolute left-1/4 top-0 h-[420px] w-[620px] -translate-x-1/2 rounded-full bg-accent/[0.08] blur-[140px]" />
      </div>

      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Left — copy */}
          <div className="flex flex-col items-start lg:col-span-7">
            {/* Availability badge */}
            {prefersReduced ? (
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/70 bg-secondary/30 px-3.5 py-1.5 text-xs text-muted-foreground">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                </span>
                {siteConfig.availability}
              </div>
            ) : (
              <motion.div
                custom={0}
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                className="mb-6 inline-flex items-center gap-2 rounded-full border border-border/70 bg-secondary/30 px-3.5 py-1.5 text-xs text-muted-foreground backdrop-blur-sm"
              >
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                </span>
                {siteConfig.availability}
              </motion.div>
            )}

            {/* Eyebrow */}
            <motion.p
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mb-4 font-mono text-sm uppercase tracking-[0.18em] text-accent"
            >
              {siteConfig.role}
            </motion.p>

            {/* Headline */}
            <motion.h1
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="max-w-3xl text-4xl font-semibold leading-[1.05] tracking-tight text-foreground text-balance sm:text-5xl lg:text-6xl"
            >
              Engineering scalable products from{' '}
              <span className="text-accent">interface to infrastructure.</span>
            </motion.h1>

            {/* Supporting copy */}
            <motion.p
              custom={3}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground text-pretty sm:text-lg"
            >
              I design and build full-stack products across frontend, backend,
              databases, and cloud infrastructure — primarily with React, Next.js,
              TypeScript, and Node.js.
            </motion.p>

            {/* CTAs */}
            <motion.div
              custom={4}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <Button asChild variant="accent" size="xl">
                <Link href="/#work">
                  Explore My Work
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="xl">
                <a href={siteConfig.resumePath} download>
                  <FileDown className="h-4 w-4" />
                  Download Resume
                </a>
              </Button>
            </motion.div>

            {/* Secondary links */}
            <motion.div
              custom={5}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mt-6 flex items-center gap-5 text-sm text-muted-foreground"
            >
              <a
                href={siteConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 transition-colors hover:text-foreground"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </a>
            </motion.div>
          </div>

          {/* Right — stack visualization */}
          <div className="lg:col-span-5">
            <div className="relative hidden lg:block">
              <StackDiagram />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
