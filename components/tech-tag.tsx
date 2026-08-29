import * as React from 'react';
import { cn } from '@/lib/utils';

interface TechTagProps extends React.HTMLAttributes<HTMLSpanElement> {
  name: string;
}

export function TechTag({ name, className, ...props }: TechTagProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-md border border-border/80 bg-secondary/40 px-2.5 py-1 font-mono text-xs text-muted-foreground transition-colors',
        className
      )}
      {...props}
    >
      {name}
    </span>
  );
}

interface TechListProps {
  technologies: string[];
  className?: string;
}

export function TechList({ technologies, className }: TechListProps) {
  return (
    <div className={cn('flex flex-wrap gap-2', className)}>
      {technologies.map((tech) => (
        <TechTag key={tech} name={tech} />
      ))}
    </div>
  );
}
