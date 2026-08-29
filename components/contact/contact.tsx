'use client';

import * as React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import {
  Loader2,
  CheckCircle2,
  AlertCircle,
  Mail,
  Linkedin,
  Github,
  FileDown,
} from 'lucide-react';

import { siteConfig } from '@/data/site';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Reveal } from '@/components/motion/reveal';
import { Section, SectionHeading } from '@/components/section';

const contactSchema = z.object({
  name: z.string().min(2, 'Please enter your name.'),
  email: z.string().email('Please enter a valid email address.'),
  company: z.string().optional(),
  message: z.string().min(10, 'Please share a bit more about your message.'),
  website: z.string().max(0, 'Spam detected.').optional(),
});

type ContactFormValues = z.infer<typeof contactSchema>;
type Status = 'idle' | 'submitting' | 'success' | 'error';

export function ContactForm() {
  const [status, setStatus] = React.useState<Status>('idle');
  const [errorMessage, setErrorMessage] = React.useState<string>('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { name: '', email: '', company: '', message: '', website: '' },
  });

  const onSubmit = async (values: ContactFormValues) => {
    setStatus('submitting');
    setErrorMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(values),
      });

      if (!res.ok) throw new Error('Failed to send message.');

      setStatus('success');
      reset();
    } catch {
      setStatus('error');
      setErrorMessage(
        'Something went wrong sending your message. Please email me directly at the address below.'
      );
    }
  };

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center justify-center rounded-xl border border-accent/30 bg-accent/5 p-8 text-center">
        <CheckCircle2 className="h-10 w-10 text-accent" />
        <h3 className="mt-4 text-lg font-semibold text-foreground">Message sent.</h3>
        <p className="mt-2 max-w-sm text-sm text-muted-foreground text-pretty">
          Thanks for reaching out. I&apos;ll get back to you shortly.
        </p>
        <Button variant="outline" size="sm" className="mt-5" onClick={() => setStatus('idle')}>
          Send another message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5" noValidate aria-label="Contact form">
      <div className="absolute -left-[9999px] h-px w-px overflow-hidden" aria-hidden>
        <label htmlFor="website">Website (leave empty)</label>
        <input id="website" type="text" autoComplete="off" tabIndex={-1} {...register('website')} />
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="flex flex-col gap-2">
          <Label htmlFor="name">Name <span className="text-accent">*</span></Label>
          <Input id="name" placeholder="Your name" aria-invalid={!!errors.name} {...register('name')} />
          {errors.name && <p className="text-xs text-destructive">{errors.name.message}</p>}
        </div>
        <div className="flex flex-col gap-2">
          <Label htmlFor="email">Email <span className="text-accent">*</span></Label>
          <Input id="email" type="email" placeholder="you@company.com" aria-invalid={!!errors.email} {...register('email')} />
          {errors.email && <p className="text-xs text-destructive">{errors.email.message}</p>}
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="company">Company</Label>
        <Input id="company" placeholder="Company (optional)" {...register('company')} />
      </div>

      <div className="flex flex-col gap-2">
        <Label htmlFor="message">Message <span className="text-accent">*</span></Label>
        <Textarea id="message" rows={5} placeholder="Tell me about the role or project..." aria-invalid={!!errors.message} {...register('message')} />
        {errors.message && <p className="text-xs text-destructive">{errors.message.message}</p>}
      </div>

      {status === 'error' && (
        <div className="flex items-start gap-2 rounded-md border border-destructive/30 bg-destructive/5 p-3 text-sm text-destructive">
          <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      <div className="flex items-center justify-between gap-4">
        <a href={`mailto:${siteConfig.email}`} className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground">
          <Mail className="h-4 w-4" />
          {siteConfig.email}
        </a>
        <Button type="submit" variant="accent" size="lg" disabled={status === 'submitting'}>
          {status === 'submitting' ? (
            <><Loader2 className="h-4 w-4 animate-spin" />Sending...</>
          ) : (
            'Send message'
          )}
        </Button>
      </div>
    </form>
  );
}

export function Contact() {
  return (
    <Section id="contact" className="border-t border-border/40">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionHeading
            eyebrow="Contact"
            title="Building the next thing?"
            description="I'm open to software engineering opportunities where I can contribute across product, frontend, backend, and infrastructure."
          />
          <Reveal delay={0.05}>
            <div className="mt-8 flex flex-col gap-2.5">
              <a
                href={`mailto:${siteConfig.email}`}
                className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <Mail className="h-4 w-4 text-accent" />
                {siteConfig.email}
              </a>
              <a
                href={siteConfig.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <Linkedin className="h-4 w-4 text-accent" />
                LinkedIn
              </a>
              <a
                href={siteConfig.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <Github className="h-4 w-4 text-accent" />
                GitHub
              </a>
              <a
                href={siteConfig.resumePath}
                download
                className="mt-2 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                <FileDown className="h-4 w-4 text-accent" />
                Download Resume (PDF)
              </a>
            </div>
          </Reveal>
        </div>

        <div className="lg:col-span-7">
          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-border/40 bg-card/30 p-6 sm:p-8">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </div>
    </Section>
  );
}
