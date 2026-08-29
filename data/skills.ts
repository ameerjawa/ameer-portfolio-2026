export interface SkillCategory {
  title: string;
  icon: string;
  skills: string[];
}

export const skills: SkillCategory[] = [
  {
    title: 'Frontend',
    icon: 'Layout',
    skills: [
      'React',
      'Next.js',
      'TypeScript',
      'JavaScript',
      'React Native',
      'Tailwind CSS',
    ],
  },
  {
    title: 'Backend',
    icon: 'Server',
    skills: [
      'Node.js',
      'Express',
      'PHP',
      'Laravel',
      'REST APIs',
      'GraphQL',
      'Socket.IO',
    ],
  },
  {
    title: 'Data',
    icon: 'Database',
    skills: [
      'PostgreSQL',
      'MongoDB',
      'MySQL',
      'Redis',
      'Firestore',
      'Firebase Realtime DB',
    ],
  },
  {
    title: 'Cloud & DevOps',
    icon: 'Cloud',
    skills: [
      'AWS',
      'Google Cloud',
      'Docker',
      'GitHub Actions',
      'NGINX',
      'CI/CD',
      'Cloudflare',
    ],
  },
  {
    title: 'Mobile & Desktop',
    icon: 'Smartphone',
    skills: [
      'React Native',
      'Flutter',
      'Kotlin',
      'Electron',
      'PWA',
    ],
  },
  {
    title: 'AI, Automation & Trading',
    icon: 'BrainCircuit',
    skills: [
      'AI Integration',
      'LLM APIs',
      'Workflow Automation',
      'Business Process Automation',
      'API Integrations',
      'Automated Systems',
      'Machine Learning',
      'Algorithmic Trading',
      'MQL5',
      'MetaTrader 5',
      'Pine Script',
      'Trading Automation',
    ],
  },
  {
    title: 'Testing & Engineering',
    icon: 'ShieldCheck',
    skills: [
      'Jest',
      'Mocha',
      'Cypress',
      'Postman',
      'Git',
      'GitHub',
      'Performance Testing',
    ],
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
      'Understand product goals, users, business requirements, and technical constraints before defining scope and success criteria.',
  },
  {
    step: '02',
    title: 'Architecture',
    description:
      'Design application boundaries, data models, APIs, authentication, integrations, automation flows, and infrastructure before unnecessary complexity accumulates.',
  },
  {
    step: '03',
    title: 'Interface',
    description:
      'Build responsive, accessible React interfaces with reusable components, clear UX, and predictable state management.',
  },
  {
    step: '04',
    title: 'Backend',
    description:
      'Design APIs, services, integrations, automation logic, and business workflows around maintainability, security, scalability, and performance.',
  },
  {
    step: '05',
    title: 'Data',
    description:
      'Choose appropriate relational, document, caching, and realtime data strategies based on application requirements and workload.',
  },
  {
    step: '06',
    title: 'Automation & AI',
    description:
      'Integrate AI services, external APIs, event-driven workflows, scheduled processes, and automated decision flows to reduce manual work and improve product capability.',
  },
  {
    step: '07',
    title: 'Testing',
    description:
      'Validate behavior with unit, integration, and end-to-end testing alongside performance and reliability checks.',
  },
  {
    step: '08',
    title: 'Deployment',
    description:
      'Prepare applications for production with cloud infrastructure, containerization, CI/CD, monitoring, security, and performance optimization.',
  },
  {
    step: '09',
    title: 'Iteration',
    description:
      'Monitor real usage, measure outcomes, resolve bottlenecks, and continuously ship improvements based on product feedback.',
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
    detail:
      'Graduated with Excellence. Final project: "Teach Me" — a cross-platform tutoring application built with Flutter and Firebase.',
  },
  {
    institution: 'ITSafe Cyber College',
    qualification: 'Cybersecurity Diploma',
    period: '2021',
    detail:
      'Focused on Linux, Python scripting, penetration testing, application security, and defensive engineering practices.',
  },
];

export const languages = [
  {
    name: 'Arabic',
    level: 'Native',
  },
  {
    name: 'English',
    level: 'Professional',
  },
  {
    name: 'Hebrew',
    level: 'Fluent',
  },
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
    description:
      'Personal portfolio and software engineering projects spanning full-stack development, cloud infrastructure, AI integrations, automation systems, and algorithmic trading.',
    language: 'TypeScript',
    url: 'https://github.com/ameerjawa',
  },
];
