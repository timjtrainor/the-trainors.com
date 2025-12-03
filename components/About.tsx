import React from 'react';
import { Section } from './Section';
import { SKILLS } from '../constants';

export const About: React.FC = () => {
  return (
    <Section id="about" className="bg-white rounded-3xl my-10 border border-neutral-100 shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24">
        <div className="md:col-span-7 space-y-6">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-neutral-900">
            I'm a data nerd who loves the P&L.
          </h2>
          {/* Added space-y-6 to ensure gap between paragraphs */}
          <div className="text-lg text-neutral-600 leading-relaxed space-y-6">
            <p>
              I’m a technical leader shaped by Engineering Management, Product, and AI systems. My work centers on building architectures that are intentional, reliable, and tied directly to business outcomes. Over the years, I’ve learned that strong culture makes strong engineering possible, clear goals keep product work honest, and complex systems only succeed when they’re designed with clarity and discipline.
            </p>
            <p>
              I lead large, cross-functional efforts with full ownership, from platform migrations to AI and data integrations. My role is bringing structure to ambiguity and stability to messy systems. Whether I’m guiding teams through architectural tradeoffs or deciding which product bets deserve investment, my approach stays the same. Build systems that scale predictably. Deliver value in steady increments. Make choices that hold up in production. I’m not chasing elegance for its own sake. I’m aiming for reliability, clarity, and outcomes that move the business forward.
            </p>
          </div>
        </div>

        <div className="md:col-span-5">
          <div className="bg-neutral-50 p-8 rounded-2xl border border-neutral-100 h-full">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-neutral-500 mb-6">
              The Toolkit
            </h3>
            <ul className="space-y-4">
              {SKILLS.map((skill) => (
                <li key={skill.name} className="flex items-start">
                  <span className="inline-block w-2 h-2 mt-2 mr-3 bg-neutral-400 rounded-full"></span>
                  <span className="text-neutral-800 font-medium">{skill.name}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
};