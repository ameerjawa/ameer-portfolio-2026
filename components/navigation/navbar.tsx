'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  motion,
  useMotionValueEvent,
  useScroll,
  AnimatePresence,
} from 'framer-motion';
import { Menu, X, Github, Linkedin, FileDown } from 'lucide-react';

import { cn } from '@/lib/utils';
import { siteConfig, navLinks } from '@/data/site';
import { Button } from '@/components/ui/button';

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState<string>('');
  const pathname = usePathname();
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (v) => {
    setScrolled(v > 12);
  });

  // Track active section on the homepage
  React.useEffect(() => {
    if (pathname !== '/') {
      setActiveSection('');
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );

    navLinks.forEach((link) => {
      const id = link.href.replace('/#', '');
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={cn(
          'transition-all duration-300',
          scrolled
            ? 'border-b border-border/60 bg-background/80 backdrop-blur-xl'
            : 'border-b border-transparent bg-transparent'
        )}
      >
        <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 sm:px-8">
          <Link
            href="/"
            className="group flex items-center gap-2.5"
            aria-label={`${siteConfig.name} — home`}
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-border/70 bg-secondary/40 font-mono text-sm font-semibold text-foreground transition-colors group-hover:border-accent/40 group-hover:text-accent">
              AJ
            </span>
            <span className="hidden flex-col leading-none sm:flex">
              <span className="text-sm font-semibold text-foreground">
                {siteConfig.name}
              </span>
              <span className="text-[11px] text-muted-foreground">
                {siteConfig.role}
              </span>
            </span>
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            {navLinks.map((link) => {
              const id = link.href.replace('/#', '');
              const isActive = activeSection === id;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    'relative rounded-md px-3 py-2 text-sm transition-colors',
                    isActive
                      ? 'text-foreground'
                      : 'text-muted-foreground hover:text-foreground'
                  )}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute -bottom-px left-3 right-3 h-px bg-accent"
                      transition={{ duration: 0.2 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          <div className="hidden items-center gap-2 md:flex">
            <Button asChild variant="ghost" size="icon" aria-label="GitHub">
              <a
                href={siteConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="ghost" size="icon" aria-label="LinkedIn">
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="accent" size="sm" className="ml-1">
              <a href={siteConfig.resumePath} download>
                <FileDown className="h-4 w-4" />
                View Resume
              </a>
            </Button>
          </div>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-md text-foreground md:hidden"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            onClick={() => setOpen((p) => !p)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden"
          >
            <div className="border-b border-border/60 bg-background/95 backdrop-blur-xl">
              <div className="mx-auto flex max-w-6xl flex-col gap-1 px-5 py-4 sm:px-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="rounded-md px-3 py-2.5 text-base text-muted-foreground transition-colors hover:bg-secondary/60 hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="mt-3 flex items-center gap-2 border-t border-border/50 pt-4">
                  <Button asChild variant="outline" size="sm" className="flex-1">
                    <a
                      href={siteConfig.social.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="h-4 w-4" />
                      GitHub
                    </a>
                  </Button>
                  <Button asChild variant="outline" size="sm" className="flex-1">
                    <a
                      href={siteConfig.social.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Linkedin className="h-4 w-4" />
                      LinkedIn
                    </a>
                  </Button>
                </div>
                <Button asChild variant="accent" size="lg" className="mt-2">
                  <a href={siteConfig.resumePath} download>
                    <FileDown className="h-4 w-4" />
                    Download Resume
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
