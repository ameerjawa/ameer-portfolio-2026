'use client';

import { motion, useReducedMotion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

import { cn } from '@/lib/utils';
import type { ArchitectureNode } from '@/data/projects';

interface ArchitectureDiagramProps {
  nodes: ArchitectureNode[];
  className?: string;
}

/**
 * Vertical system diagram: Client → API → Backend → Data → Cloud.
 * Used on case-study pages. Nodes are connected with thin lines and a
 * subtle animated data pulse (disabled under reduced-motion).
 */
export function ArchitectureDiagram({ nodes, className }: ArchitectureDiagramProps) {
  const prefersReduced = useReducedMotion();

  return (
    <div className={cn('flex flex-col items-center', className)} role="img" aria-label="System architecture diagram">
      {nodes.map((node, i) => (
        <div key={node.label} className="flex flex-col items-center">
          <motion.div
            initial={prefersReduced ? false : { opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
            className={cn(
              'flex w-full max-w-md items-center gap-3 rounded-lg border bg-card/60 px-4 py-3.5',
              i === 0 ? 'border-accent/30' : 'border-border/50'
            )}
          >
            <span
              className={cn(
                'flex h-7 w-7 shrink-0 items-center justify-center rounded-md font-mono text-xs font-semibold',
                i === 0
                  ? 'border border-accent/40 bg-accent/10 text-accent'
                  : 'border border-border/70 bg-secondary/40 text-muted-foreground'
              )}
            >
              {i + 1}
            </span>
            <div className="flex flex-col">
              <span className="text-sm font-medium text-foreground">{node.label}</span>
              {node.detail && (
                <span className="text-xs text-muted-foreground">{node.detail}</span>
              )}
            </div>
          </motion.div>

          {i < nodes.length - 1 && (
            <div className="relative my-1 flex h-7 w-px items-center justify-center bg-border/60" aria-hidden>
              {!prefersReduced && (
                <motion.span
                  className="absolute h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_8px_2px_hsl(var(--accent)/0.4)]"
                  animate={{ y: [-10, 10], opacity: [0, 1, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.3, ease: 'easeInOut' }}
                />
              )}
              <ChevronDown className="h-3 w-3 text-border" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
