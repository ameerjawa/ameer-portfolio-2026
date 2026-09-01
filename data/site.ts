export const siteConfig = {
  name: 'Ameer Jawabra',
  role: 'Full Stack Software Engineer',
  specialization: 'React · Next.js · TypeScript · Node.js · Cloud',
  location: 'Canada',
  availability: 'Open to software engineering opportunities',
  email: 'ameer0233@gmail.com',
  social: {
    github: 'https://github.com/ameerjawa',
    linkedin: 'https://www.linkedin.com/in/ameer-jawabra-730a62191/',
  },
  resumePath: '/resume/Ameer_Jawabra_Resume_2026.pdf',
  url: 'https://ameerjawabra.dev',
  description:
    'Full Stack Software Engineer specializing in React, Next.js, TypeScript, and Node.js. Building scalable web, mobile, backend, and cloud systems.',
} as const;

export type SiteConfig = typeof siteConfig;

export const navLinks = [
  { label: 'Work', href: '/#work' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Stack', href: '/#stack' },
  { label: 'About', href: '/#about' },
  { label: 'Contact', href: '/#contact' },
] as const;
