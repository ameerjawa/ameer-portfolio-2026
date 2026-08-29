export interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
}

export const skills: SkillCategory[] = [
  {
    title: 'Frontend',
    icon: 'Layout',
    skills: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'React Native', 'Tailwind CSS'],
  },
  {
    title: 'Backend',
    icon: 'Server',
    skills: ['Node.js', 'Express', 'PHP', 'Laravel', 'REST APIs', 'GraphQL', 'Socket.IO'],
  },
  {
    title: 'Data',
    icon: 'Database',
    skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Firestore'],
  },
  {
    title: 'Cloud & DevOps',
    icon: 'Cloud',
    skills: ['AWS', 'Docker', 'GitHub Actions', 'NGINX', 'CI/CD', 'Google Cloud'],
  },
  {
    title: 'Mobile & Desktop',
    icon: 'Smartphone',
    skills: ['React Native', 'Flutter', 'Kotlin', 'Electron'],
  },
  {
    title: 'Testing & Engineering',
    icon: 'ShieldCheck',
    skills: ['Jest', 'Mocha', 'Cypress', 'Postman', 'Git', 'GitHub'],
  },
];

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export const processSteps: ProcessStep[] = [
  {
    step: '01',
    title: 'Discovery',
    description:
      'Understand the product goals, constraints, and users before writing a line of code — defining scope and success criteria.',
  },
  {
    step: '02',
    title: 'Architecture',
    description:
      'Design application boundaries, data models, APIs, authentication, and infrastructure before unnecessary complexity accumulates.',
  },
  {
    step: '03',
    title: 'Interface',
    description:
      'Build responsive, accessible React interfaces with reusable components and clear state management.',
  },
  {
    step: '04',
    title: 'Backend',
    description:
      'Design APIs and business logic around maintainability, security, and performance.',
  },
  {
    step: '05',
    title: 'Data',
    description:
      'Choose appropriate relational, document, caching, and realtime strategies for the workload.',
  },
  {
    step: '06',
    title: 'Testing',
    description:
      'Validate behavior with unit, integration, and end-to-end tests alongside performance checks.',
  },
  {
    step: '07',
    title: 'Deployment',
    description:
      'Containerization, CI/CD, cloud infrastructure, performance, and production readiness.',
  },
  {
    step: '08',
    title: 'Iteration',
    description:
      'Monitor, measure, and refine based on real usage — shipping improvements continuously.',
  },
];

export interface EducationItem {
  institution: string;
  qualification: string;
  period: string;
  detail: string;
}

export const education: EducationItem[] = [
  {
    institution: 'Technion',
    qualification: 'Practical Software Engineering Diploma',
    period: '2018 — 2021',
    detail: 'Graduated with Excellence. Final project: "Teach Me" — a cross-platform tutoring application built with Flutter and Firebase.',
  },
  {
    institution: 'ITSafe Cyber College',
    qualification: 'Cybersecurity Diploma',
    period: '2021',
    detail: 'Focused on application security, threat modeling, and defensive engineering practices.',
  },
];

export const languages = [
  { name: 'Arabic', level: 'Native' },
  { name: 'English', level: 'Professional' },
  { name: 'Hebrew', level: 'Fluent' },
];

export interface FeaturedRepo {
  name: string;
  description: string;
  language: string;
  url: string;
  stars?: number;
  updatedAt?: string;
}

export const featuredRepos: FeaturedRepo[] = [
  {
    name: 'ameerjawa',
    description: 'Personal portfolio — Next.js, TypeScript, Tailwind CSS, Framer Motion.',
    language: 'TypeScript',
    url: 'https://github.com/ameerjawa',
  },
];
