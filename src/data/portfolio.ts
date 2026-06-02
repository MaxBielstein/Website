// Structured resume data that drives the Portfolio page.
// Update this file to keep the portfolio in sync with the latest resume.

export type Role = {
  title: string;
  period: string;
  location: string;
  bullets: string[];
};

export type Experience = {
  company: string;
  roles: Role[];
};

export type PortfolioProject = {
  name: string;
  tagline: string;
  bullets: string[];
};

export type LinkItem = {
  label: string;
  url: string;
};

export const intro =
  "Software engineer with extensive cloud experience, specializing in scalable AWS solutions, " +
  "automation, and applied AI. Below is a snapshot of my experience and projects.";

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
];

export const links: LinkItem[] = [
  { label: 'LinkedIn', url: 'https://www.linkedin.com/in/maxbielstein' },
  { label: 'Website', url: 'https://www.maxbielstein.com' },
];

export const resumeUrl = '/files/Resume2026Q2.pdf';
