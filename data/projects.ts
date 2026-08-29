export interface ProjectChallenge {
  title: string;
  description: string;
}

export interface ArchitectureNode {
  label: string;
  detail?: string;
}


export interface ProjectCaseStudy {
  overview: string;
  problem: string;
  role: string;
  engineering: {
    frontend?: string;
    backend?: string;
    apis?: string;
    database?: string;
    authentication?: string;
    stateManagement?: string;
    infrastructure?: string;
    deployment?: string;
  };
  architecture?: ArchitectureNode[];
  challenges: ProjectChallenge[];
  decisions: { title: string; description: string }[];
  results?: string[];
  gallery?: { src: string; alt: string; caption?: string }[];
}

export type ProjectCategory =
  | 'Web Platform'
  | 'SaaS'
  | 'Real-Time'
  | 'Mobile'
  | 'Internal Tool';

export interface Project {
  slug: string;
  title: string;
  category: ProjectCategory;
  summary: string;
  description: string;
  role: string;
  year: string;
  featured: boolean;
  technologies: string[];
  /** Short engineering bullet list shown on the flagship card. */
  engineeringHighlights: string[];
  thumbnail: string;
  liveUrl?: string;
  githubUrl?: string;
  caseStudy?: ProjectCaseStudy;
}

export const projects: Project[] = [
  {
    slug: 'saas-website-builder',
    title: 'SaaS Website Builder Platform',
    category: 'SaaS',
    summary:
      'A multi-tenant website-builder enabling non-technical users to launch production sites with custom themes, domains, and content.',
    description:
      'A SaaS platform that lets users design, configure, and publish responsive websites through a visual editor, with templated rendering, real-time content updates, and per-tenant isolation.',
    role: 'Full Stack Developer — frontend editor, Node.js backend, PostgreSQL data model, and deployment pipeline.',
    year: '2022',
    featured: true,
    technologies: ['React', 'Node.js', 'PostgreSQL', 'Redis', 'Docker', 'WebSocket'],
    engineeringHighlights: [
      'Multi-tenant data architecture',
      'Real-time collaborative editing',
      'Dockerized CI/CD pipeline',
    ],
    thumbnail: '/gomixapp.png',
    liveUrl: "https://editor.gomixapp.com/",
    githubUrl: undefined,
    caseStudy: {
      overview:
        'A multi-tenant website-builder SaaS where users create, theme, and publish websites through a visual editor. Built for the Mreshet product line.',
      problem:
        'Non-technical users needed to launch and maintain production-quality websites without involving developers, while the platform maintained strict tenant isolation and real-time content updates.',
      role:
        'Built the visual editor frontend, designed the Node.js API and PostgreSQL multi-tenant schema, implemented WebSocket-based real-time collaboration, and owned the Docker-based deployment pipeline.',
      engineering: {
        frontend:
          'React-based visual editor with a component tree model, drag-and-drop layout, and live preview rendering.',
        backend:
          'Node.js + Express REST API handling tenant provisioning, content persistence, and theme compilation.',
        apis: 'RESTful endpoints for site CRUD, theme management, and publishing; WebSocket events for live edits.',
        database:
          'PostgreSQL with per-tenant row-level isolation, Redis for session caching and real-time pub/sub.',
        stateManagement: 'Normalized client store for the editor canvas with optimistic updates.',
        infrastructure: 'Dockerized services behind NGINX with Redis for caching and pub/sub.',
        deployment: 'CI/CD pipeline with containerized builds and zero-downtime rollouts.',
      },
      architecture: [
        { label: 'Visual Editor (React)', detail: 'Drag-and-drop canvas + live preview' },
        { label: 'API Gateway (NGINX)', detail: 'Routing, TLS, rate limiting' },
        { label: 'Node.js / Express', detail: 'Tenant logic, content, publishing' },
        { label: 'WebSocket Layer', detail: 'Real-time collaborative edits' },
        { label: 'PostgreSQL + Redis', detail: 'Tenant data + cache/pub-sub' },
        { label: 'Docker Deployment', detail: 'CI/CD, containerized rollouts' },
      ],
      challenges: [
        {
          title: 'Multi-tenant data isolation',
          description:
            'Designed a PostgreSQL schema with tenant-scoped rows and enforced access boundaries at the API layer to prevent cross-tenant data leakage.',
        },
        {
          title: 'Real-time collaborative editing',
          description:
            'Implemented WebSocket-based presence and live edit propagation with Redis pub/sub, handling conflict resolution for concurrent edits.',
        },
        {
          title: 'Theme compilation performance',
          description:
            'Cached compiled theme assets and streamed incremental updates to avoid full re-renders on every edit.',
        },
      ],
      decisions: [
        {
          title: 'Row-level tenant isolation over schema-per-tenant',
          description:
            'Chose a shared schema with tenant IDs to keep migrations manageable as the tenant count grew, trading query complexity for operational simplicity.',
        },
        {
          title: 'Redis pub/sub for collaboration',
          description:
            'Used Redis as the WebSocket fan-out backbone to keep the Node.js processes stateless and horizontally scalable.',
        },
      ],
      results: [
        'Shipped and maintained the platform as part of the Mreshet product offering.',
        'Enabled non-technical users to launch sites end-to-end without engineering involvement.',
      ],
      gallery: [],
    },
  },
  {
    slug: 'analytics-task-platform',
    title: 'Analytics & Task Management Application',
    category: 'Web Platform',
    summary:
      'A team analytics dashboard with task management, reporting, and role-based access for tracking productivity metrics.',
    description:
      'A web application combining analytics dashboards with task management workflows, giving teams visibility into productivity and progress through customizable reports and role-based views.',
    role: 'Full Stack Developer — React dashboard, Node.js API, and reporting pipeline.',
    year: '2021',
    featured: true,
    technologies: ['React', 'Node.js', 'Express', 'PostgreSQL', 'REST'],
    engineeringHighlights: [
      'Role-based access control',
      'Server-side metric rollups',
      'JWT authentication',
    ],
    thumbnail: '/lifesync.png',
    liveUrl: undefined,
    githubUrl: undefined,
    caseStudy: {
      overview:
        'A combined analytics and task-management application that gives teams real-time productivity dashboards alongside structured task workflows.',
      problem:
        'Teams were tracking tasks and metrics in separate tools with no unified view, making it hard to connect day-to-day work to productivity trends.',
      role:
        'Built the React dashboard and charting layer, designed the Node.js/Express API, and implemented the PostgreSQL data model for tasks and metrics.',
      engineering: {
        frontend:
          'React dashboard with role-based views, chart visualizations, and task board interactions.',
        backend: 'Node.js + Express REST API for tasks, users, and aggregated metrics.',
        database: 'PostgreSQL schema for tasks, time entries, and rollup metrics.',
        authentication: 'JWT-based auth with role-based access control.',
      },
      challenges: [
        {
          title: 'Aggregated metrics at scale',
          description:
            'Built rollup queries and caching to keep dashboard load times fast as task volume grew.',
        },
        {
          title: 'Role-based access',
          description:
            'Implemented fine-grained permissions so users only saw the projects and metrics they had access to.',
        },
      ],
      decisions: [
        {
          title: 'Server-side rollups over client aggregation',
          description:
            'Computed metric aggregations in PostgreSQL and cached hot ranges to avoid pushing heavy aggregation to the browser.',
        },
      ],
      gallery: [],
    },
  },
  {
    slug: 'restaurant-order-management',
    title: 'Restaurant Order Management Platform',
    category: 'Real-Time',
    summary:
      'A real-time order management system handling kitchen tickets, table status, and order flow for restaurant operations.',
    description:
      'A real-time platform for restaurants to manage incoming orders, kitchen tickets, and table status from a single operational view, with live updates across stations.',
    role: 'Full Stack Developer — real-time frontend, Node.js + Socket.IO backend.',
    year: '2021',
    featured: true,
    technologies: ['React', 'Node.js', 'Socket.IO', 'MongoDB', 'REST'],
    engineeringHighlights: [
      'Sub-second order routing',
      'Socket.IO event architecture',
      'Connection resilience',
    ],
    thumbnail: '/smartRestaurant.png',
    liveUrl: undefined,
    githubUrl: undefined,
    caseStudy: {
      overview:
        'A real-time order-management platform that routes orders to kitchen stations and tracks table status across the restaurant floor.',
      problem:
        'Restaurants needed a single live view of orders, kitchen tickets, and table status instead of relying on paper tickets and disconnected POS systems.',
      role:
        'Built the real-time React frontend and the Node.js + Socket.IO backend powering live order routing.',
      engineering: {
        frontend: 'React interface with live order boards and station-specific views.',
        backend: 'Node.js + Socket.IO for real-time order events and state synchronization.',
        database: 'MongoDB for order history and menu data.',
        stateManagement: 'Socket-driven client state with optimistic order updates.',
      },
      challenges: [
        {
          title: 'Low-latency order routing',
          description:
            'Engineered the Socket.IO event layer to keep order updates sub-second across multiple kitchen stations.',
        },
        {
          title: 'Connection resilience',
          description:
            'Handled reconnections and state reconciliation so stations recovered gracefully after network drops.',
        },
      ],
      decisions: [
        {
          title: 'Socket.IO over polling',
          description:
            'Chose Socket.IO for its built-in reconnection and room-based broadcasting, which mapped cleanly to per-station views.',
        },
        {
          title: 'MongoDB for order flexibility',
          description:
            'Used a document model for orders to accommodate variable menu structures without rigid schemas.',
        },
      ],
      gallery: [],
    },
  },
  {
    slug: 'medication-app',
    title: 'Medication Tracking Application',
    category: 'Mobile',
    summary:
      'A cross-platform mobile app for medication reminders, adherence tracking, and dose history with Firebase sync.',
    description:
      'A Flutter + Firebase mobile application that helps users track medication schedules, receive reminders, and review adherence history across devices.',
    role: 'Mobile Developer — Flutter app, Firebase backend, and sync layer.',
    year: '2020',
    featured: true,
    technologies: ['Flutter', 'Firebase', 'Firestore', 'PWA'],
    engineeringHighlights: [
      'Offline-first sync',
      'Cross-platform (iOS + Android)',
      'Local notification scheduling',
    ],
    thumbnail: '/medi.png',
    liveUrl: undefined,
    githubUrl: undefined,
    caseStudy: {
      overview:
        'A cross-platform medication-tracking app with reminders, adherence history, and cloud sync.',
      problem:
        'Users needed reliable medication reminders and a clear adherence history accessible across devices.',
      role:
        'Built the Flutter mobile app and configured the Firebase backend for auth, Firestore sync, and push notifications.',
      engineering: {
        frontend: 'Flutter UI with local notifications and offline-first sync.',
        backend: 'Firebase Cloud Functions for reminders and Firestore for data sync.',
        database: 'Firestore with offline persistence and multi-device sync.',
        authentication: 'Firebase Authentication with anonymous and email providers.',
      },
      challenges: [
        {
          title: 'Offline-first sync',
          description:
            'Implemented Firestore offline persistence with conflict handling for multi-device edits.',
        },
        {
          title: 'Reliable reminders',
          description:
            'Used local notifications with a scheduled job to ensure reminders fired even without connectivity.',
        },
      ],
      decisions: [
        {
          title: 'Flutter for cross-platform reach',
          description:
            'Chose Flutter to ship iOS and Android from a single codebase while keeping native notification behavior.',
        },
      ],
      gallery: [],
    },
  },
  {
  slug: 'teachme-tutoring-app',
  title: 'TeachMe — Tutoring & Learning App',
  category: 'Mobile',
  summary:
    'A cross-platform tutoring application connecting students with teachers, courses, level exams, and scheduled lessons.',
  description:
    'TeachMe is a cross-platform learning application built as my Practical Software Engineering diploma project. The app allows students to search for teachers, discover courses, take level-based exams, manage lessons, and authenticate through a mobile-first experience.',
  role:
    'Full Stack / Mobile Developer — Flutter application development, Firebase integration, authentication, and application data flows.',
  year: '2021',
  featured: true,

  technologies: [
    'Flutter',
    'Dart',
    'Firebase',
    'Firebase Auth',
  ],

  engineeringHighlights: [
    'Cross-platform mobile application',
    'Teacher and course discovery',
    'Authentication and learning workflows',
  ],

  // Put your generated TeachMe portfolio image inside /public
  // Example: public/teachme.png
  thumbnail: '/teachme.png',

  liveUrl: undefined,

  // Add this later if you upload the source code to GitHub
  githubUrl: undefined,

  caseStudy: {
    overview:
      'TeachMe is a cross-platform tutoring and learning application created as my final Practical Software Engineering diploma project. It combines teacher discovery, courses, level exams, lesson management, and user authentication in one mobile application.',

    problem:
      'Students often need separate tools to find teachers, discover learning material, test their current level, and manage lessons. TeachMe was designed to bring those learning workflows into one mobile experience.',

    role:
      'Designed and developed the mobile application using Flutter and Dart, integrated Firebase services, implemented authentication flows, and built the main student learning experiences including teacher search, exams, courses, and lessons.',

    engineering: {
      frontend:
        'Flutter-based cross-platform interface supporting the main learning workflows across mobile devices.',

      backend:
        'Firebase services were used to support application data and backend functionality.',

      authentication:
        'Authentication experience included account sign-in and Google sign-in functionality.',

      stateManagement:
        'Application state coordinates authentication, course discovery, exam browsing, teacher discovery, and lesson workflows.',

      deployment:
        'Built as a cross-platform mobile application as the final Practical Software Engineering diploma project.',
    },

    architecture: [
      {
        label: 'Flutter Mobile App',
        detail: 'Cross-platform user interface built with Dart',
      },
      {
        label: 'Authentication',
        detail: 'User sign-in and account access',
      },
      {
        label: 'Learning Features',
        detail: 'Teachers, exams, courses, and lessons',
      },
      {
        label: 'Firebase',
        detail: 'Application backend services and data integration',
      },
    ],

    challenges: [
      {
        title: 'Multiple learning workflows',
        description:
          'Designed the application to combine teacher discovery, courses, exams, and lesson management while keeping navigation understandable for students.',
      },
      {
        title: 'Cross-platform application development',
        description:
          'Built the application with Flutter to maintain a shared mobile codebase and consistent application behavior across supported platforms.',
      },
      {
        title: 'Authentication integration',
        description:
          'Connected user authentication with the learning experience so authenticated users could access personalized application functionality.',
      },
    ],

    decisions: [
      {
        title: 'Flutter for the mobile client',
        description:
          'Flutter enabled the application to be developed from a shared Dart codebase while maintaining a mobile-focused interface.',
      },
      {
        title: 'Firebase for application services',
        description:
          'Firebase provided integrated backend services suitable for authentication and application data requirements.',
      },
    ],

    results: [
      'Completed as the final project for the Practical Software Engineering diploma.',
      'Delivered a working mobile application combining teacher search, level exams, courses, lessons, and authentication.',
    ],

    gallery: [
      {
        src: '/images/projects/teachme/home.jpg',
        alt: 'TeachMe main application screen',
        caption: 'Main learning dashboard',
      },
      {
        src: '/images/projects/teachme/exams.jpg',
        alt: 'TeachMe level exams screen',
        caption: 'Level exam discovery',
      },
      {
        src: '/images/projects/teachme/courses.jpg',
        alt: 'TeachMe courses screen',
        caption: 'Course discovery by category',
      },
      {
        src: '/images/projects/teachme/lessons.jpg',
        alt: 'TeachMe lessons screen',
        caption: 'Scheduled lesson management',
      },
      {
        src: '/images/projects/teachme/login.jpg',
        alt: 'TeachMe authentication screen',
        caption: 'User authentication',
      },
    ],
  },
},
];

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}
