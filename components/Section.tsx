import React from 'react';

interface SectionProps {
  id: string;
  title?: string;
  subtitle?: string;
  className?: string;
  children: React.ReactNode;
}

export const Section: React.FC<SectionProps> = ({ id, title, subtitle, className = '', children }) => {
  return (
    <section 
      id={id} 
      className={`scroll-mt-28 py-20 md:py-32 px-6 md:px-12 max-w-7xl mx-auto ${className}`}
    >
      {(title || subtitle) && (
        <div className="mb-16 max-w-2xl">
          {title && <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-neutral-900 mb-4">{title}</h2>}
          {subtitle && <p className="text-lg text-neutral-600 leading-relaxed">{subtitle}</p>}
        </div>
      )}
      {children}
    </section>
  );
};