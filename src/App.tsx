import { useState, useEffect, lazy, Suspense } from 'react';
import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { ProofTicker } from './components/ProofTicker';
import { AssetClass } from './components/AssetClass';
import { Returns } from './components/Returns';
import { HowItWorks } from './components/HowItWorks';
import { CaseStudies } from './components/CaseStudies';
import { PullQuote } from './components/PullQuote';
import { PlatformHub } from './components/PlatformHub';
import { QuizFunnel } from './components/QuizFunnel';
import { Included } from './components/Included';
import { FAQ } from './components/FAQ';
import { TrustBar } from './components/TrustBar';
import { FinalCTA } from './components/FinalCTA';

// Lazy load VSL for performance
const VSL = lazy(() => import('./components/VSL').then(module => ({ default: module.VSL })));

function App() {
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowSticky(window.scrollY > 600);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToQuiz = () => {
    document.getElementById('quiz')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-cream font-sans text-ink-500">
      <Nav onQuizClick={scrollToQuiz} />
      
      <main>
        <Hero />
        
        {/* Lazy loaded VSL */}
        <Suspense fallback={
          <div className="h-96 flex items-center justify-center bg-ink-900">
            <div className="animate-pulse text-white/50">Loading...</div>
          </div>
        }>
          <VSL onQuizClick={scrollToQuiz} />
        </Suspense>
        
        <ProofTicker />
        <AssetClass />
        <Returns />
        <HowItWorks />
        <CaseStudies />
        <PullQuote />
        <PlatformHub onResourceClick={() => {}} />
        <QuizFunnel onComplete={() => {}} />
        <Included />
        <FAQ />
        <TrustBar />
        <FinalCTA onQuizClick={scrollToQuiz} />
      </main>

      <Footer />

      {/* Sticky Bottom Bar */}
      <div 
        className={`fixed bottom-0 left-0 right-0 z-40 bg-cream/95 backdrop-blur-md border-t border-ink-100 shadow-[0_-4px_24px_rgba(13,14,28,0.08)] px-6 py-3 flex flex-col md:flex-row justify-between items-center gap-3 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          showSticky ? 'translate-y-0' : 'translate-y-full'
        }`}
      >
        <div className="text-[13px] font-medium text-ink-500 text-center md:text-left">
          Learn the <strong className="text-aryo">PE rollup strategy</strong> that built billion-dollar holdcos. Next cohort opening soon.
        </div>
        <button 
          onClick={scrollToQuiz}
          className="font-sans text-[11px] font-bold tracking-widest uppercase text-white bg-aryo px-6 py-2.5 hover:bg-aryo-dark transition-all duration-200 transform hover:-translate-y-px shadow-sm"
        >
          Book Strategy Call &rarr;
        </button>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-ink-900 text-white py-16 px-6 md:px-14">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-white/10 flex items-center justify-center relative overflow-hidden">
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-aryo rounded-full opacity-90"></div>
              <span className="font-serif text-lg font-bold text-white relative z-10">A</span>
            </div>
            <span className="font-serif text-2xl font-semibold text-white">Aryo</span>
          </div>
          <p className="text-white/50 text-sm leading-relaxed max-w-sm">
            Teaching business owners the institutional PE rollup strategy used by the world's most successful holdcos — without giving up equity.
          </p>
          <p className="text-[10px] text-white/20 mt-6 leading-relaxed max-w-sm">
            Results shown on this page are from individual program participants and are not representative of all participants. Individual outcomes depend on execution, market conditions, industry, and deal quality. This is an educational program, not investment advice.
          </p>
        </div>
        <div>
          <div className="text-[10px] font-bold tracking-[0.15em] uppercase text-white/30 mb-4">Program</div>
          <ul className="space-y-2 text-sm text-white/60">
            <li><a href="#how-it-works" className="hover:text-aryo transition-colors">Framework</a></li>
            <li><a href="#case-studies" className="hover:text-aryo transition-colors">Success Stories</a></li>
            <li><a href="#curriculum" className="hover:text-aryo transition-colors">Curriculum</a></li>
            <li><a href="#faq" className="hover:text-aryo transition-colors">FAQ</a></li>
          </ul>
        </div>
        <div>
          <div className="text-[10px] font-bold tracking-[0.15em] uppercase text-white/30 mb-4">Contact</div>
          <ul className="space-y-2 text-sm text-white/60">
            <li><a href="#quiz" className="hover:text-aryo transition-colors">Book Strategy Call</a></li>
            <li><a href="mailto:info@aryocg.com" className="hover:text-aryo transition-colors">info@aryocg.com</a></li>
            <li><span>Boston (HQ) | NYC | Miami</span></li>
          </ul>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-[11px] text-white/30">
          &copy; 2026 Aryo Consulting Group. All rights reserved.
        </div>
        <div className="flex gap-6 text-[11px] text-white/30">
          <a href="#" className="hover:text-white/60 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white/60 transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white/60 transition-colors">Disclaimers</a>
        </div>
      </div>
    </footer>
  );
}

export default App;