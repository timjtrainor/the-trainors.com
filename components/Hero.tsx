
import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { PROFILE_IMAGES } from '../constants';

export const Hero: React.FC = () => {
  // State to manage image sources. 
  // We start with the path defined in constants, but update it if loading fails.
  const [realImgSrc, setRealImgSrc] = useState(PROFILE_IMAGES.real);
  const [aiImgSrc, setAiImgSrc] = useState(PROFILE_IMAGES.ai);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  /**
   * Robust Error Handler:
   * If the image fails to load (404/CORB) and the path includes a folder (e.g. 'images/photo.png'),
   * this automatically retries loading the file from the root directory ('photo.png').
   * This fixes issues where preview environments flatten folder structures.
   */
  const handleImageError = (
    setSrc: React.Dispatch<React.SetStateAction<string>>, 
    currentPath: string
  ) => {
    if (currentPath.includes('/')) {
      const fileName = currentPath.split('/').pop();
      if (fileName) {
        setSrc(fileName);
      }
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-24 pb-12 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-6xl mx-auto w-full z-10">
        <div className="flex flex-col-reverse md:flex-row items-center gap-12 md:gap-20">
          
          {/* Left Content */}
          <div className="flex-1 space-y-8 text-center md:text-left">
            <div className="space-y-6">
              <p className="text-sm md:text-base font-semibold text-neutral-500 tracking-wider uppercase">
                Engineering Manager • Product Strategy • Data Nerd
              </p>
              <h1 className="text-4xl md:text-6xl font-bold text-neutral-900 tracking-tight leading-[1.1]">
                Hi, I’m Tim. <br />
                I build data engines that power the <span className="text-neutral-500">bottom line.</span>
              </h1>
              <p className="text-lg md:text-xl text-neutral-600 leading-relaxed max-w-2xl mx-auto md:mx-0">
                Turning AI hype into production value. I help companies solve real problems with reliable data platforms and pragmatic product leadership.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-start gap-4 pt-2">
              <a 
                href="#about"
                onClick={(e) => handleScroll(e, 'about')}
                className="w-full sm:w-auto px-8 py-3 bg-neutral-900 text-white font-medium rounded-full hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-neutral-900/10"
              >
                About Me
              </a>
              <a 
                href="#pocs" 
                onClick={(e) => handleScroll(e, 'pocs')}
                className="w-full sm:w-auto px-8 py-3 bg-white border border-neutral-200 text-neutral-900 font-medium rounded-full hover:border-neutral-400 transition-colors flex items-center justify-center gap-2 group"
              >
                View POCs
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Image - Interactive Dual State */}
          <div className="w-64 h-64 md:w-[400px] md:h-[400px] flex-shrink-0 relative group">
            {/* Background blob for style */}
            <div className="absolute inset-0 bg-neutral-200 rounded-[2rem] rotate-3 group-hover:rotate-6 transition-transform duration-500 ease-out -z-10"></div>
            
            <div className="relative w-full h-full rounded-[2rem] overflow-hidden shadow-2xl border border-neutral-100 bg-neutral-50">
               {/* Real Photo (Default) */}
               <img 
                src={realImgSrc} 
                alt="Tim Trainor - Product & Engineering Leader" 
                onError={() => handleImageError(setRealImgSrc, PROFILE_IMAGES.real)}
                className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ease-in-out group-hover:opacity-0"
              />
              
              {/* AI Avatar (Hover) */}
              <img 
                src={aiImgSrc} 
                alt="Tim Trainor - AI Avatar Version" 
                onError={() => handleImageError(setAiImgSrc, PROFILE_IMAGES.ai)}
                className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-500 ease-in-out group-hover:opacity-100"
              />
              
              {/* Overlay label */}
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-neutral-500 border border-neutral-200 opacity-0 group-hover:opacity-100 transition-opacity delay-100">
                AI Mode
              </div>
            </div>
          </div>

        </div>
      </div>
      
      {/* Abstract Background Element - Repositioned */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-b from-neutral-100 to-transparent rounded-full blur-3xl -z-10 opacity-60 pointer-events-none translate-x-1/2 -translate-y-1/4"></div>
    </section>
  );
};
