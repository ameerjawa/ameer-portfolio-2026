'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { Monitor, Layers, Server, Database, Cloud } from 'lucide-react';

import { cn } from '@/lib/utils';

interface StackLayer {
  label: string;
  sublabel: string;
  icon: typeof Monitor;
}

const layers: StackLayer[] = [
  { label: 'Interface', sublabel: 'React · Next.js', icon: Monitor },
  { label: 'Application', sublabel: 'TypeScript · State', icon: Layers },
  { label: 'API', sublabel: 'Node.js · Express', icon: Server },
  { label: 'Data', sublabel: 'PostgreSQL · MongoDB', icon: Database },
  { label: 'Infrastructure', sublabel: 'AWS · Docker', icon: Cloud },
];

/**
 * Hero visualization representing the Interface → Infrastructure concept.
 * Architected so it can later be swapped for a real flagship-project preview.
 */
export function StackDiagram({ className }: { className?: string }) {
  const prefersReduced = useReducedMotion();

  return (
    <div
      className={cn('relative flex flex-col items-center gap-0', className)}
      aria-label="Full-stack architecture: Interface to Infrastructure"
      role="img"
    >
      {/* Soft backdrop glow */}
      <div className="pointer-events-none absolute inset-0 -z-10 rounded-2xl bg-accent/[0.04] blur-2xl" />

      {layers.map((layer, i) => {
        const Icon = layer.icon;
        const isLast = i === layers.length - 1;
        return (
          <div key={layer.label} className="flex flex-col items-center">
            <motion.div
              initial={prefersReduced ? false : { opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              whileHover={prefersReduced ? undefined : { borderColor: 'hsl(var(--accent) / 0.4)' }}
              className={cn(
                'group flex w-full items-center gap-3 rounded-xl border bg-card/50 px-4 py-3 backdrop-blur-sm transition-colors',
                i === 0 ? 'border-accent/25' : 'border-border/50 hover:bg-card/70'
              )}
            >
              <span
                className={cn(
                  'flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border transition-colors',
                  i === 0
                    ? 'border-accent/40 bg-accent/10 text-accent'
                    : 'border-border/60 bg-secondary/40 text-muted-foreground group-hover:text-foreground'
                )}
              >
                <Icon className="h-4 w-4" />
              </span>
              <div className="flex flex-1 flex-col">
                <span className="text-sm font-medium text-foreground">{layer.label}</span>
                <span className="font-mono text-xs text-muted-foreground">{layer.sublabel}</span>
              </div>
              <span className="font-mono text-[10px] text-muted-foreground/50">
                0{i + 1}
              </span>
            </motion.div>

            {!isLast && (
              <div className="relative h-5 w-px bg-border/50" aria-hidden>
                {!prefersReduced && (
                  <motion.span
                    className="absolute left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-accent shadow-[0_0_6px_2px_hsl(var(--accent)/0.3)]"
                    animate={{ y: [0, 20], opacity: [0, 1, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, delay: i * 0.4, ease: 'easeInOut' }}
                  />
                )}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
