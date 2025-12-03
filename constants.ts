
import { Project, Skill, LeadershipPrinciple } from './types';

// Replace the empty strings with real URLs when ready. 
// If left empty, the UI will show "Coming Soon" or "Request Access".

export const PROFILE_IMAGES = {
  real: 'images/tim-real.png', 
  ai: 'images/tim-ai.png'      
};

export const POC_DATA: Project[] = [
  {
    id: 'poc-1',
    title: 'Brand Sync (RAG)',
    summary: 'A RAG-driven content engine designed to scale executive communication without diluting authenticity. By grounding generation in historical data and real-time context, it reduces drafting time by 80% while ensuring 100% brand alignment—turning high-touch personal branding into a scalable workflow.',
    category: 'POC',
    tags: ['Generative AI', 'Process Automation', 'Brand Strategy'],
    link: 'https://ai-content.trainoronline.com/' 
  }
];

export const DOCUMENTS_DATA: Project[] = [
  {
    id: 'doc-1',
    title: 'Monolith to Microservices Business Case',
    summary: 'A strategic PRD that reframed a technical migration as a business necessity. Modeled a 30% increase in deployment velocity and a 15% reduction in QA overhead, proving that "paying down debt" was actually an investment in market responsiveness.',
    category: 'Document',
    tags: ['ROI Analysis', 'Platform Strategy', 'Change Management'],
    link: '' // Add link to PDF or Notion doc
  },
  {
    id: 'doc-2',
    title: 'High-Scale Ingestion Architecture',
    summary: 'Technical architecture for a real-time analytics pipeline. The design prioritized the "Cost vs. Latency" trade-off, selecting serverless patterns that handled 10k+ events/sec while keeping cloud costs linear, not exponential, as traffic spiked.',
    category: 'Document',
    tags: ['System Design', 'Cost Optimization', 'Reliability'],
    link: '' // Add link to PDF or Diagram
  }
];

export const LEADERSHIP_DATA: LeadershipPrinciple[] = [
  {
    title: 'Engineering Leadership',
    category: 'Engineering',
    description: 'Starting with culture; teams need psychological safety and clarity before they can build anything meaningful. I keep systems intentional instead of over-engineered, and I lead teams to deliver value in steady, incremental steps.'
  },
  {
    title: 'Product Leader',
    category: 'Product',
    description: 'Customer value and business impact guide every decision and I will challenge anything, at any level, that can’t be tied to real outcomes. If a feature doesn’t drive revenue, retention, or efficiency, it stays in the backlog.'
  },
  {
    title: 'AI Strategy',
    category: 'AI',
    description: 'AI isn’t inherently magical. Without governance, evaluation, and value-first discipline, it’s just noise. I champion AI solutions that prove themselves — reliable, cost-effective, and aligned with real business outcomes.'
  }
];

export const SKILLS: Skill[] = [
  { name: 'Architectures that scale, not sag', category: 'Technical' },
  { name: 'Product bets that pass the P&L test', category: 'Strategy' },
  { name: 'AI that works on purpose, not accident', category: 'Strategy' },
  { name: 'Engineering teams that ship without drama', category: 'Leadership' },
  { name: 'Translating complexity into decisions people can use', category: 'Technical' },
  { name: 'Metrics over mood, always', category: 'Strategy' },
  { name: 'Cleaning up systems and strategy, one dependency at a time', category: 'Execution' }
];

export const SOCIAL_LINKS = {
  email: 'mailto:tim@the-trainors.com',
  linkedin: 'https://linkedin.com/in/timjtrainor',
  github: 'https://github.com/timjtrainor'
};
