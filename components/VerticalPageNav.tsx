import React, { useState, useEffect, useCallback } from 'react';

interface Section {
  id: string;
  label: string;
}

interface VerticalPageNavProps {
  sections: Section[];
}

const VerticalPageNav: React.FC<VerticalPageNavProps> = ({ sections }) => {
  const [activeSection, setActiveSection] = useState<string>('');

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Adjust for header height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '-20% 0px -70% 0px', // Highlights when the section is near the top
      threshold: 0
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, options);

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) observer.unobserve(element);
      });
    };
  }, [sections]);

  return (
    <nav className="fixed right-3 sm:right-6 top-1/2 -translate-y-1/2 z-[100]">
      <div className="flex flex-col gap-6 sm:gap-8 items-end">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className="group flex items-center gap-3 sm:gap-4 outline-none p-2 -mr-2"
            aria-label={`Scroll to ${section.label}`}
          >
            <span 
              className={`
                text-[9px] sm:text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 pointer-events-none
                px-2 sm:px-3 py-1 sm:py-1.5 rounded-sm bg-black/90 text-white backdrop-blur-md border border-white/20
                opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0
                ${activeSection === section.id ? 'opacity-100 translate-x-0 !border-primary/50 text-primary shadow-xl' : ''}
              `}
            >
              {section.label}
            </span>
            <div className="relative flex items-center justify-center">
              <div 
                className={`
                  w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-500
                  ${activeSection === section.id 
                    ? 'bg-primary scale-125 shadow-[0_0_20px_rgba(14,122,139,1)]' 
                    : 'bg-gray-400/40 group-hover:bg-gray-400/80'}
                `}
              />
              {activeSection === section.id && (
                <div className="absolute w-5 h-5 sm:w-6 sm:h-6 rounded-full border-2 border-primary/40 animate-ping opacity-60" />
              )}
            </div>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default VerticalPageNav;
