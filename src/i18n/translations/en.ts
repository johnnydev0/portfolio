import type { Translations } from './types';

export const en: Translations = {
  nav: {
    about: 'About',
    projects: 'Projects',
    experience: 'Experience',
    contact: 'Contact',
    hire: 'Hire Me',
  },

  hero: {
    tagline: '+4 years developing projects, architecting scalable solutions and delivering end-to-end products.',
    viewProjects: 'View Projects',
    getInTouch: 'Get in Touch',
    typingWords: ['Building products', 'Architecting solutions', 'Scaling systems', 'Crafting experiences'],
    clicksRemaining: 'clicks remaining...',
  },

  about: {
    sectionTag: '// about',
    title: 'About',
    titleHighlight: 'Me',
    paragraph1: 'With over 4 years of experience in software development, I have worked both in multidisciplinary teams and as the sole engineer responsible for complete products.',
    paragraph2: 'My focus is on building scalable applications with clean code, solid architecture, and excellent user experience. I believe good software solves real problems elegantly.',
    paragraph3: 'Specialized in React, Next.js, TypeScript, and Node.js, with experience in cloud computing, DevOps, and agile methodologies.',
    highlights: {
      fullStack: {
        title: 'Full Stack',
        description: 'Complete mastery of the development cycle, from backend to frontend.',
      },
      architecture: {
        title: 'Architecture',
        description: 'Design of scalable and maintainable systems.',
      },
      performance: {
        title: 'Performance',
        description: 'Application optimization for maximum speed and efficiency.',
      },
      collaboration: {
        title: 'Collaboration',
        description: 'Experience working in teams and high-complexity projects.',
      },
    },
  },

  projects: {
    sectionTag: '// projects',
    title: 'Selected',
    titleHighlight: 'Projects',
    subtitle: 'A selection of projects that demonstrate my experience in creating scalable, high-impact solutions.',
    items: {
      prosperia: {
        description: 'Platform integrating financial consulting, AI via WhatsApp, and continuous education in a unique financial transformation ecosystem.',
        impact: 'Complete personal finance ecosystem',
      },
      poraneo: {
        description: 'Landing page for a studio combining architecture, furniture, and museography, translating visual identity and concept into a clear and elegant digital experience.',
        impact: 'Premium design and immersive experience',
      },
      categorizai: {
        description: 'AI that categorizes your finances and delivers intelligent insights for you to better understand and manage your money.',
        impact: 'Intelligent finance automation',
      },
      contextoMarcenaria: {
        description: 'High-conversion landing page for a conceptual woodworking company, focusing on lead capture and premium service presentation.',
        impact: 'Optimized for lead conversion',
      },
    },
  },

  experience: {
    sectionTag: '// experience',
    title: 'Professional',
    titleHighlight: 'Experience',
    subtitle: 'A trajectory of continuous growth, always seeking greater challenges and real impact.',
    present: 'Present',
    remote: 'Remote',
    items: {
      saas: {
        title: 'Founder & Full Stack Engineer',
        company: 'Own SaaS Projects',
        location: 'Remote',
        period: '2026 - Present',
        description: [
          'Leading SaaS product development from zero to market',
          'Architecture of scalable systems focused on automation and AI',
          'Full-stack development with AI integrations',
          'Complete product lifecycle management: ideation, development, and go-to-market',
        ],
      },
      ot3n: {
        title: 'Senior Software Engineer',
        company: 'OT3N Brazil',
        location: 'Brasília, Brazil',
        period: '2024 - Dec 2025',
        description: [
          'Technical development on highly complex projects',
          'Development of analytical dashboards with React and TypeScript',
          'Architecture of scalable cloud solutions',
          'Mentoring junior and mid-level developers',
        ],
      },
      a3media: {
        title: 'Software Engineer',
        company: 'A3 Media',
        location: 'Barueri, Brazil',
        period: '2023 - 2024',
        description: [
          'Full-stack development of media platforms',
          'Implementation of payment systems with Stripe',
          'Performance optimization reducing load time by 50%',
          'Integration with third-party APIs and cloud services',
        ],
      },
      bws: {
        title: 'Frontend Engineer',
        company: 'BWS IoT',
        location: 'Barueri, Brazil',
        period: '2020 - 2023',
        description: [
          'Development of IoT dashboards with real-time updates',
          '80% cost reduction on Google Maps through optimization',
          'Implementation of responsive and accessible interfaces',
          'Integration with MQTT and WebSocket protocols',
        ],
      },
    },
  },

  cta: {
    sectionTag: "// let's connect",
    title: "Let's build something",
    titleHighlight: 'amazing',
    together: 'together?',
    description: "I'm always open to new projects, remote opportunities, and interesting partnerships. If you have an idea, let's talk!",
    letsChat: "Let's Chat",
    available: 'Available for new projects',
  },

  faq: {
    sectionTag: '// faq',
    title: 'Frequently Asked',
    titleHighlight: 'Questions',
    items: [
      {
        question: 'What technologies do you specialize in?',
        answer: 'I specialize in full-stack development with 4+ years of hands-on experience. My core stack includes:',
        list: [
          'React & Next.js — modern, performant frontends',
          'TypeScript & Node.js — type-safe, scalable backends',
          'AWS, Docker & CI/CD — cloud infrastructure and DevOps',
          'PostgreSQL & Firebase — relational and real-time databases',
          'REST & GraphQL APIs — third-party service integrations',
        ],
      },
      {
        question: 'Are you available for freelance or remote work?',
        answer: 'Yes — I am currently open to new projects, remote opportunities, and strategic partnerships worldwide. I adapt to your timezone and workflow.',
      },
      {
        question: 'How many years of experience do you have?',
        answer: 'Over 4 years of professional experience since 2020. Key milestones include:',
        list: [
          '50% reduction in page load time at A3 Media',
          '80% cost reduction on Google Maps API at BWS IoT',
          'Senior Engineer role leading high-complexity projects at OT3N Brazil',
          'Founder building AI-integrated SaaS products from 0 to market',
        ],
      },
      {
        question: 'What types of projects have you delivered?',
        answer: 'I have built a wide range of products across industries, including:',
        list: [
          'SaaS platforms with AI and WhatsApp integrations',
          'IoT dashboards with real-time WebSocket and MQTT updates',
          'Financial platforms with Stripe payment systems',
          'High-conversion landing pages optimized for lead capture',
          'Analytical dashboards with React and TypeScript',
        ],
      },
      {
        question: 'How can I hire or contact you?',
        answer: 'You can reach me via email (joaoppessoa719@gmail.com), LinkedIn (linkedin.com/in/jppessoa), or WhatsApp (+55 11 99240-0586). I typically respond within 24 hours.',
      },
    ],
  },

  footer: {
    location: 'São Paulo, Brazil',
  },
};
