'use client';

import { useReducedMotion, motion } from 'framer-motion';

const proofPoints = [
  { value: '4+', label: 'Professional Experience' },
  { value: '25+', label: 'Projects Delivered' },
  { value: 'Frontend → Cloud', label: 'End-to-End Engineering' },
  { value: 'Web · Mobile · Backend', label: 'Cross-Platform Experience' },
];

export function ProofBar() {
  const prefersReduced = useReducedMotion();

  return (
    <section className="relative border-y border-border/40 bg-card/20">
      <div className="mx-auto w-full max-w-6xl px-5 sm:px-8">
        <dl className="grid grid-cols-2 divide-x divide-y divide-border/30 sm:grid-cols-4 sm:divide-y-0">
          {proofPoints.map((point, i) => (
            <div
              key={point.label}
              className="flex flex-col items-center justify-center px-4 py-7 text-center sm:py-8"
            >
              {prefersReduced ? (
                <>
                  <dt className="sr-only">{point.label}</dt>
                  <dd className="text-lg font-semibold tracking-tight text-foreground sm:text-xl">
                    {point.value}
                  </dd>
                  <dd className="mt-1.5 text-xs text-muted-foreground">
                    {point.label}
                  </dd>
                </>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                >
                  <dt className="sr-only">{point.label}</dt>
                  <dd className="text-lg font-semibold tracking-tight text-foreground sm:text-xl">
                    {point.value}
                  </dd>
                  <dd className="mt-1.5 text-xs text-muted-foreground">
                    {point.label}
                  </dd>
                </motion.div>
              )}
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
