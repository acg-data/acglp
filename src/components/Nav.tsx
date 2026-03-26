interface NavProps {
  onQuizClick: () => void;
}

export function Nav({ onQuizClick }: NavProps) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-cream/95 backdrop-blur-md border-b border-ink-100">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="font-serif text-xl font-semibold text-ink-900">Aryo</div>
        <div className="hidden md:flex items-center gap-8 text-[11px] font-bold tracking-[0.1em] uppercase text-ink-400">
          <a href="#how-it-works" className="hover:text-aryo transition-colors">How It Works</a>
          <a href="#case-studies" className="hover:text-aryo transition-colors">Success Stories</a>
          <a href="#curriculum" className="hover:text-aryo transition-colors">Curriculum</a>
          <a href="#faq" className="hover:text-aryo transition-colors">FAQ</a>
        </div>
        <button 
          onClick={onQuizClick}
          className="font-sans text-[11px] font-bold tracking-widest uppercase text-white bg-aryo px-5 py-2.5 hover:bg-aryo-dark transition-all duration-200"
        >
          Book Call
        </button>
      </div>
    </nav>
  );
}