import * as React from 'react';
import { cn } from '@/lib/utils';

interface BrowserFrameProps {
  children: React.ReactNode;
  className?: string;
  url?: string;
}

/**
 * A polished browser chrome wrapper for presenting project screenshots.
 * Keeps the product visual readable without excessive 3D.
 */
export function BrowserFrame({ children, className, url }: BrowserFrameProps) {
  return (
    <div
      className={cn(
        'overflow-hidden rounded-xl border border-border/60 bg-card shadow-[0_20px_60px_-30px_rgba(0,0,0,0.5)]',
        className
      )}
    >
      {/* Chrome bar */}
      <div className="flex items-center gap-2 border-b border-border/50 bg-secondary/30 px-4 py-2.5">
        <div className="flex gap-1.5" aria-hidden>
          <span className="h-2.5 w-2.5 rounded-full bg-border/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-border/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-border/80" />
        </div>
        {url && (
          <div className="ml-3 flex-1 truncate rounded-md border border-border/40 bg-background/60 px-3 py-1 font-mono text-[11px] text-muted-foreground">
            {url}
          </div>
        )}
      </div>
      {/* Content */}
      <div className="relative">{children}</div>
    </div>
  );
}
