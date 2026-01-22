
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
    tags: ['GCP', 'Generative AI', 'RAG', 'Process Automation', 'Brand Strategy'],
    link: 'https://ai-content.trainoronline.com/' 
  },
  {
    id: 'poc-2',
    title: 'Requirements Evaluator (EVALs)',
    summary: 'A serverless AI platform built with AWS Lambda and Amazon Bedrock that systematically audits software requirements for precision and quality. It streamlines the technical review process by providing automated scoring, actionable improvement suggestions, and a dedicated performance harness to ensure high-accuracy AI outputs.',
    category: 'POC',
    tags: ['AWS', 'Generative AI', 'EVALs', 'SDLC',],
    link: 'https://req-eval.the-trainors.com/'
  },
];

export const DOCUMENTS_DATA: Project[] = [
  {
    id: 'doc-1',
    title: 'PRD - AI Requirements Quality Evaluator',
    summary: 'PRD for a practical AI tool that turns messy requirements into clear, reliable inputs for engineering teams. It cuts ambiguity early so teams can focus on building instead of decoding intent.',
    category: 'Document',
    tags: ['PRD', 'Product Management', 'Technical'],
    link: '/documents/AI_Requirements_Evaluator_PRD.pdf' // Add link to PDF or Notion doc
  },
  {
    id: 'doc-2',
    title: 'Architecture Diagram - AI Requirements Quality Evaluator',
    summary: 'A lightweight serverless workflow where user inputs flow through API Gateway and Lambda to Bedrock, with DynamoDB and CloudWatch keeping the system fast, reliable, and cost-safe. Built to deliver trustworthy AI evaluations without operational overhead.',
    category: 'Document',
    tags: ['System Design', 'AWS', 'Reliability'],
    link: 'https://miro.com/app/board/uXjVJgaDe-Q=/?share_link_id=363487307617' // Add link to PDF or Diagram
  }
];

export const LEADERSHIP_DATA: LeadershipPrinciple[] = [
  {
    title: 'Engineering Leadership',
    category: 'Engineering',
    description: 'Starting with culture; teams need psychological safety and clarity before they can build anything meaningful. I keep systems intentional instead of over-engineered, and I lead teams to deliver value in steady, incremental steps.'
  },
  {
    title: 'Product Vision',
    category: 'Product',
    description: 'Customer value and business impact guide every decision and I will challenge anything, at any level, that can’t be tied to real outcomes. If a feature doesn’t drive revenue, retention, or efficiency, it stays in the backlog.'
  },
  {
    title: 'AI Strategy',
    category: 'AI',
    description: 'AI isn’t inherently magical. Without governance, evaluation, and value-first discipline, it’s just noise. I champion AI solutions that prove themselves; reliable, cost-effective, and aligned with real business outcomes.'
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
