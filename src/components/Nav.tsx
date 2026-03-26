interface NavProps {
  onQuizClick: () => void;
}

export function Nav({ onQuizClick }: NavProps) {
  return (
    <>
      {/* Skip navigation link for keyboard users */}
      <a href="#quiz" className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[9999] focus:bg-aryo focus:text-white focus:px-4 focus:py-2 focus:text-sm">
        Skip to qualification quiz
      </a>

      <div className="bg-ink-900 text-aryo-pale text-center py-2.5 px-6 text-xs font-semibold tracking-widest uppercase" role="banner">
        Next cohort opening Q3 2026 — <strong className="text-white">Limited spots available</strong>
      </div>
      
      <nav className="sticky top-0 z-50 h-16 flex items-center justify-between px-6 md:px-14 bg-cream/95 backdrop-blur-md border-b border-ink-100 shadow-sm" aria-label="Main navigation">
        <a href="/" className="flex items-center gap-3" aria-label="Aryo - Home">
          <div className="w-8 h-8 bg-ink-900 flex items-center justify-center relative overflow-hidden" aria-hidden="true">
            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-aryo rounded-full opacity-90"></div>
            <span className="font-serif text-lg font-bold text-white relative z-10">A</span>
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-lg font-bold text-ink-900 tracking-tight leading-none">Aryo</span>
            <span className="font-sans text-[8px] font-bold tracking-[0.2em] uppercase text-aryo mt-0.5">PE Rollup Strategy Program</span>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-8 text-[11px] font-bold tracking-[0.1em] uppercase text-ink-400">
          <a href="#how-it-works" className="hover:text-aryo transition-colors">Framework</a>
          <a href="#case-studies" className="hover:text-aryo transition-colors">Proof</a>
          <a href="#curriculum" className="hover:text-aryo transition-colors">Curriculum</a>
          <a href="#faq" className="hover:text-aryo transition-colors">FAQ</a>
        </div>
        
        <button 
          onClick={onQuizClick}
          className="font-sans text-[10px] md:text-xs font-bold tracking-widest uppercase text-white bg-aryo px-4 md:px-6 py-2.5 md:py-3 hover:bg-aryo-dark transition-all duration-200 transform hover:-translate-y-px shadow-lg hover:shadow-aryo/30"
        >
          Book Strategy Call <span aria-hidden="true">&rarr;</span>
        </button>
      </nav>
    </>
  );
}