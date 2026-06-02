// Structured resume data that drives the Portfolio page.
// Update this file to keep the portfolio in sync with the latest resume.

export type Role = {
  title: string;
  period: string;
  location?: string;
  bullets: string[];
};

export type Experience = {
  company: string;
  roles: Role[];
};

export type LinkItem = {
  label: string;
  url: string;
};

export type PortfolioProject = {
  name: string;
  tagline: string;
  bullets?: string[];
  link?: LinkItem;
};

// Featured project shown in its own prominent section at the top of the page.
export type FeaturedProject = {
  name: string;
  tagline: string;
  bullets: string[];
  link: LinkItem;
};

export const intro =
  "Software engineer with extensive cloud experience, specializing in scalable AWS solutions, " +
  "automation, and applied AI. Below is a snapshot of my experience and projects.";

// The standout project — rendered in its own highlighted section.
export const featuredProject: FeaturedProject = {
  name: 'Thawe',
  tagline:
    'A professional networking app that connects entrepreneurs and professionals through a swipe-based matching system, enabling meaningful business relationships and collaboration opportunities.',
  bullets: [
    'Built a cross-platform professional networking mobile app (iOS & Android) using React Native, Expo, and TypeScript, featuring a swipe-based discovery interface, real-time messaging, and location-based search integrated with Firebase and a custom REST API.',
    'Applied agentic AI to add documentation, fix bugs, and develop features within the app using GitHub Copilot, Claude Code, and Codex.',
    'Architected a hybrid data model combining PostgreSQL for structured profile data with Firestore for real-time messaging, integrating Firebase Cloud Messaging for push notifications and Sightengine AI for automated content moderation at upload time.',
    'Engineered a location-based networking backend using Django REST Framework, PostgreSQL/PostGIS, and Firebase Auth, enabling geospatial user discovery with configurable radius filtering and full-text profile search with weighted relevance ranking.',
  ],
  link: { label: 'Visit thaweapp.com', url: 'https://thaweapp.com' },
};

export const experience: Experience[] = [
  {
    company: 'Principal Financial Group',
    roles: [
      {
        title: 'Software Engineer I - II',
        period: 'June 2024 – Present',
        location: 'Des Moines, IA (Remote)',
        bullets: [
          'Created a high volume internal API using AWS Lambda and DynamoDB to store and deliver customer-facing data.',
          'Managed team application operations during on-call shifts, actively monitoring metrics and escalating issues when needed.',
          'Built GitHub Actions workflows to automate the disaster recovery processes for our applications.',
          'Designed and implemented a scalable sync solution using TypeScript to keep data up to date using parallel asynchronous calls between several different internal APIs.',
          'Used Domain Driven Design to build up domain APIs using an event messaging architecture.',
        ],
      },
      {
        title: 'Software Engineering Intern',
        period: 'May 2023 – June 2024',
        location: 'Des Moines, IA (Remote)',
        bullets: [
          'Upgraded and maintained multiple Amazon Web Services (AWS) applications that incorporate domain-driven design.',
          'Created and maintained GitHub Actions workflows to automate the testing and deployment of applications.',
          'Implemented AWS alarms to track errors and alert the team when they occur.',
        ],
      },
    ],
  },
  {
    company: 'Thawe LLC',
    roles: [
      {
        title: 'Cofounder',
        period: 'August 2025 – Present',
        bullets: [
          'Designed and implemented a professional networking mobile app to allow users to connect with like-minded professionals in their area.',
          'Architected a Django backend prioritizing security and release velocity.',
          'Prioritized and implemented features based on market data and customer feedback.',
        ],
      },
    ],
  },
  {
    company: 'Kiewit',
    roles: [
      {
        title: 'Software Engineering Intern',
        period: 'May 2022 – August 2022',
        location: 'Omaha, NE (Hybrid)',
        bullets: [
          'Developed features for corporate applications while using scrum and agile development methodologies.',
          'Worked with other interns on a scrum team to develop features on an existing application.',
          'Added API calls and other functionality to a .NET application.',
        ],
      },
    ],
  },
  {
    company: 'University of Nebraska-Lincoln',
    roles: [
      {
        title: 'Software Engineering Teaching Assistant',
        period: 'August 2021 – May 2023',
        location: 'Lincoln, NE',
        bullets: [
          'Helped students in understanding and completing their coursework.',
          'Assisted in directing and grading labs.',
          'Explained difficult-to-understand concepts to first-time programmers.',
        ],
      },
    ],
  },
];

export const projects: PortfolioProject[] = [
  {
    name: 'Thawe',
    tagline:
      'A professional networking app that connects entrepreneurs and professionals through a swipe-based matching system. Featured in detail at the top of this page.',
    link: { label: 'Visit thaweapp.com', url: 'https://thaweapp.com' },
  },
  {
    name: 'Pizza Visualization Application',
    tagline: 'Displays pizzas within a pizza oven without the use of interior cameras.',
    bullets: [
      'Designed and created the user interface with JavaFX.',
      'Coded the algorithm in Java for displaying pizzas within an oven with the use of exterior cameras.',
      'Used webcam APIs to access, manipulate, and display images.',
    ],
  },
  {
    name: 'Relvo Alloy',
    tagline: 'Uses machine learning to speed up solving genetic algorithms in formal verification processes.',
    bullets: [
      'Created a reinforcement learning algorithm to optimize the speed of an existing formal verification software called EvoAlloy.',
      'Successfully decreased the time needed for the formal verification to complete in many cases.',
    ],
  },
  {
    name: 'Next.js AWS Website Template',
    tagline: 'Template for quickly creating and deploying websites out to AWS.',
    bullets: [
      'Used AWS CDK to create a reusable AWS application template.',
    ],
  },
];

export const links: LinkItem[] = [
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/maxbielstein' },
  { label: 'Website', url: 'https://www.maxbielstein.com' },
];

export const resumeUrl = '/files/Resume2026Q2.pdf';
