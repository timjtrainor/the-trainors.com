export interface Project {
  id: string;
  title: string;
  summary: string;
  category: 'POC' | 'Prototype' | 'Document';
  tags?: string[];
  link?: string; // If empty, card will show "Coming Soon"
}

export interface Skill {
  name: string;
  category: string;
}

export interface LeadershipPrinciple {
  title: string;
  category: 'Engineering' | 'Product' | 'AI';
  description: string;
}

export interface NavItem {
  label: string;
  href: string;
}