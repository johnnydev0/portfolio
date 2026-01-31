export type Language = 'pt-BR' | 'en';

export interface Translations {
  // Navigation
  nav: {
    about: string;
    projects: string;
    experience: string;
    contact: string;
    hire: string;
  };

  // Hero Section
  hero: {
    tagline: string;
    viewProjects: string;
    getInTouch: string;
  };

  // About Section
  about: {
    sectionTag: string;
    title: string;
    titleHighlight: string;
    paragraph1: string;
    paragraph2: string;
    paragraph3: string;
    highlights: {
      fullStack: { title: string; description: string };
      architecture: { title: string; description: string };
      performance: { title: string; description: string };
      collaboration: { title: string; description: string };
    };
  };

  // Projects Section
  projects: {
    sectionTag: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    items: {
      prosperia: { description: string; impact: string };
      poraneo: { description: string; impact: string };
      categorizai: { description: string; impact: string };
      contextoMarcenaria: { description: string; impact: string };
    };
  };

  // Experience Section
  experience: {
    sectionTag: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    present: string;
    remote: string;
    items: {
      saas: {
        title: string;
        company: string;
        location: string;
        period: string;
        description: string[];
      };
      ot3n: {
        title: string;
        company: string;
        location: string;
        period: string;
        description: string[];
      };
      a3media: {
        title: string;
        company: string;
        location: string;
        period: string;
        description: string[];
      };
      bws: {
        title: string;
        company: string;
        location: string;
        period: string;
        description: string[];
      };
    };
  };

  // CTA Section
  cta: {
    sectionTag: string;
    title: string;
    titleHighlight: string;
    together: string;
    description: string;
    letsChat: string;
    available: string;
  };

  // Footer
  footer: {
    location: string;
  };
}
