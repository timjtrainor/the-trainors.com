import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Leadership } from './components/Leadership';
import { Section } from './components/Section';
import { Card } from './components/Card';
import { Contact } from './components/Contact';
import { POC_DATA, DOCUMENTS_DATA } from './constants';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        
        <About />

        <Leadership />

        <Section 
          id="pocs" 
          title="Proof of Concepts" 
          subtitle="Experimental architectures validating technical feasibility and business value."
        >
          {/* Using a grid even for one item allows for easy expansion later */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {POC_DATA.map(project => (
              <Card key={project.id} project={project} />
            ))}
          </div>
        </Section>

        <Section 
          id="documents" 
          title="Strategic Documents" 
          subtitle="Artifacts of delivery: PRDs, System Architecture, and Technical Specifications."
          className="bg-neutral-100/50 rounded-3xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {DOCUMENTS_DATA.map(project => (
              <Card key={project.id} project={project} />
            ))}
          </div>
        </Section>
      </main>

      <Contact />
    </div>
  );
};

export default App;