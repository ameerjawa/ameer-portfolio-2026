import * as React from 'react';
import { cn } from '@/lib/utils';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id?: string;
  containerClassName?: string;
}

export function Section({
  children,
  className,
  containerClassName,
  id,
  ...props
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn('relative py-20 sm:py-28 lg:py-32', className)}
      {...props}
    >
      <div
        className={cn(
          'mx-auto w-full max-w-6xl px-5 sm:px-8',
          containerClassName
        )}
      >
        {children}
      </div>
    </section>
  );
}

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className,
}: SectionHeadingProps) {
  return (
    <div
      className={cn(
        'flex flex-col gap-4',
        align === 'center' && 'items-center text-center',
        className
      )}
    >
      {eyebrow && (
        <span className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-[0.2em] text-accent">
          <span className="h-px w-8 bg-accent/50" />
          {eyebrow}
        </span>
      )}
      <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-foreground text-balance sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'max-w-2xl text-base leading-relaxed text-muted-foreground text-pretty sm:text-lg',
            align === 'center' && 'mx-auto'
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}
