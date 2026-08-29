export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  summary: string;
  highlights: string[];
  stack: string[];
}

export const experience: ExperienceItem[] = [
  {
    company: 'Upwork',
    role: 'Full Stack Developer',
    period: 'Jan 2023 — Present',
    summary:
      'Delivering full-stack web and mobile systems for international clients across SaaS, fintech, and internal tooling.',
    highlights: [
      'Delivered 25+ full-stack projects for international clients across web and mobile.',
      'Built systems with React, Node.js, TypeScript, and Express.',
      'Worked with PostgreSQL and MongoDB for transactional and document workloads.',
      'Migrated systems to AWS Lambda for event-driven workloads.',
      'Implemented authentication and application-level security solutions.',
      'Designed scalable application architectures for growing client products.',
    ],
    stack: ['React', 'Node.js', 'TypeScript', 'Express', 'PostgreSQL', 'MongoDB', 'AWS Lambda'],
  },
  {
    company: 'Mreshet',
    role: 'Full Stack Developer',
    period: 'Jun 2021 — Dec 2022',
    summary:
      'Built a SaaS website-builder platform and supporting systems across web and Android.',
    highlights: [
      'Developed a SaaS website-builder platform with React and Node.js.',
      'Built Android features with Kotlin alongside the web product.',
      'Used PostgreSQL for tenant data and Redis for caching and real-time pub/sub.',
      'Containerized services with Docker and maintained CI/CD pipelines.',
      'Implemented WebSockets for real-time collaboration and REST APIs for platform services.',
    ],
    stack: ['React', 'Node.js', 'PostgreSQL', 'Kotlin', 'Redis', 'Docker', 'WebSocket'],
  },
  {
    company: 'Freelance',
    role: 'Full Stack Developer',
    period: 'Jan 2020 — May 2021',
    summary:
      'Shipped end-to-end products spanning analytics, games, restaurant operations, healthcare, and bookings.',
    highlights: [
      'Built an analytics and task-management application.',
      'Developed an ML/neuroevolution game with adaptive logic.',
      'Shipped a restaurant order-management platform.',
      'Built a Flutter + Firebase medication-tracking app.',
      'Created a car-rental booking and payment system.',
    ],
    stack: ['React', 'Node.js', 'Flutter', 'Firebase', 'MongoDB'],
  },
];
