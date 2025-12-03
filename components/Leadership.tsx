import React from 'react';
import { Section } from './Section';
import { LEADERSHIP_DATA } from '../constants';
import { Users, Target, BrainCircuit } from 'lucide-react';

export const Leadership: React.FC = () => {
  const getIcon = (category: string) => {
    switch (category) {
      case 'Engineering': return <Users className="w-6 h-6 text-neutral-700" />;
      case 'Product': return <Target className="w-6 h-6 text-neutral-700" />;
      case 'AI': return <BrainCircuit className="w-6 h-6 text-neutral-700" />;
      default: return <Users className="w-6 h-6 text-neutral-700" />;
    }
  };

  return (
    <Section 
      id="philosophy" 
      title="Philosophy & Leadership" 
      subtitle="How I approach the work, the team, and the technology."
      className="bg-neutral-50/50"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {LEADERSHIP_DATA.map((item) => (
          <div key={item.title} className="space-y-4">
            <div className="w-12 h-12 bg-white rounded-lg border border-neutral-200 flex items-center justify-center shadow-sm">
              {getIcon(item.category)}
            </div>
            <h3 className="text-xl font-bold text-neutral-900">{item.title}</h3>
            <p className="text-neutral-600 leading-relaxed text-sm md:text-base">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
};