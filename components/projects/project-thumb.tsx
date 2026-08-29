import * as React from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

interface ProjectThumbProps {
  src: string;
  alt: string;
  className?: string;
  label?: string;
  fill?: boolean;
}

/**
 * Renders a project thumbnail. Placeholder SVGs show a labeled gradient.
 * When a real raster image path is supplied, it renders via next/image.
 * Replace the SVG paths in data/projects.ts with real screenshots to upgrade.
 */
export function ProjectThumb({ src, alt, className, label, fill }: ProjectThumbProps) {
  const isPlaceholder = src.endsWith('.svg');

  if (isPlaceholder) {
    return (
      <div
        className={cn(
          'relative flex items-center justify-center overflow-hidden rounded-xl border border-border/60 bg-gradient-to-br from-secondary/50 via-card to-background',
          className
        )}
        aria-label={alt}
        role="img"
      >
        <div className="absolute inset-0 bg-dots opacity-20" />
        <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-accent/[0.08] blur-3xl" />
        <div className="relative z-10 flex flex-col items-center gap-3 p-8 text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg border border-border/70 bg-card/80 font-mono text-lg font-semibold text-accent">
            {(label ?? alt).slice(0, 2).toUpperCase()}
          </div>
          <span className="max-w-[14rem] text-sm text-muted-foreground">
            {label ?? alt}
          </span>
          <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground/50">
            Screenshot placeholder
          </span>
        </div>
      </div>
    );
  }

  if (fill) {
    return (
      <div className={cn('relative overflow-hidden rounded-xl border border-border/60', className)}>
        <Image src={src} alt={alt} fill className="" sizes="(max-width: 768px) 100vw, 50vw" />
      </div>
    );
  }

  return (
    <div className={cn('relative overflow-hidden rounded-xl border border-border/60', className)}>
      <Image src={src} alt={alt} width={1280} height={800} className="h-full w-full " sizes="(max-width: 768px) 100vw, 50vw" />
    </div>
  );
}
