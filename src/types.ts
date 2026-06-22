export interface Service {
  id: string;
  title: string;
  iconName: string;
  description: string;
  tags: string[];
}

export interface ClientProject {
  id: string;
  number: string;
  domain: string;
  url: string;
  industry: string;
  displayName: string;
  colors: string[];
  tech: string[];
}

export interface CaseStudy {
  problem: string;
  solution: string;
  features: string[];
  results: string;
  responsivePreview?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  text: string;
  rating: number;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  category: string;
}

export interface WorkProcessStep {
  step: string;
  title: string;
  description: string;
  deliverable: string;
}

export interface SkillCategory {
  category: string;
  iconName: string;
  skills: { name: string; level: number }[];
}

export interface ContactSubmission {
  id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  timestamp: string;
}
