import React from 'react';
import { Project } from '../types';
import { ArrowUpRight, FileText, Code2, Beaker, Lock } from 'lucide-react';

interface CardProps {
  project: Project;
}

export const Card: React.FC<CardProps> = ({ project }) => {
  const hasLink = Boolean(project.link && project.link.length > 0);

  const getIcon = () => {
    switch (project.category) {
      case 'Document': return <FileText className="w-5 h-5 text-neutral-500" />;
      case 'Prototype': return <Code2 className="w-5 h-5 text-neutral-500" />;
      case 'POC': return <Beaker className="w-5 h-5 text-neutral-500" />;
      default: return <ArrowUpRight className="w-5 h-5 text-neutral-500" />;
    }
  };

  const CardContent = (
    <>
      <div className="flex justify-between items-start mb-6">
        <div className="p-2 bg-neutral-50 rounded-md border border-neutral-100 group-hover:bg-neutral-100 transition-colors">
          {getIcon()}
        </div>
        
        {hasLink ? (
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200 p-2 hover:bg-neutral-50 rounded-full">
            <ArrowUpRight className="w-5 h-5 text-neutral-900" />
          </div>
        ) : (
          <div className="flex items-center gap-1.5 px-2 py-1 bg-neutral-100 rounded text-xs font-medium text-neutral-500">
            <Lock className="w-3 h-3" />
            <span>Coming Soon</span>
          </div>
        )}
      </div>
      
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-neutral-900 mb-3 group-hover:text-black">
          {project.title}
        </h3>
        <p className="text-neutral-600 leading-relaxed text-sm">
          {project.summary}
        </p>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {project.tags?.map((tag) => (
          <span key={tag} className="text-xs font-medium text-neutral-500 bg-neutral-50 px-2 py-1 rounded border border-neutral-100">
            {tag}
          </span>
        ))}
      </div>
    </>
  );

  if (hasLink) {
    return (
      <a 
        href={project.link}
        target="_blank"
        rel="noopener noreferrer"
        className="group relative bg-white border border-neutral-200 p-6 sm:p-8 rounded-lg transition-all duration-300 hover:border-neutral-400 hover:shadow-sm flex flex-col h-full cursor-pointer"
      >
        {CardContent}
      </a>
    );
  }

  return (
    <div className="group relative bg-white border border-neutral-200 p-6 sm:p-8 rounded-lg flex flex-col h-full opacity-90">
      {CardContent}
    </div>
  );
};